"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "adwait.kul.2018@gmail.com",
    href: "mailto:adwait.kul.2018@gmail.com",
    description: "Send me an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (604) 720-4861",
    href: "tel:+16047204861",
    description: "Call me for urgent matters",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Toronto, ON, Canada",
    href: "#",
    description: "Available for remote work",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/AdwaitKulkarni58",
    icon: Github,
    color: "hover:text-gray-400",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/adwaitkulkarni58",
    icon: Linkedin,
    color: "hover:text-blue-400",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-dark-800/50">
      <div className="container max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to work together? Let's discuss your next project and bring
            your ideas to life.
          </p>
        </div>
        <div>
          <div className="space-y-6 mb-8">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                className="flex items-start space-x-4 p-4 glass-effect rounded-lg hover:bg-primary-500/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-300">
                  <info.icon className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                    {info.title}
                  </h4>
                  <p className="text-primary-400 font-medium">{info.value}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              </a>
            ))}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-dark-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-primary-500/20`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
