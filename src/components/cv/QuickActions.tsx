'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, Printer } from 'lucide-react';
import { shareContent } from '@/lib/utils/share';
import { generateCV } from '@/lib/utils/generateCV';
import { downloadFile } from '@/lib/utils/download';
import { toast } from '@/components/ui/toast';
import { useCandidate } from '@/lib/hooks/useCandidate';

export default function QuickActions() {
  const [isSharing, setIsSharing] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const candidate = useCandidate();

  const handleDownloadCV = async () => {
    if (!candidate || isDownloading) return;
    
    setIsDownloading(true);
    try {
      const html = await generateCV(candidate);
      const filename = `${candidate.name.toLowerCase().replace(/\s+/g, '-')}-cv.html`;
      downloadFile(html, filename);
      toast.success('CV downloaded successfully!');
    } catch (error) {
      console.error('Download failed:', error);
      toast.error('Failed to download CV. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = async () => {
    if (isSharing) return;
    
    setIsSharing(true);
    try {
      const result = await shareContent({
        title: document.title,
        url: window.location.href,
        text: 'Check out this developer profile!'
      });

      if (result.success) {
        if (result.method === 'clipboard') {
          toast.success('Link copied to clipboard!');
        } else if (result.method === 'share') {
          toast.success('Shared successfully!');
        }
      } else if (result.method === 'cancelled') {
        // User cancelled - no need for error message
      } else {
        toast.error('Unable to share. Please try copying the URL manually.');
      }
    } catch {
      toast.error('Unable to share. Please try copying the URL manually.');
    } finally {
      setIsSharing(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="print:hidden backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 px-4 py-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
        <button
          onClick={handleDownloadCV}
          disabled={isDownloading}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Download className={`w-4 h-4 ${isDownloading ? 'animate-pulse' : ''}`} />
          <span className="hidden sm:inline">
            {isDownloading ? 'Downloading...' : 'Download CV'}
          </span>
        </button>

        <div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />

        <button
          onClick={handleShare}
          disabled={isSharing}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Share2 className={`w-4 h-4 ${isSharing ? 'animate-pulse' : ''}`} />
          <span className="hidden sm:inline">
            {isSharing ? 'Sharing...' : 'Share'}
          </span>
        </button>

        <div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
        >
          <Printer className="w-4 h-4" />
          <span className="hidden sm:inline">Print</span>
        </button>
      </div>
    </motion.div>
  );
}