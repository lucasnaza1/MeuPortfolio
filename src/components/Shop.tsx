import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cnTokens } from '../utils/tokens'

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Tônico de Regeneração Quimtec',
    description: 'Fórmula avançada para restauração capilar e fortalecimento dos fios desde a raiz. Desenvolvido com tecnologia Quimtec para resultados rápidos e duradouros.',
    price: 'R$ 89,90',
    category: 'Cuidado Capilar'
  },
  {
    id: 2,
    name: 'Sérum Ativador Quimtec',
    description: 'Complexo de vitaminas e minerais que estimula o crescimento saudável e brilho intenso.',
    price: 'R$ 124,00',
    category: 'Tratamento'
  },
  {
    id: 3,
    name: 'Máscara Nutritiva Quimtec',
    description: 'Hidratação profunda com agentes reconstrutores de fibra capilar.',
    price: 'R$ 75,00',
    category: 'Nutrição'
  }
]

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="shop" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col mb-20 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[2px] bg-teal" />
          <span className="font-mono text-xs text-teal uppercase tracking-[0.3em]">05 — Loja Quimtec</span>
        </div>
        <h2 className="text-display-section text-text-primary font-bold tracking-tight">Produtos em Destaque</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ y: -10 }}
            className="card-teal p-8 cursor-pointer group"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="space-y-6">
              <div className="aspect-square bg-background-surface rounded-card flex items-center justify-center border border-border-default group-hover:border-teal/50 transition-colors">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-teal/20 group-hover:text-teal/40 transition-colors">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="space-y-2">
                <span className="badge-teal">{product.category}</span>
                <h3 className="text-xl font-display font-bold group-hover:text-teal transition-colors">
                  {product.name}
                </h3>
                <p className="text-teal font-bold">{product.price}</p>
              </div>
              <button className={cnTokens.btnGhost + " w-full"}>
                Ver detalhes
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MiniCard / Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-background-primary/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-background-card border border-teal/30 rounded-card p-10 shadow-teal-glow"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 text-text-muted hover:text-teal transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] text-teal uppercase tracking-widest">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-4xl font-display font-bold text-text-primary">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-2xl text-teal font-bold">
                    {selectedProduct.price}
                  </p>
                </div>

                <p className="text-body text-text-secondary leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="pt-4 flex gap-4">
                  <button className={cnTokens.btnPrimary + " flex-1 h-14"}>
                    Adicionar ao carrinho
                  </button>
                  <button className={cnTokens.btnOutline + " px-6"}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Shop
