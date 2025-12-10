"use client"

import { useEffect, useState, type ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"

interface EventLayoutProps {
  children: ReactNode
  backgroundImage: string
  title: string
  date: string
  time: string
  location: string
  accentColor: string
}

export function EventLayout({ children, backgroundImage, title, date, time, location, accentColor }: EventLayoutProps) {
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxY = scrollY * 0.4

  return (
    <div className="min-h-screen bg-black">
      {/* Hero section */}
      <section className="relative h-[85vh] md:h-screen overflow-hidden">
        {/* Background image with parallax */}
        <div className="absolute inset-0" style={{ transform: `translateY(${parallaxY}px)` }}>
          <Image
            src={backgroundImage || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${accentColor}30 0%, transparent 40%)`,
          }}
        />

        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay" />

        {/* Vignette */}
        <div className="absolute inset-0 vignette" />

        {/* Back button */}
        <Link
          href="/"
          className={`absolute top-6 left-4 md:top-8 md:left-8 z-20 flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-black/60 transition-all duration-300 touch-scale ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm tracking-wider hidden md:inline">BACK</span>
        </Link>

        {/* Title content */}
        <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
          <div className="w-full px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl">
              {/* Event badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 transition-all duration-700 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ borderColor: `${accentColor}60`, backgroundColor: `${accentColor}20` }}
              >
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                <span className="text-xs tracking-[0.2em] text-white/90">VORTEX AI EVENT</span>
              </div>

              {/* Title */}
              <h1
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 transition-all duration-1000 delay-100 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {title}
              </h1>

              {/* Meta info */}
              <div
                className={`flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base transition-all duration-1000 delay-300 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <span className="flex items-center gap-2 text-gray-300">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    style={{ color: accentColor }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {date}
                </span>
                <span className="flex items-center gap-2 text-gray-300">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    style={{ color: accentColor }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {time}
                </span>
                <span className="flex items-center gap-2 text-gray-300">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    style={{ color: accentColor }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 tracking-widest">SCROLL</span>
            <svg className="w-5 h-5 text-gray-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 bg-black">{children}</section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/" className="text-gray-500 hover:text-white transition-colors text-sm tracking-wider">
            ← Back to all events
          </Link>
        </div>
      </footer>
    </div>
  )
}
