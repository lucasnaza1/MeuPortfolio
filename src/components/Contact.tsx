import { motion } from 'framer-motion'
import { cnTokens } from '../utils/tokens'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from './Icons'

const Contact = () => {
  const contactEmail = 'lucasnazario.tech@gmail.com'
  const githubUrl = 'https://github.com/lucasnaza1'
  const linkedinUrl = 'https://linkedin.com/in/lucas-nazário-80b02a289'
  const whatsappUrl = 'https://wa.me/5592988174112'

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col mb-20 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[2px] bg-teal" />
          <span className="font-mono text-xs text-teal uppercase tracking-[0.3em]">03 — Contato</span>
        </div>
        <h2 className="text-display-section text-text-primary font-bold tracking-tight">Vamos conversar</h2>
      </div>

      {/* Grid adaptado para 1 coluna centralizada ou layout limpo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-display-title font-bold leading-tight">
              Construindo o futuro do <span className="text-teal">backend</span>.
            </h3>
            <p className="text-body text-text-secondary max-w-md leading-relaxed">
              Interessado em arquiteturas escaláveis ou microserviços? Sinta-se à vontade para entrar em contato através dos canais abaixo.
            </p>
          </div>

          <div className="space-y-8 font-mono">
            <div className="group">
              <span className="text-xs text-text-muted uppercase block mb-2 tracking-widest">Email</span>
              <a 
                href={`mailto:${contactEmail}`}
                className="text-xl text-text-primary hover:text-teal transition-colors duration-300 break-all flex items-center gap-3"
              >
                <FaEnvelope className="text-teal" />
                {contactEmail}
              </a>
            </div>
            
            <div className="group">
              <span className="text-xs text-text-muted uppercase block mb-2 tracking-widest">Redes Sociais</span>
              <div className="flex flex-wrap gap-6">
                <a 
                  className="text-xl text-text-primary hover:text-teal transition-colors duration-300 flex items-center gap-3"
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-teal" />
                  LinkedIn
                </a>
                <a 
                  className="text-xl text-text-primary hover:text-teal transition-colors duration-300 flex items-center gap-3"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-teal" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lado direito substituído pelo botão de ação principal do WhatsApp */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-teal p-8 sm:p-10 md:p-12 flex flex-col justify-center items-start space-y-6"
        >
          <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Contato Direto</span>
          <h4 className="text-xl font-bold text-text-primary">Prefere uma conversa em tempo real?</h4>
          <p className="text-sm text-text-secondary leading-relaxed">
            Clique no botão abaixo para iniciar uma conversa diretamente comigo no WhatsApp. Respondo assim que possível.
          </p>
          
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${cnTokens.btnPrimary} w-full h-14 flex items-center justify-center gap-3 font-mono text-sm uppercase tracking-widest transition-colors text-center`}
          >
            <FaWhatsapp className="text-xl" />
            Fale no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact