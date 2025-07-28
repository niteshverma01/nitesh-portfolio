"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
  Code2,
  MapPin,
  GraduationCap,
  ExternalLink,
  Calendar,
  Building,
  Briefcase,
  Menu,
  X,
  Star,
  Zap,
  Target,
  Award,
  User,
  ChevronUp,
  Eye,
  Heart,
  Trophy,
  Users,
  Clock,
  TrendingUp,
  Globe,
  Database,
  Smartphone,
  Monitor,
  Brain,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EnhancedFooter } from "@/components/enhanced-footer";
import myimage from "../public/myimage.jpg";
import bookstore from "../public/e-books.png"
import wonderlust from "../public/wanderlust.png"
import weather from "../public/weather.png"
export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const quickStats = [
    {
      label: "Years of Experience",
      value: "2+",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      description: "Building amazing projects",
    },
    {
      label: "Projects Completed",
      value: "15+",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      description: "Successful deliveries",
    },
    {
      label: "Technologies",
      value: "20+",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500",
      description: "Modern tech stack",
    },
    {
      label: "Happy Clients",
      value: "10+",
      icon: Award,
      color: "from-yellow-500 to-orange-500",
      description: "Satisfied customers",
    },
  ];

  const featuredSkills = [
    {
      name: "React.js",
      level: 90,
      color: "from-blue-500 to-cyan-500",
      icon: "⚛️",
      category: "Frontend",
    },
    {
      name: "Next.js",
      level: 85,
      color: "from-purple-500 to-pink-500",
      icon: "🚀",
      category: "Framework",
    },
    {
      name: "Node.js",
      level: 85,
      color: "from-green-500 to-emerald-500",
      icon: "🟢",
      category: "Backend",
    },
    {
      name: "TypeScript",
      level: 80,
      color: "from-indigo-500 to-purple-500",
      icon: "📘",
      category: "Language",
    },
    {
      name: "JavaScript",
      level: 85,
      color: "from-yellow-500 to-orange-500",
      icon: " 🎉 ",
      category: "Language",
    },
    {
      name: "MongoDB",
      level: 80,
      color: "from-green-600 to-teal-500",
      icon: "🍃",
      category: "Database",
    },
  ];

  const experiences = [
    {
      company: "Payzon India",
      role: "Software Developer",
      duration: "Current",
      period: "2024 - Present",
      type: "Internship",
      status: "Ongoing",
      description:
        "Working on full-stack development projects with React.js and Node.js, implementing modern web technologies and contributing to scalable software solutions.",
      achievements: [
        "Developed 5+ responsive web applications",
        "Improved application performance by 40%",
        "Collaborated with cross-functional teams",
        "Implemented modern UI/UX designs",
      ],
      technologies: ["React.js", "Next.js", "Node.js", "MongoDB", "Express.js"],
      color: "from-green-500 to-emerald-500",
      icon: "💼",
      location: "Remote",
    },
    {
      company: "Meteoros Automation",
      role: "Frontend Engineer",
      duration: "3 Months",
      period: "2024",
      type: "Internship",
      status: "Completed",
      description:
        "Developed responsive web applications using React.js and modern frontend technologies, focusing on user experience and performance optimization.",
      achievements: [
        "Built 8+ React components",
        "Reduced load time by 35%",
        "Implemented responsive designs",
        "Enhanced user experience",
      ],
      technologies: ["Angular", "Typescript", "CSS3", "Bootstrap"],
      color: "from-blue-500 to-cyan-500",
      icon: "⚡",
      location: "Remote",
    },
    {
      company: "CodeXintern",
      role: "React Developer",
      duration: "1 Month",
      period: "2023",
      type: "Internship",
      status: "Completed",
      description:
        "Built interactive React components and modern UI designs, gaining hands-on experience with React ecosystem and best practices.",
      achievements: [
        "Created 10+ reusable components",
        "Learned modern React patterns",
        "Implemented state management",
        "Followed coding best practices",
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3"],
      color: "from-purple-500 to-pink-500",
      icon: "🚀",
      location: "Remote",
    },
  ];

  const featuredProjects = [
    {
      title: "Books Store",
      description:
        "MERN stack bookstore with authentication and payment integration",
      longDescription:
        "A comprehensive e-commerce platform for books with user authentication, payment gateway integration, and admin panel for inventory management.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Stripe",
        "JWT",
      ],
      image: bookstore,
      liveUrl: "#",
      sourceUrl: "#",
      category: "E-commerce",
      featured: true,
      stats: { views: "2.5k", likes: "180", stars: "45" },
      status: "Live",
      year: "2024",
    },
    {
      title: "Wanderlust",
      description: "Airbnb-like platform for property listings and bookings",
      longDescription:
        "A travel booking platform with property listings, user reviews, booking management system, and interactive maps integration.",
      technologies: ["EJS", "Node.js", "MongoDB", "Bootstrap", "Cloudinary"],
      image: wonderlust,
      liveUrl: "#",
      sourceUrl: "#",
      category: "Travel",
      featured: true,
      stats: { views: "1.8k", likes: "120", stars: "32" },
      status: "Live",
      year: "2024",
    },
    {
      title: "Weather App",
      description:
        "Real-time weather application with location-based forecasts",
      longDescription:
        "A beautiful weather app with current conditions, 7-day forecast, weather maps, and location-based weather alerts.",
      technologies: ["React.js", "Tailwind CSS", "Weather API", "Chart.js"],
      image: weather,
      liveUrl: "#",
      sourceUrl: "#",
      category: "Utility",
      featured: true,
      stats: { views: "3.2k", likes: "250", stars: "68" },
      status: "Live",
      year: "2024",
    },
  ];

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "Top Performer",
      description: "Recognized for outstanding project delivery",
      count: "15+",
    },
    {
      icon: "🎯",
      title: "Problem Solver",
      description: "Solved 100+ coding challenges",
      count: "100+",
    },
    {
      icon: "⭐",
      title: "Team Player",
      description: "Collaborated on 15+ team projects",
      count: "15+",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Implemented cutting-edge solutions",
      count: "20+",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "Payzon India",
      content:
        "Nitesh is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are remarkable.",
      avatar: "SJ",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Senior Developer",
      company: "Meteoros Automation",
      content:
        "Working with Nitesh was a pleasure. He quickly adapted to our tech stack and contributed meaningfully to our projects.",
      avatar: "MC",
      rating: 5,
    },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    },

  ];

  useEffect(() => {
    setIsLoaded(true);
    document.documentElement.style.scrollBehavior = "smooth";

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowBackToTop(window.scrollY > 500);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        ></div>
        <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-cyan-500/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-yellow-500/10 rounded-full blur-2xl animate-float delay-2000"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

        {/* Enhanced Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={`dot-${i}`} // Unique key to avoid React reconciliation issues
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
              aria-hidden="true" // Mark as decorative for accessibility
            ></div>
          ))}
        </div>
      </div>

      {/* Mouse Follower - Only on desktop */}
      {!isMobile && (
        <div
          className="fixed w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
            transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
          }}
        ></div>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/10 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Nitesh Verma
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
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

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:bg-white/10 p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-4 animate-fade-in">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/80 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/10 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                      Get In Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
<main className="relative z-10 min-h-screen flex items-center justify-center pt-20 md:pt-0 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left mt-20">
              {/* Greeting with Animation */}
              <div
                className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                {/* <div className="flex items-center gap-3 mb-4 sm:mb-6 justify-center lg:justify-start">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-green-400 font-medium text-sm sm:text-base animate-fade-in">
                    Available for work
                  </span>
                  <Badge variant="outline" className="border-green-400/30 text-green-300 bg-green-400/10 animate-pulse">
                    Open to opportunities
                  </Badge>
                </div> */}

                <div className="mb-6">
                  <p className="text-purple-300 text-lg sm:text-xl mb-2 animate-fade-in">
                    👋 Hello there! I'm
                  </p>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                      Nitesh Verma
                    </span>
                  </h1>
                  <div className="flex items-center gap-2 justify-center lg:justify-start mt-4">
                    <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
                    <span className="text-yellow-400 text-sm font-medium">
                      Crafting Digital Experiences
                    </span>
                  </div>
                </div>
              </div>

              {/* Enhanced Role & Description */}
              <div
                className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="relative">
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-4 sm:mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Full Stack Developer
                    </span>{" "}
                    &{" "}
                    <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                      AI Enthusiast
                    </span>
                  </h2>

                  <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group">
                    <div className="absolute top-4 right-4">
                      <Sparkles className="w-5 h-5 text-purple-400 animate-pulse group-hover:animate-spin" />
                    </div>
                    <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                      I craft digital experiences with modern technologies,
                      specializing in{" "}
                      <span className="text-cyan-400 font-semibold">React</span>
                      ,{" "}
                      <span className="text-green-400 font-semibold">
                        Node.js
                      </span>


                      . Currently pursuing AI & Data Science at{" "}
                      <span className="text-pink-400 font-semibold">
                        Jabalpur Engineering College
                      </span>
                      .
                    </p>

                    <div className="flex items-center gap-4 mt-4 text-sm text-white/60">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <span>Jabalpur, India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Quick Stats */}
              <div
                className={`transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {quickStats.map((stat, index) => (
                    <div
                      key={index}
                      className="group relative p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                      ></div>
                      <div className="relative text-center">
                        <div
                          className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        >
                          <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-white/60 group-hover:text-white/80 transition-colors">
                          {stat.label}
                        </div>
                        <div className="text-xs text-white/40 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div
                className={`transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/projects">
                    <Button className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
                      <span className="relative z-10 flex items-center">
                        View My Work
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto group border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm bg-transparent hover:border-purple-400 hover:text-purple-300"
                    >
                      <span className="flex items-center">
                        Get In Touch
                        <Mail className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div
                className={`transition-all duration-1000 delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <span className="text-white/60 text-sm hidden sm:block">
                    Connect with me:
                  </span>
                  <div className="flex gap-3">
                    {[
                      {
                        icon: Github,
                        href: "https://github.com/niteshverma01",
                        label: "GitHub",
                        color: "hover:bg-gray-600",
                        count: "50+",
                      },
                      {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/in/nitesh--verma01/",
                        label: "LinkedIn",
                        color: "hover:bg-blue-600",
                        count: "9000+",
                      },
                      {
                        icon: Mail,
                        href: "/contact",
                        label: "Email",
                        color: "hover:bg-purple-600",
                        count: "24h",
                      },
                      {
                        icon: Download,
                        href: "/Nitesh-Resume.pdf", // ✅ Public folder me resume hona chahiye
                        label: "Resume",
                        color: "hover:bg-green-600",
                        count: "PDF",
                        download: true // optional: agar aap download attribute use karte ho rendering me
                      }

                    ].map((social, index) => (
                      <div key={index} className="relative group">
                        <a
                          href={social.href}
                          className={`group p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 ${social.color} hover:scale-110 block`}
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                        </a>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {social.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Professional Card */}
            <div className="relative order-first lg:order-last">
              <div
                className={`transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              >
                <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 overflow-hidden group hover:border-white/20 transition-all duration-300">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-blue-500/20 transition-all duration-500"></div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>

                  <CardContent className="relative z-10 p-0">
                    {/* Professional Profile Section */}
                    <div className="text-center mb-6 sm:mb-8">
                      <div className="relative inline-block group mb-6">
                        {/* Professional Avatar */}
                        <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-1 group-hover:scale-105 transition-transform duration-300">
                          <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                            <Image
                              src={myimage}
                              alt="my image"
                              className="w-full h-full object-cover rounded-xl"
                            />

                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                          </div>
                        </div>


                        {/* Status Indicator */}
                        <div className="absolute -top-2 -right-2">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-slate-900">
                            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>

                      {/* Name and Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        Nitesh Verma
                      </h3>
                      <p className="text-purple-400 font-semibold text-lg mb-4">
                        Full Stack Developer
                      </p>
                    </div>

                    {/* Education Info */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium text-sm">
                            4th Year Student
                          </p>
                          <p className="text-white/70 text-xs">
                            AI & Data Science
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium text-sm">
                            Jabalpur Engineering College
                          </p>
                          <p className="text-white/70 text-xs">
                            Madhya Pradesh, India
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Skills Preview */}
                    {/* <div className="mb-6">
                      <h4 className="text-white font-semibold mb-4 text-center text-sm sm:text-base flex items-center justify-center gap-2">
                        <Code2 className="w-4 h-4 text-purple-400" />
                        Top Skills
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {featuredSkills.slice(0, 4).map((skill, index) => (
                          <div key={index} className="group cursor-pointer">
                            <div className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-lg">{skill.icon}</span>
                                <span className="text-xs sm:text-sm text-white/80 font-medium">{skill.name}</span>
                              </div>
                              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                                <div
                                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                                  style={{
                                    width: isLoaded ? `${skill.level}%` : "0%",
                                    transitionDelay: `${index * 100}ms`,
                                  }}
                                ></div>
                              </div>
                              <div className="text-right mt-1">
                                <span className="text-xs text-white/60">{skill.level}%</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div> */}

                    {/* Quick Actions */}
                    <div className="space-y-3 ">
                      <Link href="/contact">
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                          <Mail className="w-4 h-4 mr-2" />
                          Get In Touch
                        </Button>
                      </Link>
                      <a href="/Nitesh-Resume.pdf" target="_blank" rel="noopener noreferrer" className="pt-4">
                        <Button
                          variant="outline"
                          className="w-full border-white/20 text-white hover:bg-white/10 py-3 rounded-xl font-semibold transition-all duration-300 bg-transparent"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          View CV
                        </Button>
                      </a>

                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-cyan-500/30 rounded-full blur-lg animate-float"></div>
              <div className="absolute top-1/4 -right-6 w-6 h-6 bg-yellow-500/30 rounded-full blur-lg animate-float delay-1000"></div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
            onClick={() => scrollToSection("experience")}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden hover:border-purple-400 transition-colors group-hover:scale-110">
                <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-pulse"></div>
              </div>
              <span className="text-white/50 text-xs group-hover:text-purple-300 transition-colors">
                Scroll to explore
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Experience Section */}
      <section
        id="experience"
        className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-slate-900/50 to-purple-900/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Professional Experience
                </span>
              </h2>
            </div>
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              My journey through various internships and hands-on experience in
              building modern web applications
            </p>
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm">
                  2+ Years Experience
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm">3 Companies</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 text-sm">15+ Projects</span>
              </div>
            </div>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${(index + 1) * 200} ${isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden hover:scale-[1.02]">
                  <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                  <CardContent className="p-6 sm:p-8">
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Left Column - Company Info */}
                      <div className="lg:col-span-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`p-4 rounded-2xl bg-gradient-to-r ${exp.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                          >
                            <div className="text-2xl">{exp.icon}</div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                              {exp.role}
                            </h3>
                            <div className="flex items-center gap-2 text-purple-400 font-semibold mb-2">
                              <Building className="w-4 h-4" />
                              {exp.company}
                            </div>
                            <div className="flex flex-wrap gap-3 text-white/60 text-sm">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>{exp.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Badge
                          variant={
                            exp.status === "Ongoing" ? "default" : "secondary"
                          }
                          className={`${exp.status === "Ongoing"
                            ? "bg-green-600 hover:bg-green-700 text-white animate-pulse"
                            : "bg-slate-600 hover:bg-slate-700 text-white"
                            } px-4 py-2 text-sm font-medium`}
                        >
                          {exp.status}
                        </Badge>
                      </div>

                      {/* Right Column - Details */}
                      <div className="lg:col-span-2 space-y-6">
                        <p className="text-white/80 text-base leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-green-400" />
                            Key Achievements
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {exp.achievements.map((achievement, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-3 text-white/70 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                              >
                                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm leading-relaxed">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Code2 className="w-4 h-4 text-purple-400" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="border-white/20 text-white/80 hover:border-purple-400 hover:text-purple-300 transition-all duration-300 hover:scale-105 cursor-pointer px-3 py-1"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/experience">
              <Button
                variant="outline"
                className="group border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm bg-transparent hover:scale-105"
              >
                View Detailed Experience
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects Section */}
      <section
        id="projects"
        className="relative z-10 py-16 sm:py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
            </div>
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              A showcase of my recent work demonstrating technical expertise and
              creative problem-solving
            </p>
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm">Live Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm">Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm">10k+ Users</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${(index + 1) * 200} ${isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group h-full overflow-hidden hover:scale-105">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Project Badges */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                      <Badge className="bg-purple-600 text-white font-medium">
                        {project.category}
                      </Badge>
                      <div className="flex gap-2">
                        {project.featured && (
                          <div className="p-1 bg-yellow-500 rounded-full">
                            <Star className="w-3 h-3 text-white fill-current" />
                          </div>
                        )}
                        <Badge
                          variant="outline"
                          className="border-white/40 text-white bg-black/20 backdrop-blur-sm"
                        >
                          {project.year}
                        </Badge>
                      </div>
                    </div>

                    {/* Project Stats Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex justify-between items-center text-white text-xs">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{project.stats.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            <span>{project.stats.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            <span>{project.stats.stars}</span>
                          </div>
                        </div>
                        <Badge className="bg-green-600 text-white text-xs">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-white/20 text-white/70 text-xs hover:border-purple-400 hover:text-purple-300 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="border-white/20 text-white/70 text-xs"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex-1 text-sm group/btn"
                      >
                        <ExternalLink className="h-3 w-3 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white/80 hover:bg-white/10 hover:text-white bg-transparent flex-1 text-sm group/btn"
                      >
                        <Github className="h-3 w-3 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button
                variant="outline"
                className="group border-2 border-blue-500/50 text-blue-300 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm bg-transparent hover:scale-105"
              >
                Explore All Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section
        id="skills"
        className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-slate-900/50 to-purple-900/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Skills & Technologies
                </span>
              </h2>
            </div>
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              The comprehensive toolkit I use to transform ideas into powerful
              digital solutions
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${(index + 1) * 100} ${isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group p-6 hover:scale-105 h-full">
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3 group-hover:text-purple-300 transition-colors">
                      {category.title}
                    </h3>
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="text-white/70 text-sm p-2 rounded bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Individual Skills */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSkills.map((skill, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${(index + 1) * 100} ${isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group p-6 hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <div>
                        <span className="text-white font-medium group-hover:text-purple-300 transition-colors text-lg">
                          {skill.name}
                        </span>
                        <p className="text-white/50 text-xs">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-white/60 text-sm font-bold">
                        {skill.level}%
                      </span>
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(skill.level / 20)
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
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/skills">
              <Button
                variant="outline"
                className="group border-2 border-green-500/50 text-green-300 hover:bg-green-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm bg-transparent hover:scale-105"
              >
                Explore All Skills
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/*
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 animate-pulse">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  What People Say
                </span>
              </h2>
            </div>
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Feedback from colleagues and clients I've had the pleasure to work
              with
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group p-6 hover:scale-105 h-full">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">
                          {testimonial.name}
                        </h4>
                        <p className="text-purple-400 text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-white/60 text-xs">
                          {testimonial.company}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-white/80 italic leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Enhanced CTA Section */}
      <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-xl border border-white/10 overflow-hidden group">
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-float delay-1000"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Let's Create Something Amazing
                    </span>
                  </h2>
                  <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                </div>

                <p className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                  Ready to bring your ideas to life? I'm always excited to
                  discuss new opportunities, innovative projects, or just have a
                  friendly chat about technology and development.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
                  <Link href="/contact">
                    <Button className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
                      <span className="relative z-10 flex items-center">
                        <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                        Start a Conversation
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </Link>
                  <a href="/Nitesh-Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto group border-2 border-purple-400 text-purple-300 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent hover:scale-105"
                    >
                      <Download className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                      Download Resume
                    </Button>
                  </a>

                </div>

                {/* Contact Methods */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>niteshverma9025@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span>Jabalpur, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>Available 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
