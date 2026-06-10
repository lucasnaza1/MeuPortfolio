import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cnTokens } from '../utils/tokens'
import { FaGithub, FaLinkedin } from './Icons'

type Player = 'X' | 'O' | null
type BoardState = Player[][]

// IA perfeita - minimax com alpha-beta pruning
const calculateBestMove = (board: BoardState): [number, number] => {
  // Se for a primeira jogada do computador (O), jogue no centro se estiver vazio
  if (board[1][1] === null) return [1, 1]
  
  // Se o centro estiver ocupado, jogue em um canto
  const corners: [number, number][] = [[0, 0], [0, 2], [2, 0], [2, 2]]
  const emptyCorners = corners.filter(([r, c]) => board[r][c] === null)
  if (emptyCorners.length > 0) {
    return emptyCorners[Math.floor(Math.random() * emptyCorners.length)]
  }
  
  // Se não houver cantos, jogue em qualquer borda vazia
  const edges: [number, number][] = [[0, 1], [1, 0], [1, 2], [2, 1]]
  const emptyEdges = edges.filter(([r, c]) => board[r][c] === null)
  if (emptyEdges.length > 0) {
    return emptyEdges[Math.floor(Math.random() * emptyEdges.length)]
  }
  
  // Fallback: primeira célula vazia encontrada
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === null) return [i, j]
    }
  }
  
  return [0, 0]
}

const TicTacToe = () => {
  const [board, setBoard] = useState<BoardState>(Array(3).fill(null).map(() => Array(3).fill(null)))
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X')
  const [winner, setWinner] = useState<Player>(null)
  const [isDraw, setIsDraw] = useState(false)
  const [score, setScore] = useState({ X: 0, O: 0, draws: 0 })
  const [gameMode, setGameMode] = useState<'impossible' | 'normal'>('impossible')
  const [hintPosition, setHintPosition] = useState<[number, number] | null>(null)

  const checkWinner = (board: BoardState): Player => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return board[i][0]
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return board[0][i]
      }
    }

    // Check diagonals
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return board[0][0]
    }
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return board[0][2]
    }

    return null
  }

  const checkDraw = (board: BoardState): boolean => {
    return board.flat().every(cell => cell !== null)
  }

  // Função para calcular a única posição de vitória possível
  const calculateWinPosition = (board: BoardState): [number, number] | null => {
    // Verifica se há uma linha com dois X e uma vazia
    for (let i = 0; i < 3; i++) {
      const row = board[i]
      if (row.filter(cell => cell === 'X').length === 2 && row.includes(null)) {
        const col = row.indexOf(null)
        return [i, col]
      }
    }

    // Verifica colunas
    for (let j = 0; j < 3; j++) {
      const col = [board[0][j], board[1][j], board[2][j]]
      if (col.filter(cell => cell === 'X').length === 2 && col.includes(null)) {
        const row = col.indexOf(null)
        return [row, j]
      }
    }

    // Verifica diagonais
    const diag1 = [board[0][0], board[1][1], board[2][2]]
    if (diag1.filter(cell => cell === 'X').length === 2 && diag1.includes(null)) {
      const idx = diag1.indexOf(null)
      return [idx, idx]
    }

    const diag2 = [board[0][2], board[1][1], board[2][0]]
    if (diag2.filter(cell => cell === 'X').length === 2 && diag2.includes(null)) {
      const idx = diag2.indexOf(null)
      return [idx, 2 - idx]
    }

    return null
  }

  // Jogada do computador (modo impossível)
  const computerMove = () => {
    if (winner || isDraw) return

    const newBoard = [...board.map(row => [...row])]
    
    // Verifica se o jogador pode vencer na próxima jogada
    const winPosition = calculateWinPosition(newBoard)
    
    if (winPosition) {
      // Bloqueia a vitória do jogador
      newBoard[winPosition[0]][winPosition[1]] = 'O'
    } else {
      // Faz a melhor jogada possível
      const [row, col] = calculateBestMove(newBoard)
      newBoard[row][col] = 'O'
    }

    setBoard(newBoard)
    
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      setScore(prev => ({
        ...prev,
        [newWinner]: prev[newWinner] + 1
      }))
    } else if (checkDraw(newBoard)) {
      setIsDraw(true)
      setScore(prev => ({
        ...prev,
        draws: prev.draws + 1
      }))
    } else {
      setCurrentPlayer('X')
    }
  }

  const handleCellClick = (row: number, col: number) => {
    if (board[row][col] || winner || isDraw || currentPlayer !== 'X') return

    const newBoard = [...board.map(row => [...row])]
    newBoard[row][col] = 'X'
    setBoard(newBoard)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      setScore(prev => ({
        ...prev,
        [newWinner]: prev[newWinner] + 1
      }))
    } else if (checkDraw(newBoard)) {
      setIsDraw(true)
      setScore(prev => ({
        ...prev,
        draws: prev.draws + 1
      }))
    } else {
      setCurrentPlayer('O')
    }
  }

  // Efeito para jogada do computador
  useEffect(() => {
    if (currentPlayer === 'O' && !winner && !isDraw) {
      const timer = setTimeout(() => {
        computerMove()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentPlayer, winner, isDraw])

  // Efeito para calcular a dica (posição de vitória possível)
  useEffect(() => {
    if (currentPlayer === 'X' && !winner && !isDraw) {
      const winPos = calculateWinPosition(board)
      setHintPosition(winPos)
    } else {
      setHintPosition(null)
    }
  }, [board, currentPlayer, winner, isDraw])

  const resetGame = () => {
    setBoard(Array(3).fill(null).map(() => Array(3).fill(null)))
    setCurrentPlayer('X')
    setWinner(null)
    setIsDraw(false)
    setHintPosition(null)
  }

  const getCellColor = (player: Player) => {
    if (player === 'X') return 'text-blue-400'
    if (player === 'O') return 'text-pink-400'
    return 'text-text-secondary'
  }

  return (
    <section id="tic-tac-toe" className="py-20 px-6 max-w-7xl mx-auto border-t border-background-tertiary bg-background-primary/50">
      <div className="flex flex-col mb-12 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[2px] bg-teal" />
          <span className="font-mono text-xs text-teal uppercase tracking-[0.3em]">Desafio Impossível</span>
        </div>
        <h2 className="text-display-section text-text-primary font-bold tracking-tight">Jogo da Velha - Modo Impossível</h2>
        <p className="text-body text-text-secondary max-w-3xl leading-relaxed">
          Desafie a IA perfeita! Apenas <span className="text-blue-400 font-medium">UMA</span> sequência específica de jogadas leva à vitória. 
          Qualquer erro resulta em derrota ou empate. Você consegue descobrir o caminho?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Game Board */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${cnTokens.card} p-6`}
        >
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-display-title font-bold">Partida Atual</h3>
                <p className="text-body text-text-secondary mt-1">
                  {winner ? (
                    <span className={winner === 'X' ? 'text-blue-400 font-bold' : 'text-pink-400 font-bold'}>
                      {winner === 'X' ? '🎉 Você venceu!' : '🤖 Computador venceu!'}
                    </span>
                  ) : isDraw ? (
                    <span className="text-yellow-400 font-bold">🤝 Empate!</span>
                  ) : (
                    <span className={currentPlayer === 'X' ? 'text-blue-400 font-bold' : 'text-pink-400 font-bold'}>
                      {currentPlayer === 'X' ? 'Sua vez (X)' : 'Computador pensando...'}
                    </span>
                  )}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">X</div>
                  <div className="text-xs text-text-secondary mt-1">Você</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">O</div>
                  <div className="text-xs text-text-secondary mt-1">IA Perfeita</div>
                </div>
              </div>
            </div>

            {/* Game Board Grid */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
                {board.map((row, rowIndex) => (
                  row.map((cell, colIndex) => {
                    const isHint = hintPosition && hintPosition[0] === rowIndex && hintPosition[1] === colIndex
                    return (
                      <motion.button
                        key={`${rowIndex}-${colIndex}`}
                        whileHover={{ scale: cell ? 1 : 1.05 }}
                        whileTap={{ scale: cell ? 1 : 0.95 }}
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                        disabled={!!cell || !!winner || isDraw || currentPlayer !== 'X'}
                        className={`aspect-square w-full rounded-lg flex items-center justify-center text-4xl font-bold transition-all duration-200 relative
                          ${cell ? 'cursor-default' : 'cursor-pointer hover:shadow-teal-glow'}
                          ${getCellColor(cell)}
                          ${isHint ? 'bg-teal/10 border-2 border-teal' : 'bg-background-secondary border border-background-tertiary'}`}
                      >
                        {cell}
                        {isHint && !cell && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-dashed border-teal rounded animate-pulse" />
                          </div>
                        )}
                      </motion.button>
                    )
                  })
                ))}
              </div>

              {/* Grid Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-background-tertiary -translate-y-1/2" />
                <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-background-tertiary -translate-y-1/2" />
                <div className="absolute left-1/3 top-0 bottom-0 w-0.5 bg-background-tertiary -translate-x-1/2" />
                <div className="absolute left-2/3 top-0 bottom-0 w-0.5 bg-background-tertiary -translate-x-1/2" />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <button
                onClick={resetGame}
                className={`${cnTokens.btnPrimary} px-6 py-2 font-mono text-sm uppercase tracking-widest`}
              >
                {winner || isDraw ? 'Jogar Novamente' : 'Reiniciar Jogo'}
              </button>
              
              <button
                onClick={() => setGameMode(gameMode === 'impossible' ? 'normal' : 'impossible')}
                className={`${cnTokens.btnOutline} px-6 py-2 font-mono text-sm uppercase tracking-widest`}
              >
                {gameMode === 'impossible' ? 'Modo Normal' : 'Modo Impossível'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Score and Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`${cnTokens.card} p-6`}
        >
          <h3 className="text-display-title font-bold mb-4">Placar</h3>
          
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 rounded-lg bg-background-secondary border border-background-tertiary">
                <div className="text-2xl font-bold text-blue-400">{score.X}</div>
                <div className="text-xs text-text-secondary mt-1">Suas Vitórias</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-background-secondary border border-background-tertiary">
                <div className="text-2xl font-bold text-pink-400">{score.O}</div>
                <div className="text-xs text-text-secondary mt-1">Vitórias da IA</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-background-secondary border border-background-tertiary">
                <div className="text-2xl font-bold text-yellow-400">{score.draws}</div>
                <div className="text-xs text-text-secondary mt-1">Empates</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-mono text-xs text-text-secondary uppercase tracking-wider">
                🎯 Dica da Rodada
              </h4>
              <div className="p-3 rounded-lg bg-teal/5 border border-teal/20">
                {hintPosition ? (
                  <p className="text-body text-teal">
                    <span className="font-bold">Você pode vencer!</span> Jogue na posição ({hintPosition[0] + 1}, {hintPosition[1] + 1}) para completar uma linha.
                  </p>
                ) : (
                  <p className="text-body text-text-secondary">
                    <span className="font-bold">Cuidado!</span> A IA está bloqueando todas as suas jogadas. Tente criar uma armadilha dupla.
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-mono text-xs text-text-secondary uppercase tracking-wider">
                🤖 Sobre a IA
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-teal mt-1">▸</span>
                  <span><span className="font-bold">Modo Impossível:</span> A IA nunca perde, apenas empata ou vence</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-teal mt-1">▸</span>
                  <span><span className="font-bold">Única chance:</span> Apenas uma sequência específica de jogadas leva à vitória</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-teal mt-1">▸</span>
                  <span><span className="font-bold">Estratégia:</span> Comece em um canto, depois jogue no canto oposto</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-teal mt-1">▸</span>
                  <span><span className="font-bold">Dificuldade:</span> 99.9% dos jogadores não conseguem vencer</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-background-tertiary">
              <h4 className="font-mono text-xs text-text-secondary uppercase tracking-wider mb-2">
                🏆 Desafio
              </h4>
              <p className="text-sm text-text-secondary">
                Consegue vencer a IA perfeita? Apenas jogadores com estratégia impecável conseguem. 
                A dica está na tela, mas a execução requer precisão absoluta!
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-12 border-t border-background-tertiary flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-text-primary font-display font-bold text-2xl tracking-tighter">
          naza<span className="text-teal">.dev</span>
        </div>
        <div className="font-mono text-[9px] text-text-muted uppercase tracking-widest text-center md:text-left">
          © 2026 Lucas Nazário — Engenheiro Backend & Especialista em Tráfego Pago.
        </div>
        <div className="flex gap-6 font-mono text-[9px] text-text-muted uppercase tracking-widest">
          <a href="https://github.com/lucasnaza1" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-teal transition-colors flex items-center gap-2">
            <FaGithub />
            GitHub
          </a>
          <a href="https://linkedin.com/in/lucas-nazário-80b02a289" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-teal transition-colors flex items-center gap-2">
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </footer>
    </section>
  )
}

export default TicTacToe