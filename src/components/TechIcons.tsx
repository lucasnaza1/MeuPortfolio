import * as Icons from './Icons'

interface TechIconsProps {
  technologies?: string[]
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const techIconMap: Record<string, React.ReactNode> = {
  // Frontend
  'React': <Icons.FaReact className="text-blue-400" />,
  'TypeScript': <Icons.SiTypescript className="text-blue-600" />,
  'JavaScript': <Icons.FaJs className="text-yellow-400" />,
  'Next.js': <Icons.SiNextdotjs className="text-white" />,
  'Tailwind CSS': <Icons.SiTailwindcss className="text-cyan-400" />,
  'Framer Motion': <Icons.SiFramer className="text-pink-500" />,
  
  // Backend
  'Node.js': <Icons.FaNodeJs className="text-green-600" />,
  'Express': <Icons.SiExpress className="text-gray-300" />,
  'Python': <Icons.FaPython className="text-blue-300" />,
  
  // Databases
  'PostgreSQL': <Icons.SiPostgresql className="text-blue-300" />,
  'MongoDB': <Icons.SiMongodb className="text-green-500" />,
  'SQL': <Icons.FaDatabase className="text-blue-500" />,
  'Prisma': <Icons.SiPrisma className="text-white" />,
  
  // DevOps & Cloud
  'Docker': <Icons.FaDocker className="text-blue-500" />,
  'AWS': <Icons.FaAws className="text-orange-400" />,
  'Google Cloud': <Icons.SiGooglecloud className="text-blue-500" />,
  'Firebase': <Icons.SiFirebase className="text-yellow-500" />,
  'Kubernetes': <Icons.SiKubernetes className="text-blue-500" />,
  'Nginx': <Icons.SiNginx className="text-green-600" />,
  
  // Tools & Others
  'Git': <Icons.FaGitAlt className="text-orange-500" />,
  'Jest': <Icons.SiJest className="text-red-500" />,
  'GraphQL': <Icons.SiGraphql className="text-pink-500" />,
  'Redis': <Icons.SiRedis className="text-red-600" />,
  'API REST': <Icons.FaServer className="text-purple-500" />,
  'Flutter/React Native': <Icons.FaMobileAlt className="text-blue-400" />,
  'MVC': <Icons.FaCode className="text-green-400" />,
  
  // ADS Performance Technologies
  'HTML': <Icons.FaCode className="text-orange-500" />,
  'CSS': <Icons.FaCode className="text-blue-500" />,
  'Sheets': <Icons.FaDatabase className="text-green-500" />,
  'Meta API': <Icons.FaServer className="text-blue-400" />,
  'Google AppScript': <Icons.FaCode className="text-green-400" />,
}

const TechIcons = ({ technologies = [], size = 'md', className = '' }: TechIconsProps) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-9 h-9'
  }

  const filteredTechs = technologies.filter(tech => techIconMap[tech])

  if (filteredTechs.length === 0) {
    return null
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {filteredTechs.map((tech) => (
        <div 
          key={tech}
          className="flex flex-col items-center gap-1 group"
          title={tech}
        >
          <div className={`${sizeClasses[size]} flex items-center justify-center rounded-lg bg-background-secondary p-1.5 group-hover:bg-background-tertiary transition-colors`}>
            {techIconMap[tech]}
          </div>
          <span className="text-[10px] font-mono text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
            {tech}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TechIcons