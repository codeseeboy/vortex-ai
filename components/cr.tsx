"use client"

import { useEffect, useRef, useState } from "react"
import { EventLayout } from "./event-layout"
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

export function CRPage() {
  return (
    <EventLayout
      backgroundImage="/img8.jpg"
      title="CLASH ROYALE"
      date="December 19"
      time=""
      location=""
      accentColor="#9333ea"
      entryFee="₹60"
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="glass-dark rounded-2xl p-8 md:p-12" style={{ borderColor: "rgba(147, 51, 234, 0.3)" }}>
            <h2 className="text-3xl font-serif font-bold text-purple-400 mb-6">Enter the Arena</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Deploy your troops, cast your spells, and destroy enemy towers in epic real-time battles. The Clash Royale
              tournament awaits the most strategic minds.
            </p>

            <div className="mb-10 relative">
              <div className="bg-gradient-to-br from-purple-950/40 to-purple-900/20 border border-purple-900/50 rounded-xl p-10 md:p-12 text-center shadow-lg shadow-purple-900/20 backdrop-blur-sm">
                <h3 className="text-2xl md:text-3xl font-serif text-purple-300 mb-4">Event Schedule</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Will share soon. Keep an eye on it!</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-purple-950/30 rounded-xl p-6 border border-purple-900/30">
                <h3 className="text-lg font-bold text-white mb-4">Tournament Rules</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">▸</span>
                    1v1 Single Elimination
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">▸</span>
                    No evolution card
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">▸</span>
                    No champion card
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">▸</span>
                    Tournament standard levels
                  </li>
                </ul>
              </div>
              <div className="bg-purple-950/30 rounded-xl p-6 border border-purple-900/30">
                <h3 className="text-lg font-bold text-white mb-4">Requirements</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">▸</span>
                    Own device with Clash Royale
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">▸</span>
                    Minimum King Level 8
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">▸</span>
                    Wi-Fi will be provided
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">▸</span>
                    Be present 15 mins early
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="https://forms.gle/WFtWFQV49WQxPQqx9"
                className="inline-flex items-center gap-3 px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold tracking-wider rounded transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/30"
              >
                ENTER THE ARENA
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </EventLayout>
  )
}
