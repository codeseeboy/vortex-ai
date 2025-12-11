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

export function BGMIFinalsPage() {
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
      {/* Custom BGMI Hero Section */}
      <section className="relative h-[85vh] md:h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 will-change-auto">
          <Image
            src="/bgmi2.jpg"
            alt="BGMI"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            unoptimized
          />
        </div>

        {/* Gradient overlays with grey tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/40 to-gray-800/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #3f3f4610 0%, transparent 60%)" }} />

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
                style={{ borderColor: "rgba(107, 114, 128, 0.6)", backgroundColor: "rgba(107, 114, 128, 0.2)" }}
              >
                <div className="w-2 h-2 rounded-full animate-pulse bg-gray-400" />
                <span className="text-xs tracking-[0.2em] text-white/90">VORTEX AI EVENT</span>
              </div>

              {/* Title */}
              <h1
                className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-3 md:mb-6 transition-all duration-1000 delay-100 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                BGMI
              </h1>

              {/* Meta info */}
              <div
                className={`flex flex-wrap items-center gap-2 md:gap-6 text-xs md:text-base transition-all duration-1000 delay-300 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <span className="flex items-center gap-1.5 md:gap-2 text-gray-300">
                  <svg className="w-3 h-3 md:w-5 md:h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Friday
                </span>
                <span className="flex items-center gap-1.5 md:gap-2 text-gray-300">
                  <svg className="w-3 h-3 md:w-5 md:h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ₹200
                </span>
              </div>

              {/* Register Button */}
              <button
                onClick={scrollToRegister}
                className={`mt-6 md:mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold tracking-wider transition-all duration-500 bg-gray-700 hover:bg-gray-600 text-white hover:shadow-lg ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  boxShadow: "0 0 20px rgba(107, 114, 128, 0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(107, 114, 128, 0.8)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(107, 114, 128, 0.4)"
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
          <div className="glass-dark rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold text-red-500 mb-6">Grand Finals</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Top 18 teams battle across 3 matches. Highest total points wins the championship.
            </p>

            {/* Schedule - Coming Soon */}
            <div className="mb-10 relative">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800/60 rounded-xl p-10 md:p-12 text-center shadow-lg shadow-gray-900/30 backdrop-blur-sm">
                <h3 className="text-2xl md:text-3xl font-serif text-gray-200 mb-4">Match Schedule</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Will share soon. Keep an eye on it!</p>
              </div>
            </div>

            {/* Commented Schedule Section
            <div className="bg-red-950/30 rounded-xl p-6 border border-red-900/40 mb-10">
              <h3 className="text-xl font-bold text-white mb-4">🗓️ Schedule</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-red-400 font-bold mb-2">Day 19: Final Round</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">▸</span>
                      <span>All selected teams will be combined into one group.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">▸</span>
                      <span>Each team will get to play 3 matches.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">▸</span>
                      <span>The team with the Highest total points = Champion 🏆.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            */}

            {/* Finals format */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-red-950/30 rounded-xl p-6 border border-red-900/30">
                <div className="text-5xl font-bold text-red-500 mb-3">18</div>
                <h3 className="text-lg font-bold text-white mb-2">Top Teams</h3>
                <p className="text-gray-400 text-sm">Qualified squads from Thursday</p>
              </div>
              <div className="bg-red-950/30 rounded-xl p-6 border border-red-900/30">
                <div className="text-5xl font-bold text-red-500 mb-3">3</div>
                <h3 className="text-lg font-bold text-white mb-2">Final Matches</h3>
                <p className="text-gray-400 text-sm">Highest points = Champion 🏆</p>
              </div>
            </div>

            {/* Prize pool */}
            <div className="bg-gradient-to-r from-red-950/50 to-transparent rounded-xl p-6 border-l-4 border-red-500 mb-10">
              <h3 className="text-xl font-bold text-white mb-4">Point System (Placement + Kill)</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-300 text-sm">
                {[
                  "1st Place → 10 points",
                  "2nd Place → 6 points",
                  "3rd Place → 5 points",
                  "4th Place → 4 points",
                  "5th Place → 3 points",
                  "6th Place → 2 points",
                  "7th Place → 1 point",
                  "8th Place → 1 point",
                  "9th–16th Place → 0 points",
                  "Per Kill → +1 point",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Rules */}
            <div className="bg-red-950/30 rounded-xl p-6 border border-red-900/40 mb-10">
              <h3 className="text-xl font-bold text-white mb-4">⚠️ Important Rules</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">1️⃣</span>
                  <div>
                    <span className="font-semibold">Fair Play is Mandatory:</span>
                    <ul className="mt-1 space-y-1 text-sm ml-4">
                      <li>• No hackers.</li>
                      <li>• No iPad/tablet players allowed.</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">2️⃣</span>
                  <span><span className="font-semibold">Disclaimer:</span> Management will not be responsible for any Wi-Fi or internet issues.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">3️⃣</span>
                  <div>
                    <span className="font-semibold">Rematch Policy:</span>
                    <ul className="mt-1 space-y-1 text-sm ml-4">
                      <li>• If a team faces internet issues within the first 3–5 minutes and cannot enter the match, a rematch may be considered.</li>
                      <li>• After 5 minutes or once a team has entered the match, no rematch will be provided.</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">4️⃣</span>
                  <span><span className="font-semibold">Timing is Strict:</span> Teams must join the room before the match starts. No excuses will be accepted for late joiners.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">5️⃣</span>
                  <div>
                    <span className="font-semibold">Mandatory Screenshot Submission:</span>
                    <ul className="mt-1 space-y-1 text-sm ml-4">
                      <li>• Every team must provide a result screenshot immediately after they are eliminated.</li>
                      <li>• Failure to provide a screenshot may lead to the associated points not being counted.</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Schedule */}
            <div className="space-y-4 mb-10">
              <h3 className="text-xl font-bold text-white">Match Schedule</h3>
              <div className="space-y-3">
                {[
                  { time: "1:30 PM", map: "Erangel", match: "Match 1" },
                  { time: "2:30 PM", map: "Miramar", match: "Match 2" },
                  { time: "3:30 PM", map: "Erangel", match: "Match 3" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-red-950/20 rounded-lg border border-red-900/20"
                  >
                    <span className="text-red-400 font-mono w-24">{item.time}</span>
                    <span className="text-white font-bold flex-1">{item.match}</span>
                    <span className="text-gray-400">{item.map}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="text-center text-gray-500 text-sm mb-10">
              <p>Finals are for qualified teams only. Highest points across 3 matches wins.</p>
            </div>

            {/* Register button */}
            <div className="mt-10 text-center">
              <a
                href="https://forms.gle/uBCi95H7GzcKfCoY8"
                className="inline-flex items-center gap-3 px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold tracking-wider rounded transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30"
              >
                REGISTER YOUR SQUAD
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
