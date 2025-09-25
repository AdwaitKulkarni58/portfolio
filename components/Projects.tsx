"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Code2, Eye, Star, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "TL;DReviews",
    description:
      "A full-stack application that allows students to review CPSC courses at UBC and view comprehensive summary results and visualizations.",
    longDescription:
      "This project is an end-to-end solution designed for UBC Computer Science students. It collects user reviews, analyzes their sentiments, and summarizes each course's feedback using visualizations and modern machine learning models. The application provides an intuitive interface for real-time sentiment visualization, detailed analytics, and summary generation.",
    image: "/tldreviews.png",
    technologies: [
      "React.js",
      "D3.js",
      "AWS Lambda",
      "AWS S3",
      "AWS RDS",
      "AWS SageMaker",
      "Node.js",
    ],
    category: "Full Stack",
    status: "Live",
    featured: true,
    github: "https://github.com/AdwaitKulkarni58/TLDReviews",
    live: "https://sentiment-analysis-436c.onrender.com/",
  },
  {
    id: 2,
    title: "MovieHub",
    description:
      "Discover your next favorite movie with our personalized recommendation website!",
    longDescription:
      "Discover your next favorite movie with our personalized recommendation website! Create and manage watchlists with ease, share your reviews to express your satisfaction or displeasure. Whether you are a casual viewer or a devoted cinephile, there's something in it for you.",
    image: "/moviehub.png",
    technologies: [
      "React.js",
      "Material UI",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
    ],
    category: "Full Stack",
    status: "Live",
    featured: true,
    github: "https://github.com/AdwaitKulkarni58/MovieHub",
    live: "https://project-11-movie-mavericks-1.onrender.com/",
  },
  {
    id: 3,
    title: "Upbeat Updates",
    description:
      "A positive news website designed to show you what sentiment of news you like!",
    longDescription:
      "Welcome to Upbeat Updates! This project aims to provide users with a platform where they can read, save, and share positive news articles. The website categorizes news into various topics such as Business, Entertainment, General, Health, Science, Sports, and Technology. It also provides a positiveness analysis of the current news and how your preferences compare to the average news sentiment.",
    image: "/upbeat_updates.png",
    technologies: [
      "React.js",
      "Material UI",
      "Redux Toolkit",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Axios",
      "Scikit-Learn",
      "NewsAPI",
    ],
    category: "Web App",
    status: "Live",
    github: "https://github.com/AdwaitKulkarni58/UpbeatUpdates",
  },
  {
    id: 4,
    title: "Moodify: ML-Powered Music Insights",
    description:
      "A React Native mobile app that recommends songs and playlists based on your mood, with personalized ML-driven insights.",
    longDescription:
      "Moodify is a cross-platform mobile app that lets users discover and manage playlists tailored to their mood. Users log in, select their mood, and receive curated song recommendations. The app leverages machine learning to analyze user interactions, cluster users by listening patterns, and provide personalized insights through an interactive dashboard on the screen. Built with React Native, Express.js, MongoDB, and Python (scikit-learn) for the ML pipeline.",
    image: "/moodify.jpeg",
    technologies: [
      "React Native",
      "Expo",
      "Express.js",
      "MongoDB",
      "Node.js",
      "Python",
      "Scikit-Learn",
      "JWT Auth",
      "Spotify API",
    ],
    category: "Mobile App",
    status: "Developed"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website with smooth animations and optimized performance.",
    longDescription:
      "Designed and developed a personal portfolio website showcasing my skills and projects. The site features smooth animations, responsive design and is optimized for performance.",
    image: "/website_image.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    category: "Frontend",
    status: "Live",
    featured: true,
    github: "https://github.com/AdwaitKulkarni58/portfolio",
    live: "https://adwaitkulkarni.vercel.app/",
  },
  {
    id: 6,
    title: "Mining, Eh?",
    description:
      "A project to explore the distribution of different mines throughout history in Canada.",
    longDescription:
      "Welcome to this project exploring the rich history of mining in Canada! Over the course of many years, mining has played a crucial role in shaping the country's economy and landscape. This project delves into this treasure box using various datasets, a compilation of mining records, production statistics, and geographical information.",
    image: "/mines.png",
    technologies: ["HTML", "CSS", "JavaScript", "D3.js", "Python", "pandas"],
    category: "Web App",
    status: "Live",
    featured: true,
    github: "https://github.com/AdwaitKulkarni58/Explore-Canadian-Mines",
    live: "https://adwaitkulkarni58.github.io/Explore-Canadian-Mines/",
  },
  {
    id: 7,
    title: "The Olympic Games",
    description:
      "A Historical Analysis of the Olympic Games from 1896 to 2020.",
    longDescription:
      "Welcome to this project exploring the rich history of the Olympic Games! Over the course of 120 years, the Olympic Games have showcased extraordinary human achievement, cultural milestones, and global sports history. This project delves into this treasure box using the 120 Years of Olympic History dataset, a compilation of athlete records, medal achievements, and event details spanning from Athens 1896 to Rio 2016.",
    image: "/olympic-games.png",
    technologies: ["Python", "Numpy", "pandas", "Altair"],
    category: "Machine Learning / Data Science",
    status: "Live",
    featured: true,
    github: "https://github.com/AdwaitKulkarni58/project-team_saab",
    live: "https://adwaitkulkarni58.github.io/DSCI320-project-website/",
  },
  {
    id: 8,
    title: "Tweet-Vibes",
    description:
      "An application using Java Spring and Apache Kafka to acquire tweets in real-time and provide REST endpoints to index a particular tweet in Elasticsearch while performing sentiment analysis on the same.",
    longDescription:
      "This is a Spring Boot project built with Maven and uses external tools like Apache Kafka for reading, storing, and writing data and Elasticsearch as the distributed search and analytics engine for performing sentiment analysis. The application provides REST endpoints to index tweets in Elasticsearch and analyze their sentiments in real-time.",
    image: "/tweet-vibes.png",
    technologies: [
      "Java",
      "Spring Boot",
      "Apache Kafka",
      "Elasticsearch",
      "Twitter API",
      "Stanford NLP",
    ],
    category: "Backend",
    status: "Developed",
    featured: true,
    github: "https://github.com/AdwaitKulkarni58/Tweet-Vibes",
    live: null,
  },
  {
    id: 9,
    title: "ClusterVAN",
    description:
      "A geospatial analytics tool to visualize active businesses in Vancouver and get personalized recommendations for new business opportunities based on location and business type.",
    longDescription:
      "This project is a geospatial analytics tool designed to help entrepreneurs and business owners in Vancouver make informed decisions about where to establish or expand their businesses. By leveraging clustering algorithms and interactive maps, users can visualize the distribution of over 300K+ active businesses across different neighborhoods spread across 6 years of data. The tool also allows users to filter and receive personalized recommendations for new business opportunities based on location and business type.",
    image: "/cluster-van.png",
    technologies: ["Python", "Scikit-Learn", "pandas", "Plotly", "Groq LLM"],
    category: "Machine Learning / Data Science",
    status: "Developed",
    featured: true,
    github: "https://github.com/AdwaitKulkarni58/ClusterVAN",
    live: null,
  },
  {
    id: 10,
    title: "Dungeons and Databases",
    description:
      "The domain of the project, Dungeons and Databases, lies within tabletop gaming and gaming utility. In this domain, the database primarily focuses on organizing and tracking specific details within and between DND campaigns. It will model aspects such as character definitions and campaign progression, and maintain the accessibility of this information for online gameplay.",
    longDescription:
      "The database within Dungeons and Databases will offer a range of functionalities to enhance the tabletop gaming experience. Users can store complete character definitions including their race, class, background, and items, enabling them to maintain countless detailed character profiles. It also supports the updating of existing character definitions to reflect progression in a campaign. For practical use, the project will allow users to generate basic character sheets using a query to the database, making it easier to reference character information during gameplay. Another unique feature is the ability to generate characters randomly or based on predefined parameters, facilitating the creation of new characters for future campaigns.",
    image: "/dnd.png",
    technologies: ["HTML", "CSS", "PHP", "Oracle DB"],
    category: "Backend",
    status: "Developed",
    featured: false,
    github: "https://github.com/AdwaitKulkarni58/Dungeons-and-Databases",
  },
  {
    id: 11,
    title: "Little Lemon",
    description:
      "A front-end application for a restaurant website, focusing on responsive design and user experience.",
    longDescription:
      "Little Lemon is a front-end application designed for a restaurant website, emphasizing responsive design and user experience. The project showcases a modern and visually appealing interface, allowing users to easily navigate through the menu, make reservations, and access essential information about the restaurant. With a focus on mobile-first design, Little Lemon ensures a seamless experience across various devices, making it convenient for users to interact with the restaurant's services.",
    image: "/little-lemon.png",
    technologies: ["React.js", "CSS", "Jest"],
    category: "Frontend",
    status: "Developed",
    featured: false,
    github: "https://github.com/AdwaitKulkarni58/Little-Lemon-Front-End",
  },
  {
    id: 12,
    title: "User Management System",
    description:
      "A backend application for managing user accounts, roles, and permissions.",
    longDescription:
      "The User Management System is a comprehensive web application designed to facilitate the management of user accounts, roles, and permissions within an organization. It provides administrators with the tools to create, update, and delete user accounts, as well as assign roles and permissions based on organizational needs. The application makes it easy for administrators to navigate and manage user information efficiently.",
    image: "/ums.jfif",
    technologies: [
      "HTML",
      "CSS",
      "EJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
    ],
    category: "Backend",
    status: "Developed",
    featured: false,
    github: "https://github.com/AdwaitKulkarni58/User-Management-System",
  },
  {
    id: 13,
    title: "Under Control",
    description:
      "A platform to promote gender equality with the power of choice.",
    longDescription:
      "This is a platform where users can order products from pharmacies near them and get them delivered at their doorstep. The project aims to promote gender equality by keeping the identity of the user anonymous and providing a safe space for users to order products of their choice.",
    image: "/under-control.png",
    technologies: ["HTML", "CSS", "JavaScript", "Google Maps API"],
    category: "Frontend",
    status: "Live",
    featured: false,
    github: "https://github.com/AdwaitKulkarni58/BCSHacks",
    live: "https://adwaitkulkarni58.github.io/BCSHacks/",
  },
  {
    id: 14,
    title: "TinDog (Tinder for Dogs)",
    description: "A platform to help dog owners find playdates for their pets.",
    longDescription:
      "TinDog is a web application designed to connect dog owners with other dog owners in their area. The platform allows users to create profiles for their dogs, browse other dogs' profiles, and arrange playdates. With a focus on community and social interaction, TinDog aims to make it easier for dog owners to find friends for their pets.",
    image: "/tindog.png",
    technologies: ["HTML", "CSS", "Bootstrap"],
    category: "Frontend",
    status: "Live",
    featured: false,
    github: "https://github.com/AdwaitKulkarni58/TinDog-Tinder-for-Dogs-",
    live: "https://adwaitkulkarni58.github.io/TinDog-Tinder-for-Dogs-/",
  },
  {
    id: 15,
    title: "People Data Management Solution",
    description:
      "A microservice-based application that provides a management solution for individual clients and companies.",
    longDescription:
      "This microservice-based application can be used by companies and organizations, both small and big, to keep track of employee data like the departments the employees work in, as well as any internal organizations they might belong to.",
    image: "/pdms.png",
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "Spring Cloud Netflix Eureka",
      "Spring Cloud Gateway",
      "Spring Boot Starter Actuator",
      "MySQL",
      "JPA",
      "Spring Doc OpenAPI",
      "Maven",
    ],
    category: "Backend",
    status: "Developed",
    featured: false,
    github:
      "https://github.com/AdwaitKulkarni58/people-data-management-solution",
  },
];

const categories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Mobile App",
  "Machine Learning / Data Science",
  "Web App",
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="section-padding bg-dark-900">
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
              My <span className="gradient-text">Projects</span>
            </motion.h2>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary-500 text-white"
                    : "bg-dark-700 text-gray-300 hover:bg-dark-600"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group glass-effect rounded-2xl overflow-hidden card-hover"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500 to-primary-700 overflow-hidden">
                  <div className="absolute inset-0 bg-hero-pattern opacity-20" />
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-yellow-500 text-yellow-900 text-xs font-bold rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        project.status === "Live"
                          ? "bg-green-500 text-green-900"
                          : "bg-blue-500 text-blue-900"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm rounded-full">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2 px-4 bg-primary-500/20 text-primary-400 rounded-lg hover:bg-primary-500/30 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="h-64 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg mb-6 flex items-center justify-center">
                        {selectedProject.image ? (
                          <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <Code2 className="w-20 h-20 text-white/80" />
                        )}
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">
                            Description
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {selectedProject.longDescription}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex space-x-4">
                        {selectedProject.github && (
                          <motion.a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 btn-primary flex items-center justify-center space-x-2"
                          >
                            <Github className="w-5 h-5" />
                            <span>View Code</span>
                          </motion.a>
                        )}
                        {selectedProject.live && (
                          <motion.a
                            href={selectedProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 btn-secondary flex items-center justify-center space-x-2"
                          >
                            <ExternalLink className="w-5 h-5" />
                            <span>Live Demo</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
