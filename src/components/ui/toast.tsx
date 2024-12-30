'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { createRoot } from 'react-dom/client';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

const Toast = ({ message, type, onClose }: ToastProps) => {
  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info
  };

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  };

  const Icon = icons[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50"
    >
      <div className={`${colors[type]} text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2`}>
        <Icon className="w-4 h-4" />
        <span>{message}</span>
      </div>
    </motion.div>
  );
};

let toastTimeout: NodeJS.Timeout;

function createToast(message: string, type: ToastType) {
  // Remove existing toast if any
  const existingToast = document.getElementById('toast-container');
  if (existingToast) {
    document.body.removeChild(existingToast);
    clearTimeout(toastTimeout);
  }

  // Create new toast
  const container = document.createElement('div');
  container.id = 'toast-container';
  document.body.appendChild(container);

  const root = createRoot(container);
  
  const handleClose = () => {
    root.unmount();
    document.body.removeChild(container);
  };

  root.render(
    <AnimatePresence>
      <Toast message={message} type={type} onClose={handleClose} />
    </AnimatePresence>
  );

  toastTimeout = setTimeout(handleClose, 3000);
}

export const toast = {
  success: (message: string) => createToast(message, 'success'),
  error: (message: string) => createToast(message, 'error'),
  info: (message: string) => createToast(message, 'info')
};