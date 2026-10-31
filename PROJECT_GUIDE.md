# NTN.Lab // Documentação Arquitetural e Guia do Projeto

---

## ⚠️ REGRA FUNDAMENTAL DE CONTINUIDADE (LEIA PRIMEIRO)

> **PRESERVAÇÃO OBRIGATÓRIA DE ALTERAÇÕES FEITAS PELO USUÁRIO:**
> O desenvolvedor/usuário realiza frequentes personalizações no código (como ajustes autorais de copy, remoção ou reposicionamento de badges, refinamentos visuais e tipografia).
> 
> **Diretriz inegociável para IAs e colaboradores:**
> 1. **NUNCA reverta, reescreva ou substitua** edições manuais feitas pelo usuário sem solicitação explícita.
> 2. **Sempre inspecione o arquivo atual** antes de qualquer edição para respeitar as mudanças mais recentes.
> 3. Modificações em código existente só são permitidas se o usuário **pedir expressamente** ou se forem **estritamente indispensáveis para o funcionamento técnico**.

---

## 1. Visão Geral do Ecossistema

O **NTN.Lab** é uma plataforma web criada para servir como vitrine institucional, catálogo de produtos e central de conformidade legal de um estúdio independente de aplicativos móveis.

### Stack Tecnológica
* **Linguagem:** TypeScript (~5.9.x) com checagem estrita (`strict: true`, `noEmit: true`).
* **Framework:** React 19.x (ambiente client-side).
* **Build Tool:** Vite 7.x com Fast Refresh e Hot Module Replacement (HMR).
* **Motor de Estilos:** Tailwind CSS v4 integrado diretamente via `@tailwindcss/vite` e importação nativa `@import "tailwindcss";` no CSS raiz.
* **Resolução de Módulos:** Mapeamento de alias `@/*` -> `./src/*` sincronizado entre `vite.config.ts` e `tsconfig.app.json`.
* **Utilitários Auxiliares:** `clsx` + `tailwind-merge` configurados em `src/utils/cn.ts` para composição condicional de classes.

---

## 2. Estrutura de Diretórios e Responsabilidades

```text
ntn-lab/
├── public/                       # [CAMADA ESTÁTICA / DOCUMENTOS LEGAIS]
│   │                             # Servidos diretamente na raiz sem passar pelo bundle Vite
│   ├── politica-quotito.html     # Política de privacidade - Quotito
│   ├── termos-quotito.html       # Termos de uso - Quotito
│   ├── politica-allquits.html    # Política de privacidade formal - AllQuits (PT-BR)
│   ├── privacy-allquits.html     # Política de privacidade formal - AllQuits (EN / Lojas)
│   ├── termos-allquits.html      # Termos e condições formal - AllQuits (PT-BR)
│   ├── terms-allquits.html       # Termos e condições formal - AllQuits (EN / Lojas)
│   ├── app-ads.txt               # Declaração de publicidade autorizada (Google AdMob)
│   └── vite.svg                  # Ícone / Favicon
│
├── src/                          # [CAMADA DA APLICAÇÃO REACT / LANDING PAGE]
│   ├── assets/                   # Mídias importadas internamente pelo Vite
│   ├── components/
│   │   ├── apps/                 # Módulo de exibição e catálogo de aplicativos
│   │   │   ├── AppBanner.tsx     # Banner visual do app (renderiza a imagem ou placeholder blueprint)
│   │   │   ├── AppCard.tsx       # Card estrutural com metadados, badges, specs e botões
│   │   │   └── AppsGrid.tsx      # Seção de listagem responsiva dos aplicativos
│   │   ├── layout/               # Componentes estruturais globais
│   │   │   ├── Navbar.tsx        # Cabeçalho da landing page com identidade e links
│   │   │   └── Footer.tsx        # Rodapé da landing page com manifesto e créditos
│   │   └── sections/             # Seções da página inicial
│   │       └── Hero.tsx          # Seção de abertura com headline e estética blueprint
│   ├── data/
│   │   └── appsData.ts           # [FONTE DA VERDADE] Catálogo tipado de todos os aplicativos
│   ├── types/
│   │   └── app.ts                # Interfaces TypeScript (AppItem, etc.)
│   ├── utils/
│   │   └── cn.ts                 # Utilitário `cn()` para fusão de classes Tailwind
│   ├── App.tsx                   # Montagem e composição da Landing Page
│   ├── index.css                 # Importação do Tailwind v4 e classes utilitárias base
│   └── main.tsx                  # Ponto de inicialização do React DOM
│
├── eslint.config.js              # Configuração do ESLint 9 (Flat Config)
├── index.html                    # HTML mestre da SPA (carrega fontes e viewport)
├── package.json                  # Dependências e scripts npm
├── PROJECT_GUIDE.md              # Documentação central do projeto
├── README.md                     # Apresentação do repositório
├── tsconfig.app.json             # Regras TypeScript para o código da aplicação
├── tsconfig.json                 # Configuração raiz de referências TypeScript
├── tsconfig.node.json            # Regras TypeScript para arquivos de configuração Vite
└── vite.config.ts                # Configuração do Vite, plugins e alias de caminhos
```

---

## 3. Análise dos Padrões de Design e Estilização

O projeto adota intencionalmente uma **estratégia visual híbrida e especializada**:

```
                       ┌──────────────────────────────────────────────┐
                       │                   NTN.LAB                    │
                       └──────────────────────┬───────────────────────┘
                                              │
                    ┌─────────────────────────┴─────────────────────────┐
                    ▼                                                   ▼
       [ Landing Page (src/) ]                             [ Páginas Legais (public/) ]
   Estilo Neo-Brutalista / Blueprint                   Estilo Formal, Corporativo & Neutro
  • Foco: Identidade, impacto e design               • Foco: Legibilidade, conformidade e auditoria
  • Fontes: Space Grotesk + JetBrains Mono           • Fonte: Inter / System Sans
  • Bordas sólidas pretas e sombras duras            • Bordas suaves e cartões estruturados
  • Tailwind v4 integrado via Vite                   • Tailwind CSS standalone via CDN
```

### 3.1. Landing Page (`src/`): Neo-Brutalismo & Blueprint Técnico
* **Objetivo:** Comunicar inovação técnica, estética deliberada de laboratório de software e autoridade criativa.
* **Características Visuais:**
  * **Bordas:** Pretas, sólidas e expressivas (`border-2 border-black` e `border-[3px] border-black`).
  * **Sombras Duras:** Offset rígido sem difusão/blur (`shadow-[2px_2px_0px_0px_#000]`, `shadow-[6px_6px_0px_0px_#000]`, `shadow-[8px_8px_0px_0px_#000]`).
  * **Paleta de Cores:**
    * Fundo principal: `#f6f6f4` (creme técnico neutro).
    * Preto de alto contraste: `#000000`.
    * Amarelo técnico / destaque: `#facc15`.
    * Azul laboratório: `#2563eb` (destaques, títulos e botões primários).
    * Branco sólido: `#ffffff` para superfícies de leitura e cartões.
  * **Tipografia:**
    * *Space Grotesk:* Utilizada para títulos e headlines em peso 800/900 com tracking negativo (`tracking-tight`).
    * *JetBrains Mono:* Utilizada para tags, numeração de índice (`INDEX 001`), especificações técnicas e badges.
  * **Efeito Blueprint:** Padrão de pontos azuis em grade (`.blueprint-dots` no `src/index.css`) através de `radial-gradient(#2563eb 1.3px, transparent 1.3px)`.
  * **Micro-interações:** Elevação por translação no hover (`hover:-translate-x-0.5 hover:-translate-y-0.5`).

### 3.2. Páginas Legais (`public/`): Formal e Institucional
* **Objetivo:** Transmitir credibilidade e cumprir as rígidas diretrizes do Google Play Console, Apple App Store e órgãos reguladores de proteção de dados (LGPD, GDPR, CCPA/CPRA, DSA).
* **Características Visuais:**
  * **Estrutura:** Layout centralizado e respirado (`max-w-4xl`), com fundo `bg-slate-50` e cartão principal `bg-white` com bordas sutis `border border-slate-200`.
  * **Tipografia:** Família *Inter* com hierarquia limpa (`font-semibold text-slate-900`) e parágrafos suaves (`text-slate-700 leading-relaxed`).
  * **Header Institucional:** Barra fixa superior com logotipo discreto e botão `← Página Inicial / Apps` com ícone SVG, permitindo que revisores e usuários retornem facilmente à vitrine de apps.
  * **Cards Informativos:** Caixas destacadas para os dados do Controlador de Dados (`bg-slate-50/70 border border-slate-200/80`).
  * **Execução Técnica:** 100% Tailwind CSS classes via `<script src="https://cdn.tailwindcss.com"></script>`. Como esses arquivos residem em `public/`, eles não dependem do ciclo de build do React e podem ser abertos ou hospedados de forma completamente autônoma.

---

## 4. Arquitetura de Dados dos Aplicativos (`src/data/appsData.ts`)

A listagem de aplicativos na landing page é completamente orientada a dados através do contrato de interface `AppItem` em [`src/types/app.ts`](src/types/app.ts).

### 4.1. Interface Completa do Aplicativo
```typescript
export interface AppItem {
  id: number | string;
  name: string;
  badge?: string;              // Tag superior (ex: "DAILY MOTIVATION", "UTILITY")
  tagline: string;             // Frase de impacto em negrito
  description: string;         // Descrição detalhada do app

  // Imagem principal do banner:
  image?: string;              // Caminho em 'public/' (ex: '/images/meu-app.png') ou URL

  // Metadados do banner técnico (opcionais):
  figNumber?: string;          // Ex: "FIG. 01 // KINETIC HUD"
  engineTag?: string;          // Ex: "120 FPS ENGINE" ou "OFFLINE ENGINE"
  editionTag?: string;         // Ex: "⚡ ORIGINAL BUILD"
  displayMatrix?: string;      // Ex: "DISPLAY MATRIX: SUPER RETINA XDR • HAPTIC FLOW"
  statusBadge?: string;        // Ex: "LIVE FEED VERIFIED" ou "LAB DEV // ACTIVE"

  // Tags técnicas inferiores:
  specs?: string[];            // Ex: ["ANDROID 14+", "OFFLINE-FIRST", "WIDGETS READY"]
  highlightSpec?: string;      // Tag com fundo amarelo (ex: "ZERO TELEMETRY")

  // Botões de ação à direita:
  primaryAction?: {
    label: string;             // Ex: "EXPLORE APP →"
    url: string;
    disabled?: boolean;
  };
  secondaryAction?: {
    label: string;             // Ex: "GOOGLE PLAY ↗"
    url: string;
    disabled?: boolean;
  };

  // Links de conformidade legal:
  privacyLink?: string;        // Ex: "/politica-allquits.html"
  termosLink?: string;         // Ex: "/termos-allquits.html"
}
```

### 4.2. Comportamento do Componente `AppBanner.tsx`
* Se `image` estiver preenchido, o componente renderiza a imagem com encaixe proporcional responsivo (`object-cover`).
* Se `image` estiver vazio (`image: ''` ou omitido), o componente renderiza automaticamente um placeholder elegante estilo *Blueprint Técnico*, indicando que a imagem pode ser adicionada sem quebrar o layout do site.

---

## 5. Guias Operacionais Passo a Passo

### 5.1. Como Adicionar um Novo Aplicativo
1. Adicione a imagem de demonstração do aplicativo na pasta:
   `public/images/nome-do-app-banner.png` (crie a pasta `images` se necessário).
2. Abra [`src/data/appsData.ts`](src/data/appsData.ts) e insira um novo registro no array `apps`:
   ```typescript
   {
     id: 3,
     name: 'NovoApp',
     badge: 'CATEGORIA',
     tagline: 'Solução rápida e prática para o seu dia a dia.',
     description: 'Descrição completa do aplicativo destacando os principais diferenciais...',
     image: '/images/nome-do-app-banner.png',
     specs: ['ANDROID 14+', 'OFFLINE-FIRST'],
     highlightSpec: 'ZERO TELEMETRY',
     primaryAction: {
       label: 'EXPLORAR NOVOAPP →',
       url: '#novoapp',
     },
     secondaryAction: {
       label: 'GOOGLE PLAY // EM BREVE',
       url: '#',
       disabled: true,
     },
     privacyLink: '/politica-novoapp.html',
     termosLink: '/termos-novoapp.html',
   },
   ```

### 5.2. Como Criar Políticas e Termos para um Novo App
1. **Padrão de Nomes em `public/`:**
   * Crie sempre o par de arquivos (português e inglês) para facilitar o envio a lojas e formulários internacionais:
     * `public/politica-[nomedoapp].html` e `public/privacy-[nomedoapp].html`
     * `public/termos-[nomedoapp].html` e `public/terms-[nomedoapp].html`
2. **Modelo Base:**
   * Duplique [`public/politica-allquits.html`](public/politica-allquits.html) ou [`public/termos-allquits.html`](public/termos-allquits.html).
   * Atualize os dados do cabeçalho (Nome do App, Data de Vigência e e-mail de contato).
   * O Tailwind CSS via CDN e a fonte *Inter* já vêm configurados no `<head>`.
   * O botão de voltar à Home (`href="/"`) já se encontra integrado no topo e rodapé.

---

## 6. Verificações de Qualidade e Scripts

Antes de finalizar qualquer entrega de código, execute a bateria de testes de integridade:

```bash
# Iniciar servidor local Vite (localhost:5173)
npm run dev

# Checagem estrita de tipos TypeScript (deve retornar 0 erros)
npx tsc --noEmit

# Validação de regras e boas práticas de código
npm run lint

# Compilação e empacotamento para produção
npm run build
```

---

*Documento mantido para preservar a arquitetura, as decisões técnicas e as criações autorais no laboratório **NTN.Lab**.*
