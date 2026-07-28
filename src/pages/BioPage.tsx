const BioPage = () => {
  return (
    <div className="min-h-screen bg-bio-purple text-bio-white font-['Host_Grotesk',sans-serif]">
      {/* Header */}
      <header className="border-b border-bio-line">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <a
            href="/"
            className="text-bio-orange font-['Host_Grotesk',sans-serif] text-lg hover:text-bio-yellow transition-colors"
          >
            ← Voltar ao Portfólio
          </a>
          <span className="text-bio-muted text-sm font-['Roboto',sans-serif]">
            Bio
          </span>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-bio-white mb-2">
          Lucas de Oliveira Santos Nazário
        </h1>
        <p className="text-bio-orange text-xl mb-8 font-['Roboto',sans-serif] font-medium">
          Desenvolvedor Full Stack | Node.js · React · TypeScript · Spring Framework
        </p>

        {/* Card de introdução */}
        <div className="bg-bio-card backdrop-blur-md border border-bio-line rounded-2xl p-8 mb-8">
          <p className="text-bio-white text-lg leading-relaxed">
            Desenvolvedor Full Stack com experiência em desenvolvimento de software,
            arquitetura de APIs REST e integrações. Trabalho com TypeScript, Node.js,
            React e SQL, entregando soluções escaláveis e de alta performance.
          </p>
        </div>

        {/* Formação */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-bio-yellow mb-4">Formação</h2>
          <div className="bg-bio-card backdrop-blur-md border border-bio-line rounded-2xl p-6">
            <h3 className="text-bio-white text-lg font-semibold">
              Análise e Desenvolvimento de Sistemas
            </h3>
            <p className="text-bio-muted text-sm mt-1 font-['Roboto',sans-serif]">
              2023 - 2025 · Universidade Uninassau — Aracaju, Sergipe
            </p>
          </div>
        </section>

        {/* Contato */}
        <section>
          <h2 className="text-2xl font-bold text-bio-yellow mb-4">Contato</h2>
          <div className="bg-bio-card backdrop-blur-md border border-bio-line rounded-2xl p-6 space-y-3 font-['Roboto',sans-serif]">
            <p className="text-bio-white">
              <span className="text-bio-muted">Localização:</span> Sergipe, Brasil
            </p>
            <p className="text-bio-white">
              <span className="text-bio-muted">Telefone:</span> (92) 98817-4112
            </p>
            <p className="text-bio-white">
              <span className="text-bio-muted">Email:</span>{' '}
              <a href="mailto:lucasnazario.tech@gmail.com" className="text-bio-orange hover:text-bio-yellow transition-colors">
                lucasnazario.tech@gmail.com
              </a>
            </p>
            <p className="text-bio-white">
              <span className="text-bio-muted">LinkedIn:</span>{' '}
              <a href="https://linkedin.com/in/lucas-nazro/" target="_blank" rel="noopener noreferrer" className="text-bio-orange hover:text-bio-yellow transition-colors">
                linkedin.com/in/lucas-nazro/
              </a>
            </p>
            <p className="text-bio-white">
              <span className="text-bio-muted">GitHub:</span>{' '}
              <a href="https://github.com/lucasnaza1" target="_blank" rel="noopener noreferrer" className="text-bio-orange hover:text-bio-yellow transition-colors">
                github.com/lucasnaza1
              </a>
            </p>
            <p className="text-bio-white">
              <span className="text-bio-muted">Portfólio:</span>{' '}
              <a href="https://nazario.forjacorp.com/" target="_blank" rel="noopener noreferrer" className="text-bio-orange hover:text-bio-yellow transition-colors">
                nazario.forjacorp.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default BioPage
