"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Clock,
  Heart,
  Coffee,
  Code2,
  Sparkles,
  ArrowRight,
  Send,
  ExternalLink,
  Download,
  Star,
  Users,
  Trophy,
  Target,
  Zap,
  Globe,
  MessageCircle,
  BookOpen,
  Briefcase,
} from "lucide-react"

export function EnhancedFooter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const quickLinks = [
    { href: "/about", label: "About Me", icon: Users },
    { href: "/experience", label: "Experience", icon: Briefcase },
    { href: "/skills", label: "Skills", icon: Code2 },
    { href: "/projects", label: "Projects", icon: Sparkles },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  const services = [
    { name: "Web Development", icon: Globe },
    // { name: "Mobile Apps", icon: Phone },
    { name: "UI/UX Design", icon: Target },
    // { name: "AI/ML Solutions", icon: Zap },
    { name: "Consulting", icon: MessageCircle },
    { name: "Code Review", icon: BookOpen },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/niteshverma01",
      label: "GitHub",
      color: "hover:bg-gray-600",
      followers: "50+",
      description: "Open source projects",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nitesh--verma01/",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
      followers: "9000+",
      description: "Professional network",
    },
    {
      icon: Mail,
      href: "mailto:niteshverma9025@gmail.com",
      label: "Email",
      color: "hover:bg-purple-600",
      followers: "24h",
      description: "Direct contact",
    },
  ]

  const stats = [
    { label: "Projects Completed", value: "15+", icon: Trophy },
    // { label: "Happy Clients", value: "10+", icon: Heart },
    { label: "Code Commits", value: "500+", icon: Code2 },
    { label: "Coffee Cups", value: "∞", icon: Coffee },
  ]

  const techStack = [
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Git",
  ]

  return (
    <footer className="relative z-10 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 border-t border-slate-800/50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="py-12 px-4 sm:px-6 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 sm:p-12">
                <div className="text-center max-w-3xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Stay Updated</h3>
                    <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                  </div>
                  <p className="text-white/70 mb-6 text-lg leading-relaxed">
                    Get notified about my latest projects, blog posts, and tech insights. Join the community of
                    developers and tech enthusiasts!
                  </p>
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                      required
                    />
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      {isSubscribed ? (
                        <>
                          <Heart className="w-4 h-4 mr-2 text-red-400" />
                          Subscribed!
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Subscribe
                        </>
                      )}
                    </Button>
                  </form>
                  {isSubscribed && (
                    <p className="text-green-400 text-sm mt-3 animate-fade-in">
                      🎉 Thank you for subscribing! You'll hear from me soon.
                    </p>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-1">
                <Link
                  href="/"
                  className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent inline-block mb-4 hover:scale-105 transition-transform duration-300"
                >
                  Nitesh Verma
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Full Stack Developer & AI Enthusiast passionate about creating innovative digital solutions that make
                  a difference. Based in Jabalpur, India.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:niteshverma9025@gmail.com" className="text-sm">
                      niteshverma9025@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Jabalpur, Madhya Pradesh, India</span>
                  </div>
                  {/* <div className="flex items-center gap-3 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Available for remote work</span>
                  </div> */}
                </div>

                {/* Availability Status */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-600/20 border border-green-500/30">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium text-sm">Available for new projects</span>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  Quick Links
                </h3>
                <div className="space-y-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-all duration-300 group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </Link>
                  ))}
                </div>

                {/* Resume Download */}
                <div className="mt-6">
                  <Button
                    variant="outline"
                    className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-500 hover:text-white transition-all duration-300 group bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Download Resume
                  </Button>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-purple-400" />
                  Services
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                    >
                      <service.icon className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-400 text-xs group-hover:text-white transition-colors">
                        {service.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mt-6">
                  <h4 className="text-white font-medium mb-3 text-sm">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.slice(0, 6).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-white/20 text-white/70 text-xs hover:border-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                      >
                        {tech}
                      </Badge>
                    ))}
                    <Badge variant="outline" className="border-white/20 text-white/70 text-xs">
                      +{techStack.length - 6}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Social & Stats */}
              <div>
                <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-400" />
                  Connect & Stats
                </h3>

                {/* Social Links */}
                <div className="space-y-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group ${social.color}`}
                    >
                      <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium text-sm">{social.label}</span>
                          <Badge variant="outline" className="border-white/20 text-white/60 text-xs">
                            {social.followers}
                          </Badge>
                        </div>
                        <p className="text-gray-400 text-xs">{social.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>

                {/* Quick Stats */}
                {/* <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-center mb-2">
                        <stat.icon className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800/50 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Copyright */}
                <div className="text-center md:text-left">
                  <p className="text-gray-400 text-sm mb-2">
                    © 2025 Nitesh Verma. All rights reserved.   
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-gray-500">
                    <span>Made with</span>
                    <Heart className="w-3 h-3 text-red-400 animate-pulse" />
                    <span>and lots of</span>
                    <Coffee className="w-3 h-3 text-yellow-400" />
                    {/* <span>in India</span> */}
                    {/* <span className="mx-2">•</span> */}
                    {/* <span>Last updated: {new Date().toLocaleDateString()}</span> */}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex items-center gap-3">
                  <Link href="/contact">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Hire Me
                    </Button>
                  </Link>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white/80 hover:bg-white/10 hover:text-white bg-transparent px-4 py-2 rounded-lg font-medium transition-all duration-300"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Support
                  </Button>
                </div>
              </div>

              {/* Fun Footer Message */}
              <div className="text-center mt-6 p-4 rounded-lg bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-white/10">
                <p className="text-white/80 text-sm">
                  🚀 Thanks for visiting! Let's build something amazing together.{" "}
                  <Link href="/contact" className="text-purple-400 hover:text-purple-300 underline">
                    Get in touch
                  </Link>{" "}
                  and let's make it happen!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
