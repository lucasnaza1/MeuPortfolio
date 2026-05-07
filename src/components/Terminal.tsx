import { motion } from 'framer-motion'

const Terminal = () => {
  const lines = [
    { text: '$ git clone github.com/lucasnazario/portfolio', color: 'text-text-primary' },
    { text: '✓ clonando repositório...', color: 'text-teal' },
    { text: '✓ Instalando dependências com npm install', color: 'text-teal' },
    { text: '✓ Servidor iniciado em localhost:5173', color: 'text-teal' },
  ]

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col mb-12 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[2px] bg-teal" />
          <span className="font-mono text-xs text-teal uppercase tracking-[0.3em]">11 — Bloco Terminal</span>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="terminal-block shadow-teal-glow"
      >
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500/20" />
          <div className="terminal-dot bg-yellow-500/20" />
          <div className="terminal-dot bg-green-500/20" />
        </div>
        
        <div className="space-y-3 font-mono">
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={line.color}
            >
              {line.text}
            </motion.div>
          ))}
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="w-2 h-5 bg-teal inline-block align-middle ml-1"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Terminal
