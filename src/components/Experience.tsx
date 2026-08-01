import { motion } from 'framer-motion'
import { cnTokens } from '../utils/tokens'
import TechIcons from './TechIcons'

const Experience = () => {
  const experiences = [
    {
      period: 'Set/2025 – Jul/2026',
      title: 'Dev Full Stack, Engenheiro de Growth (MarTech) e Coord. Time de Tráfego',
      company: '4GrowthBR — Sergipe, Brasil',
      description: 'Desenvolvedor Full Stack com atuação em arquitetura de APIs REST, integrações e automações. Entrego soluções escaláveis unindo engenharia de software, MarTech e liderança técnica.',
      skills: [
        'TypeScript',
        'Node.js',
        'React',
        'SQL',
        'API REST',
        'n8n',
        'Make',
        'GitFlow',
        'Clean Code'
      ],
      highlights: [
        'Desenvolvimento de aplicações Full Stack com TypeScript, Node.js, React e SQL',
        'Desenvolvimento e integração de APIs REST, automações e soluções com n8n, Make e Google Apps Script',
        'Criação de dashboards, ferramentas internas e sistemas para processamento e monitoramento de dados',
        'Modelagem de banco de dados, arquitetura de software e aplicação de boas práticas (Clean Code e GitFlow)',
        'Desenvolvimento de soluções MarTech, integrando Meta Ads, Google Ads, GA4, GTM, CRMs e outras plataformas',
        'Atuação como Engenheiro de Growth, automatizando processos e integrações para marketing e vendas',
        'Coordenação técnica e liderança do time de tráfego, definindo processos, indicadores e apoiando o desenvolvimento de soluções'
      ]
    },
    {
      period: 'Projeto Corporativo',
      title: 'Spider ADS',
      subtitle: 'Plataforma SaaS · Coleta, Processamento e Visualização de Meta Ads',
      description: 'Plataforma SaaS para gestores de tráfego que gerenciam múltiplas contas de clientes. Consome a Meta Graph API (v25.0) com paginação e breakdowns customizados, sincroniza métricas de forma automatizada via scheduler (node-cron) e disponibiliza dashboards analíticos com filtros por período e cliente.',
      skills: [
        'TypeScript',
        'Node.js',
        'React',
        'MySQL',
        'Meta Ads API',
        'node-cron',
        'Dashboards'
      ],
      highlights: [
        'Meta Graph API v25.0 com paginação e breakdowns customizados',
        'Sincronização automatizada de métricas via scheduler (node-cron)',
        'Dashboards com filtros por período, cliente e segmentação demográfica',
        'Ranking de criativos por métrica (ROAS, CPL, Leads, Investimento)',
        'Acompanhamento de metas com progresso em tempo real',
        'Suporte a múltiplas contas de anúncios gerenciadas simultaneamente'
      ]
    },
    {
      period: 'Projeto Pessoal',
      title: 'SingaStore',
      subtitle: 'E-commerce Full Stack — Tema League of Legends',
      description: 'E-commerce Full Stack inspirado no universo de League of Legends, com autenticação, gerenciamento de produtos e pedidos via API REST.',
      skills: [
        'React',
        'Node.js',
        'TypeScript',
        'MySQL',
        'Docker',
        'API REST'
      ],
      highlights: [
        'Autenticação e gerenciamento de produtos e pedidos via API REST',
        'Catálogo com filtros, busca, ordenação e paginação',
        'Carrinho persistente (localStorage) com checkout simulado',
        'API REST com Express, MySQL e Docker Compose'
      ],
      link: 'https://github.com/lucasnaza1/SingaStore_Market'
    },
    {
      period: 'Projeto Pessoal',
      title: 'FipeSearch',
      subtitle: 'App Mobile + API Java de Consulta de Veículos',
      description: 'Aplicação mobile em React Native com API REST totalmente em Java/Spring Boot para consulta de preços de veículos consumindo a API da FIPE.',
      skills: [
        'React Native',
        'TypeScript',
        'Java',
        'Spring Boot',
        'API REST'
      ],
      highlights: [
        'App mobile multiplataforma (iOS/Android) com React Native',
        'API REST totalmente em Java com Spring Boot',
        'Consulta de preços de veículos via API da FIPE',
        'Interface moderna com histórico de buscas e favoritos'
      ],
      frontendLink: 'https://github.com/lucasnaza1/FipeSearchMobile',
      backendLink: 'https://github.com/lucasnaza1/FipeSearch'
    }
  ]

  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col mb-20 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[2px] bg-teal" />
          <span className="font-mono text-xs text-teal uppercase tracking-[0.3em]">03 — Experiência</span>
        </div>
        <h2 className="text-display-section text-text-primary font-bold tracking-tight">Trajetória Profissional</h2>
        <p className="text-body text-text-secondary max-w-3xl leading-relaxed">
          Combino experiência em gestão de tráfego pago com desenvolvimento full-stack, criando soluções que unem performance digital e tecnologia.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={`${exp.title}-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`${cnTokens.card} p-6 md:p-8 hover:shadow-teal-glow transition-all duration-300`}
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <span className="font-mono text-xs text-teal uppercase tracking-wider">
                  {exp.period}
                </span>
                <h3 className="text-display-title font-bold mt-2">
                  {exp.title}
                </h3>
                {exp.subtitle && (
                  <p className="text-body text-text-secondary mt-1">
                    {exp.subtitle}
                  </p>
                )}
                {exp.company && (
                  <p className="text-body font-medium text-text-primary mt-1">
                    {exp.company}
                  </p>
                )}
              </div>

              <p className="text-body text-text-secondary mb-3">
                {exp.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-mono text-xs text-text-secondary uppercase tracking-wider mb-2">
                    Competências
                  </h4>
                  <TechIcons technologies={exp.skills} size="md" className="mb-3" />
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 bg-background-secondary text-text-secondary text-xs rounded-full font-mono transition-colors duration-200 hover:text-white hover:bg-background-tertiary cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-text-secondary uppercase tracking-wider mb-2">
                    Destaques
                  </h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, highlightIdx) => (
                      <li
                        key={highlightIdx}
                        className="flex items-start gap-2 text-body text-text-secondary transition-colors duration-200 hover:text-white cursor-default"
                      >
                        <span className="text-teal mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {exp.frontendLink && exp.backendLink ? (
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={exp.frontendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-teal hover:text-teal-light font-bold transition-colors"
                  >
                    Ver Frontend
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                  <a
                    href={exp.backendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-teal hover:text-teal-light font-bold transition-colors"
                  >
                    Ver Backend
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              ) : exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-teal hover:text-teal-light font-bold transition-colors"
                >
                  Ver repositório
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience