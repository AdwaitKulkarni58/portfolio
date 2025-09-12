'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  Zap,
  GitBranch,
  Shield,
  Globe,
  Cpu
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Palette,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js'},
      { name: 'Next.js'},
      { name: 'TypeScript'},
      { name: 'JavaScript'},
      { name: 'HTML'},
      { name: 'CSS'},
      { name: 'Material UI'},
    ]
  },
  {
    title: 'Backend Development',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js'},
      { name: 'Express.js'},
      { name: 'Java'},
      { name: 'Python'},
      { name: 'MySQL'},
      { name: 'MongoDB'},
      { name: 'Spring Boot'},
      { name: 'Redux Toolkit'},
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Git'},
      { name: 'Docker'},
      { name: 'AWS Services'},
      { name: 'Apache Kafka'},
      { name: 'pandas'},
      { name: 'Scikit-Learn'},
      { name: 'Altair'},
      { name: 'JUnit'},
      { name: 'Jest'},
    ]
  }
]

const technologies = [
  { name: 'React', icon: Code2, color: 'text-blue-400' },
  { name: 'Next.js', icon: Globe, color: 'text-gray-400' },
  { name: 'TypeScript', icon: Code2, color: 'text-blue-500' },
  { name: 'Node.js', icon: Cpu, color: 'text-green-400' },
  { name: 'PostgreSQL', icon: Database, color: 'text-blue-600' },
  { name: 'AWS', icon: Cloud, color: 'text-orange-400' },
  { name: 'Docker', icon: Shield, color: 'text-blue-500' },
  { name: 'Git', icon: GitBranch, color: 'text-orange-500' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding bg-dark-900">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              My <span className="gradient-text">Skills</span>
            </motion.h2>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + categoryIndex * 0.2 }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-full gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white text-center">{category.title}</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-col items-center space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="w-full flex justify-center"
                      >
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
