import React from 'react';
import type { AppItem } from '@/types/app';

interface AppBannerProps {
  app: AppItem;
}

export const AppBanner: React.FC<AppBannerProps> = ({ app }) => {
  const fig = app.figNumber || `FIG. ${String(app.id).padStart(2, '0')} // KINETIC HUD`;
  const engine = app.engineTag || '120 FPS ENGINE';
  const edition = app.editionTag || '⚡ COMIC EDITION';
  const matrix =
    app.displayMatrix ||
    'DISPLAY MATRIX: SUPER RETINA XDR • HAPTIC FLOW HARMONIC';
  const feed = app.statusBadge || 'LIVE FEED VERIFIED';

  return (
    <div className="relative overflow-hidden border-2 sm:border-[3px] border-black bg-white shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]">
      {/* Top Overlaid Badges */}
      <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between gap-2 pointer-events-none">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="border-2 border-black bg-[#facc15] px-2 sm:px-3 py-1 font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000]">
            {fig}
          </span>
          <span className="border-2 border-black bg-blue-600 px-2 sm:px-3 py-1 font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider text-white shadow-[2px_2px_0px_0px_#000]">
            {engine}
          </span>
        </div>

        <div>
          <span className="border-2 border-black bg-white px-2 sm:px-3 py-1 font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000]">
            {edition}
          </span>
        </div>
      </div>

      {/* Main Image Container */}
      {app.image ? (
        <div className="relative w-full overflow-hidden bg-neutral-900">
          <img
            src={app.image}
            alt={app.name}
            className="w-full h-auto max-h-[520px] object-cover object-center block"
          />
        </div>
      ) : (
        /* Blueprint Placeholder when user hasn't added an image yet */
        <div className="blueprint-dots relative flex flex-col items-center justify-center h-72 sm:h-96 md:h-[420px] w-full px-6 text-center select-none bg-slate-50">
          <div className="border-2 border-dashed border-black/40 bg-white/90 p-6 sm:p-8 shadow-[4px_4px_0px_0px_#000] max-w-lg">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-none border-2 border-black bg-[#facc15]">
              <span className="font-mono text-xl font-black">🖼</span>
            </div>
            <p className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-black">
              [ IMAGEM DO APLICATIVO // {app.name} ]
            </p>
            <p className="mt-2 font-mono text-[11px] sm:text-xs text-neutral-600">
              Adicione o caminho da sua imagem no campo <code className="bg-neutral-100 border border-black/20 px-1 py-0.5 font-bold">image</code> em <span className="font-bold">appsData.ts</span>
            </p>
          </div>
        </div>
      )}

      {/* Bottom Ticker / Matrix Bar */}
      <div className="flex items-center justify-between border-t-2 sm:border-t-[3px] border-black bg-white px-3 sm:px-4 py-2 font-mono text-[10px] sm:text-xs">
        <div className="truncate text-black font-bold uppercase tracking-wider pr-2">
          {matrix}
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="border border-black bg-[#facc15] px-2 py-0.5 font-bold uppercase tracking-wider text-black shadow-[1.5px_1.5px_0px_0px_#000]">
            {feed}
          </span>
        </div>
      </div>
    </div>
  );
};
