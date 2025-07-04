  "use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import myimage from "../../public/myimage.jpg";
import Image from "next/image"
import {
  GraduationCap,
  MapPin,
  Calendar,
  Code,
  Heart,
  Coffee,
  ArrowLeft,
  User,
  Sparkles,
  Zap,
  Rocket,
  Star,
  Trophy,
  Brain,
  Palette,
  Globe,
  Bed,
  Camera,
  Gamepad2,
  Book,
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Quote,
  Award,
  Users,
  Briefcase,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState("story")
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const personalInfo = [
    { icon: User, label: "Full Name", value: "Nitesh Verma", color: "from-blue-500 to-cyan-500" },
    {
      icon: GraduationCap,
      label: "Education",
      value: "Jabalpur Engineering College",
      color: "from-purple-500 to-pink-500",
    },
    { icon: Code, label: "Branch", value: "AI & Data Science", color: "from-green-500 to-emerald-500" },
    { icon: Calendar, label: "Year", value: "4th Year Student", color: "from-orange-500 to-red-500" },
    { icon: MapPin, label: "Location", value: "Jabalpur, MP, India", color: "from-indigo-500 to-purple-500" },
    { icon: Briefcase, label: "Experience", value: "1+ Years", color: "from-pink-500 to-rose-500" },
  ]

  const coreSkills = [
    { name: "React.js", level: 90, icon: "⚛️", color: "from-blue-500 to-cyan-500" },
    { name: "Next.js", level: 85, icon: "🚀", color: "from-purple-500 to-pink-500" },
    { name: "Node.js", level: 85, icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "MySql", level: 70, icon: "🐟", color: "from-yellow-500 to-orange-500" },
    { name: "TypeScript", level: 80, icon: "📘", color: "from-indigo-500 to-purple-500" },
    { name: "MongoDB", level: 80, icon: "🍃", color: "from-green-600 to-teal-500" },
  ]

  const interests = [
    {
      icon: Code,
      label: "Web Development",
      color: "from-blue-500 to-cyan-500",
      description: "Building modern web apps",
    },
 {
  icon: Brain,
  label: "Database",
  color: "from-purple-500 to-indigo-500",
  description: "Managing and structuring data",
},

    {
      icon: Palette,
      label: "UI/UX Design",
      color: "from-pink-500 to-rose-500",
      description: "Creating beautiful interfaces",
    },
    {
      icon: Globe,
      label: "Open Source",
      color: "from-green-500 to-emerald-500",
      description: "Contributing to community",
    },
    {
      icon: Bed,
     label: "Sleeping",
    color: "from-yellow-500 to-orange-500",
    description: "Recharging creativity",
    },
    { icon: Camera, label: "Photography", color: "from-indigo-500 to-purple-500", description: "Capturing moments" },
    { icon: Gamepad2, label: "Gaming", color: "from-red-500 to-pink-500", description: "Strategy & adventure games" },
    { icon: Book, label: "Reading", color: "from-teal-500 to-cyan-500", description: "Tech blogs & sci-fi novels" },
  ]

  const achievements = [
    { icon: Trophy, title: "30+ Projects", description: "Successfully completed projects", count: "30+" },
    { icon: Star, title: "Top Performer", description: "Recognized in internships", count: "3x" },
    // { icon: Users, title: "Team Collaborations", description: "Cross-functional team projects", count: "10+" },
    // { icon: Award, title: "Certifications", description: "Professional certifications", count: "5+" },
  ]

  const funFacts = [
    { emoji: "☕", text: "Coffee is my coding fuel", detail: "5+ cups daily" },
    { emoji: "🌙", text: "Night owl developer", detail: "Peak productivity: 10 PM - 2 AM" },
    { emoji: "🎨", text: "Pixel-perfect designs", detail: "Obsessed with 1px precision" },
    { emoji: "🚀", text: "Always learning", detail: "New tech every month" },
    { emoji: "🎵", text: "Code with music", detail: "Lo-fi & electronic beats" },
    { emoji: "🏔️", text: "Adventure seeker", detail: "Love hiking & travel" },
  ]

  const timeline = [
    { year: "2023", title: "Started Programming", description: "First line of code in Python", icon: Code },
    { year: "2024", title: "Web Development", description: "Discovered React & fell in love", icon: Heart },
    { year: "2024", title: "Full Stack Journey", description: "Mastered MERN stack development", icon: Zap },
    { year: "2025", title: "First Internship", description: "CodeXintern - React Developer", icon: Rocket },
{
  year: "2025",
  title: "Third Internship",
  description: "Building scalable web apps with modern stacks",
  icon: Brain,
}
  ]
  const tabs = [
    { id: "story", label: "My Story", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "interests", label: "Interests", icon: Heart },
    { id: "journey", label: "Journey", icon: Rocket },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/10 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Nitesh Verma
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-purple-400 font-semibold relative group">
                About
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Current Page
                </div>
              </Link>
              {[
                { href: "/experience", label: "Experience" },
                { href: "/skills", label: "Skills" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-white/70 hover:text-white hover:bg-white/10 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>

          {/* Enhanced Page Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative inline-block mb-8">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  About Me
                </span>
              </h1>
              <div className="absolute -top-4 -right-4">
                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
              <div className="absolute -bottom-2 -left-2">
                <Star className="w-6 h-6 text-pink-400 animate-spin" />
              </div>
            </div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Get to know the person behind the code - my journey, passions, and what drives me in the world of
              technology and beyond.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-105">
                    <achievement.icon className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="text-white font-bold text-lg">{achievement.count}</div>
                      <div className="text-white/60 text-sm">{achievement.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Main Content */}
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {/* Enhanced Profile Card */}
            <div
              className={`lg:col-span-1 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 sticky top-32 overflow-hidden group">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-blue-500/20 transition-all duration-500"></div>

                <CardContent className="p-8 relative z-10">
                  <div className="text-center mb-8">
                    {/* Enhanced Avatar */}
                    <div className="relative inline-block group mb-6">
                   <div className="w-32 h-32 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-1 group hover:scale-105 transition-transform duration-300 animate-gradient bg-[length:200%_200%]">
  <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center relative overflow-hidden">
    <Image src={myimage} alt="my image" className="w-full h-full object-cover rounded-xl" />
    
    {/* Shine effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
  </div>
</div>


                      {/* Status Indicators */}
                      <div className="absolute -top-2 -right-2 flex gap-1">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-slate-950">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                      </div>

                      {/* Floating Icons */}
                      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center animate-bounce">
                        <Code className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="absolute -top-4 -left-4 w-6 h-6 bg-pink-500/20 rounded-full flex items-center justify-center animate-pulse">
                        <Heart className="w-3 h-3 text-pink-400" />
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-2">Nitesh Verma</h2>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        Full Stack Developer
                      </Badge>
                     
                    </div>
                  </div>

                  {/* Enhanced Personal Info */}
                  <div className="space-y-4 mb-8">
                    {personalInfo.map((info, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                      >
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <info.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-white/60 text-sm">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-3">
                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group">
                        <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Get In Touch
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent group"
                    >
                      <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Download CV
                    </Button>

                    {/* Social Links */}
                    <div className="flex gap-2 pt-2">
  {[
    { Icon: Github, href: "https://github.com/niteshverma01", color: "hover:bg-gray-600" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/nitesh--verma01/", color: "hover:bg-blue-600" },
    { Icon: ExternalLink, href: "https://your-portfolio.com", color: "hover:bg-purple-600" }, // Replace with valid URL
  ].map((social) => (
    <Button
      key={social.href} // Use href as a unique key
      variant="outline"
      size="sm"
      className={`flex-1 border-white/20 text-white bg-transparent ${social.color} group`}
      asChild // If Button supports passing as a link (e.g., from shadcn/ui)
    >
      <a href={social.href} target="_blank" rel="noopener noreferrer">
        <social.Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
      </a>
    </Button>
  ))}
</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Content Section */}
            <div className="lg:col-span-3 space-y-8">
              {/* Interactive Tabs */}
              <div
                className={`transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              >
                <div className="flex flex-wrap gap-2 mb-8">
                  {tabs.map((tab) => (
                    <Button
                      key={tab.id}
                      variant={activeTab === tab.id ? "default" : "outline"}
                      onClick={() => setActiveTab(tab.id)}
                      className={`group ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          : "border-white/20 text-white/80 hover:bg-white/10 hover:text-white bg-transparent"
                      }`}
                    >
                      <tab.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      {tab.label}
                    </Button>
                  ))}
                </div>

                {/* Tab Content */}
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10 min-h-[500px]">
                  <CardContent className="p-8">
                    {activeTab === "story" && (
                      <div className="space-y-6 animate-fade-in">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">My Journey</h3>
                        </div>

                        <div className="relative">
                          <Quote className="absolute -top-2 -left-2 w-8 h-8 text-purple-400/50" />
                          <p className="text-white/80 leading-relaxed text-lg pl-6">
                            Hello! I'm Nitesh, a passionate full-stack developer and AI enthusiast currently in my final
                            year of studying Artificial Intelligence and Data Science at Jabalpur Engineering College.
                          </p>
                        </div>

                        <p className="text-white/80 leading-relaxed">
                          My journey in technology began with curiosity about how websites work, which led me to dive
                          deep into web development. Over the years, I've gained hands-on experience through multiple
                          internships, working with modern technologies and contributing to real-world projects.
                        </p>

                        <p className="text-white/80 leading-relaxed">
                          I believe in the power of technology to solve real-world problems and create meaningful
                          experiences. Whether it's building responsive web applications or exploring the possibilities
                          of AI, I'm always excited to learn and grow.
                        </p>

                        {/* Highlighted Quote */}
                        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-white/10 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                          <p className="text-white/90 italic text-lg font-medium">
                            "Code is poetry written in logic, and every bug is just a plot twist waiting to be
                            resolved."
                          </p>
                          <p className="text-purple-400 text-sm mt-2">- My coding philosophy</p>
                        </div>
                      </div>
                    )}

                    {activeTab === "skills" && (
                      <div className="space-y-6 animate-fade-in">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <Code className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">Core Skills</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          {coreSkills.map((skill, index) => (
                            <div
                              key={index}
                              className="group cursor-pointer"
                              onMouseEnter={() => setHoveredSkill(index)}
                              onMouseLeave={() => setHoveredSkill(null)}
                            >
                              <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-105">
                                <div className="flex items-center justify-between mb-4">
                                  <div className="flex items-center gap-3">
                                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                      {skill.icon}
                                    </span>
                                    <span className="text-white font-medium text-lg group-hover:text-purple-300 transition-colors">
                                      {skill.name}
                                    </span>
                                  </div>
                                  <div className="text-right">
                                    <span className="text-white/60 text-sm font-bold">{skill.level}%</span>
                                    <div className="flex gap-1 mt-1">
                                      {[...Array(5)].map((_, i) => (
                                        <Star
                                          key={i}
                                          className={`w-3 h-3 ${
                                            i < Math.floor(skill.level / 20)
                                              ? "text-yellow-400 fill-current"
                                              : "text-white/20"
                                          }`}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                                  <div
                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse relative overflow-hidden`}
                                    style={{
                                      width: isLoaded ? `${skill.level}%` : "0%",
                                      transitionDelay: `${index * 100}ms`,
                                    }}
                                  >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
                                  </div>
                                </div>
                                {hoveredSkill === index && (
                                  <p className="text-white/70 text-sm mt-3 animate-fade-in">
                                    Proficient in building modern applications with {skill.name}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === "interests" && (
                      <div className="space-y-6 animate-fade-in">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                            <Heart className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">What I Love</h3>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {interests.map((interest, index) => (
                            <div key={index} className="group cursor-pointer">
                              <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-105 text-center">
                                <div
                                  className={`w-12 h-12 bg-gradient-to-r ${interest.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                                >
                                  <interest.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                                  {interest.label}
                                </h4>
                                <p className="text-white/70 text-sm">{interest.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Fun Facts */}
                        <div className="mt-12">
                          <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Coffee className="w-5 h-5 text-yellow-400" />
                            Fun Facts About Me
                          </h4>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {funFacts.map((fact, index) => (
                              <div
                                key={index}
                                className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer border border-white/10 hover:border-white/20"
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {fact.emoji}
                                  </span>
                                  <span className="text-white/80 text-sm font-medium">{fact.text}</span>
                                </div>
                                <p className="text-white/60 text-xs">{fact.detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "journey" && (
                      <div className="space-y-6 animate-fade-in">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                            <Rocket className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">My Timeline</h3>
                        </div>

                        <div className="relative">
                          {/* Timeline Line */}
                          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

                          <div className="space-y-8">
                            {timeline.map((item, index) => (
                              <div key={index} className="relative flex items-start gap-6 group">
                                {/* Timeline Dot */}
                                <div className="relative z-10">
                                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-8 h-8 text-white" />
                                  </div>
                                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-20"></div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pb-8">
                                  <div className="bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                                    <div className="flex items-center gap-3 mb-3">
                                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                                        {item.year}
                                      </Badge>
                                      <h4 className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors">
                                        {item.title}
                                      </h4>
                                    </div>
                                    <p className="text-white/70">{item.description}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
                  {/* Enhanced CTA Section */}
          <div
            className={`text-center transition-all duration-1000 delay-1300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 relative overflow-hidden group">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-float delay-1000"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                  <h3 className="text-2xl font-bold text-white">Let's Connect!</h3>
                  <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                </div>
                <p className="text-white/70 mb-6 max-w-2xl mx-auto leading-relaxed">
                  I'm always excited to meet new people and discuss technology, projects, or just have a friendly chat.
                  Whether you want to collaborate, need advice, or simply want to say hello!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 group">
                      <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Get In Touch
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button
                      variant="outline"
                      className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm bg-transparent group"
                    >
                      <Rocket className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      View My Work
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
            </div>
          </div>

      
        </div>
      </main>
    </div>
  )
}
