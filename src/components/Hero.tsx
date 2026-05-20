import { motion } from 'framer-motion'
import { cnTokens } from '../utils/tokens'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-20">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-glow rounded-full blur-[120px] -z-10 opacity-30" />
      
      <div className="max-w-5xl w-full text-center space-y-16">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center space-y-4"
          >
            <span className="font-mono text-label text-teal uppercase tracking-[0.4em] font-medium">
              01 — Identidade
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            <h1 className="text-display-hero md:text-[100px] text-text-primary font-display leading-[0.9] tracking-tighter">
              Lucas<br />
              <span className="text-teal">Nazário</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-mono text-label text-text-secondary uppercase tracking-[0.2em] max-w-2xl mx-auto pt-8"
          >
            Desenvolvedor Full Stack • Co-fundador na ForjaCorp • Analista e Desenvolvedor de Sistemas
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a 
            href="https://github.com/lucasnaza1" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cnTokens.btnPrimary}
          >
            Ver projetos no GitHub
          </a>
          <a 
            href="#contact"
            className={cnTokens.btnOutline}
          >
            Entrar em contato
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto"
        >
          <div className="terminal-block text-left group hover:border-teal/50 transition-colors duration-300">
            <span className="font-mono text-[10px] text-text-muted uppercase mb-4 block tracking-widest">Projetos</span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-display font-bold text-teal">12+</span>
            </div>
          </div>
          <div className="terminal-block text-left group hover:border-teal/50 transition-colors duration-300">
            <span className="font-mono text-[10px] text-text-muted uppercase mb-4 block tracking-widest">Tecnologias</span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-display font-bold text-teal">9</span>
            </div>
          </div>
          <div className="terminal-block text-left group hover:border-teal/50 transition-colors duration-300">
            <span className="font-mono text-[10px] text-text-muted uppercase mb-4 block tracking-widest">Commits</span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-display font-bold text-teal">400+</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
