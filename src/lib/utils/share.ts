/**
 * Checks if the Web Share API is supported and available with the given data.
 */
function canShare(data?: ShareData): boolean {
  try {
    // Check if `navigator.share` and optionally `navigator.canShare` are available
    if (typeof navigator.share !== 'function') return false;
    if (navigator.canShare && typeof navigator.canShare === 'function') {
      return navigator.canShare(data); // Validate the data
    }
    return true; // Assume it's shareable if `navigator.canShare` is not defined
  } catch {
    return false;
  }
}

/**
 * Attempts to share content using the most appropriate method.
 */
export async function shareContent(data: { title: string; url: string; text?: string }) {
  try {
    // First try the Web Share API if available
    if (canShare(data)) {
      await navigator.share(data);
      return { success: true, method: 'share' };
    }

    // Fallback to clipboard if Web Share API is unavailable
    const shareText = `${data.title}\n${data.text || ''}\n${data.url}`;
    await navigator.clipboard.writeText(shareText);
    return { success: true, method: 'clipboard' };
  } catch (error) {
    // Handle user cancellation and other errors
    if (error instanceof Error && error.name === 'AbortError') {
      return { success: false, method: 'cancelled' };
    }

    console.error('Share failed:', error);
    return { success: false, method: 'error' };
  }
}
