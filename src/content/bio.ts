export interface BioService {
  number: string
  title: string
  description: string
  tags: string[]
}

export interface BioSignal {
  value: string
  label: string
}

export interface BioContact {
  label: string
  href: string
  handle: string
  icon: 'linkedin' | 'instagram' | 'github' | 'mail'
}

export interface BioContent {
  role: string
  eyebrow: string
  title: string
  intro: string
  availability: string
  whatsappHref: string
  services: BioService[]
  authorityKicker: string
  authorityTitle: string
  authorityText: string
  signals: BioSignal[]
  contacts: BioContact[]
  footerText: string
}

export const bio: BioContent = {
  role: 'Desenvolvedor Full Stack · Analista de Sistemas · Automações e IA',
  eyebrow: 'DESENVOLVEDOR FULL STACK · ANALISTA DE SISTEMAS · AUTOMAÇÕES E IA',
  title: 'Lucas Nazário',
  intro:
    'Desenvolvedor Full Stack • Co-fundador na ForjaCorp • Analista e Desenvolvedor de Sistemas',
  availability: 'Disponível para projetos selecionados e contratos recorrentes',
  whatsappHref:
    'https://wa.me/5592988174112?text=Vim%20pelo%20seu%20bio%2C%20quero%20falar%20sobre%20um%20projeto',
  services: [
    {
      number: '01',
      title: 'Desenvolvimento Full Stack',
      description:
        'Sistemas, APIs e plataformas construídos com Spring, React Native, Next.js e TypeScript — do backend ao frontend.',
      tags: ['Spring', 'React Native', 'Next.js', 'TypeScript'],
    },
    {
      number: '02',
      title: 'Infraestrutura e automação',
      description:
        'Deploys, pipelines, integrações e automações com IA que reduzem trabalho manual e mantêm o sistema rodando sem fricção.',
      tags: ['Docker', 'Coolify', 'CI/CD', 'Automações', 'IA'],
    },
    {
      number: '03',
      title: 'Tráfego pago e e-mail marketing',
      description:
        'Campanhas, automação de e-mail marketing e otimização orientada por dados, com foco em performance e eficiência de investimento.',
      tags: ['Google Ads', 'Meta Ads', 'E-mail Marketing'],
    },
  ],
  authorityKicker: 'EXPERIÊNCIA MULTIDISCIPLINAR',
  authorityTitle: 'Execução técnica com visão de produto.',
  authorityText:
    'Minha experiência passa por desenvolvimento full stack, automações com IA e infraestrutura de deploy. Enxergo tecnologia, marketing e operação como partes do mesmo sistema.',
  signals: [
    { value: 'Full Stack', label: 'Spring, React Native, Next.js, TypeScript' },
    { value: 'Co-fundador', label: 'ForjaCorp' },
    { value: 'Spider ADS', label: 'Systems Analyst & Ads Performance' },
  ],
  contacts: [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/lucas-nazro/',
      handle: '/in/lucas-nazro',
      icon: 'linkedin',
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com/naza.dev',
      handle: '@naza.dev',
      icon: 'instagram',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/lucasnaza1',
      handle: '@lucasnaza1',
      icon: 'github',
    },
    {
      label: 'E-mail',
      href: 'mailto:lucasnazario.tech@gmail.com',
      handle: 'lucasnazario.tech@gmail.com',
      icon: 'mail',
    },
  ],
  footerText: 'NazaDev × ForjaCorp',
}
