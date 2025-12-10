"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { EventLayout } from "./event-layout"

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

export function VecnaCodeLabPage() {
  return (
    <EventLayout
      backgroundImage="/img3.jpg"
      title="VECNA CODE LAB"
      date="December 18"
      time="10:00 AM - 1:00 PM"
      location="Main Lab"
      accentColor="#dc2626"
    >
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        {/* Main description */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-6">Enter Vecna&apos;s Mind</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Face the ultimate coding challenge in Vecna&apos;s domain. Harness the power of AI with a special
              &quot;Lovable&quot; AI revision session before the main event, then prove your skills in an intense
              one-hour development sprint. Only the strongest coders will survive.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection delay={100}>
          <div className="mb-16">
            <h3 className="text-xl font-serif text-white mb-8 flex items-center gap-3">
              <div className="w-8 h-px bg-red-600" />
              Event Timeline
            </h3>

            <div className="space-y-6">
              {[
                { time: "PRE-EVENT", title: "Lovable AI Revision Session", desc: "Learn AI-assisted coding tools" },
                { time: "10:00 AM", title: "Challenge Reveal", desc: "Problem statement released" },
                { time: "10:00 - 11:00 AM", title: "Development Sprint", desc: "One hour to build your solution" },
                { time: "11:00 AM - 1:00 PM", title: "Judging & Results", desc: "Code review and winners announced" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-red-600 group-hover:scale-125 transition-transform" />
                    {i < 3 && <div className="w-px h-full bg-red-900/50" />}
                  </div>
                  <div className="pb-6">
                    <span className="text-red-500 text-xs font-mono tracking-wider">{item.time}</span>
                    <h4 className="text-white font-medium mt-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Rules */}
        <AnimatedSection delay={200}>
          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-6 md:p-8 mb-16">
            <h3 className="text-xl font-serif text-white mb-6">Rules of the Lab</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Individual participation only",
                "AI tools permitted during development",
                "Internet access for documentation",
                "Code must be original",
                "Submit before deadline",
                "Follow code of conduct",
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-red-500 mt-0.5">▸</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Register CTA */}
        <AnimatedSection delay={300}>
          <div className="text-center">
            <a
              href="https://forms.gle/m14P2AWr2XpVz2Y2A"
              className="inline-flex items-center gap-3 px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-medium tracking-wider rounded-lg transition-all duration-300 hover:scale-105 touch-scale"
            >
              REGISTER NOW
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </EventLayout>
  )
}
