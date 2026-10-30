import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-black bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 border-2 border-black bg-black px-3 py-1 font-mono text-xs font-bold text-white shadow-[2px_2px_0px_0px_#000]">
              <span className="text-[#facc15]">[LAB]</span>
              <span>NTN.Lab</span>
            </div>
            <p className="font-mono text-xs text-neutral-500 pt-2">
              Independent Mobile Laboratory // Crafting deliberate software.
            </p>
          </div>

          <div className="font-mono text-xs text-neutral-600 space-y-1 text-left sm:text-right">
            <p>© {currentYear} NTN.Lab. Todos os direitos reservados.</p>
            <p className="text-neutral-400">DESIGN SYSTEM // NEO-BRUTALIST ARCHITECTURE</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
