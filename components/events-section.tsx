"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { PortalTransition } from "./portal-transition"

const events = [
  {
    id: "vecna-code-lab",
    name: "Vecna Code Lab",
    date: "Dec 18",
    time: "11:00 AM - 1:00 PM",
    description: "Summon your digital world",
    image: "/img3.jpg",
    color: "red",
    entryFee: "₹50",
    teamSize: "1 member",
  },
  {
    id: "e-football",
    name: "E-Football",
    date: "Dec 18",
    time: "11:00 AM - 1:00 PM",
    description: "Virtual football tournament championship",
    image: "/img9.jpg",
    color: "blue",
    entryFee: "₹60",
    teamSize: "1 member",
  },
  {
    id: "pitchgate",
    name: "PitchGate",
    date: "Dec 19",
    time: "11:00 AM - 1:00 PM",
    description: "Pitch to the upside down",
    image: "/img7.webp",
    color: "orange",
    entryFee: "₹150",
    teamSize: "Max 4 members",
  },
  {
    id: "cr",
    name: "Clash Royale",
    date: "Dec 19",
    time: "11:00 AM - 1:00 PM",
    description: "Strategic tower battle tournament",
    image: "/img8.jpg",
    color: "purple",
    entryFee: "₹60",
    teamSize: "1 member",
  },
  {
    id: "bgmi-finals",
    name: "BGMI",
    date: "Dec 19",
    time: "1:30 PM - 4:30 PM",
    description: "Championship showdown finals",
    image: "/img2.jpg",
    color: "red",
    entryFee: "₹200",
    teamSize: "Max 4 members",
  },
]

function EventCard({ event, index }: { event: (typeof events)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isTapped, setIsTapped] = useState(false)
  const [showPortal, setShowPortal] = useState(false)
  const [targetUrl, setTargetUrl] = useState("")
  const router = useRouter()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Staggered animation delay
          setTimeout(() => setIsVisible(true), index * 120)
        }
      },
      { threshold: 0.15 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  const handleClick = () => {
    // Mobile tap feedback
    setIsTapped(true)
    setTargetUrl(`/events/${event.id}`)
    setShowPortal(true)
  }

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative cursor-pointer transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${isTapped ? "scale-[0.98]" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Card container */}
      <div
        className={`relative overflow-hidden rounded-lg sm:rounded-xl border border-white/5 bg-black/40 backdrop-blur-sm transition-all duration-500 ${
          isHovered ? "border-red-600/50 shadow-lg shadow-red-900/20 animate-pulse" : ""
        }`}
        style={{
          animation: isHovered ? 'borderGlow 2s ease-in-out infinite' : 'none'
        }}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.name}
            fill
            className={`object-cover transition-all duration-700 ${isHovered ? "scale-105 brightness-75" : "brightness-90"}`}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          {/* Hover red overlay - Desktop only */}
          <div
            className={`absolute inset-0 bg-red-900/10 transition-opacity duration-300 hidden sm:block ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Enter portal indicator - Desktop only */}
          <div
            className={`absolute inset-0 items-center justify-center transition-all duration-300 hidden sm:flex ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-14 h-14 rounded-full border border-red-500/50 flex items-center justify-center bg-black/60">
              <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-red-500 text-[10px] sm:text-xs font-mono">{event.date}</span>
            <span className="text-gray-700">•</span>
            <span className="text-gray-500 text-[10px] sm:text-xs">{event.time}</span>
          </div>
          <h3
            className={`text-base sm:text-lg lg:text-xl font-serif font-semibold transition-colors duration-300 ${
              isHovered ? "text-red-400" : "text-white"
            }`}
          >
            {event.name}
          </h3>
          <p className="text-gray-500 text-[11px] sm:text-xs mt-1.5 line-clamp-2">{event.description}</p>

          {/* Entry Fee and Team Size */}
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-3 text-[10px] sm:text-xs">
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-red-600/10 border border-red-600/20 rounded">
              <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm3.5 7c.828 0 1.5.672 1.5 1.5S16.328 13 15.5 13 14 12.328 14 11.5s.672-1.5 1.5-1.5zm-7 0c.828 0 1.5.672 1.5 1.5S9.328 13 8.5 13 7 12.328 7 11.5 7.672 10 8.5 10zm3.5 5.5c2.33 0 4.31 1.46 5.02 3.5H6.48c.71-2.04 2.69-3.5 5.02-3.5z" />
              </svg>
              <span className="text-red-400 font-medium">{event.entryFee || "N/A"}</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-blue-600/10 border border-blue-600/20 rounded">
              <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span className="text-blue-400 font-medium">{event.teamSize || "N/A"}</span>
            </div>
          </div>

          {/* Mobile arrow indicator */}
          <div className="flex items-center gap-1 mt-3 sm:hidden">
            <span className="text-red-500 text-[10px] tracking-wider">ENTER</span>
            <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Subtle glow on visibility - red spark effect */}
      <div
        className={`absolute -inset-0.5 bg-red-600/5 rounded-xl blur-xl transition-opacity duration-1000 -z-10 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ animationDelay: `${index * 0.12}s` }}
      />

      {/* Portal Transition */}
      <PortalTransition
        isOpen={showPortal}
        targetUrl={targetUrl}
        onComplete={() => setShowPortal(false)}
        backgroundImage={event.image}
      />
    </div>
  )
}

export function EventsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="events" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background image - seamless, no borders visible */}
      <div className="absolute inset-0 -top-40 -bottom-40 -left-10 -right-10">
        <Image 
          src="/vortex-ai/005.webp?v=2" 
          alt="Background" 
          fill 
          className="object-cover object-center"
          quality={100}
          style={{ transform: 'scale(1.05)' }}
          unoptimized
        />
        {/* Multiple gradient overlays for seamless blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>
      
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-10 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-red-600 text-[10px] sm:text-xs tracking-[0.4em] mb-3 sm:mb-4">DECEMBER 18-19</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">THE EVENTS</h2>
          <p className="mt-3 sm:mt-4 text-gray-600 text-xs sm:text-sm tracking-wider">Choose your destiny</p>

          {/* Red line accent */}
          <div className="w-20 sm:w-24 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-6 sm:mt-8" />
        </div>

        {/* Events grid - Masonry layout for desktop */}
        <div className="hidden lg:block">
          {/* Desktop: 3 rows with staggered positions and VFX */}
          <div className="space-y-6">
            {/* Row 1: 2 events (left and right) */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <EventCard event={events[0]} index={0} />
              </div>
              <div className="col-span-1" />
              <div>
                <EventCard event={events[1]} index={1} />
              </div>
            </div>

            {/* Row 2: 2 events (offset middle) */}
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-1" />
              <div>
                <EventCard event={events[2]} index={2} />
              </div>
              <div className="col-span-1" />
            </div>

            {/* Row 3: 2 events (left and right) */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <EventCard event={events[3]} index={3} />
              </div>
              <div className="col-span-1" />
              <div>
                <EventCard event={events[4]} index={4} />
              </div>
            </div>
          </div>

          {/* Stranger Things Style VFX - Desktop only */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 10px rgba(220, 38, 38, 0.1))' }}>
            <defs>
              <linearGradient id="glitchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(220, 38, 38, 0.3)" />
                <stop offset="50%" stopColor="rgba(220, 38, 38, 0.1)" />
                <stop offset="100%" stopColor="rgba(220, 38, 38, 0)" />
              </linearGradient>
            </defs>
            
            {/* Connecting lines between cards */}
            <line x1="33%" y1="15%" x2="66%" y2="50%" stroke="url(#glitchGradient)" strokeWidth="1" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
            </line>
            <line x1="66%" y1="50%" x2="33%" y2="85%" stroke="url(#glitchGradient)" strokeWidth="1" opacity="0.4">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" begin="1s" />
            </line>
            <line x1="33%" y1="50%" x2="66%" y2="50%" stroke="url(#glitchGradient)" strokeWidth="1" opacity="0.3">
              <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite" />
            </line>
          </svg>
        </div>

        {/* Mobile: Standard grid */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
