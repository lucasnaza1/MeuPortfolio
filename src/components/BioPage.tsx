import { bio } from '../content/bio'
import { FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'

const iconMap = {
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  github: FaGithub,
  mail: FaEnvelope,
}

// === Animation variants ===

/** Fade + slide-up ao entrar na viewport */
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Stagger container para cards de serviço */
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

/** Card individual com fade+slide-up */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

/** CTA com efeito de "subir" no hover (translate -2,-2 + sombra offset) */
const ctaHover = {
  rest: { x: 0, y: 0 },
  hover: { x: -2, y: -2 },
}

const BioPage = () => {
  return (
    <div className="min-h-screen bg-bio-purple text-bio-white font-['Host_Grotesk',sans-serif] relative overflow-x-hidden">
      {/* === Background layers === */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at 100% 0%, rgba(234,106,19,0.16) 0%, transparent 50%)',
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at 0% 50%, rgba(125,115,127,0.14) 0%, transparent 50%)',
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
      <div className="relative z-10">
        {/* Topbar */}
        <header className="px-5 sm:px-10 py-5 sm:py-6 flex items-center justify-between">
          <Link
            to="/"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-bio-orange flex items-center justify-center text-bio-orange hover:bg-bio-orange/10 transition-colors shrink-0"
            title="Voltar ao Portfólio"
          >
            <span className="text-base sm:text-lg font-bold">N</span>
          </Link>
          <Link
            to="/"
            className="text-bio-muted text-xs sm:text-sm font-['Roboto',sans-serif] px-3 sm:px-4 py-2 rounded-full border border-bio-line hover:border-bio-orange/50 hover:text-bio-white transition-colors"
          >
            Portfólio completo
          </Link>
        </header>

        {/* === HERO === */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
          className="max-w-4xl mx-auto px-5 sm:px-10 pt-6 sm:pt-16 pb-16 sm:pb-20"
        >
          <div className="flex flex-col items-start gap-6 sm:gap-8">
            {/* Foto */}
            <div
              className="w-24 h-24 sm:w-36 sm:h-36 rounded-[1.75rem] sm:rounded-[2.1rem] border-2 border-bio-orange overflow-hidden relative"
              style={{ boxShadow: '8px 8px 0px 0px rgba(234,106,19,0.5)' }}
            >
              <div className="w-full h-full bg-gradient-to-br from-bio-orange/30 to-bio-purple flex items-center justify-center">
                <span className="text-4xl sm:text-5xl font-bold text-bio-white">LN</span>
              </div>
            </div>

            {/* Textos */}
            <div className="flex flex-col gap-4 sm:gap-5 max-w-2xl">
              <p className="text-bio-yellow text-[10px] sm:text-sm uppercase tracking-[0.15em] font-['Roboto',sans-serif] font-medium leading-relaxed">
                {bio.eyebrow}
              </p>
              <h1 className="text-4xl sm:text-6xl font-bold text-bio-white leading-[1.1] sm:leading-tight">
                {bio.title}
              </h1>
              <p className="text-bio-white/86 text-base sm:text-lg leading-relaxed">
                {bio.intro}
              </p>

              {/* Badge disponibilidade */}
              <div className="inline-flex items-center gap-2.5 px-3 sm:px-4 py-2 rounded-full bg-bio-card border border-bio-line self-start">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-bio-white/80 text-xs sm:text-sm font-['Roboto',sans-serif]">
                  {bio.availability}
                </span>
              </div>

              {/* CTA primário com hover translate(-2,-2) */}
              <motion.a
                href={bio.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-1 sm:mt-2 self-start"
                variants={ctaHover}
                initial="rest"
                whileHover="hover"
                animate="rest"
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <span
                  className="bg-bio-orange text-bio-purple font-semibold px-5 sm:px-7 py-3 sm:py-3.5 rounded-2xl text-sm sm:text-base"
                  style={{ boxShadow: '6px 6px 0px 0px rgba(255,227,164,0.8)' }}
                >
                  Falar sobre um projeto
                </span>
              </motion.a>

              {/* Sub CTA */}
              <p className="text-bio-muted text-xs sm:text-sm font-['Roboto',sans-serif]">
                Conte seu cenário. Eu respondo pessoalmente.
              </p>
            </div>
          </div>
        </motion.section>

        {/* === SERVICES === */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
          className="max-w-4xl mx-auto px-5 sm:px-10 py-12 sm:py-16"
        >
          <div className="mb-8 sm:mb-10">
            <p className="text-bio-muted text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 font-['Roboto',sans-serif]">
              Como posso ajudar
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-bio-white leading-tight">
              Três frentes. Uma visão de negócio.
            </h2>
          </div>

          {/* Stagger nos cards */}
          <motion.div
            className="flex flex-col gap-4 sm:gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {bio.services.map((service) => (
              <motion.div
                key={service.number}
                variants={cardVariants}
                className="bg-bio-card backdrop-blur-md border border-bio-line rounded-2xl p-5 sm:p-8 hover:border-bio-orange/40 transition-colors"
              >
                <div className="flex items-start gap-3 sm:gap-6">
                  <span className="text-bio-orange text-xl sm:text-2xl font-bold font-['Roboto',sans-serif] shrink-0">
                    {service.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-bio-white text-lg sm:text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-bio-muted text-sm sm:text-base leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-['Roboto',sans-serif] border border-bio-orange/30 text-bio-yellow bg-bio-orange/5"
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
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
          className="max-w-4xl mx-auto px-5 sm:px-10 py-12 sm:py-16"
        >
          <p className="text-bio-yellow text-xs sm:text-sm uppercase tracking-[0.15em] font-['Roboto',sans-serif] font-medium mb-3 sm:mb-4">
            {bio.authorityKicker}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-bio-white mb-4 sm:mb-6 leading-tight">
            {bio.authorityTitle}
          </h2>
          <p className="text-bio-muted text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl">
            {bio.authorityText}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
            {bio.signals.map((signal, i) => (
              <div
                key={i}
                className={`flex-1 pb-5 sm:pb-6 ${
                  i < bio.signals.length - 1
                    ? 'sm:border-r sm:border-bio-line sm:pr-6 border-b border-bio-line sm:border-b-0'
                    : ''
                }`}
              >
                <p className="text-bio-orange text-lg sm:text-xl font-bold mb-1">
                  {signal.value}
                </p>
                <p className="text-bio-muted text-xs sm:text-sm font-['Roboto',sans-serif]">
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
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
          className="max-w-4xl mx-auto px-5 sm:px-10 py-12 sm:py-16"
        >
          <p className="text-bio-muted text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 font-['Roboto',sans-serif]">
            Vamos conversar
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-bio-white mb-3 sm:mb-4 leading-tight">
            Tem um problema bom para resolver?
          </h2>
          <p className="text-bio-muted text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            Se você busca alguém que entenda tecnologia e negócio na mesma
            conversa, me conte o contexto. Avalio pessoalmente cada projeto.
          </p>

          {/* CTA primário repetido com hover translate */}
          <motion.a
            href={bio.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mb-10 sm:mb-12"
            variants={ctaHover}
            initial="rest"
            whileHover="hover"
            animate="rest"
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <span
              className="bg-bio-orange text-bio-purple font-semibold px-5 sm:px-7 py-3 sm:py-3.5 rounded-2xl text-sm sm:text-base"
              style={{ boxShadow: '6px 6px 0px 0px rgba(255,227,164,0.8)' }}
            >
              Falar sobre um projeto
            </span>
          </motion.a>

          {/* Cards de contato secundários */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
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
                  className="group flex items-center gap-3 sm:gap-4 bg-bio-card border border-bio-line rounded-2xl p-4 sm:p-5 hover:border-bio-orange/50 transition-colors"
                >
                  <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-bio-orange/15 border border-bio-orange/30 flex items-center justify-center text-bio-orange shrink-0 group-hover:bg-bio-orange/25 transition-colors">
                    <Icon className="text-base sm:text-lg" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-bio-white text-sm font-semibold">
                      {contact.label}
                    </p>
                    <p className="text-bio-muted text-xs sm:text-sm font-['Roboto',sans-serif] truncate">
                      {contact.handle}
                    </p>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>
        </motion.section>

        {/* === FOOTER === */}
        <footer className="max-w-4xl mx-auto px-5 sm:px-10 py-10 sm:py-12 border-t border-bio-line">
          <p className="text-bio-muted text-xs sm:text-sm text-center font-['Roboto',sans-serif]">
            {bio.footerText}
          </p>
        </footer>
      </div>
    </div>
  )
}

export default BioPage
