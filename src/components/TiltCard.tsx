import { useRef, type ReactNode, type MouseEvent } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  maxTilt?: number
}

/**
 * Card com efeito tilt 3D no movimento do mouse.
 * Usa apenas transform (GPU-accelerated) — sem re-renders do React,
 * atualizando CSS variables diretamente no estilo do elemento.
 */
const TiltCard = ({ children, className = '', maxTilt = 6 }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateX = (y / rect.height - 0.5) * -2 * maxTilt
    const rotateY = (x / rect.width - 0.5) * 2 * maxTilt
    const glareX = (x / rect.width) * 100
    const glareY = (y / rect.height) * 100

    card.style.setProperty('--tilt-x', `${rotateX}deg`)
    card.style.setProperty('--tilt-y', `${rotateY}deg`)
    card.style.setProperty('--glare-x', `${glareX}%`)
    card.style.setProperty('--glare-y', `${glareY}%`)
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--tilt-x', '0deg')
    card.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card ${className}`}
    >
      <div className="tilt-card-glare" />
      {children}
    </div>
  )
}

export default TiltCard
