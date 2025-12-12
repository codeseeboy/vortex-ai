"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface EventHeroProps {
  backgroundImage: string
  title: string
  date: string
  entryFee: string
  accentColor: string
  subtitle?: string
  particles?: boolean
  imagePosition?: "center" | "bottom"
  onRegisterClick?: () => void
}

export function EventHero({
  backgroundImage,
  title,
  date,
  entryFee,
  accentColor,
  subtitle,
  particles = false,
  imagePosition = "center",
  onRegisterClick,
}: EventHeroProps) {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsMobile(window.innerWidth < 768)
  }, [])

  const imageSource = isMobile && backgroundImage.includes("vecna-coding-lab")
    ? "/mobile-view-vecna-code-lab.png"
    : isMobile && backgroundImage.includes("efootball-laptop")
      ? "/efootball-mobile.png"
      : backgroundImage

  const imageClass = isMobile && backgroundImage.includes("efootball-laptop")
    ? "object-cover object-center"
    : backgroundImage.includes("bgmi2")
      ? "object-cover object-center"
      : `object-cover ${imagePosition === "bottom" ? "object-bottom" : "object-center"}`

  return (
    <section className="relative min-h-screen md:h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 will-change-auto">
        <Image
          src={imageSource || "/placeholder.svg"}
          alt={title}
          fill
          className={imageClass}
          priority
          quality={100}
          unoptimized
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${accentColor}10 0%, transparent 60%)`,
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
      <div className="absolute inset-0 flex items-end pb-32 md:pb-28">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl">
            {/* Event badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-4 md:mb-6 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ borderColor: `${accentColor}60`, backgroundColor: `${accentColor}20` }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
              <span className="text-xs tracking-[0.2em] text-white/90">VORTEX AI EVENT</span>
            </div>

            {/* Title */}
            <h1
              className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-3 md:mb-6 transition-all duration-1000 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {title}
            </h1>

            {/* Subtitle if provided */}
            {subtitle && (
              <p
                className={`text-gray-400 text-lg md:text-xl mb-6 transition-all duration-1000 delay-200 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {subtitle}
              </p>
            )}

            {/* Meta info */}
            <div
              className={`flex flex-wrap items-center gap-2 md:gap-6 text-xs md:text-base transition-all duration-1000 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="flex items-center gap-1.5 md:gap-2 text-gray-300">
                <svg
                  className="w-3 h-3 md:w-5 md:h-5"
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
              <span className="flex items-center gap-1.5 md:gap-2 text-gray-300">
                <svg
                  className="w-3 h-3 md:w-5 md:h-5"
                  style={{ color: accentColor }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {entryFee}
              </span>
            </div>

            {/* Register Button */}
            <button
              onClick={onRegisterClick}
              className={`mt-6 md:mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold tracking-wider transition-all duration-500 hover:shadow-lg ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                backgroundColor: accentColor,
                color: "white",
                boxShadow: `0 0 20px ${accentColor}40`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 30px ${accentColor}80`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 20px ${accentColor}40`
              }}
            >
              REGISTER NOW
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
