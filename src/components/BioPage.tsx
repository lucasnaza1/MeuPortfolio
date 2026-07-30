import { bio } from '../content/bio'
import { FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import { useEffect } from 'react'

const iconMap = {
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  github: FaGithub,
  mail: FaEnvelope,
}

// === Animation variants ===

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const BioPage = () => {
  useEffect(() => {
    const prevTitle = document.title
    const prevDescription = document
      .querySelector('meta[name="description"]')
      ?.getAttribute('content')

    document.title = `${bio.title} — ${bio.role} | Bio`

    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', `${bio.role} • ${bio.intro.slice(0, 140)}`)
    } else {
      const newMeta = document.createElement('meta')
      newMeta.name = 'description'
      newMeta.content = `${bio.role} • ${bio.intro.slice(0, 140)}`
      document.head.appendChild(newMeta)
    }

    return () => {
      document.title = prevTitle
      if (prevDescription && meta) {
        meta.setAttribute('content', prevDescription)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-bio-purple text-bio-white font-['Host_Grotesk',sans-serif] relative overflow-x-hidden flex flex-col">
      {/* === Background layers === */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(234,106,19,0.18) 0%, transparent 55%)',
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(125,115,127,0.10) 0%, transparent 60%)',
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(240,240,240,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(240,240,240,0.022) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
      />

      {/* === Conteúdo === */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Topbar */}
        <header className="px-5 sm:px-10 py-4 sm:py-6 flex items-center justify-center relative">
          <Link
            to="/"
            className="absolute left-5 sm:left-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-bio-orange flex items-center justify-center text-bio-orange hover:bg-bio-orange/10 transition-colors shrink-0 overflow-hidden"
            title="Voltar ao Portfólio"
          >
            <img
              src="/bio-assets/logo.svg"
              alt="NazaDev"
              className="w-full h-full object-cover"
            />
          </Link>
          <Link
            to="/"
            className="text-bio-muted text-[11px] sm:text-sm font-['Roboto',sans-serif] px-3 sm:px-4 py-2 rounded-full border border-bio-line hover:border-bio-orange/50 hover:text-bio-white transition-colors"
          >
            Portfólio completo
          </Link>
        </header>

        {/* === HERO — tudo centralizado === */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={sectionVariants}
          className="max-w-xl mx-auto px-5 sm:px-10 pt-4 sm:pt-12 pb-12 sm:pb-20 w-full"
        >
          <div className="flex flex-col items-center text-center gap-5 sm:gap-7">
            {/* Foto */}
            <div
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-[1.75rem] border-2 border-bio-orange overflow-hidden relative"
              style={{ boxShadow: '5px 5px 0px 0px rgba(234,106,19,0.5)' }}
            >
              <img
                src="/bio-assets/profile.jpeg"
                alt={bio.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Eyebrow + Nome + Intro */}
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <p className="text-bio-yellow text-[9px] sm:text-xs uppercase tracking-[0.1em] font-['Roboto',sans-serif] font-medium leading-relaxed max-w-xs">
                {bio.eyebrow}
              </p>
              <h1 className="text-[1.75rem] sm:text-5xl font-bold text-bio-white leading-[1.1] sm:leading-tight">
                {bio.title}
              </h1>
              <p className="text-bio-white/86 text-sm sm:text-lg leading-relaxed max-w-lg">
                {bio.intro}
              </p>
            </div>

            {/* Badge disponibilidade */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bio-card border border-bio-line">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-bio-white/80 text-[11px] sm:text-sm font-['Roboto',sans-serif]">
                {bio.availability}
              </span>
            </div>

            {/* CTA primário — novo design */}
            <a
              href={bio.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full max-w-xs flex items-center justify-center gap-2.5 bg-bio-orange text-bio-purple font-bold px-5 py-3.5 rounded-2xl text-sm sm:text-base transition-all duration-300 hover:bg-bio-yellow hover:shadow-[0_4px_24px_-4px_rgba(234,106,19,0.6)] active:scale-[0.98]"
            >
              <FaWhatsapp className="text-lg" />
              Falar sobre um projeto
            </a>

            <p className="text-bio-muted text-[11px] sm:text-sm font-['Roboto',sans-serif]">
              Conte seu cenário. Eu respondo pessoalmente.
            </p>
          </div>
        </motion.section>

        {/* === SERVICES === */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={sectionVariants}
          className="max-w-xl mx-auto px-5 sm:px-10 py-10 sm:py-16 w-full"
        >
          <div className="mb-6 sm:mb-10 text-center">
            <p className="text-bio-muted text-[10px] sm:text-sm uppercase tracking-wider mb-2 font-['Roboto',sans-serif]">
              Como posso ajudar
            </p>
            <h2 className="text-lg sm:text-3xl font-bold text-bio-white leading-tight">
              Três frentes. Uma visão de negócio.
            </h2>
          </div>

          <motion.div
            className="flex flex-col gap-3 sm:gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
          >
            {bio.services.map((service) => (
              <motion.div
                key={service.number}
                variants={cardVariants}
                className="bg-bio-card backdrop-blur-md border border-bio-line rounded-2xl p-5 hover:border-bio-orange/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-bio-orange text-lg font-bold font-['Roboto',sans-serif] shrink-0 leading-none mt-0.5">
                    {service.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-bio-white text-base font-semibold mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-bio-muted text-sm leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-['Roboto',sans-serif] border border-bio-orange/25 text-bio-yellow bg-bio-orange/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* === AUTHORITY === */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={sectionVariants}
          className="max-w-xl mx-auto px-5 sm:px-10 py-10 sm:py-16 w-full"
        >
          <div className="text-center mb-6 sm:mb-10">
            <p className="text-bio-yellow text-[10px] sm:text-xs uppercase tracking-[0.1em] font-['Roboto',sans-serif] font-medium mb-3">
              {bio.authorityKicker}
            </p>
            <h2 className="text-lg sm:text-3xl font-bold text-bio-white mb-4 leading-tight">
              {bio.authorityTitle}
            </h2>
            <p className="text-bio-muted text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              {bio.authorityText}
            </p>
          </div>

          {/* Signals — cards centralizados no mobile */}
          <div className="flex flex-col gap-3">
            {bio.signals.map((signal, i) => (
              <div
                key={i}
                className="bg-bio-card border border-bio-line rounded-2xl p-4 text-center"
              >
                <p className="text-bio-orange text-base font-bold mb-0.5">
                  {signal.value}
                </p>
                <p className="text-bio-muted text-[11px] sm:text-sm font-['Roboto',sans-serif]">
                  {signal.label}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* === CONTACT === */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={sectionVariants}
          className="max-w-xl mx-auto px-5 sm:px-10 py-10 sm:py-16 w-full"
        >
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-bio-muted text-[10px] sm:text-sm uppercase tracking-wider mb-2 font-['Roboto',sans-serif]">
              Vamos conversar
            </p>
            <h2 className="text-lg sm:text-3xl font-bold text-bio-white mb-3 leading-tight">
              Tem um problema bom para resolver?
            </h2>
            <p className="text-bio-muted text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              Se você busca alguém que entenda tecnologia e negócio na mesma
              conversa, me conte o contexto. Avalio pessoalmente cada projeto.
            </p>
          </div>

          {/* CTA WhatsApp centralizado */}
          <a
            href={bio.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full max-w-xs mx-auto mb-8 flex items-center justify-center gap-2.5 bg-bio-orange text-bio-purple font-bold px-5 py-3.5 rounded-2xl text-sm sm:text-base transition-all duration-300 hover:bg-bio-yellow hover:shadow-[0_4px_24px_-4px_rgba(234,106,19,0.6)] active:scale-[0.98]"
          >
            <FaWhatsapp className="text-lg" />
            Falar sobre um projeto
          </a>

          {/* Cards de contato — grid 2 colunas no mobile */}
          <motion.div
            className="grid grid-cols-2 gap-2.5 sm:gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
          >
            {bio.contacts.map((contact) => {
              const Icon = iconMap[contact.icon]
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  className="group flex flex-col items-center gap-2 bg-bio-card border border-bio-line rounded-2xl p-4 hover:border-bio-orange/50 transition-colors text-center"
                >
                  <span className="w-10 h-10 rounded-xl bg-bio-orange/15 border border-bio-orange/30 flex items-center justify-center text-bio-orange shrink-0 group-hover:bg-bio-orange/25 transition-colors">
                    <Icon className="text-lg" />
                  </span>
                  <div>
                    <p className="text-bio-white text-xs font-semibold">
                      {contact.label}
                    </p>
                    <p className="text-bio-muted text-[10px] font-['Roboto',sans-serif] truncate max-w-[120px]">
                      {contact.handle}
                    </p>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>
        </motion.section>

        {/* === FOOTER === */}
        <footer className="px-5 sm:px-10 py-8 border-t border-bio-line mt-auto">
          <p className="text-bio-muted text-[11px] sm:text-sm text-center font-['Roboto',sans-serif]">
            {bio.footerText}
          </p>
        </footer>
      </div>
    </div>
  )
}

export default BioPage
