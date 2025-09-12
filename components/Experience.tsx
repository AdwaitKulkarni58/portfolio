'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building2, Award, Code, Users } from 'lucide-react'

const experiences = [
  {
    title: 'Software Developer',
    company: 'Tata Consultancy Services - Aviation Domain',
    location: 'Toronto, Canada',
    period: '2025 - Present',
    type: 'Full-time',
    description: 'Leading development of scalable mobile applications using React, Node.js, and cloud technologies. Mentoring other developers and implementing best practices.',
    achievements: [
      'Designed SQL validations on S3-backed DynamoDB data to identify defects, automated fixes across 20+ services in 5 environments.',
      'Spearheaded virtual chatbot creation on Amazon Connect with Claude, achieving 90%+ intent accuracy for 100K+ user queries/month.',
      'Engineered serverless REST APIs with AWS Lambda, API Gateway, DynamoDB, and S3 for flight data, reducing latency by 30% and achieving a 99.9% request success rate.',
      'Drove codebase migration from Serverless to AWS CDK for 15+ services, cutting deployment time by 20%.'
    ],
    technologies: ['React.js', 'Node.js', 'AWS Services', 'DynamoDB']
  },
  {
    title: 'Full Stack Developer',
    company: 'Royal Bank of Canada (RBC)',
    location: 'Remote',
    period: '2022 - 2023',
    type: 'Full-time (Internship)',
    description: 'Developed Java and Spring Boot REST APIs and microservices, powered by Apache Kafka messaging queues.',
    achievements: [
      'Led migration of 50+ services across OpenShift and Cloud Foundry platforms, with 0 prod downtime.',
      'Cut config setup time from 10+ mins to 2 for 200 developers with a Spring Web tool across 3 environments.',
      'Enabled real-time monitoring for 50+ applications across 20+ production topics by implementing a Kafka-based solution.',
      'Improved latency by 25% for 5+ apps by developing Java microservices and Spring APIs with Kafka pipelines.'
    ],
    technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'MySQL', 'Thymeleaf']
  }
]

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of British Columbia (UBC)',
    year: '2020 - 2025',
    description: 'Graduated with a 3.7 GPA, with a major in Computer Science and a minor in Data Science.'
  }
]

const certifications = [
  {
    name: 'Meta Backend Developer',
    issuer: 'Meta',
    icon: Code
  },
  {
    name: 'Meta Frontend Developer',
    issuer: 'Meta',
    icon: Users
  }
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding bg-dark-800/50">
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
              My <span className="gradient-text">Journey</span>
            </motion.h2>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  className="relative"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    {/* Timeline Line */}
                    <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600" />
                    
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center relative z-10 mb-4 lg:mb-0">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 glass-effect rounded-2xl p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                          <div className="flex items-center text-primary-400 font-semibold mb-2">
                            <Building2 className="w-4 h-4 mr-2" />
                            {exp.company}
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <MapPin className="w-4 h-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                        <div className="mt-4 sm:mt-0 text-right">
                          <div className="flex items-center text-gray-300 mb-1">
                            <Calendar className="w-4 h-4 mr-2" />
                            {exp.period}
                          </div>
                          <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-sm rounded-full">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-white mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ duration: 0.4, delay: 0.8 + index * 0.2 + achIndex * 0.1 }}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-300">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.3, delay: 1 + index * 0.2 + techIndex * 0.05 }}
                              className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm rounded-full"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-primary-400" />
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-primary-400 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-3">{edu.year}</p>
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-primary-400" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-dark-700/50 rounded-lg hover:bg-dark-700/70 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <cert.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{cert.name}</h4>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
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
