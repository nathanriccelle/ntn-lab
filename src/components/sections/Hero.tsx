import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Blueprint Hero Box */}
      <div className="blueprint-dots relative border-2 border-black p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_0px_#000] sm:shadow-[12px_12px_0px_0px_#000]">
        
        {/* Top Header Tags */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12">
          {/* Left Badges */}


          {/* Right Badge */}
          <div className="self-start sm:self-auto">
            <div className="border-2 border-black bg-[#facc15] px-3 py-1 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000]">
              Between code and illustration
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-5xl font-black tracking-tight text-blue-600 bg-white sm:text-7xl lg:text-8xl leading-none">
            Ideas turned into experiences.
          </h1>
        </div>

        {/* Description & Footer Status */}
        <div className="mt-8 flex flex-col gap-8 sm:mt-12 lg:flex-row lg:items-end lg:justify-between">
          {/* Paragraph with blue vertical bar */}
          <div className="max-w-xl border-l-4 border-blue-600 pl-4 sm:pl-5">
            <p className="font-mono text-xs sm:text-sm leading-relaxed text-balance bg-white text-black font-medium">
              From the first idea to the final interaction, every detail matters. I create mobile apps that combine practical solutions, intuitive interfaces, and a distinctive visual identity.
            </p>
          </div>

          {/* System Status in Bottom-Right */}
          <div className="self-end">
            <div className="flex items-center border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000] font-mono text-xs font-bold uppercase">
              <div className="flex items-center gap-2 px-3 py-1.5 text-black">
                <span>Code</span>
                <span className="h-2 w-2 rounded-full bg-blue-600"></span>
              </div>
              <div className="border-l-2 border-black bg-[#facc15] px-3 py-1.5 text-black">
                Pixel
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
