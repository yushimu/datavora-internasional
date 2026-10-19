import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Monitor, 
  Tablet, 
  Smartphone, 
  Sparkles,
  Loader2,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { KaryaItem } from '../data/karyaData';

interface LandingPageModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: KaryaItem | null;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const LandingPageModal: React.FC<LandingPageModalProps> = ({
  isOpen,
  onClose,
  item,
}) => {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  // Determine iframe container width based on simulated device
  const getDeviceContainerClass = () => {
    switch (deviceMode) {
      case 'mobile':
        return 'w-[375px] max-w-full rounded-2xl shadow-2xl border-4 border-slate-800';
      case 'tablet':
        return 'w-[768px] max-w-full rounded-2xl shadow-2xl border-4 border-slate-800';
      case 'desktop':
      default:
        return 'w-full';
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      {/* Click outside backdrop to close */}
      <div 
        className="absolute inset-0" 
        onClick={onClose} 
      />

      {/* Main Modal Window */}
      <div className="relative w-full max-w-7xl h-[94vh] flex flex-col bg-[#0F172A] rounded-2xl sm:rounded-3xl border border-[#C59B27]/40 shadow-2xl overflow-hidden z-10">
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-[#0F172A] border-b border-slate-800 text-white select-none">
          
          {/* Project Title & Badge */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#E6C564] to-[#C59B27] flex items-center justify-center text-slate-950 shadow-sm shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="truncate">
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                  {item.title}
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Preview
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate">
                {item.subtitle}
              </p>
            </div>
          </div>

          {/* Center: Device Simulation Switcher */}
          <div className="hidden md:flex items-center gap-1 p-1 bg-slate-900/90 rounded-xl border border-slate-800">
            <button
              onClick={() => setDeviceMode('desktop')}
              title="Tampilan Desktop (100%)"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                deviceMode === 'desktop'
                  ? 'bg-[#C59B27] text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              onClick={() => setDeviceMode('tablet')}
              title="Tampilan Tablet (768px)"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                deviceMode === 'tablet'
                  ? 'bg-[#C59B27] text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet</span>
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              title="Tampilan Mobile (375px)"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                deviceMode === 'mobile'
                  ? 'bg-[#C59B27] text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            
            {/* Refresh iframe */}
            <button
              onClick={handleRefresh}
              title="Muat Ulang Halaman"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            {/* Open in new tab */}
            <a
              href={item.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Buka di Tab Baru"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition-colors"
            >
              <span>Tab Baru</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Close Modal Button */}
            <button
              onClick={onClose}
              title="Tutup (Esc)"
              className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 border border-rose-500/30 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Viewport & Iframe Container */}
        <div className="relative flex-1 bg-slate-950 overflow-hidden flex items-center justify-center p-0 sm:p-2">
          
          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0F172A]/90 backdrop-blur-sm text-slate-300 gap-3">
              <Loader2 className="w-8 h-8 text-[#E6C564] animate-spin" />
              <p className="text-xs sm:text-sm font-medium tracking-wide">
                Memuat Landing Page {item.title}...
              </p>
            </div>
          )}

          {/* Simulated Device Frame Container */}
          <div className={`h-full transition-all duration-300 flex flex-col bg-white overflow-hidden ${getDeviceContainerClass()}`}>
            <iframe
              key={iframeKey}
              src={item.previewUrl}
              title={item.title}
              onLoad={() => setIsLoading(false)}
              className="w-full h-full border-none bg-white select-text"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>

        </div>

        {/* Bottom Status Footbar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-2 bg-[#090E17] border-t border-slate-800 text-[11px] text-slate-400">
          <div className="flex items-center gap-2 truncate">
            <span className="font-semibold text-slate-300">{item.category}</span>
            <span className="text-slate-600">•</span>
            <span className="truncate">{item.description}</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-slate-500 shrink-0">
            <span>Scrollable Preview</span>
            <span>•</span>
            <span>Tekan <b>Esc</b> untuk menutup</span>
          </div>
        </div>

      </div>
    </div>
  );
};
