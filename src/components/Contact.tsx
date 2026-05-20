import { motion } from 'framer-motion'
import { cnTokens } from '../utils/tokens'
import { useMemo, useState } from 'react'

const Contact = () => {
  const contactEmail = 'lucasnazario.tech@gmail.com'
  const githubUrl = 'https://github.com/lucasnaza1'
  const linkedinUrl = 'https://linkedin.com/in/lucas-nazário-80b02a289'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [touched, setTouched] = useState<{ name: boolean; email: boolean; message: boolean }>({
    name: false,
    email: false,
    message: false,
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const errors = useMemo(() => {
    const next: { name?: string; email?: string; message?: string } = {}

    if (!name.trim()) next.name = 'Informe seu nome.'
    if (!email.trim()) next.email = 'Informe seu email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = 'Informe um email válido.'
    if (!message.trim()) next.message = 'Escreva uma mensagem.'

    return next
  }, [email, message, name])

  const canSubmit = Object.keys(errors).length === 0 && status !== 'sending'

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) {
      setTouched({ name: true, email: true, message: true })
      return
    }

    setStatus('sending')
    try {
      // Simulação de envio e abertura de email
      const body = `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`
      const mailtoUrl = `mailto:${contactEmail}?subject=Contato Portfólio - ${name}&body=${encodeURIComponent(body)}`
      
      // Tenta copiar para o clipboard como backup
      try {
        await navigator.clipboard.writeText(body)
      } catch (err) {
        console.error('Falha ao copiar:', err)
      }

      window.location.href = mailtoUrl
      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
      setTouched({ name: false, email: false, message: false })

      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

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
            <div className="group">
              <span className="text-xs text-text-muted uppercase block mb-2 tracking-widest">Email</span>
              <a 
                href={`mailto:${contactEmail}`}
                className="text-xl text-text-primary hover:text-teal transition-colors duration-300 break-all"
              >
                {contactEmail}
              </a>
            </div>
            
            <div className="group">
              <span className="text-xs text-text-muted uppercase block mb-2 tracking-widest">Redes Sociais</span>
              <div className="flex flex-wrap gap-6">
                <a 
                  className="text-xl text-text-primary hover:text-teal transition-colors duration-300"
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a 
                  className="text-xl text-text-primary hover:text-teal transition-colors duration-300"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-teal p-8 sm:p-10 md:p-12"
        >
          <form className="space-y-8" onSubmit={onSubmit} noValidate>
            <div className="space-y-2">
              <label htmlFor="contact-name" className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
                Nome
              </label>
              <input 
                id="contact-name"
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setTouched(t => ({ ...t, name: true }))}
                autoComplete="name"
                className={`w-full bg-transparent border-b py-3 text-text-primary focus:outline-none transition-colors duration-300 font-display text-lg ${
                  touched.name && errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-border-strong focus:border-teal'
                }`}
                placeholder="Seu nome"
              />
              {touched.name && errors.name && (
                <span className="text-[10px] text-red-500 font-mono uppercase tracking-tighter">{errors.name}</span>
              )}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="contact-email" className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
                Email
              </label>
              <input 
                id="contact-email"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched(t => ({ ...t, email: true }))}
                autoComplete="email"
                className={`w-full bg-transparent border-b py-3 text-text-primary focus:outline-none transition-colors duration-300 font-display text-lg ${
                  touched.email && errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-border-strong focus:border-teal'
                }`}
                placeholder="seu@email.com"
              />
              {touched.email && errors.email && (
                <span className="text-[10px] text-red-500 font-mono uppercase tracking-tighter">{errors.email}</span>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
                Mensagem
              </label>
              <textarea 
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={() => setTouched(t => ({ ...t, message: true }))}
                className={`w-full bg-transparent border-b py-3 text-text-primary focus:outline-none transition-colors duration-300 resize-none font-display text-lg ${
                  touched.message && errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-border-strong focus:border-teal'
                }`}
                placeholder="Como posso ajudar?"
              />
              {touched.message && errors.message && (
                <span className="text-[10px] text-red-500 font-mono uppercase tracking-tighter">{errors.message}</span>
              )}
            </div>

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className={`${cnTokens.btnPrimary} w-full mt-4 h-14 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {status === 'sending' ? 'Enviando...' : status === 'sent' ? 'Mensagem Enviada!' : status === 'error' ? 'Erro ao enviar' : 'Enviar Mensagem'}
            </button>
            
            {status === 'sent' && (
              <p className="text-center font-mono text-[10px] text-teal uppercase tracking-widest animate-fade-in">
                Copiamos sua mensagem e abrimos seu app de email.
              </p>
            )}
          </form>
        </motion.div>
      </div>

      <footer className="mt-48 pt-12 border-t border-border-default flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-text-primary font-display font-bold text-2xl tracking-tighter">
          naza<span className="text-teal">.dev</span>
        </div>
        <div className="font-mono text-[9px] text-text-muted uppercase tracking-widest text-center md:text-left">
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
