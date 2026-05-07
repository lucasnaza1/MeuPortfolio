import { motion } from 'framer-motion'
import { cnTokens } from '../utils/tokens'

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col mb-20 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[2px] bg-teal" />
          <span className="font-mono text-xs text-teal uppercase tracking-[0.3em]">03 — Contato</span>
        </div>
        <h2 className="text-display-section text-text-primary font-bold tracking-tight">Vamos conversar</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-display-title font-bold leading-tight">
              Construindo o futuro do <span className="text-teal">backend</span>.
            </h3>
            <p className="text-body text-text-secondary max-w-md leading-relaxed">
              Interessado em arquiteturas escaláveis ou microserviços? Sinta-se à vontade para entrar em contato.
            </p>
          </div>

          <div className="space-y-8 font-mono">
            <div className="group cursor-pointer">
              <span className="text-xs text-text-muted uppercase block mb-2 tracking-widest">Email</span>
              <span className="text-xl text-text-primary group-hover:text-teal transition-colors duration-300">
                lucas.nazario@backend.dev
              </span>
            </div>
            
            <div className="group cursor-pointer">
              <span className="text-xs text-text-muted uppercase block mb-2 tracking-widest">Redes Sociais</span>
              <div className="flex gap-8">
                <span className="text-xl text-text-primary group-hover:text-teal transition-colors duration-300">LinkedIn</span>
                <span className="text-xl text-text-primary group-hover:text-teal transition-colors duration-300">GitHub</span>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-teal p-12"
        >
          <form className="space-y-8">
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Nome</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-border-strong py-3 text-text-primary focus:outline-none focus:border-teal transition-colors duration-300 font-display text-lg"
                placeholder="Seu nome"
              />
            </div>
            
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-border-strong py-3 text-text-primary focus:outline-none focus:border-teal transition-colors duration-300 font-display text-lg"
                placeholder="seu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Mensagem</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-border-strong py-3 text-text-primary focus:outline-none focus:border-teal transition-colors duration-300 resize-none font-display text-lg"
                placeholder="Como posso ajudar?"
              />
            </div>

            <button type="submit" className={cnTokens.btnPrimary + " w-full mt-4 h-14"}>
              Enviar Mensagem
            </button>
          </form>
        </motion.div>
      </div>

      <footer className="mt-48 pt-12 border-t border-border-default flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-text-primary font-display font-bold text-2xl tracking-tighter">
          naza<span className="text-teal">.dev</span>
        </div>
        <div className="font-mono text-[9px] text-text-muted uppercase tracking-widest">
          © 2026 Lucas Nazário — Engenheiro Backend.
        </div>
        <div className="flex gap-8 font-mono text-[9px] text-text-muted uppercase tracking-widest">
          <span className="cursor-pointer hover:text-teal transition-colors">Twitter</span>
          <span className="cursor-pointer hover:text-teal transition-colors">Medium</span>
        </div>
      </footer>
    </section>
  )
}

export default Contact
