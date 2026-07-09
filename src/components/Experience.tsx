import { motion } from 'framer-motion'
import { cnTokens } from '../utils/tokens'
import TechIcons from './TechIcons'

const Experience = () => {
  const experiences = [
    {
      period: 'Jun/2026 – Atual',
      title: 'Coordenador, Analista de Sistemas e Programador',
      company: '4GrowthBR',
      description: 'Atuação em codificação, modificação e compilação de programas focando na otimização de sistemas internos. Coordenação técnica de equipes e múltiplos projetos utilizando Git (GitFlow).',
      skills: [
        'TypeScript',
        'React',
        'Node.js',
        'API REST',
        'Git (GitFlow)',
        'Dashboards',
        'Liderança técnica'
      ],
      highlights: [
        'Desenvolvimento de dashboards e ferramentas internas de alta performance com TypeScript e React',
        'Coordenação técnica de equipes e múltiplos projetos utilizando Git (GitFlow)',
        'Criação e consumo de APIs REST, automação de dados e documentação técnica de requisitos',
        'Codificação, modificação e compilação de programas com foco na otimização de sistemas internos'
      ]
    },
    {
      period: 'Set/2025 – Jun/2026',
      title: 'Programador, Analista de Dados e Especialista em Mídias',
      company: '4GrowthBR',
      description: 'Codificação de sistemas para monitoramento de indicadores e consolidação de dados em tempo real, com forte atuação em modelagem de banco de dados e automações.',
      skills: [
        'TypeScript',
        'SQL',
        'POO',
        'Clean Code',
        'Testes Unitários',
        'Automação de Dados',
        'Análise de Dados'
      ],
      highlights: [
        'Codificação de sistemas para monitoramento de indicadores e consolidação de dados em tempo real',
        'Implementação de testes unitários e refatoração de código com foco em POO e Clean Code',
        'Modelagem de bancos de dados SQL e criação de automações para redução de processos manuais'
      ]
    },
    {
      period: 'Projeto Pessoal',
      title: 'SingaStore',
      subtitle: 'E-commerce Full Stack — Tema League of Legends',
      description: 'E-commerce fictício inspirado no campeão Singed (League of Legends), com estética de laboratório químico de Zaun. Arquitetura full-stack moderna com catálogo, carrinho persistente e galeria de skins.',
      skills: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'Node.js',
        'Express',
        'MySQL',
        'Docker',
        'Zustand',
        'React Router'
      ],
      highlights: [
        'Catálogo com filtros, busca, ordenação e paginação',
        '14 produtos fictícios temáticos + galeria de 13 skins oficiais',
        'Carrinho persistente (localStorage) com checkout simulado',
        'API REST com Express, MySQL e Docker Compose'
      ],
      link: 'https://github.com/lucasnaza1/SingaStore_Market'
    },
    {
      period: 'Projeto Pessoal',
      title: 'ADS Performance',
      subtitle: 'Dashboard de Performance de Tráfego',
      description: 'Dashboard completo para análise de performance de campanhas de tráfego pago, com métricas em tempo real, visualizações interativas e insights automatizados.',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Sheets',
        'Meta API',
        'Google AppScript'
      ],
      highlights: [
        'Análise em tempo real de campanhas Google Ads e Meta Ads',
        'Visualizações interativas com gráficos dinâmicos',
        'Alertas automáticos de performance abaixo do esperado',
        'Integração com GA4 e Google Tag Manager'
      ],
      link: 'https://github.com/lucasnaza1/ads_performance-4GT'
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

              <p className="text-body text-text-secondary mb-6 flex-grow">
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
                        className="px-3 py-1 bg-background-secondary text-text-secondary text-xs rounded-full font-mono"
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
                        className="flex items-start gap-2 text-body text-text-secondary"
                      >
                        <span className="text-teal mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {exp.link && (
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