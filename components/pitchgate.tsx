"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  )
}

export function PitchGatePage() {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsMobile(window.innerWidth < 768)
  }, [])

  const scrollToRegister = () => {
    const registerButton = document.querySelector('a[href*="forms.gle"]')
    if (registerButton) {
      registerButton.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Custom PitchGate Hero Section */}
      <section className="relative h-[85vh] md:h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 will-change-auto">
          <Image
            src="/img7.webp"
            alt="PitchGate"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            unoptimized
          />
        </div>

        {/* Gradient overlays with orange/bronze tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-orange-950/40 to-orange-900/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #92400e10 0%, transparent 60%)" }} />

        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay" />

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

        {/* Hero content */}
        <div className="absolute inset-0 flex items-end pb-28 md:pb-28">
          <div className="w-full px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl">
              {/* Event badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-4 md:mb-6 transition-all duration-700 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ borderColor: "rgba(217, 119, 6, 0.6)", backgroundColor: "rgba(217, 119, 6, 0.2)" }}
              >
                <div className="w-2 h-2 rounded-full animate-pulse bg-amber-500" />
                <span className="text-xs tracking-[0.2em] text-white/90">VORTEX AI EVENT</span>
              </div>

              {/* Title */}
              <h1
                className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-3 md:mb-6 transition-all duration-1000 delay-100 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                PITCHGATE
              </h1>

              {/* Meta info */}
              <div
                className={`flex flex-wrap items-center gap-2 md:gap-6 text-xs md:text-base transition-all duration-1000 delay-300 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <span className="flex items-center gap-1.5 md:gap-2 text-gray-300">
                  <svg className="w-3 h-3 md:w-5 md:h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  December 19
                </span>
                <span className="flex items-center gap-1.5 md:gap-2 text-gray-300">
                  <svg className="w-3 h-3 md:w-5 md:h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ₹150
                </span>
              </div>

              {/* Register Button */}
              <button
                onClick={scrollToRegister}
                className={`mt-6 md:mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold tracking-wider transition-all duration-500 bg-amber-600 hover:bg-amber-700 text-white hover:shadow-lg ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  boxShadow: "0 0 20px rgba(217, 119, 6, 0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(217, 119, 6, 0.8)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(217, 119, 6, 0.4)"
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

      {/* Content */}
      <section className="relative z-10 bg-black">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="glass-dark rounded-2xl p-8 md:p-12" style={{ borderColor: "rgba(249, 115, 22, 0.3)" }}>
            <h2 className="text-3xl font-serif font-bold text-orange-400 mb-6">Open the Gateway to Innovation</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Step through the portal and present your groundbreaking ideas to our panel of faculty judges. Poster + Idea Pitch (Avishkar-style). Maximum 4 participants per team.
            </p>

            {/* Event Flow - Coming Soon */}
            <div className="mb-10 relative">
              <div className="bg-gradient-to-br from-orange-950/40 to-orange-900/20 border border-orange-900/50 rounded-xl p-10 md:p-12 text-center shadow-lg shadow-orange-900/20 backdrop-blur-sm">
                <h3 className="text-2xl md:text-3xl font-serif text-orange-300 mb-4">Event Flow</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Will share soon. Keep an eye on it!</p>
              </div>
            </div>

            {/* Commented Event Flow Section
            <div className="bg-orange-950/30 rounded-xl p-6 border border-orange-900/40 mb-10">
              <h3 className="text-xl font-bold text-white mb-4">⏱ Event Flow</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                {[
                  { time: "10:40–10:55 AM", desc: "Setup, registration, fixing posters, and mic check." },
                  { time: "10:55–11:00 AM (5 mins)", desc: "Quick instructions covering pitch rules, time limit, and judging criteria." },
                  { time: "11:00 AM–12:40 PM", desc: "Pitch Session - Each team gets 6 minutes for the Pitch (poster presentation and idea explanation), followed by 2 minutes for Q&A with the judges." },
                  { time: "12:40–12:55 PM", desc: "Deliberation and selection of the top team." },
                  { time: "12:55–1:00 PM", desc: "Results announcement, photos, and closing." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 pb-3 border-b border-orange-900/20 last:border-0">
                    <span className="text-orange-400 font-mono min-w-[140px]">{item.time}</span>
                    <span>{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            */}

            {/* Tournament Rules */}
            <div className="bg-gradient-to-r from-orange-950/50 to-transparent rounded-xl p-6 border-l-4 border-orange-500 mb-10">
              <h3 className="text-xl font-bold text-white mb-4">📘 Tournament Rules</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Posters can be brought physically or projected on a projector.",
                  "Posters must be placed and fixed before 11:00 AM.",
                  "The pitch must NOT exceed 6 minutes.",
                  "Judges will interrupt the presentation if the team exceeds the time limit.",
                  "The maximum team size is 4 members per team.",
                  "The scoring sheet is final.",
                ].map((rule, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Judging Matrix */}
            <div className="bg-orange-950/30 rounded-xl p-6 border border-orange-900/40 mb-10">
              <h3 className="text-xl font-bold text-white mb-4">🏆 Pitchgate Judging Matrix (Total: 100 points)</h3>
              <div className="space-y-4 text-gray-300">
                {[
                  { title: "Idea Quality", points: "25 pts", desc: "Focuses on problem clarity, innovation, and feasibility." },
                  { title: "Technical Depth", points: "20 pts", desc: "Evaluates real technology understanding, ensuring the pitch is not superficial or based on buzzwords only." },
                  { title: "Poster Quality", points: "15 pts", desc: "Assesses clean layout, visual clarity, and structured content." },
                  { title: "Pitch Delivery", points: "20 pts", desc: "Scored on confidence, structure, clarity, and time management." },
                  { title: "Implementation Plan", points: "10 pts", desc: "Covers the roadmap, realistic steps, and practical execution plan." },
                  { title: "Q&A Performance", points: "10 pts", desc: "Measures the ability to defend the idea and provide logical answers." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 pb-4 border-b border-orange-900/20 last:border-0">
                    <div className="flex-shrink-0">
                      <div className="text-2xl font-bold text-orange-400">{item.points}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{i + 1}. {item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Register button */}
            <div className="mt-10 text-center">
              <a
                href="https://forms.gle/eNgFqZBjyjGsMRC77"
                className="inline-flex items-center gap-3 px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold tracking-wider rounded transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/30"
              >
                REGISTER FOR PITCHGATE
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
      </section>

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
