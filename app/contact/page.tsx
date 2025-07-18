"use client"

import { useState, useEffect } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  ArrowLeft,
  Send,
  Github,
  Linkedin,
  Twitter,
  Download,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
  MessageSquare,
  User,
  AtSign,
  FileText,
  Sparkles,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { submitContactForm } from "../actions/contact"

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  // Add debugging effect
  useEffect(() => {
    if (state) {
      console.log("📋 Form submission result:", state)
    }
  }, [state])

  useEffect(() => {
    setIsLoaded(true)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "niteshverma9025@gmail.com",
      href: "mailto:niteshverma9025@gmail.com",
      color: "from-blue-500 to-cyan-500",
      description: "Best way to reach me",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      color: "from-green-500 to-emerald-500",
      description: "Available 9 AM - 6 PM IST",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jabalpur, Madhya Pradesh, India",
      href: "#",
      color: "from-purple-500 to-pink-500",
      description: "Open to remote work",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/niteshverma9025",
      color: "hover:bg-gray-600",
      followers: "150+",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/niteshverma9025",
      color: "hover:bg-blue-600",
      followers: "500+",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/niteshverma9025",
      color: "hover:bg-sky-400",
      followers: "200+",
    },
  ]

  const responseTime = {
    email: "Within 24 hours",
    phone: "Immediate",
    social: "Within 12 hours",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/10 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Nitesh Verma
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { href: "/about", label: "About" },
                { href: "/experience", label: "Experience" },
                { href: "/skills", label: "Skills" },
                { href: "/projects", label: "Projects" },
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
              <Link href="/contact" className="text-purple-400 font-semibold relative">
                Contact
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/">
            <Button variant="ghost" className="mb-6 sm:mb-8 text-white/70 hover:text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          {/* Page Header */}
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              I'm always excited to connect with fellow developers, potential collaborators, and anyone interested in
              technology. Let's start a conversation!
            </p>

            {/* Email Status Indicator */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full">
                <Zap className="w-4 h-4 text-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Email Service Active</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">Instant Delivery</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div
                className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10 h-full">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl text-white flex items-center gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      Send Me a Message
                    </CardTitle>
                    <p className="text-white/60 text-sm sm:text-base">
                      Fill out the form below and I'll get back to you as soon as possible. Your message will be sent
                      directly to my email.
                    </p>
                  </CardHeader>
                  <CardContent>
                    {/* Success/Error Message */}
                    {state && (
                      <div
                        className={`mb-6 p-4 rounded-lg flex items-start gap-3 animate-fade-in ${
                          state.success
                            ? "bg-green-600/20 border border-green-500/30"
                            : "bg-red-600/20 border border-red-500/30"
                        }`}
                      >
                        {state.success ? (
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        )}
                        <div>
                          <p className={`font-medium ${state.success ? "text-green-300" : "text-red-300"}`}>
                            {state.success ? "Message Sent Successfully! 🎉" : "Error Sending Message ❌"}
                          </p>
                          <p className={`text-sm mt-1 ${state.success ? "text-green-200" : "text-red-200"}`}>
                            {state.message}
                          </p>
                        </div>
                      </div>
                    )}

                    <form action={formAction} className="space-y-4 sm:space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 h-10 sm:h-12 transition-all duration-300"
                            placeholder="Your full name"
                            required
                            disabled={isPending}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                            <AtSign className="w-4 h-4 inline mr-2" />
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 h-10 sm:h-12 transition-all duration-300"
                            placeholder="your.email@example.com"
                            required
                            disabled={isPending}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-2">
                          <FileText className="w-4 h-4 inline mr-2" />
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 h-10 sm:h-12 transition-all duration-300"
                          placeholder="What's this about?"
                          required
                          disabled={isPending}
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 min-h-[120px] sm:min-h-[150px] resize-none transition-all duration-300"
                          placeholder="Tell me about your project, ask a question, or just say hello!"
                          required
                          disabled={isPending}
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin mr-2" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>

                      {/* Form Help Text */}
                      <div className="text-center">
                        <p className="text-white/50 text-xs">
                          Your message will be sent directly to{" "}
                          <span className="text-purple-400 font-medium">niteshverma9025@gmail.com</span>
                        </p>
                        <div className="flex items-center justify-center gap-2 mt-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-400 text-xs">Email service is active and ready</span>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Information - Takes 1 column */}
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Details */}
              <div
                className={`transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl text-white">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div
                          className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                        >
                          <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white/60 text-xs sm:text-sm">{info.label}</p>
                          <p className="text-white font-medium mb-1 text-sm sm:text-base break-words">{info.value}</p>
                          <p className="text-white/50 text-xs">{info.description}</p>
                        </div>
                      </a>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Social Links */}
              <div
                className={`transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl text-white">Connect With Me</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <div className="grid gap-3">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-between p-3 sm:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group ${social.color}`}
                        >
                          <div className="flex items-center gap-3">
                            <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-white font-medium text-sm sm:text-base">{social.label}</span>
                          </div>
                          <Badge variant="outline" className="border-white/20 text-white/60 text-xs">
                            {social.followers}
                          </Badge>
                        </a>
                      ))}
                    </div>
                    <div className="pt-2 sm:pt-4">
                      <Button
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent text-sm sm:text-base"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Availability */}
              <div
                className={`transition-all duration-1000 delay-900 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              >
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-semibold text-sm sm:text-base">Available for Work</span>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                      I'm currently open to new opportunities and exciting projects. Whether you're looking for a
                      full-time developer, freelance work, or collaboration.
                    </p>

                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-white font-medium text-xs sm:text-sm flex items-center gap-2">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        Response Time
                      </h4>
                      <div className="space-y-1 sm:space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-white/60">Email:</span>
                          <span className="text-white">{responseTime.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Phone:</span>
                          <span className="text-white">{responseTime.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Social:</span>
                          <span className="text-white">{responseTime.social}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Quick Contact Options */}
          <div
            className={`text-center transition-all duration-1000 delay-1100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Prefer a Quick Chat?</h3>
              <p className="text-white/70 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
                Sometimes a quick conversation is all it takes to get started. Feel free to reach out through any of
                these channels for immediate assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a href="mailto:niteshverma9025@gmail.com">
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Email Me
                  </Button>
                </a>
                <a href="tel:+919876543210">
                  <Button
                    variant="outline"
                    className="border-2 border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold transition-all duration-300 backdrop-blur-sm bg-transparent"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Call Me
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
