import React from 'react';
import type { AppItem } from '@/types/app';
import { AppCard } from './AppCard';

interface AppsGridProps {
  apps: AppItem[];
}

export const AppsGrid: React.FC<AppsGridProps> = ({ apps }) => {
  return (
    <section id="apps" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Section Header */}
      <div className="mb-10 sm:mb-14 flex flex-col gap-2 border-b-2 border-black pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
            // ARTIFACT CATALOG
          </span>
          <h2 className="text-3xl font-black tracking-tight text-black sm:text-4xl">
            APLICAÇÕES & EXPERIMENTOS
          </h2>
        </div>
        <div className="font-mono text-xs font-bold text-neutral-500">
          TOTAL PROJETOS: [ {String(apps.length).padStart(2, '0')} ]
        </div>
      </div>

      {/* Vertical Stack of Showcase Cards */}
      <div className="space-y-16 sm:space-y-24">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
};
