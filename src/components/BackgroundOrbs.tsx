/**
 * Orbes animadas de fundo — CSS puro (keyframes), sem JS por frame.
 * blur + transform são GPU-accelerated: custo de render baixo
 * e nenhuma dependência extra no bundle.
 */
const BackgroundOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Orbe principal — topo direita */}
      <div
        className="orb orb-lg orb-anim-1"
        style={{ top: '-10%', right: '-10%', background: 'var(--teal)' }}
      />
      {/* Orbe secundária — meio esquerda */}
      <div
        className="orb orb-md orb-anim-2"
        style={{ top: '40%', left: '-8%', background: 'var(--teal-dark)' }}
      />
      {/* Orbe terciária — base centro */}
      <div
        className="orb orb-sm orb-anim-3"
        style={{ bottom: '-5%', left: '45%', background: 'var(--teal-light)', opacity: 0.15 }}
      />
    </div>
  )
}

export default BackgroundOrbs
