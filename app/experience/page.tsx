"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Calendar,
  MapPin,
  Building,
  TrendingUp,
  CheckCircle,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { ExternalLink, Github, ArrowLeft, Eye, Star, GitFork, Search, Menu, X } from "lucide-react";

export default function ExperiencePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const experiences = [
    {
      company: "Payzon India",
      role: "Software Developer",
      duration: "Current",
      period: "2025 - Present",
      type: "Internship",
      status: "Ongoing",
      location: "Remote",
      description:
        "Currently working on full-stack development projects, implementing modern web technologies and contributing to scalable software solutions. Focusing on React.js, Node.js, and database optimization.",
      achievements: [
        "Developing responsive web applications using React.js and Next.js",
        "Implementing RESTful APIs with Node.js and Express.js",
        "Working with MongoDB for database design and optimization",
        "Collaborating with cross-functional teams using Agile methodologies",
        "Contributing to code reviews and maintaining coding standards",
      ],
      technologies: ["React.js", "Next.js", "Node.js", "JavaScript", "MongoDB", "Express.js", "Git"],
      color: "from-green-500 to-emerald-500",
      icon: "💼",
    },
    {
      company: "Meteoros Automation",
      role: "Frontend Engineer",
      duration: "3 Months",
      period: "2025",
      type: "Internship",
      status: "Completed",
      location: "Remote",
      description:
        "Developed responsive web applications using React.js and modern frontend technologies. Collaborated with cross-functional teams to deliver high-quality user interfaces and improved user experience.",
      achievements: [
        "Built 5+ responsive web components with React.js",
        "Improved page load speed by 40% through optimization",
        "Implemented modern UI/UX designs with attention to detail",
        "Collaborated with backend team for seamless API integration",
        "Participated in daily standups and sprint planning sessions",
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "HTML5", "Bootstrap", "Git", "Figma"],
      color: "from-blue-500 to-cyan-500",
      icon: "⚡",
    },
    {
      company: "CodeXintern",
      role: "React Developer",
      duration: "1 Month",
      period: "2024",
      type: "Internship",
      status: "Completed",
      location: "Remote",
      description:
        "Built interactive React components and implemented modern UI/UX designs. Gained hands-on experience with React ecosystem and best practices in component development.",
      achievements: [
        "Created 10+ reusable React components following best practices",
        "Learned React hooks and modern state management techniques",
        "Implemented responsive design patterns for mobile-first approach",
        "Gained experience with modern development tools and workflows",
        "Completed training modules on React ecosystem and JavaScript ES6+",
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "HTML5", "Git", "VS Code"],
      color: "from-purple-500 to-pink-500",
      icon: "🚀",
    },
  ];

  const skills = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "API Integration",
    "Database Design",
    "Responsive Design",
    "Team Collaboration",
    "Agile Methodologies",
    "Code Review",
    "Problem Solving",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Nitesh Verma
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-white/80 hover:text-white transition-all duration-300 relative group ${
                    item.href === "/experience" ? "text-purple-400 font-semibold" : ""
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                      item.href === "/experience" ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:bg-white/10 p-2"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 animate-slide-down">
              <div className="flex flex-col space-y-4 px-4 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg text-white/80 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/10 flex items-center gap-3 ${
                      item.href === "/experience" ? "text-purple-400 font-semibold" : ""
                    }`}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full">
                      Get In Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/">
            <Button variant="ghost" className="mb-6 sm:mb-8 text-white/70 hover:text-white hover:bg-white/10 flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          {/* Page Header */}
          <div
            className={`text-center mb-10 sm:mb-14 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              My professional journey through various internships and the valuable skills I've developed along the way.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden">
                  {/* Top Border */}
                  <div className={`h-1 bg-gradient-to-r ${exp.color}`}></div>

                  <CardHeader className="pb-4 sm:pb-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
                      {/* Left Side - Main Info */}
                      <div className="flex items-start gap-4 sm:gap-6 flex-1">
                        {/* Icon */}
                        <div
                          className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${exp.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                        >
                          <div className="text-xl sm:text-2xl">{exp.icon}</div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <CardTitle className="text-xl sm:text-2xl text-white mb-1 sm:mb-2 group-hover:text-purple-300 transition-colors">
                            {exp.role}
                          </CardTitle>
                          <div className="flex items-center gap-1 sm:gap-2 text-purple-400 font-semibold text-base sm:text-lg mb-2">
                            <Building className="w-4 h-4 sm:w-5 sm:h-5" />
                            {exp.company}
                          </div>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-white/60 mb-2 sm:mb-4">
                            <div className="flex items-center gap-1 sm:gap-2">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="text-sm sm:text-base">{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2">
                              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="text-sm sm:text-base">{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="text-sm sm:text-base">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Status */}
                      <div className="flex flex-col items-start sm:items-end gap-2">
                        <Badge
                          variant={exp.status === "Ongoing" ? "default" : "secondary"}
                          className={`${
                            exp.status === "Ongoing"
                              ? "bg-green-600 hover:bg-green-700 text-white"
                              : "bg-slate-600 hover:bg-slate-700 text-white"
                          } px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium`}
                        >
                          {exp.status}
                        </Badge>
                        <Badge variant="outline" className="border-purple-500 text-purple-300 px-2 sm:px-3 py-1 sm:py-1 text-xs sm:text-sm">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6 sm:space-y-8 p-4 sm:p-6">
                    {/* Description */}
                    <p className="text-white/80 leading-relaxed text-base sm:text-lg">{exp.description}</p>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 sm:mb-4 flex items-center gap-1 sm:gap-2 text-base sm:text-lg">
                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 sm:gap-3 text-white/70 p-2 sm:p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                          >
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm sm:text-base leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-white/20 text-white/80 hover:border-purple-400 hover:text-purple-300 transition-all duration-300 hover:scale-105 cursor-pointer px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Gained Section */}
          <div
            className={`mt-12 sm:mt-16 transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-white text-center flex items-center justify-center gap-2 sm:gap-3">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                  </div>
                  Skills Gained Through Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-white/20 text-white/80 hover:border-purple-400 hover:text-purple-300 transition-all duration-300 hover:scale-105 cursor-pointer px-2 sm:px-3 py-1 text-xs sm:text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div
            className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-1200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Work Together?</h3>
              <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 max-w-xl mx-auto leading-relaxed">
                I'm always excited about new opportunities and challenging projects. Let's discuss how my experience can contribute to your team's success.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Get In Touch
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    variant="outline"
                    className="border-2 border-white/20 text-white hover:bg-white/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 backdrop-blur-sm bg-transparent"
                  >
                    View My Projects
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}