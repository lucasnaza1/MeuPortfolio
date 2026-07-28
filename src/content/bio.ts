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
  role: 'Full Stack Developer',
  eyebrow: 'FULL STACK DEVELOPER · TECNOLOGIA APLICADA AO CRESCIMENTO',
  title: 'Lucas Nazário',
  intro:
    'Desenvolvo software full stack e gerencio tráfego pago para empresas que querem crescer com mais eficiência e controle — do código à aquisição de clientes.',
  availability: 'Disponível para projeto selecionados e contratos recorrentes',
  whatsappHref:
    'https://wa.me/5592988174112?text=Vim%20pelo%20seu%20bio%2C%20quero%20falar%20sobre%20um%20projeto',
  services: [
    {
      number: '01',
      title: 'Desenvolvimento de software',
      description:
        'Sistemas, APIs e plataformas construídos para resolver problemas reais — do backend em Java/Spring ao frontend em React/Next.js.',
      tags: ['Java', 'Spring Boot', 'React', 'Next.js', 'Node.js'],
    },
    {
      number: '02',
      title: 'Tráfego pago',
      description:
        'Campanhas e otimização orientadas por dados, com foco em performance e eficiência de investimento.',
      tags: ['Google Ads', 'Meta Ads'],
    },
    {
      number: '03',
      title: 'Infraestrutura e automação',
      description:
        'Deploys, pipelines e integrações que reduzem trabalho manual e mantêm o sistema rodando sem fricção.',
      tags: ['Docker', 'Coolify', 'CI/CD', 'GitHub Webhooks'],
    },
  ],
  authorityKicker: 'EXPERIÊNCIA MULTIDISCIPLINAR',
  authorityTitle: 'Execução técnica com visão de produto.',
  authorityText:
    'Minha experiência passa por desenvolvimento full stack, gestão de tráfego pago e infraestrutura de deploy. Enxergo tecnologia, marketing e operação como partes do mesmo sistema.',
  signals: [
    { value: 'Full Stack', label: 'Java/Spring, Node.js, React, Next.js' },
    { value: 'Co-fundador', label: 'ForjaCorp' },
    { value: '4GrowthBR', label: 'Systems Analyst & Ads Performance' },
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
