import React from 'react';
import type { AppItem } from '@/types/app';
import { AppBanner } from './AppBanner';

interface AppCardProps {
  app: AppItem;
}

export const AppCard: React.FC<AppCardProps> = ({ app }) => {
  const badge = app.badge || 'HQ BRUTALIST';
  const specs = app.specs || ['ANDROID 14+', 'OFFLINE-FIRST'];
  const highlightSpec = app.highlightSpec || 'ZERO TELEMETRY';

  const primary = app.primaryAction || {
    label: `EXPLORE ${app.name.toUpperCase()} →`,
    url: '#',
    disabled: false,
  };

  const secondary = app.secondaryAction || {
    label: 'GOOGLE PLAY ↗',
    url: '#',
    disabled: true,
  };

  return (
    <article className="space-y-6 sm:space-y-8">
      {/* 1. Top Comic / Blueprint Banner */}
      <AppBanner app={app} />

      {/* 2. Bottom Meta, Info & Action Buttons */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        
        {/* Left Column: Title, Tagline, Description & Technical Specs */}
        <div className="space-y-4 max-w-3xl">
          {/* Title and Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-black uppercase font-display leading-none">
              {app.name}
            </h3>
            <span className="border-2 border-black bg-[#facc15] px-2.5 py-0.5 font-mono text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000]">
              {badge}
            </span>
          </div>

          {/* Subtitle / Tagline */}
          <p className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
            {app.tagline}
          </p>

          {/* Detailed Paragraph */}
          <p className="text-sm leading-relaxed text-neutral-700">
            {app.description}
          </p>

          {/* Technical Specs Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {specs.map((spec, index) => (
              <span
                key={index}
                className="border-2 border-black bg-white px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000]"
              >
                {spec}
              </span>
            ))}

            {highlightSpec && (
              <span className="border-2 border-black bg-[#facc15] px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000]">
                {highlightSpec}
              </span>
            )}
          </div>

          {/* Legal / Compliance links */}
          {(app.privacyLink || app.termosLink) && (
            <div className="flex items-center gap-4 pt-2 font-mono text-xs font-bold">
              {app.privacyLink && (
                <a
                  href={app.privacyLink}
                  className="text-black hover:text-blue-600 hover:underline underline-offset-4 transition-colors"
                >
                  [ Política de Privacidade ]
                </a>
              )}
              {app.termosLink && (
                <a
                  href={app.termosLink}
                  className="text-black hover:text-blue-600 hover:underline underline-offset-4 transition-colors"
                >
                  [ Termos de Uso ]
                </a>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Neo-Brutalist Action Buttons */}
        <div className="flex w-full flex-col gap-3 sm:w-72 shrink-0 pt-1">
          {/* Primary Action Button */}
          {primary.disabled ? (
            <button
              type="button"
              disabled
              className="flex w-full items-center justify-center border-2 border-black bg-blue-600/50 px-5 py-3 font-mono text-xs font-black uppercase tracking-wider text-white cursor-not-allowed opacity-80"
            >
              {primary.label}
            </button>
          ) : (
            <a
              href={primary.url}
              className="flex w-full items-center justify-center border-2 border-black bg-blue-600 px-5 py-3 font-mono text-xs font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_0px_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000]"
            >
              {primary.label}
            </a>
          )}

          {/* Secondary Action Button */}
          {secondary.disabled ? (
            <button
              type="button"
              disabled
              className="flex w-full items-center justify-center border-2 border-black bg-neutral-100 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-neutral-400 cursor-not-allowed"
            >
              {secondary.label}
            </button>
          ) : (
            <a
              href={secondary.url}
              className="flex w-full items-center justify-center border-2 border-black bg-white px-5 py-3 font-mono text-xs font-black uppercase tracking-wider text-black shadow-[3px_3px_0px_0px_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000]"
            >
              {secondary.label}
            </a>
          )}
        </div>

      </div>
    </article>
  );
};
