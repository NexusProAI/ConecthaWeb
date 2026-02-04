# Conectha Web - Landing Page

Landing page moderna e animada para agência de marketing digital, desenvolvida com Next.js, React, Tailwind CSS e GSAP.

## Tecnologias Utilizadas

- **Next.js 15** - Framework React para produção
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **GSAP (GreenSock)** - Biblioteca de animações avançadas
- **Framer Motion** - Biblioteca de animações React
- **Lucide React** - Ícones modernos

## Características

### Seções Implementadas

1. **Hero** - Seção principal com headline, CTA e animações de entrada
2. **Prova Social** - Logos de empresas e números animados
3. **Serviços** - Cards interativos com hover effects
4. **Portfolio/Cases** - Carrossel animado de cases de sucesso
5. **Depoimentos** - Cards de clientes com animações flutuantes
6. **FAQ** - Acordeão animado com perguntas frequentes
7. **CTA Final** - Call-to-action com oferta especial
8. **Rodapé** - Footer com links e informações de contato

### Animações e Efeitos

- Animações de entrada com GSAP
- Scroll reveal com ScrollTrigger
- Hover effects sofisticados
- Microinterações nos botões e cards
- Transições suaves entre seções
- Gradientes animados
- Efeitos de blur e backdrop
- Contadores animados
- Carrossel interativo

### Design

- Design moderno e responsivo
- Gradientes vibrantes (purple, pink, blue)
- Dark mode por padrão
- Glassmorphism effects
- Tipografia hierárquica
- Espaçamento consistente

## Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar em produção
npm start
```

O projeto estará disponível em `http://localhost:3000`

## Estrutura do Projeto

```
ConecthaWeb/
├── app/
│   ├── globals.css          # Estilos globais e Tailwind
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── components/
│   └── sections/            # Componentes de seções
│       ├── Hero.tsx
│       ├── SocialProof.tsx
│       ├── Services.tsx
│       ├── Portfolio.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       ├── CTA.tsx
│       └── Footer.tsx
├── public/                  # Arquivos estáticos
├── next.config.ts           # Configuração Next.js
├── tailwind.config.ts       # Configuração Tailwind
├── tsconfig.json            # Configuração TypeScript
└── package.json             # Dependências do projeto
```

## Personalização

### Cores

As cores podem ser modificadas no arquivo `tailwind.config.ts` na seção `theme.extend.colors`.

### Conteúdo

Todo o conteúdo pode ser editado diretamente nos componentes em `components/sections/`.

### Animações

As animações GSAP podem ser ajustadas nos hooks `useEffect` de cada componente.

## Performance

- Lazy loading de componentes
- Otimização de imagens com Next.js Image
- Code splitting automático
- CSS-in-JS com Tailwind
- Animações otimizadas com GSAP

## Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload da pasta .next
```

## Licença

Este projeto é privado e pertence à Conectha Web.

## Suporte

Para dúvidas ou suporte, entre em contato:
- Email: contato@conecthaweb.com
- Telefone: +55 (11) 99999-9999
