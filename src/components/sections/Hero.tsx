import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Blueprint Hero Box */}
      <div className="blueprint-dots relative border-2 border-black p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_0px_#000] sm:shadow-[12px_12px_0px_0px_#000]">
        
        {/* Top Header Tags */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12">
          {/* Left Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Blue square accent */}
            <div className="hidden sm:block h-3.5 w-3.5 border-2 border-black bg-blue-600"></div>

            {/* Yellow Tag */}
            <div className="border-2 border-black bg-[#facc15] px-2.5 py-1 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000]">
              EST. 2024 // INDEPENDENT MOBILE LABORATORY
            </div>

            {/* Index Tag */}
            <div className="border-2 border-black bg-white px-2.5 py-1 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000]">
              INDEX 001-002
            </div>
          </div>

          {/* Right Badge */}
          <div className="self-start sm:self-auto">
            <div className="border-2 border-black bg-[#facc15] px-3 py-1 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000]">
              ⚡ ISSUE #01 // SUPERCHARGED ARTIFACTS
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-5xl font-black tracking-tight text-black sm:text-7xl lg:text-8xl leading-none">
            SMALL SCREENS.
          </h1>

          <div>
            <div className="inline-block border-2 sm:border-[3px] border-black bg-white px-3 sm:px-5 py-1 sm:py-2 shadow-[5px_5px_0px_0px_#000] sm:shadow-[7px_7px_0px_0px_#000]">
              <span className="text-5xl font-black tracking-tight text-blue-600 sm:text-7xl lg:text-8xl leading-none">
                BIG IDEAS.
              </span>
            </div>
          </div>
        </div>

        {/* Description & Footer Status */}
        <div className="mt-8 flex flex-col gap-8 sm:mt-12 lg:flex-row lg:items-end lg:justify-between">
          {/* Paragraph with blue vertical bar */}
          <div className="max-w-xl border-l-4 border-blue-600 pl-4 sm:pl-5">
            <p className="font-mono text-xs sm:text-sm leading-relaxed text-black/80 font-medium">
              We build mobile apps designed to make everyday life better. Precise software artifacts
              engineered with kinetic restraint, acoustic clarity, and graphic impact.
            </p>
          </div>

          {/* System Status in Bottom-Right */}
          <div className="self-end">
            <div className="flex items-center border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000] font-mono text-xs font-bold uppercase">
              <div className="flex items-center gap-2 px-3 py-1.5 text-black">
                <span>SYSTEM STATUS</span>
                <span className="h-2 w-2 rounded-full bg-blue-600"></span>
              </div>
              <div className="border-l-2 border-black bg-[#facc15] px-3 py-1.5 text-black">
                ALL ARTIFACTS LIVE
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
