import { motion } from 'framer-motion'
import { cnTokens } from '../utils/tokens'
import TechIcons from './TechIcons'

const Experience = () => {
  const experiences = [
    {
      period: '06/2026 – Presente',
      title: 'Coordenador do Time de Tráfego',
      company: '(JUN/2026 - PRESENTE) 4GrowthBR',
      description: 'Liderança e coordenação do time de tráfego pago, responsável pela estratégia, otimização e análise de performance de campanhas em múltiplas plataformas.',
      skills: [
        'Liderança de equipe',
        'Estratégia de campanhas',
        'Otimização de performance',
        'Análise de dados avançada',
        'Gestão de orçamento',
        'Relatórios executivos'
      ],
      highlights: [
        'Coordenação de equipe de Tráfego',
        'Desenvolvimento de estratégias de crescimento',
        'Otimização de ROI em campanhas',
        'Implementação de processos ágeis'
      ]
    },
    {
      period: '09/2025 – 05/2026',
      title: 'Gestor de Tráfego',
      company: '(SET/2025 - JUN/2026) 4GrowthBR',
      description: 'Gestão completa de campanhas de tráfego pago com foco em performance, conversão e otimização contínua.',
      skills: [
        'Google Ads',
        'Meta Ads',
        'Google Analytics 4 (GA4)',
        'Google Tag Manager (GTM)',
        'API de Conversões',
        'Pixel de Rastreamento',
        'Análise de Dados',
        'Elaboração de Dashboards',
        'Otimização de Campanhas'
      ],
      highlights: [
        'Análise de Dados e Métricas de Marketing',
        'Redução de 25% no CPA médio',
        'Implementação de tracking server-side',
        'Criação de dashboards automatizados'
      ]
    },
    {
      period: 'Projeto Pessoal',
      title: 'SingaStore',
      subtitle: 'E-commerce Full Stack',
      description: 'Aplicação web inspirada no universo de League of Legends, com integração completa entre front-end e back-end.',
      skills: [
        'React',
        'Node.js',
        'Express',
        'Sequelize',
        'SQL',
        'Docker',
        'APIs REST'
      ],
      highlights: [
        'Integração entre front-end e back-end',
        'API REST estruturada',
        'Persistência de dados com Sequelize',
        'Banco de dados executado via Docker'
      ]
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
      ]
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience