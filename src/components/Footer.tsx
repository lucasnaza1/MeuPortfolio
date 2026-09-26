import { FaGithub, FaLinkedin, FaInstagram } from './Icons'

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-background-tertiary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-text-primary font-display font-bold text-2xl tracking-tighter">
          naza<span className="text-teal">.dev</span>
        </div>
        <div className="font-mono text-[9px] text-text-muted uppercase tracking-widest text-center md:text-left">
          © 2026 Lucas Nazário — Desenvolvedor Full Stack · ForjaCorp.
        </div>
        <div className="flex gap-6 font-mono text-[9px] text-text-muted uppercase tracking-widest">
          <a href="https://www.instagram.com/nazaaccount/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-teal transition-colors flex items-center gap-2">
            <FaInstagram />
            @nazaaccount
          </a>
          <a href="https://www.instagram.com/forjacorp/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-teal transition-colors flex items-center gap-2">
            <FaInstagram />
            @forjacorp
          </a>
          <a href="https://github.com/lucasnaza1" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-teal transition-colors flex items-center gap-2">
            <FaGithub />
            GitHub
          </a>
          <a href="https://linkedin.com/in/lucas-nazário-80b02a289" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-teal transition-colors flex items-center gap-2">
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
