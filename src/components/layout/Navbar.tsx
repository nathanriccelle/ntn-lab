import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-black bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo NTN.Lab em destaque à esquerda (sem a barra amarela nem detalhe azul anterior) */}
        <a
          href="/"
          className="group inline-flex items-center gap-2.5 border-2 border-black bg-black px-4 py-1.5 shadow-[3px_3px_0px_0px_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000]"
        >
          <span className="font-mono text-xs font-black uppercase tracking-widest text-[#facc15]">
            [LAB]
          </span>
          <span className="text-lg font-black tracking-tight text-white sm:text-xl">
            NTN.Lab
          </span>
        </a>

        {/* Ações da direita: APPS, ABOUT e Status */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <a
            href="#apps"
            className="border-2 border-black bg-white px-3 sm:px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000]"
          >
            APPS
          </a>

          <a
            href="#about"
            className="border-2 border-black bg-white px-3 sm:px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000]"
          >
            ABOUT
          </a>

          <div className="hidden md:flex items-center gap-2 border-2 border-black bg-white px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000]">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600 ring-2 ring-blue-600/30 animate-pulse"></span>
            <span>STUDIO // 2026 ACTIVE</span>
          </div>
        </div>
      </div>
    </header>
  );
};
