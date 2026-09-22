import React from 'react';
import { Header } from './components/Header';
import { MediaBin } from './components/MediaBin';
import { PreviewMonitor } from './components/PreviewMonitor';
import { Timeline } from './components/Timeline/Timeline';
import { ExportModal } from './components/ExportModal';

export const App: React.FC = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-studio-950 text-slate-100 overflow-hidden font-sans select-none">
      {/* 1. Top Navigation Bar */}
      <Header />

      {/* 2. Main Workspace Split: Top Section (Media Bin + Preview Monitor) */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="h-[56%] flex min-h-0 border-b border-studio-800">
          {/* Top-Left: Media Bin (30% width) */}
          <div className="w-[30%] min-w-[280px] max-w-[420px] h-full">
            <MediaBin />
          </div>

          {/* Top-Right: Preview Monitor (Remaining width) */}
          <div className="flex-1 h-full min-w-0">
            <PreviewMonitor />
          </div>
        </div>

        {/* 3. Bottom Section: Timeline (44% height) */}
        <div className="h-[44%] min-h-0">
          <Timeline />
        </div>
      </div>

      {/* 4. Bottom Status Bar */}
      <footer className="h-6 bg-studio-900 border-t border-studio-800 px-3 flex items-center justify-between text-[10px] text-studio-400 flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            Client Media Engine Online
          </span>
          <span>•</span>
          <span className="hidden sm:inline">
            Shortcuts: <kbd className="bg-studio-800 px-1 rounded text-slate-300">Space</kbd> Play/Pause, <kbd className="bg-studio-800 px-1 rounded text-slate-300">←/→</kbd> Step, <kbd className="bg-studio-800 px-1 rounded text-slate-300">Del</kbd> Delete Clip
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono">
          <span>Web Audio API • Canvas 2D • MediaStreams</span>
        </div>
      </footer>

      {/* 5. Modals & Overlays */}
      <ExportModal />
    </div>
  );
};

export default App;
