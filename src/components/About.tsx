import { motion } from 'framer-motion'
import { cnTokens } from '../utils/tokens'
import profileImg from '../assets/profile.jpg'

const About = () => {
  const skills = [
    { category: 'Backend', items: ['Node.js', 'Java', 'Python', 'APIs REST'] },
    { category: 'Frontend', items: ['React', 'React Native', 'Tailwind CSS'] },
    { category: 'DevOps', items: ['Docker', 'Infraestrutura', 'Cloud'] },
    { category: 'Data', items: ['Relacionais', 'Não-Relacionais'] },
  ]

  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col mb-20 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[2px] bg-teal" />
          <span className="font-mono text-xs text-teal uppercase tracking-[0.3em]">04 — Sobre</span>
        </div>
        <h2 className="text-display-section text-text-primary font-bold tracking-tight">Trajetória e Expertise</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Photo Placeholder / Visual Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 w-full"
        >
          <div className="absolute inset-0 border-2 border-teal rounded-card translate-x-4 translate-y-4 -z-10 opacity-20" />
          <div className="w-full h-full bg-background-surface border border-border-strong rounded-card overflow-hidden relative group">
            <img 
              src={profileImg} 
              alt="Lucas Nazário" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-teal/5 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </motion.div>

        {/* Content Side */}
        <div className="space-y-10">
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold text-text-primary leading-tight">
              Full Stack Developer | Co-fundador na <span className="text-teal">ForjaCorp</span> | ADS
            </h3>
            
            <div className="space-y-4 text-body text-text-secondary leading-relaxed">
              <p>
                Analista e Desenvolvedor de Sistemas especializado em arquitetar APIs e interfaces modernas. 
                Com um stack versátil que engloba <span className="text-text-primary font-medium">Node.js, Java e Python</span>, 
                construo aplicações robustas integradas a bancos relacionais e não-relacionais.
              </p>
              <p>
                Minha expertise inclui a orquestração de ambientes com <span className="text-text-primary font-medium">Docker</span> e a 
                implementação de boas práticas de engenharia de software para garantir escalabilidade e performance.
              </p>
              <p>
                Como co-fundador, aplico uma visão holística sobre o produto, unindo lógica de negócio complexa 
                a uma experiência de usuário impecável no Front-end (<span className="text-text-primary font-medium">React/Native</span>).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-3">
                <span className="font-mono text-[10px] text-teal uppercase tracking-widest font-bold">
                  {skillGroup.category}
                </span>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="text-sm text-text-muted flex items-center gap-2">
                      <div className="w-1 h-1 bg-teal/40 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <button className={cnTokens.btnOutline}>
              Ver Currículo Completo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
