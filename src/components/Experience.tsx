import { motion } from 'framer-motion'
import { cnTokens } from '../utils/tokens'
import TechIcons from './TechIcons'
import TiltCard from './TiltCard'

const Experience = () => {
  const experiences = [
    {
      period: 'Ago/2026 – Atual',
      title: 'Programador de Sistemas',
      company: 'SergipeTec — Sergipe, Brasil',
      description: 'Atuação no desenvolvimento, manutenção e evolução de sistemas modernos e legados, aplicando boas práticas de arquitetura, qualidade de código e inteligência de dados.',
      skills: [
        'Next.js',
        'TypeScript',
        'C# / ASP.NET',
        'Node.js',
        'Tailwind CSS',
        'PostgreSQL',
        'MySQL',
        'GitFlow',
        'DDD',
        'SOLID'
      ],
      highlights: [
        'Desenvolvimento de interfaces web modernas e performáticas com Next.js, TypeScript, JavaScript e Tailwind CSS',
        'Construção e manutenção de sistemas com mais de 150 mil usuários para a Secretaria da Educação do Estado de Sergipe',
        'Desenvolvimento de serviços e APIs robustas em C#/ASP.NET e Node.js, aplicando arquiteturas MVC e Microsserviços',
        'Aplicação de Design Patterns, princípios SOLID, Domain-Driven Design (DDD) e análise de sistemas para código limpo, organizado e escalável',
        'Modelagem, manipulação e análise de dados com SQL em PostgreSQL e MySQL, com foco em integridade, consistência e eficiência',
        'Manutenção, refatoração e testes de sistemas legados, com validações e simulações antes da disponibilização em produção',
        'Versionamento com Git e GitLab aplicando GitFlow, desenvolvimento em Microsoft Visual Studio e elaboração de documentação técnica e operacional'
      ]
    },
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
          <TiltCard key={`${exp.title}-${idx}`} className={`${cnTokens.card} hover:shadow-teal-glow transition-shadow duration-300`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 md:p-8"
            >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <span className="font-mono text-xs text-teal uppercase tracking-wider">
                  {exp.period}
                </span>
                <h3 className="text-display-title font-bold mt-2">
                  {exp.title}
                </h3>
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
            </div>
          </motion.div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}

export default Experience