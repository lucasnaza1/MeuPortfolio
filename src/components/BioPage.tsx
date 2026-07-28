import { bio } from '../content/bio'
import { FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const iconMap = {
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  github: FaGithub,
  mail: FaEnvelope,
}

const BioPage = () => {
  return (
    <div className="min-h-screen bg-bio-purple text-bio-white font-['Host_Grotesk',sans-serif] relative overflow-x-hidden">
      {/* === Background layers === */}
      {/* Gradiente radial laranja - canto superior direito */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at 100% 0%, rgba(234,106,19,0.16) 0%, transparent 50%)',
        }}
      />
      {/* Gradiente cinza-roxo - esquerda */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(circle at 0% 50%, rgba(125,115,127,0.14) 0%, transparent 50%)',
        }}
      />
      {/* Textura de grid sutil */}
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
        <header className="px-6 sm:px-10 py-6 flex items-center justify-between">
          <Link
            to="/"
            className="w-11 h-11 rounded-full border-2 border-bio-orange flex items-center justify-center text-bio-orange hover:bg-bio-orange/10 transition-colors"
            title="Voltar ao Portfólio"
          >
            {/* Símbolo ForjaCorp / NazaDev */}
            <span className="text-lg font-bold">N</span>
          </Link>
          <Link
            to="/"
            className="text-bio-muted text-sm font-['Roboto',sans-serif] px-4 py-2 rounded-full border border-bio-line hover:border-bio-orange/50 hover:text-bio-white transition-colors"
          >
            Portfólio completo
          </Link>
        </header>

        {/* === HERO === */}
        <section className="max-w-4xl mx-auto px-6 sm:px-10 pt-8 sm:pt-16 pb-20">
          <div className="flex flex-col items-start gap-8">
            {/* Foto */}
            <div
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-[2.1rem] border-2 border-bio-orange overflow-hidden relative"
              style={{ boxShadow: '8px 8px 0px 0px rgba(234,106,19,0.5)' }}
            >
              <div className="w-full h-full bg-gradient-to-br from-bio-orange/30 to-bio-purple flex items-center justify-center">
                <span className="text-5xl font-bold text-bio-white">LN</span>
              </div>
            </div>

            {/* Textos */}
            <div className="flex flex-col gap-5 max-w-2xl">
              <p className="text-bio-yellow text-xs sm:text-sm uppercase tracking-[0.15em] font-['Roboto',sans-serif] font-medium">
                {bio.eyebrow}
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold text-bio-white leading-tight">
                {bio.title}
              </h1>
              <p className="text-bio-white/86 text-lg leading-relaxed">
                {bio.intro}
              </p>

              {/* Badge disponibilidade */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-bio-card border border-bio-line">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-bio-white/80 text-sm font-['Roboto',sans-serif]">
                  {bio.availability}
                </span>
              </div>

              {/* CTA primário */}
              <a
                href={bio.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 mt-2"
              >
                <span
                  className="bg-bio-orange text-bio-purple font-semibold px-7 py-3.5 rounded-2xl text-base transition-all duration-300 group-hover:bg-bio-yellow"
                  style={{ boxShadow: '6px 6px 0px 0px rgba(255,227,164,0.8)' }}
                >
                  Falar sobre um projeto
                </span>
              </a>

              {/* Sub CTA */}
              <p className="text-bio-muted text-sm font-['Roboto',sans-serif]">
                Conte seu cenário. Eu respondo pessoalmente.
              </p>
            </div>
          </div>
        </section>

        {/* === SERVICES === */}
        <section className="max-w-4xl mx-auto px-6 sm:px-10 py-16">
          <div className="mb-10">
            <p className="text-bio-muted text-sm uppercase tracking-wider mb-3 font-['Roboto',sans-serif]">
              Como posso ajudar
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-bio-white">
              Três frentes. Uma visão de negócio.
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {bio.services.map((service) => (
              <div
                key={service.number}
                className="bg-bio-card backdrop-blur-md border border-bio-line rounded-2xl p-6 sm:p-8 hover:border-bio-orange/40 transition-colors"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="text-bio-orange text-2xl font-bold font-['Roboto',sans-serif] shrink-0">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-bio-white text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-bio-muted leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-['Roboto',sans-serif] border border-bio-orange/30 text-bio-yellow bg-bio-orange/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === AUTHORITY === */}
        <section className="max-w-4xl mx-auto px-6 sm:px-10 py-16">
          <p className="text-bio-yellow text-sm uppercase tracking-[0.15em] font-['Roboto',sans-serif] font-medium mb-4">
            {bio.authorityKicker}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-bio-white mb-6">
            {bio.authorityTitle}
          </h2>
          <p className="text-bio-muted text-lg leading-relaxed mb-10 max-w-2xl">
            {bio.authorityText}
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            {bio.signals.map((signal, i) => (
              <div
                key={i}
                className={`flex-1 pb-6 ${
                  i < bio.signals.length - 1
                    ? 'sm:border-r sm:border-bio-line sm:pr-6 border-b border-bio-line sm:border-b-0'
                    : ''
                }`}
              >
                <p className="text-bio-orange text-xl font-bold mb-1">
                  {signal.value}
                </p>
                <p className="text-bio-muted text-sm font-['Roboto',sans-serif]">
                  {signal.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* === CONTACT === */}
        <section className="max-w-4xl mx-auto px-6 sm:px-10 py-16">
          <p className="text-bio-muted text-sm uppercase tracking-wider mb-3 font-['Roboto',sans-serif]">
            Vamos conversar
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-bio-white mb-4">
            Tem um problema bom para resolver?
          </h2>
          <p className="text-bio-muted text-lg leading-relaxed mb-8 max-w-2xl">
            Se você busca alguém que entenda tecnologia e negócio na mesma
            conversa, me conte o contexto. Avalio pessoalmente cada projeto.
          </p>

          {/* CTA primário repetido */}
          <a
            href={bio.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 mb-12"
          >
            <span
              className="bg-bio-orange text-bio-purple font-semibold px-7 py-3.5 rounded-2xl text-base transition-all duration-300 group-hover:bg-bio-yellow"
              style={{ boxShadow: '6px 6px 0px 0px rgba(255,227,164,0.8)' }}
            >
              Falar sobre um projeto
            </span>
          </a>

          {/* Cards de contato secundários */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bio.contacts.map((contact) => {
              const Icon = iconMap[contact.icon]
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-bio-card border border-bio-line rounded-2xl p-5 hover:border-bio-orange/50 transition-colors"
                >
                  <span className="w-11 h-11 rounded-xl bg-bio-orange/15 border border-bio-orange/30 flex items-center justify-center text-bio-orange shrink-0 group-hover:bg-bio-orange/25 transition-colors">
                    <Icon className="text-lg" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-bio-white text-sm font-semibold">
                      {contact.label}
                    </p>
                    <p className="text-bio-muted text-sm font-['Roboto',sans-serif] truncate">
                      {contact.handle}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>
        </section>

        {/* === FOOTER === */}
        <footer className="max-w-4xl mx-auto px-6 sm:px-10 py-12 border-t border-bio-line">
          <p className="text-bio-muted text-sm text-center font-['Roboto',sans-serif]">
            {bio.footerText}
          </p>
        </footer>
      </div>
    </div>
  )
}

export default BioPage
