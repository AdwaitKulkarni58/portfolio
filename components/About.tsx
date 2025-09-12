'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, Code, Lightbulb, Target, Award, Coffee } from 'lucide-react'

const stats = [
  { label: 'Projects Completed', value: '50+', icon: Code },
  { label: 'Years Experience', value: '1+', icon: Award },
  { label: 'Cups of Coffee', value: '1000+', icon: Coffee },
  { label: 'Happy Users', value: '500+', icon: User },
]

const values = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'I write maintainable, scalable, and well-documented code that stands the test of time.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Always exploring new technologies and approaches to solve problems creatively.'
  },
  {
    icon: Target,
    title: 'User Focus',
    description: 'Every decision is made with the end user in mind, ensuring exceptional experiences.'
  }
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Passionate about creating digital experiences that make a difference
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a passionate full-stack developer with a love for creating innovative 
                  solutions that solve real-world problems. With over 1 year of experience 
                  in software development and problem solving, I specialize in building scalable applications using 
                  modern technologies.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  My journey began with curiosity about how websites work, which quickly 
                  evolved into a deep passion for software development. I enjoy the 
                  challenge of turning complex requirements into elegant, user-friendly 
                  applications that make a positive impact.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with 
                  the developer community.
                </p>
              </div>

              {/* Values */}
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 glass-effect rounded-lg"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                      <p className="text-gray-400">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Stats & Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-8"
            >
              {/* Profile Image Placeholder */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-80 h-80 mx-auto rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg border-4 border-primary-500"
                >
                  <img
                    src="/photo_id_image.jpeg"
                    alt="Profile photo"
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </motion.div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="text-center p-6 glass-effect rounded-xl"
                  >
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
