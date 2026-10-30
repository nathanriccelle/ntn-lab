import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { AppsGrid } from '@/components/apps/AppsGrid';
import { Footer } from '@/components/layout/Footer';
import { apps } from '@/data/appsData';

export const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f6f4] text-black">
      <Navbar />

      <main className="flex-1 space-y-4 sm:space-y-8">
        <Hero />
        <AppsGrid apps={apps} />

        {/* About Section */}
        <section id="about" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="border-2 border-black bg-white p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000]">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="border-2 border-black bg-[#facc15] px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000]">
                ABOUT // 02
              </span>
              <span className="font-mono text-xs font-bold text-neutral-500">
                LAB MANIFESTO
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-black sm:text-4xl mb-6">
              SOBRE O NTN.LAB
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <div className="border-l-4 border-blue-600 pl-4 space-y-3">
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-black">
                  // Nossa Abordagem
                </h3>
                <p className="text-sm leading-relaxed text-neutral-700">
                  O NTN.Lab é um laboratório independente de criação e experimentação de aplicações móveis.
                  Acreditamos em ferramentas enxutas, deliberadas e focadas em utilidade prática no dia a dia.
                </p>
              </div>

              <div className="border-l-4 border-black pl-4 space-y-3">
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-black">
                  // Transparência & Privacidade
                </h3>
                <p className="text-sm leading-relaxed text-neutral-700">
                  Cada aplicativo criado segue princípios rígidos de respeito aos dados e privacidade do usuário,
                  sem coletas desnecessárias e com termos claros e diretos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
