export interface AppItem {
  id: number | string;
  name: string;
  badge?: string; // Ex: "HQ BRUTALIST", "DAILY QUOTES", "UTILITÁRIO"
  tagline: string; // Frase de efeito em destaque
  description: string; // Descrição detalhada do app

  // Imagem principal do card (mockup, arte ou banner do app)
  image?: string; // Ex: "/images/quotito-banner.png" ou URL externa

  // Metadados do banner (estilo Blueprint técnico)
  figNumber?: string; // Ex: "FIG. 01 // KINETIC HUD"
  engineTag?: string; // Ex: "120 FPS ENGINE" ou "OFFLINE ENGINE"
  editionTag?: string; // Ex: "⚡ COMIC EDITION" ou "ORIGINAL BUILD"
  displayMatrix?: string; // Ex: "DISPLAY MATRIX: SUPER RETINA XDR • HAPTIC FLOW HARMONIC"
  statusBadge?: string; // Ex: "LIVE FEED VERIFIED" ou "LAB DEV // ACTIVE"

  // Tags técnicas inferiores
  specs?: string[]; // Ex: ["ANDROID 14+", "OFFLINE-FIRST", "WIDGETS READY"]
  highlightSpec?: string; // Ex: "ZERO TELEMETRY" (destaque em amarelo)

  // Botões de Ação
  primaryAction?: {
    label: string; // Ex: "EXPLORE QUOTITO →" ou "GOOGLE PLAY ↗"
    url: string;
    disabled?: boolean;
  };
  secondaryAction?: {
    label: string; // Ex: "GOOGLE PLAY // EM BREVE" ou "APP STORE ↗"
    url: string;
    disabled?: boolean;
  };

  // Links de conformidade / legais
  privacyLink?: string;
  termosLink?: string;
}
