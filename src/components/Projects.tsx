import { cnTokens } from '../utils/tokens'
import { motion } from 'framer-motion'
import TechIcons from './TechIcons'

const Projects = () => {
  const projects = [
    {
      name: 'SingaStore',
      subtitle: 'E-commerce Full Stack',
      description: 'Aplicação web inspirada no universo de League of Legends, com integração completa entre front-end e back-end.',
      highlights: [
        'Integração entre front-end e back-end',
        'API REST estruturada',
        'Persistência de dados com Sequelize',
        'Banco de dados executado via Docker'
      ],
      stacks: ['React', 'Node.js', 'Express', 'Sequelize', 'SQL', 'Docker', 'APIs REST'],
      links: [
        { label: 'Repositório', href: 'https://github.com/lucasnaza1/SingaStore_Market' }
      ]
    },
    {
      name: 'ADS PERFORMANCE 4GT',
      subtitle: 'Dashboard de Performance de Tráfego',
      description: 'Dashboard completo para análise de performance de campanhas de tráfego pago, com métricas em tempo real, visualizações interativas e insights automatizados.',
      highlights: [
        'Análise em tempo real de campanhas Google Ads e Meta Ads',
        'Visualizações interativas com gráficos dinâmicos',
        'Alertas automáticos de performance abaixo do esperado',
        'Integração com GA4 e Google Tag Manager'
      ],
      stacks: [
        'React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL',
        'Google Analytics 4', 'Google Tag Manager', 'Meta Ads API',
        'Chart.js', 'Tailwind CSS', 'Docker'
      ],
      links: [
        { label: 'Repositório', href: 'https://github.com/lucasnaza1/ads_performance-4GT' }
      ]
    }
  ]

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col mb-20 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[2px] bg-teal" />
          <span className="font-mono text-xs text-teal uppercase tracking-[0.3em]">02 — Projetos</span>
        </div>
        <h2 className="text-display-section text-text-primary font-bold tracking-tight">Código e Engenharia</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className={cnTokens.card + " p-8 md:p-10"}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-3xl font-display font-bold text-text-primary tracking-tight">
                    {project.name}
                  </div>
                  <span className="badge-teal shrink-0">{project.subtitle}</span>
                </div>
                <p className="text-body text-text-secondary leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest block">Destaques</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-teal rounded-full mt-1.5 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-2">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest block">Tecnologias</span>
                <TechIcons technologies={project.stacks} size="md" className="mt-2" />
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.stacks.map((stack) => (
                    <span key={stack} className="tech-pill">
                      {stack}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-border-default">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-teal hover:text-teal-light font-bold flex items-center gap-2 transition-colors"
                  >
                    {link.label}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
