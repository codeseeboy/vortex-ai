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

// Floating red particles component
function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-red-600/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow: `0 0 ${p.size * 2}px rgba(220, 38, 38, 0.8)`,
            animation: `float-spore 8s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float-spore {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 0.7; }
        }
      `}</style>
    </div>
  )
}

export function VecnaCodeLabPage() {
  return (
    <EventLayout
      backgroundImage="/vecna-coding-lab.png"
      title="VECNA CODE LAB"
      date="December 18"
      time="11:00 AM - 1:00 PM"
      location="Main Lab"
      accentColor="#dc2626"
      entryFee="₹50"
    >
      {/* Floating Particles Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <FloatingParticles />
      </div>

      {/* Tendril Frames - Top Left Corner */}
      <div className="fixed top-0 left-0 w-40 h-40 pointer-events-none z-0 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-red-600">
          <path
            d="M 20,80 Q 10,60 20,40 Q 30,20 50,30 Q 60,40 50,60 Q 40,80 20,80"
            stroke="currentColor"
            fill="none"
            strokeWidth="0.5"
            opacity="0.6"
          />
          <path
            d="M 40,90 Q 35,70 45,50 Q 55,30 70,35 Q 75,50 65,70 Q 50,90 40,90"
            stroke="currentColor"
            fill="none"
            strokeWidth="0.5"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Tendril Frames - Bottom Right Corner */}
      <div className="fixed bottom-0 right-0 w-40 h-40 pointer-events-none z-0 opacity-20 scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-red-600">
          <path
            d="M 20,80 Q 10,60 20,40 Q 30,20 50,30 Q 60,40 50,60 Q 40,80 20,80"
            stroke="currentColor"
            fill="none"
            strokeWidth="0.5"
            opacity="0.6"
          />
          <path
            d="M 40,90 Q 35,70 45,50 Q 55,30 70,35 Q 75,50 65,70 Q 50,90 40,90"
            stroke="currentColor"
            fill="none"
            strokeWidth="0.5"
            opacity="0.4"
          />
        </svg>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* Main description */}
        <AnimatedSection>
          <div className="mb-16 relative">
            {/* Glow background accent */}
            <div className="absolute -inset-8 bg-gradient-to-r from-red-900/20 via-red-800/10 to-transparent rounded-2xl blur-2xl -z-10" />
            
            {/* Glowing code fragments floating */}
            <div className="absolute -right-20 top-0 opacity-20 text-red-600 font-mono text-xs pointer-events-none">
              &lt;div&gt;
            </div>
            <div className="absolute -left-20 bottom-10 opacity-20 text-red-600 font-mono text-xs pointer-events-none">
              {"{"}
            </div>

            <h2 className="text-2xl md:text-3xl font-serif text-white mb-6">Enter Vecna&apos;s Mind</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-6">
              Participants will be presented with a surprise problem statement 30 minutes before the event begins. 
              You will then have a total of 2 hours to plan, design, and build a front-end project based on the theme provided. 
              The use of AI tools such as lovable, bolt, Framer AI, V0, or ChatGPT is encouraged to help accelerate development and foster innovation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-8">
              The goal of this hackathon is to challenge your creative and technical skills. You are expected to present 
              a working and original idea that not only functions well but also demonstrates strong user interface and design thinking.
            </p>

            {/* Why Participate */}
            <div className="bg-gradient-to-br from-red-950/40 to-red-900/20 border border-red-900/50 rounded-xl p-6 md:p-8 mb-8">
              <h3 className="text-xl font-serif text-red-400 mb-4">Why Participate:</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Experience a new way of building with AI",
                  "Enhance your portfolio with a creative project",
                  "Compete for a chance to win cash prizes",
                  "Network with other innovative developers",
                  "Gain visibility within the coding and design community",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-400 text-base leading-relaxed max-w-3xl italic">
              Vibe Coding is more than a competition—it is a space to create with freedom, showcase your originality, 
              and challenge the boundaries of what you can build in just one day.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline - Temporarily Commented */}
        {/* <AnimatedSection delay={100}>
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
                    <div className="w-3 h-3 rounded-full bg-red-600 group-hover:scale-125 transition-transform shadow-lg shadow-red-600/50" />
                    {i < 3 && <div className="w-px h-full bg-gradient-to-b from-red-600 to-red-900/30" />}
                  </div>
                  <div className="pb-6">
                    <span className="text-red-500 text-xs font-mono tracking-wider">{item.time}</span>
                    <h4 className="text-white font-medium mt-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection> */}

        {/* Coming Soon */}
        <AnimatedSection delay={100}>
          <div className="mb-16 relative">
            <div className="bg-gradient-to-br from-red-950/40 to-red-900/20 border border-red-900/50 rounded-xl p-12 text-center shadow-lg shadow-red-900/20 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-serif text-red-400 mb-4">Event Timeline</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Will share soon. Keep an eye on it!
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Rules Section */}
        <AnimatedSection delay={200}>
          <div className="bg-gradient-to-br from-red-950/30 to-red-900/10 border border-red-900/50 rounded-xl p-6 md:p-8 mb-16 shadow-lg shadow-red-900/20 backdrop-blur-sm">
            <h3 className="text-xl font-serif text-white mb-6 flex items-center gap-2">
              <span className="text-red-500">⚡</span> Rules of the Lab
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Individual participation only",
                "AI tools permitted during development",
                "Internet access for documentation",
                "Code must be original",
                "Submit before deadline",
                "Follow code of conduct",
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 group cursor-default">
                  <span className="text-red-500 text-lg group-hover:animate-pulse">●</span>
                  <span className="group-hover:text-white transition-colors">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Judging Matrix / Scoring */}
        <AnimatedSection delay={250}>
          <div className="bg-gradient-to-br from-red-950/30 to-red-900/10 border border-red-900/50 rounded-xl p-6 md:p-8 mb-16 shadow-lg shadow-red-900/20 backdrop-blur-sm">
            <h3 className="text-2xl font-serif text-white mb-6 flex items-center gap-2">
              <span className="text-red-500">🏆</span> Judging Matrix / Scoring
            </h3>
            <div className="text-gray-300 mb-4">Total Points: 100</div>
            <div className="space-y-4">
              {[
                { title: "Requirement Completion", points: "50 pts", desc: "10 points for each of the 5 requirements." },
                { title: "Functionality", points: "20 pts", desc: "Working as intended with minimal bugs." },
                { title: "UI/UX", points: "10 pts", desc: "Clean, usable, and non-ugly interface." },
                { title: "Explanation / Pitch", points: "10 pts", desc: "Clear demo; explains logic and shows understanding." },
                { title: "Technical Approach", points: "5 pts", desc: "Reasonable architecture, not messy." },
                { title: "BONUS", points: "5 pts", desc: "Deployment (+3 pts) and extra meaningful features (+2 pts)." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-4 rounded-lg bg-red-900/20 border border-red-900/40">
                  <div>
                    <div className="text-white font-semibold">{item.title}</div>
                    <div className="text-gray-400 text-sm">{item.desc}</div>
                  </div>
                  <div className="text-red-400 font-mono text-sm md:text-base">{item.points}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Judging Criteria with neon styling */}
        <AnimatedSection delay={300}>
          <div className="mb-16">
            <h3 className="text-xl font-serif text-white mb-6">Judging Criteria</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Code Quality", desc: "Clean, efficient, well-structured code" },
                { title: "Functionality", desc: "Complete and correct solution" },
                { title: "UI/UX Design", desc: "Visual appeal and user experience" },
                { title: "Innovation", desc: "Creative problem-solving approach" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative border-l-2 border-red-600/50 pl-6 py-4 hover:border-red-500 transition-colors group"
                >
                  <div className="absolute -left-1.5 top-6 w-3 h-3 rounded-full bg-red-600 group-hover:shadow-lg group-hover:shadow-red-600/50 transition-all" />
                  <h4 className="text-white font-medium mb-2 group-hover:text-red-400 transition-colors">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Awards Section with glow */}
        <AnimatedSection delay={300}>
          <div className="mb-16">
            <h3 className="text-xl font-serif text-white mb-6">Awards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { place: "🥇 1st Place", prize: "Winner Certificate" },
                { place: "🥈 2nd Place", prize: "Runner-up Certificate" },
                { place: "🥉 3rd Place", prize: "Certificate" },
              ].map((p, i) => (
                <div
                  key={i}
                  className="relative bg-gradient-to-br from-red-900/40 to-red-950/30 border border-red-600/30 rounded-lg p-6 hover:border-red-500/60 hover:shadow-lg hover:shadow-red-600/20 transition-all group"
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-red-600/0 via-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <p className="text-red-400 text-sm font-mono mb-2">{p.place}</p>
                    <p className="text-white font-medium text-lg">{p.prize}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Register CTA */}
        <AnimatedSection delay={400}>
          <div className="text-center">
            <a
              href="https://forms.gle/m14P2AWr2XpVz2Y2A"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-medium tracking-wider rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/50 touch-scale"
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
