"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Palette,
  Database,
  Brain,
  Wrench,
  Star,
  TrendingUp,
  X,
  Menu,
} from "lucide-react";
import Link from "next/link";

export default function SkillsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      description: "Creating beautiful and interactive user interfaces",
      skills: [
        {
          name: "React.js",
          level: 90,
          description: "Building dynamic user interfaces with hooks and context",
          experience: "2+ years",
        },
        {
          name: "Next.js",
          level: 85,
          description: "Full-stack React framework with SSR and SSG",
          experience: "1+ year",
        },
        {
          name: "JavaScript",
          level: 88,
          description: "Modern ES6+ features and async programming",
          experience: "2+ years",
        },
        {
          name: "TypeScript",
          level: 80,
          description: "Type-safe JavaScript for better development",
          experience: "1+ year",
        },
        {
          name: "HTML5",
          level: 95,
          description: "Semantic markup and accessibility best practices",
          experience: "3+ years",
        },
        {
          name: "CSS3",
          level: 90,
          description: "Modern styling with Flexbox, Grid, and animations",
          experience: "3+ years",
        },
        {
          name: "Tailwind CSS",
          level: 92,
          description: "Utility-first CSS framework for rapid development",
          experience: "2+ years",
        },
        {
          name: "Bootstrap",
          level: 85,
          description: "Responsive design framework and components",
          experience: "2+ years",
        },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      description: "Building robust server-side applications and APIs",
      skills: [
        {
          name: "Node.js",
          level: 85,
          description: "Server-side JavaScript runtime and ecosystem",
          experience: "2+ years",
        },
        {
          name: "Express.js",
          level: 82,
          description: "Fast and minimalist web application framework",
          experience: "2+ years",
        },
        { name: "MongoDB", level: 80, description: "NoSQL database design and optimization", experience: "1+ year" },
        { name: "MySQL", level: 75, description: "Relational database management and queries", experience: "1+ year" },
        { name: "REST APIs", level: 88, description: "RESTful web services and API design", experience: "2+ years" },
      ],
    },
    // {
    //   title: "AI & Machine Learning",
    //   icon: Brain,
    //   color: "from-purple-500 to-indigo-500",
    //   description: "Exploring artificial intelligence and data science",
    //   skills: [
    //     { name: "Python", level: 85, description: "Data science, ML, and general programming", experience: "2+ years" },
    //     {
    //       name: "Machine Learning",
    //       level: 78,
    //       description: "Supervised and unsupervised learning algorithms",
    //       experience: "1+ year",
    //     },
    //     {
    //       name: "Data Science",
    //       level: 80,
    //       description: "Data analysis, visualization, and insights",
    //       experience: "1+ year",
    //     },
    //     {
    //       name: "TensorFlow",
    //       level: 70,
    //       description: "Deep learning framework for neural networks",
    //       experience: "6+ months",
    //     },
    //     { name: "Pandas", level: 82, description: "Data manipulation and analysis library", experience: "1+ year" },
    //     { name: "NumPy", level: 80, description: "Numerical computing and array operations", experience: "1+ year" },
    //   ],
    // },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-green-500 to-emerald-500",
      description: "Development tools and workflow optimization",
      skills: [
        {
          name: "Git",
          level: 90,
          description: "Version control and collaborative development",
          experience: "3+ years",
        },
        { name: "GitHub", level: 88, description: "Code collaboration and project management", experience: "3+ years" },
        {
          name: "VS Code",
          level: 95,
          description: "Code editor with extensions and debugging",
          experience: "3+ years",
        },
        { name: "Figma", level: 75, description: "UI/UX design and prototyping tool", experience: "1+ year" },
        { name: "Postman", level: 85, description: "API testing and documentation", experience: "2+ years" },
      ],
    },
  ];

  const additionalSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Agile Development",
    "Code Review",
    "UI/UX Design",
    "Responsive Design",
    "Performance Optimization",
    "Testing",
    "Documentation",
    "Continuous Learning",
    "Open Source",
    "Mentoring",
  ];

  const certifications = [
    { name: "React Developer Certification", issuer: "Meta", year: "2024" },
    { name: "JavaScript Algorithms", issuer: "freeCodeCamp", year: "2023" },
    { name: "Python for Data Science", issuer: "IBM", year: "2023" },
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-x-hidden min-h-screen">
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
                    item.href === "/skills" ? "text-purple-400 font-semibold" : ""
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                      item.href === "/skills" ? "w-full" : "w-0 group-hover:w-full"
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
                      item.href === "/skills" ? "text-purple-400 font-semibold" : ""
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`transition-all duration-1000 delay-${(categoryIndex + 1) * 200} ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <CardHeader className="pb-4 sm:pb-6">
                    <CardTitle className="flex items-center gap-3 text-xl sm:text-2xl text-white">
                      <div
                        className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <category.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                      <div>
                        <div>{category.title}</div>
                        <p className="text-xs sm:text-sm text-white/60 font-normal mt-1">{category.description}</p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group cursor-pointer"
                        onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-white font-medium group-hover:text-purple-300 transition-colors text-base sm:text-lg">
                              {skill.name}
                            </span>
                            <Badge
                              variant="outline"
                              className="border-white/20 text-white/60 text-xs sm:text-sm px-1 sm:px-2 py-0.5"
                            >
                              {skill.experience}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2">
                            <span className="text-white/60 text-sm">{skill.level}%</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 sm:w-4 sm:h-4 ${
                                    i < Math.floor(skill.level / 20) ? "text-yellow-400 fill-current" : "text-white/20"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1.5 sm:h-2 overflow-hidden mb-1 sm:mb-2">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: isLoaded ? `${skill.level}%` : "0%",
                              transitionDelay: `${(categoryIndex + 1) * 200 + skillIndex * 100}ms`,
                            }}
                          />
                        </div>
                        {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                          <p className="text-white/70 text-xs sm:text-sm mt-1 sm:mt-2 animate-fade-in leading-relaxed">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div
            className={`mb-12 sm:mb-16 transition-all duration-1000 delay-1200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-white text-center">Soft Skills & Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {additionalSkills.map((skill, index) => (
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
            className={`text-center transition-all duration-1000 delay-1400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 max-w-xl mx-auto leading-relaxed">
                Let's leverage these skills to create innovative solutions for your next project. I'm always excited to take on new challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/projects">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    View My Projects
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-2 border-white/20 text-white hover:bg-white/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 backdrop-blur-sm bg-transparent"
                  >
                    Let's Collaborate
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