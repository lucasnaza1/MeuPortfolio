import { motion } from 'framer-motion'
import { cnTokens } from '../utils/tokens'

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col mb-20 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[2px] bg-teal" />
          <span className="font-mono text-xs text-teal uppercase tracking-[0.3em]">02 — Projetos</span>
        </div>
        <h2 className="text-display-section text-text-primary font-bold tracking-tight">Código e Engenharia</h2>
      </div>

      <div className="terminal-block p-12 text-center space-y-8 shadow-teal-glow">
        <div className="max-w-2xl mx-auto space-y-6">
          <h3 className="text-3xl font-display font-bold text-text-primary">
            Explorando o ecossistema de <span className="text-teal">código aberto</span>.
          </h3>
          <p className="text-body text-text-secondary leading-relaxed">
            Meus projetos mais recentes, contribuições e experimentos técnicos estão concentrados no GitHub. 
            Lá você encontrará arquiteturas de APIs, automações e soluções em backend.
          </p>
          
          <div className="pt-4">
            <a 
              href="https://github.com/lucasnaza1" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cnTokens.btnPrimary + " inline-flex items-center gap-3"}
            >
              Acessar meu GitHub
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-border-default opacity-50">
          <div className="space-y-1">
            <span className="block font-mono text-[10px] text-teal uppercase">Repositories</span>
            <span className="text-xl font-display font-bold text-text-primary">20+</span>
          </div>
          <div className="space-y-1">
            <span className="block font-mono text-[10px] text-teal uppercase">Contributions</span>
            <span className="text-xl font-display font-bold text-text-primary">Global</span>
          </div>
          <div className="space-y-1">
            <span className="block font-mono text-[10px] text-teal uppercase">Tech Stack</span>
            <span className="text-xl font-display font-bold text-text-primary">Node/Java</span>
          </div>
          <div className="space-y-1">
            <span className="block font-mono text-[10px] text-teal uppercase">Activity</span>
            <span className="text-xl font-display font-bold text-text-primary">Daily</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
