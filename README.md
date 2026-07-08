# 🚀 Lucas Nazário — Portfólio Pessoal

> Portfólio profissional de **Lucas Nazário** — Analista e Desenvolvedor de Sistemas, Full Stack Developer e Especialista em Tráfego Pago.

Portfólio interativo, moderno e responsivo, construído com **React + TypeScript + Vite + Tailwind CSS**, com modo claro/escuro, animações fluidas e um **jogo da velha impossível** como desafio final no rodapé.

---

## ✨ Funcionalidades

- 🎨 **Design Moderno** — estética dark com acentos teal, tipografia caprichada (Space Grotesk + DM Sans + DM Mono)
- 🌗 **Tema Claro/Escuro** — alternância persistida em `localStorage`
- 🎬 **Animações Fluidas** — com Framer Motion (entrada, hover e scroll reveal)
- 🖼️ **Foto Interativa** — efeito grayscale → colorido + zoom ao passar o mouse
- 💼 **Seção de Experiência** — trajetória profissional + projetos pessoais (SingaStore, ADS Performance)
- 🛠️ **Ícones de Tecnologias** — mapeamento visual de competências (React, Node, Docker, MySQL, etc.)
- 🎮 **Jogo da Velha Impossível** — IA perfeita (minimax), apenas UMA sequência leva à vitória
- 📱 **Totalmente Responsivo** — mobile, tablet e desktop
- 📨 **Contato via WhatsApp** — integração click-to-chat
- 🧭 **Favicon Personalizado** — "naza.dev" em branco e verde teal

---

## 🛠️ Stack Utilizada

| Categoria       | Tecnologia                                           |
| --------------- | ---------------------------------------------------- |
| **Framework**   | React 18                                             |
| **Linguagem**   | TypeScript 5                                         |
| **Build Tool**  | Vite 5                                               |
| **Estilização** | Tailwind CSS 3                                       |
| **Animações**   | Framer Motion 11                                     |
| **Ícones**      | React Icons 5 + Lucide React                         |
| **Utilitários** | clsx + tailwind-merge                                |

---

## 📁 Estrutura do Projeto

```
meuPortfolio/
├── public/
│   └── favicon.svg              # Favicon "naza.dev" personalizado
├── src/
│   ├── assets/
│   │   └── perfil.jpg           # Foto de perfil
│   ├── components/
│   │   ├── Navbar.tsx           # Barra de navegação + toggle de tema
│   │   ├── Hero.tsx             # Apresentação inicial + stats
│   │   ├── About.tsx            # Sobre + foto interativa + skills
│   │   ├── Experience.tsx       # Experiência profissional + projetos
│   │   ├── Contact.tsx          # Formulário + WhatsApp
│   │   ├── TicTacToe.tsx        # Jogo da velha impossível + footer
│   │   ├── TechIcons.tsx        # Mapa de ícones de tecnologias
│   │   └── Icons.tsx            # Centralização de imports de ícones
│   ├── styles/
│   │   └── globals.css          # Estilos globais + Tailwind + variáveis
│   ├── utils/
│   │   └── tokens.ts            # Design tokens + classes utilitárias
│   ├── App.tsx                  # Componente raiz + gerenciamento de tema
│   └── main.tsx                 # Entry point
├── index.html                   # HTML raiz
├── tailwind.config.js           # Tema Tailwind (cores, fontes, animações)
├── vite.config.ts               # Configuração do Vite
├── tsconfig.json                # Configuração do TypeScript
└── package.json
```

---

## 🎮 Jogo da Velha — Modo Impossível

O grande destaque interativo do portfólio é o **Jogo da Velha** localizado no rodapé (footer):

- 🤖 **IA Perfeita** — implementada com lógica minimax simplificada
- 🎯 **Praticamente Impossível** — existe apenas **UMA** sequência específica de jogadas que leva à vitória do jogador
- 💡 **Sistema de Dicas** — destaca visualmente a posição vencedora possível
- 🛡️ **Bloqueio Automático** — a IA bloqueia todas as jogadas vencedoras do oponente
- 📊 **Placar** — acompanhe vitórias, derrotas e empates

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- **Node.js** 18 ou superior
- **npm** ou **yarn**

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/lucasnaza1/MeuPortfolio.git
cd MeuPortfolio

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse: **http://localhost:5173**

### Scripts Disponíveis

| Script            | Descrição                              |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento   |
| `npm run build`   | Gera o build de produção (`/dist`)     |
| `npm run preview` | Pré-visualiza o build de produção      |

---

## 🎨 Personalização

### Foto de Perfil
Adicione sua imagem em `src/assets/perfil.jpg`. Caso o arquivo não exista, um fallback SVG com o nome "Lucas Nazário" é exibido automaticamente.

### Cores do Tema
Edite as variáveis CSS em `src/styles/globals.css` e o objeto `theme` em `tailwind.config.js`.

### Conteúdo
- **Experiência/Projetos**: edite o array `experiences` em `src/components/Experience.tsx`
- **Sobre**: edite `src/components/About.tsx`
- **Contato/WhatsApp**: ajuste a variável `whatsappUrl` em `src/components/Contact.tsx`

---

## 📦 Deploy

O projeto gera arquivos estáticos em `/dist` após o build. Pode ser hospedado em:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

```bash
npm run build   # Gera a pasta /dist
```

---

## 👤 Autor

**Lucas Nazário**

- 🐙 GitHub: [@lucasnaza1](https://github.com/lucasnaza1)
- 💼 LinkedIn: [lucas-nazário](https://linkedin.com/in/lucas-nazário-80b02a289)
- 📧 Email: lucasnazario.tech@gmail.com
- 📱 WhatsApp: [+55 92 9 8817 4112](https://wa.me/5592988174112)

---

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para se inspirar, mas não copie diretamente o conteúdo sem permissão.

---

<p align="center">
  Feito com 💚 e muito ☕ por Lucas Nazário
</p>
