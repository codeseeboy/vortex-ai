"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background image - CLEAR, full quality */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/vortex-ai/img1.png"
          alt="Mystical forest"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Gradient overlays - subtle, preserving image clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
        {/* Red tint at bottom - very subtle */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-red-950/30 to-transparent" />
      </div>

      {/* Floating particles - subtle red dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {mounted &&
          [...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-red-500/50"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animation: `float-particle ${5 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay z-10" />

      {/* Main content */}
      <div
        className="relative z-20 text-center px-5 sm:px-8 w-full max-w-4xl mx-auto pt-16 sm:pt-24 md:pt-32 lg:pt-24"
      >
        {/* ASCAI Presents - Clean, minimal */}
        <p
          className={`text-red-600 text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] font-medium mb-4 sm:mb-6 lg:mb-4 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          ASCAI PRESENTS
        </p>

        {/* Vortex AI Logo Image */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Image
            src="/vortex-ai/font.png"
            alt="Vortex AI"
            width={600}
            height={240}
            className="mx-auto w-[240px] sm:w-[300px] md:w-[380px] lg:w-[500px] xl:w-[550px] h-auto"
            priority
          />
        </div>

        {/* Prize Pool */}
        <div
          className={`mt-4 sm:mt-6 lg:mt-3 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-red-500 text-lg sm:text-2xl md:text-3xl tracking-[0.2em] font-bold">
            PRIZE POOL: <span className="text-2xl sm:text-4xl md:text-5xl">₹10,000</span>+
          </p>
        </div>

        {/* View Events Button - Fluid Capsule */}
        <div
          className={`mt-12 sm:mt-16 lg:mt-14 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#events"
            className="group relative inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-16 py-3 sm:py-4 text-white text-xs sm:text-sm tracking-[0.15em] font-medium mobile-tap overflow-hidden"
          >
            {/* Fluid Background with Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 via-red-700/40 to-red-900/40 rounded-full blur-lg group-hover:blur-xl transition-all duration-500" />
            
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-full border-2 border-red-600/60 group-hover:border-red-500 transition-all duration-500">
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"
                   style={{
                     background: 'conic-gradient(from 0deg, rgba(220, 38, 38, 0.5), rgba(185, 28, 28, 0), rgba(220, 38, 38, 0.5))',
                   }} />
            </div>

            {/* Flowing waves effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-full"
                   style={{
                     background: 'radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.3), transparent 50%)',
                     animation: 'shift 8s linear infinite',
                   }} />
              <div className="absolute inset-0 rounded-full"
                   style={{
                     background: 'radial-gradient(circle at 80% 50%, rgba(185, 28, 28, 0.2), transparent 50%)',
                     animation: 'shift 8s linear infinite reverse',
                   }} />
            </div>

            {/* Content */}
            <span className="relative z-10">VIEW EVENTS</span>
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 group-hover:translate-y-0.5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>

            <style jsx>{`
              @keyframes shift {
                0% { transform: translate(0, 0); }
                25% { transform: translate(10px, -5px); }
                50% { transform: translate(0, -10px); }
                75% { transform: translate(-10px, -5px); }
                100% { transform: translate(0, 0); }
              }
            `}</style>
          </a>
        </div>
      </div>

      {/* Vignette - subtle */}
      <div className="absolute inset-0 vignette-light z-10" />

      {/* Subtle Glowing Stars (JUGNU) - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-5 h-40 pointer-events-none opacity-60">
        {/* Star 1 */}
        <div
          className="absolute w-1 h-1 rounded-full bg-red-400"
          style={{
            left: '10%',
            bottom: '15%',
            boxShadow: '0 0 4px rgba(248, 113, 113, 0.6)',
            animation: 'twinkle 3s ease-in-out infinite',
          }}
        />
        
        {/* Star 2 */}
        <div
          className="absolute w-1 h-1 rounded-full bg-red-300"
          style={{
            left: '25%',
            bottom: '20%',
            boxShadow: '0 0 3px rgba(252, 165, 165, 0.5)',
            animation: 'twinkle 4s ease-in-out infinite 0.8s',
          }}
        />

        {/* Star 3 */}
        <div
          className="absolute w-1.5 h-1.5 rounded-full bg-red-500"
          style={{
            left: '50%',
            bottom: '18%',
            boxShadow: '0 0 5px rgba(239, 68, 68, 0.7)',
            animation: 'twinkle 3.5s ease-in-out infinite 1.2s',
          }}
        />

        {/* Star 4 */}
        <div
          className="absolute w-1 h-1 rounded-full bg-red-300"
          style={{
            left: '70%',
            bottom: '12%',
            boxShadow: '0 0 3px rgba(252, 165, 165, 0.5)',
            animation: 'twinkle 4.5s ease-in-out infinite 1.6s',
          }}
        />

        {/* Star 5 */}
        <div
          className="absolute w-1 h-1 rounded-full bg-red-400"
          style={{
            left: '85%',
            bottom: '22%',
            boxShadow: '0 0 4px rgba(248, 113, 113, 0.6)',
            animation: 'twinkle 3.2s ease-in-out infinite 2s',
          }}
        />

        {/* Star 6 */}
        <div
          className="absolute w-1 h-1 rounded-full bg-red-300"
          style={{
            left: '35%',
            bottom: '8%',
            boxShadow: '0 0 3px rgba(252, 165, 165, 0.5)',
            animation: 'twinkle 3.8s ease-in-out infinite 0.4s',
          }}
        />

        {/* Star 7 */}
        <div
          className="absolute w-1 h-1 rounded-full bg-red-400"
          style={{
            left: '65%',
            bottom: '25%',
            boxShadow: '0 0 4px rgba(248, 113, 113, 0.6)',
            animation: 'twinkle 4.2s ease-in-out infinite 1.4s',
          }}
        />

        <style jsx>{`
          @keyframes twinkle {
            0%, 100% {
              opacity: 0.3;
            }
            50% {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
