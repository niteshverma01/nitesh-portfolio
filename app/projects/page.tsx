"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowLeft, Eye, Star, GitFork, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import bookstore from "../../public/bookstore.png"
import wonderlust from "../../public/wanderlust.png"
import tazza from "../../public/tazza.png"
import myclinic from "../../public/clinic.png"
import portfolio from "../../public/portfolio.png"
import weather from "../../public/weather.png"

export default function ProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = [
    {
      title: "Books Store",
      description:
        "Built a MERN stack bookstore with login/signup, offering free and paid books for a smooth browsing and purchasing experience.",
      longDescription:
        "A comprehensive e-commerce platform for books with user authentication, payment integration, and admin panel for inventory management. Features include advanced search, wishlist functionality, and order tracking.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Stripe", "Redux"],
      features: [
        "User Authentication",
        "Book Search",
        
      ],
      liveUrl: "#",
      sourceUrl: "#",
      image: bookstore,
      status: "Completed",
      category: "Full Stack",
      stats: { stars: 24, forks: 8, views: 156 },
      year: "2024",
      difficulty: "Advanced",
    },
    {
      title: "Wanderlust",
      description:
        "Wanderlust is a website similar to Airbnb, where you can explore unique places, add new listings, and manage or delete your own entries seamlessly.",
      longDescription:
        "A travel booking platform with property listings, user reviews, and booking management system. Includes interactive maps, photo galleries, and real-time availability checking.",
      technologies: ["Bootstrap CSS", "EJS", "JavaScript", "Node.js", "MongoDB", "Passport.js", "Cloudinary"],
      features: [
        "Property Listings",
        "User Reviews",
        "Booking System",
        "Image Upload",
        "Location Maps",
       
      ],
      liveUrl: "#",
      sourceUrl: "#",
      image: wonderlust,
      status: "Completed",
      category: "Web App",
      stats: { stars: 18, forks: 12, views: 203 },
      year: "2024",
      difficulty: "Intermediate",
    },
    {
      title: "Tazza App",
      description:
        "Created a responsive grocery web application for seamless user interaction. Integrated GitHub libraries for advanced image handling and enhanced functionality.",
      longDescription:
        "A modern grocery shopping app with real-time inventory, order tracking, and delivery management. Features include barcode scanning, price comparison, and loyalty rewards.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Local Storage", "PWA"],
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Order History",
        "Responsive Design",
        "Image Gallery",
        "Offline Support",
      ],
      liveUrl: "#",
      sourceUrl: "#",
      image: tazza,
      status: "Completed",
      category: "Frontend",
      stats: { stars: 15, forks: 6, views: 89 },
      year: "2023",
      difficulty: "Beginner",
    },
    {
      title: "My Clinic",
      description:
        "A comprehensive clinic management system with appointment scheduling and patient management features.",
      longDescription:
        "Healthcare management system with patient records, appointment scheduling, and doctor-patient communication. Includes prescription management, medical history tracking, and billing integration.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL", "Chart.js"],
      features: [
        "Appointment Booking",
        "Patient Records",
        "Doctor Dashboard",
        "Medical History",
        "Prescription Management",
        "Analytics",
      ],
      liveUrl: "#",
      sourceUrl: "#",
      image: myclinic,
      status: "Completed",
      category: "Web App",
      stats: { stars: 21, forks: 9, views: 134 },
      year: "2023",
      difficulty: "Intermediate",
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts and interactive UI.",
      longDescription:
        "A beautiful weather app with current conditions, 7-day forecast, and weather maps integration. Features include weather alerts, historical data, and customizable widgets.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "Weather API", "Geolocation", "Chart.js"],
      features: [
        "Current Weather",
        "7-Day Forecast",
        "Location Search",
        "Weather Maps",
        "Responsive Design",
        "Weather Alerts",
      ],
      liveUrl: "#",
      sourceUrl: "#",
      image: weather,
      status: "Completed",
      category: "React App",
      stats: { stars: 32, forks: 14, views: 267 },
      year: "2024",
      difficulty: "Intermediate",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects, skills, and professional experience.",
      longDescription:
        "A modern, responsive portfolio website built with Next.js and featuring smooth animations and interactive elements. Includes blog functionality, contact forms, and analytics integration.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "MDX", "Vercel"],
      features: [
        "Responsive Design",
        "Smooth Animations",
        "Contact Form",
        "Project Showcase",
        "Blog Section",
        "SEO Optimized",
      ],
      liveUrl: "#",
      sourceUrl: "#",
      image: portfolio,
      status: "Ongoing",
      category: "Portfolio",
      stats: { stars: 45, forks: 23, views: 412 },
      year: "2024",
      difficulty: "Advanced",
    },
  ]

  const categories = ["All", "Full Stack", "Web App", "Frontend", "React App", "Portfolio"]
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/10 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Nitesh Verma
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { href: "/about", label: "About" },
                { href: "/experience", label: "Experience" },
                { href: "/skills", label: "Skills" },
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
              <Link href="/projects" className="text-purple-400 font-semibold relative">
                Projects
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
              </Link>
              <Link
                href="/contact"
                className="text-white/80 hover:text-white transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-white/70 hover:text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          {/* Page Header */}
          <div
            className={`text-center mb-12 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              A showcase of my work, featuring web applications, tools, and experiments that demonstrate my skills and
              creativity.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div
            className={`mb-12 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-6">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search */}
                <div className="flex-1 w-full lg:w-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
                    <Input
                      placeholder="Search projects, technologies..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      size="sm"
                      className={`rounded-full transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          : "border-white/20 text-white/80 hover:bg-white/10 hover:text-white bg-transparent"
                      }`}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${(index + 1) * 100} ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                // onMouseEnter={() => setHoveredProject(index)}
                // onMouseLeave={() => setHoveredProject(null)}
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group h-full overflow-hidden">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Status and Year Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between">
                      <Badge
                        variant={project.status === "Ongoing" ? "default" : "secondary"}
                        className={`${
                          project.status === "Ongoing" ? "bg-green-600 text-white" : "bg-slate-600 text-white"
                        }`}
                      >
                        {project.status}
                      </Badge>
                      <Badge variant="outline" className="border-white/40 text-white bg-black/20 backdrop-blur-sm">
                        {project.year}
                      </Badge>
                    </div>

                    {/* Difficulty Badge */}
                    <div className="absolute bottom-4 right-4">
                      <Badge
                        variant="outline"
                        className={`border-white/40 text-white bg-black/20 backdrop-blur-sm ${
                          project.difficulty === "Advanced"
                            ? "border-red-400 text-red-300"
                            : project.difficulty === "Intermediate"
                              ? "border-yellow-400 text-yellow-300"
                              : "border-green-400 text-green-300"
                        }`}
                      >
                        {project.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors flex-1">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="border-purple-500 text-purple-300 text-xs ml-2">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {hoveredProject === index ? project.longDescription : project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Technologies */}
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="outline" className="border-white/20 text-white/70 text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="border-white/20 text-white/70 text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Features (shown on hover) */}
                    {hoveredProject === index && (
                      <div className="animate-fade-in">
                        <h4 className="text-white font-semibold text-sm mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-white/60 text-xs">
                              <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-white/60 text-xs">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        <span>{project.stats.forks}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{project.stats.views}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white flex-1">
                        <ExternalLink className="h-3 w-3 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white/80 hover:bg-white/10 hover:text-white bg-transparent flex-1"
                      >
                        <Github className="h-3 w-3 mr-2" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-white/40" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Projects Found</h3>
              <p className="text-white/70 mb-6">Try adjusting your search terms or filters.</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Call to Action */}
          <div
            className={`text-center transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Have a Project in Mind?</h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto leading-relaxed">
                I'm always excited to work on new projects and bring innovative ideas to life. Let's collaborate and
                create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Start a Project
                  </Button>
                </Link>
                <Link href="/skills">
                  <Button
                    variant="outline"
                    className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm bg-transparent"
                  >
                    View My Skills
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
