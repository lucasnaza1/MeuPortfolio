import { motion } from 'framer-motion'
import { useState } from 'react'

const profileImgUrl = new URL('../assets/profile.jpg', import.meta.url).href

const imgFallback =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200" viewBox="0 0 900 1200">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" sto  p-color="#0B0D0E"/>
          <stop offset="1" stop-color="#0D1414"/>
        </linearGradient>
      </defs>
      <rect width="900" height="1200" fill="url(#g)"/>
      <rect x="36" y="36" width="828" height="1128" rx="28" fill="none" stroke="rgba(20,184,166,0.35)" stroke-width="6"/>
      <text x="50%" y="48%" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="92" fill="#F8FAFC" font-weight="700">Lucas</text>
      <text x="50%" y="56%" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="92" fill="#14B8A6" font-weight="700">Nazário</text>
      <text x="50%" y="64%" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#94A3B8">Substitua src/assets/profile.jpg pela sua foto</text>
    </svg>`
  )

const About = () => {
  const [imgSrc, setImgSrc] = useState(profileImgUrl)

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
              src={imgSrc} 
              alt="Lucas Nazário" 
              onError={() => {
                setImgSrc(imgFallback)
              }}
              onLoad={(e) => {
                const el = e.currentTarget
                if (!el.naturalWidth || !el.naturalHeight) setImgSrc(imgFallback)
              }}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-teal group-hover:bg-transparent transition-colors duration-500 opacity-5" />
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
                      <div className="w-1 h-1 bg-teal rounded-full opacity-40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
