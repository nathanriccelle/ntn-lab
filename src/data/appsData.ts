import type { AppItem } from '@/types/app';

/**
 * Catálogo de Aplicações do NTN.Lab
 * Para adicionar um novo aplicativo, basta incluir um novo objeto na lista abaixo.
 * 
 * Exemplo de imagem:
 * image: '/images/quotito-banner.png' (coloque o arquivo na pasta 'public/images/')
 * ou uma URL direta de imagem na internet.
 */
export const apps: AppItem[] = [
  {
    id: 1,
    name: 'Quotito',
    badge: 'DAILY MOTIVATION',
    tagline: 'Frases inspiradoras, citações e reflexões diárias para transformar seu mindset.',
    description:
      'Projetado para eliminar distrações e entregar doses diárias de foco e sabedoria. Interface minimalista construída com alto contraste visual, widgets rápidos e experiência fluida offline.',
    
    // Imagem do card (você pode colocar sua imagem aqui!)
    image: '', // Exemplo: '/images/quotito-banner.png'

    // Metadados do banner (opcionais - já possuem valores padrão se omitidos)
    figNumber: 'FIG. 01 // MOTIVATION HUD',
    engineTag: 'DAILY QUOTES ENGINE',
    editionTag: '⚡ ORIGINAL BUILD',
    displayMatrix: 'DISPLAY MATRIX: DAILY WISDOM • HAPTIC FLOW HARMONIC',
    statusBadge: 'LAB DEV // ACTIVE',

    // Tags técnicas inferiores
    specs: ['ANDROID 14+', 'WIDGETS READY', 'OFFLINE-FIRST'],
    highlightSpec: 'ZERO TELEMETRY',

    // Botões de ação à direita
    primaryAction: {
      label: 'EXPLORE QUOTITO →',
      url: '#quotito',
    },
    secondaryAction: {
      label: 'GOOGLE PLAY // EM BREVE',
      url: '#',
      disabled: true,
    },

    // Links de conformidade
    privacyLink: '/politica-quotito.html',
    termosLink: '/termos-quotito.html',
  },
  {
    id: 2,
    name: 'AURA',
    badge: 'HQ BRUTALIST',
    tagline: 'A calm, rhythmic space engineered for deep cognitive flow and intentional time.',
    description:
      'Designed to dismantle digital noise through acoustic soundscapes, tactile haptics, and frictionless micro-rituals. Built natively to harmonize working memory and eliminate ambient cognitive drag.',
    
    // Imagem do card
    image: '', // Exemplo: '/images/aura-banner.png'

    figNumber: 'FIG. 02 // KINETIC HUD',
    engineTag: '120 FPS ENGINE',
    editionTag: '⚡ COMIC EDITION',
    displayMatrix: 'DISPLAY MATRIX: SUPER RETINA XDR • HAPTIC FLOW HARMONIC',
    statusBadge: 'LIVE FEED VERIFIED',

    specs: ['IOS 17+', 'WATCHOS SYNC', 'OFFLINE-FIRST'],
    highlightSpec: 'ZERO TELEMETRY',

    primaryAction: {
      label: 'EXPLORE AURA →',
      url: '#aura',
    },
    secondaryAction: {
      label: 'APP STORE ↗',
      url: '#',
      disabled: false,
    },
  },
];
