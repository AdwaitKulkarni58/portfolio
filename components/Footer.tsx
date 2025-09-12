"use client";

import { motion } from "framer-motion";
import { Code, Github, Linkedin, Mail, Heart } from "lucide-react";

const currentYear = new Date().getFullYear();

const footerLinks = {
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/AdwaitKulkarni58",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/adwaitkulkarni58/",
      icon: Linkedin,
    },
    { name: "Email", href: "mailto:adwait.kul.2018@gmail.com", icon: Mail },
  ],
  quick: [{ name: "Resume", href: "/Adwait_Kulkarni_Resume.pdf" }],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="container">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold gradient-text">
                    Adwait Kulkarni
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Full-stack developer passionate about creating exceptional
                  digital experiences through clean code and innovative
                  solutions.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex space-x-4"
              >
                {footerLinks.social.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-primary-500/20 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Navigation
              </h3>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.quick.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>© {currentYear} Adwait Kulkarni. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-500" />
                </motion.div>
                <span>and lots of coffee.</span>
              </div>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                <span>Back to top</span>
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↑
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
