/**
 * Checks if Web Share API is supported and available
 */
function canShare(): boolean {
  try {
    return Boolean(navigator.share && navigator.canShare);
  } catch {
    return false;
  }
}

/**
 * Attempts to share content using the most appropriate method
 */
export async function shareContent(data: { title: string; url: string; text?: string }) {
  try {
    // First try Web Share API if available
    if (canShare() && navigator.canShare(data)) {
      await navigator.share(data);
      return { success: true, method: 'share' };
    }

    // Fallback to clipboard
    const shareText = `${data.title}\n${data.text || ''}\n${data.url}`;
    await navigator.clipboard.writeText(shareText);
    return { success: true, method: 'clipboard' };
  } catch (error) {
    // Don't treat user cancellation as an error
    if (error instanceof Error && error.name === 'AbortError') {
      return { success: false, method: 'cancelled' };
    }
    
    console.error('Share failed:', error);
    return { success: false, method: 'error' };
  }
}