"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isVisible, setIsVisible] = useState(false)
  const [isRevealed, setIsRevealed] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Target date: December 18, 2025 at 10:00 AM
  const targetDate = new Date("2025-12-18T10:00:00").getTime()

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setIsRevealed(true)
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const TimeBlock = ({ value, label, delay }: { value: number; label: string; delay: number }) => (
    <div
      className={`flex flex-col items-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative">
        {/* Main number */}
        <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-red-600 animate-heartbeat">
          {String(value).padStart(2, "0")}
        </div>
        {/* Subtle shadow - no excessive glow */}
        <div className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-red-600/10 blur-sm -z-10">
          {String(value).padStart(2, "0")}
        </div>
      </div>
      <span className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-gray-500 tracking-[0.2em] uppercase">{label}</span>
    </div>
  )

  return (
    <section id="countdown" ref={sectionRef} className="relative w-full overflow-hidden py-6 sm:py-10 lg:py-16">
      {/* Background image - image.jpg */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/vortex-ai/image.jpg" 
          alt="Upside Down" 
          fill 
          className="object-cover md:object-contain object-center" 
          quality={100}
          priority
          unoptimized
        />
        {/* Gradient fade only at very top and bottom edges for seamless blend */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
        {/* Very light overlay to make text readable */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center min-h-[45vh] md:min-h-[60vh] flex flex-col items-center justify-center">
        {/* Header - positioned in sky area */}
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-red-500 text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] mb-2 sm:mb-4 drop-shadow-lg">
            THE GATEWAY OPENS IN
          </p>
        </div>

        {/* Countdown display - centered */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-10 lg:gap-14">
          <TimeBlock value={timeLeft.days} label="DAYS" delay={100} />
          <span className="text-xl sm:text-4xl md:text-5xl text-red-600/40 font-serif">:</span>
          <TimeBlock value={timeLeft.hours} label="HOURS" delay={200} />
          <span className="text-xl sm:text-4xl md:text-5xl text-red-600/40 font-serif">:</span>
          <TimeBlock value={timeLeft.minutes} label="MINS" delay={300} />
          <span className="text-xl sm:text-4xl md:text-5xl text-red-600/40 font-serif">:</span>
          <TimeBlock value={timeLeft.seconds} label="SECS" delay={400} />
        </div>
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />
    </section>
  )
}
