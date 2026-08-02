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
  icon: 'linkedin' | 'instagram' | 'github' | 'mail' | 'twitter'
}

export interface BioPartner {
  name: string
  role: string
  photo: string
  href: string
}

export interface BioContent {
  role: string
  eyebrow: string
  title: string
  intro: string
  availability: string
  whatsappHref: string
  servicesKicker: string
  servicesTitle: string
  services: BioService[]
  partnersKicker: string
  partnersTitle: string
  partnersText: string
  partners: BioPartner[]
  authorityKicker: string
  authorityTitle: string
  authorityText: string
  signals: BioSignal[]
  contactKicker: string
  contactTitle: string
  contactText: string
  ctaSubtext: string
  contacts: BioContact[]
  footerText: string
}

export const bio: BioContent = {
  role: 'Desenvolvedor Full Stack · Analista de Sistemas · Automações e IA',
  eyebrow: 'DESENVOLVEDOR FULL STACK · ANALISTA DE SISTEMAS · AUTOMAÇÕES E IA',
  title: 'Lucas Nazário',
  intro:
    'Desenvolvedor Full Stack • Co-fundador da ForjaCorp • Analista e Desenvolvedor de Sistemas',
  availability:
    'Disponível para projetos estratégicos, consultorias e desenvolvimento de soluções sob medida',
  whatsappHref:
    'https://wa.me/5592988174112?text=Vim%20pelo%20seu%20bio%2C%20quero%20falar%20sobre%20um%20projeto',
  servicesKicker: 'Como posso ajudar',
  servicesTitle: 'Tecnologia aplicada ao negócio.',
  services: [
    {
      number: '01',
      title: 'Desenvolvimento Full Stack',
      description:
        'Desenvolvimento de sistemas web completos, APIs REST e plataformas personalizadas, unindo back-end e front-end para entregar soluções modernas, escaláveis e de fácil manutenção.',
      tags: ['JavaScript', 'React', 'Node.js', 'Express', 'Sequelize'],
    },
    {
      number: '02',
      title: 'Sistemas, Automações e IA',
      description:
        'Automação de processos, integrações entre plataformas e desenvolvimento de soluções inteligentes utilizando APIs, inteligência artificial e fluxos automatizados para aumentar produtividade e reduzir tarefas repetitivas.',
      tags: ['Docker', 'Integração de APIs', 'Automações', 'Inteligência Artificial'],
    },
    {
      number: '03',
      title: 'Growth & Soluções Digitais',
      description:
        'Aplicação de tecnologia para otimizar processos comerciais e de marketing, desenvolvendo integrações, dashboards, bots, automações e soluções orientadas por dados para melhorar resultados.',
      tags: ['Google Ads', 'Meta Ads', 'Dashboards', 'Bots', 'Analytics'],
    },
  ],
  partnersKicker: 'Parceiros',
  partnersTitle: 'Conexões que fortalecem o trabalho',
  partnersText:
    'Trabalho próximo de profissionais em quem confio, ampliando cobertura e especialidade sempre que o projeto pede.',
  partners: [
    {
      name: 'Matheus',
      role: 'Dev Full Stack & Analista de Sistemas',
      photo: '/bio-assets/matheus.png',
      href: 'https://matheus.forjacorp.com/pt/bio',
    },
    {
      name: 'Vinicius',
      role: 'Engenheiro de Growth',
      photo: '/bio-assets/vinicius.png',
      href: 'https://vinicius.forjacorp.com/bio',
    },
  ],
  authorityKicker: 'EXPERIÊNCIA MULTIDISCIPLINAR',
  authorityTitle: 'Tecnologia com visão de negócio.',
  authorityText:
    'Como Co-fundador da ForjaCorp, desenvolvo soluções que unem desenvolvimento de software, automação, inteligência artificial e estratégia digital. Minha atuação combina conhecimentos técnicos e visão de produto para criar sistemas eficientes, escaláveis e alinhados às necessidades de cada cliente.',
  signals: [
    {
      value: 'Desenvolvimento de Sistemas',
      label: 'Criação de aplicações web full stack, APIs REST, integrações e soluções personalizadas.',
    },
    {
      value: 'Banco de Dados',
      label: 'Modelagem, persistência de dados e utilização de ORMs como Sequelize em aplicações escaláveis.',
    },
    {
      value: 'Integrações',
      label: 'Conexão entre sistemas, APIs de terceiros e automação de processos.',
    },
    {
      value: 'Deploy e Infraestrutura',
      label: 'Containerização com Docker, configuração de ambientes e publicação de aplicações.',
    },
    {
      value: 'Inteligência Artificial',
      label: 'Desenvolvimento de automações inteligentes utilizando modelos de IA para otimização de processos.',
    },
    {
      value: 'Growth & Performance',
      label: 'Experiência na integração entre tecnologia e marketing digital, criando soluções que unem automação, análise de dados e performance.',
    },
  ],
  contactKicker: 'Vamos conversar sobre seu projeto',
  contactTitle: 'Transforme sua ideia em um sistema funcional.',
  contactText:
    'Conte sua necessidade e encontraremos a melhor solução para transformar sua ideia em um sistema funcional e escalável.',
  ctaSubtext: 'Conte sua necessidade. Respondemos pessoalmente.',
  contacts: [
    {
      label: 'GitHub',
      href: 'https://github.com/lucasnaza1',
      handle: '@lucasnaza1',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/lucas-nazro/',
      handle: '/in/lucas-nazro',
      icon: 'linkedin',
    },
    {
      label: 'E-mail',
      href: 'mailto:lucasnazario.tech@gmail.com',
      handle: 'lucasnazario.tech@gmail.com',
      icon: 'mail',
    },
    {
      label: 'X',
      href: 'https://x.com/nazaaccount',
      handle: '@nazaaccount',
      icon: 'twitter',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/nazaaccount/',
      handle: '@nazaaccount',
      icon: 'instagram',
    },
    {
      label: 'ForjaCorp',
      href: 'https://www.instagram.com/forjacorp/',
      handle: '@forjacorp',
      icon: 'instagram',
    },
  ],
  footerText: 'NazaDev × ForjaCorp',
}
