import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

export default function Modal({ isOpen, onClose, title, children, className = '' }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[999] flex items-start sm:items-center justify-center p-4 backdrop-blur-sm">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} aria-hidden="true" />
      <div className={`relative w-full max-w-2xl bg-surface rounded-2xl shadow-2xl border border-border/70 overflow-hidden ${className}`}>
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h3 className="text-xl font-semibold text-ink-primary">{title}</h3>
          <button
            onClick={onClose}
            className="text-ink-secondary hover:text-ink-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-1"
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>
        <div className="px-6 py-6 text-ink-secondary space-y-4 max-h-[70vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
