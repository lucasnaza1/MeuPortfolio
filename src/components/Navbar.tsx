import { cnTokens } from '../utils/tokens'

const Navbar = () => {
  const navLinks = [
    { name: 'início', href: '#home' },
    { name: 'sobre', href: '#about' },
    { name: 'projetos', href: '#projects' },
    { name: 'contato', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background-primary/80 backdrop-blur-md border-b border-border-default">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-text-primary font-display font-bold text-2xl tracking-tighter">
          naza<span className="text-teal">.dev</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-[12px] uppercase tracking-widest text-text-secondary hover:text-teal transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <button className={cnTokens.btnGhost + " px-5 py-2"}>
            CV
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
