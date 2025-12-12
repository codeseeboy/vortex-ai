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

// Floating blue particles component
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
          className="absolute rounded-full bg-blue-500/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow: `0 0 ${p.size * 2}px rgba(59, 130, 246, 0.8)`,
            animation: `float-particle 8s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 0.7; }
        }
      `}</style>
    </div>
  )
}

export function EFootballPage() {
  return (
    <EventLayout
      backgroundImage="/efootball-laptop.png"
      imagePosition="bottom"
      title="E FOOTBALL"
      date="December 18"
      time="2:00 PM - 5:00 PM"
      location="Gaming Arena"
      accentColor="#3b82f6"
      entryFee="₹60"
    >
      {/* Floating Particles Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <FloatingParticles />
      </div>

      {/* Decorative Frames - Top Left Corner */}
      <div className="fixed top-0 left-0 w-40 h-40 pointer-events-none z-0 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
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

      {/* Decorative Frames - Bottom Right Corner */}
      <div className="fixed bottom-0 right-0 w-40 h-40 pointer-events-none z-0 opacity-20 scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
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
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-900/20 via-blue-800/10 to-transparent rounded-2xl blur-2xl -z-10" />
            
            {/* Glowing game elements floating */}
            <div className="absolute -right-20 top-0 opacity-20 text-blue-500 font-mono text-xs pointer-events-none">
              ⚽
            </div>
            <div className="absolute -left-20 bottom-10 opacity-20 text-blue-500 font-mono text-xs pointer-events-none">
              🎮
            </div>

            <h2 className="text-2xl md:text-3xl font-serif text-white mb-6">The Digital Pitch Awaits</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Step onto the virtual field and prove your mastery. Tight passing, clinical finishing, 
              and calm under pressure — every move decides the match. Only the most skilled players 
              will claim victory in this intense 1v1 showdown.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline - Coming Soon */}
        <AnimatedSection delay={100}>
          <div className="mb-16 relative">
            <div className="bg-gradient-to-br from-blue-950/40 to-blue-900/20 border border-blue-900/50 rounded-xl p-10 md:p-12 text-center shadow-lg shadow-blue-900/20 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-serif text-blue-400 mb-4">Event Timeline</h3>
              <p className="text-gray-300 text-lg leading-relaxed">Will share soon. Keep an eye on it!</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Commented Timeline Section
        <AnimatedSection delay={100}>
          <div className="mb-16">
            <h3 className="text-xl font-serif text-white mb-8 flex items-center gap-3">
              <div className="w-8 h-px bg-blue-500" />
              Event Timeline
            </h3>

            <div className="space-y-6">
              {[
                { time: "2:00 PM", title: "Check-in & Registration", desc: "Confirm your slot and setup" },
                { time: "2:30 PM", title: "Tournament Begins", desc: "First round matches kick off" },
                { time: "4:00 PM", title: "Semi Finals", desc: "Top players battle it out" },
                { time: "4:45 PM", title: "Grand Final & Awards", desc: "Championship match and prize ceremony" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 group-hover:scale-125 transition-transform shadow-lg shadow-blue-500/50" />
                    {i < 3 && <div className="w-px h-full bg-gradient-to-b from-blue-500 to-blue-900/30" />}
                  </div>
                  <div className="pb-6">
                    <span className="text-blue-400 text-xs font-mono tracking-wider">{item.time}</span>
                    <h4 className="text-white font-medium mt-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        */}

        {/* Tournament Format */}
        <AnimatedSection delay={150}>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/10 border border-blue-900/50 rounded-xl p-6 shadow-lg shadow-blue-900/20 backdrop-blur-sm">
              <h3 className="text-lg font-serif text-white mb-4 flex items-center gap-2">
                <span className="text-blue-400">⚡</span> Format
              </h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Direct Knockout / Single Elimination",
                  "1v1 matches",
                  "Extra time + pens for knockouts",
                  "Finals: Best of 3 matches",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group cursor-default">
                    <span className="text-blue-400 text-lg group-hover:animate-pulse">●</span>
                    <span className="group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/10 border border-blue-900/50 rounded-xl p-6 shadow-lg shadow-blue-900/20 backdrop-blur-sm">
              <h3 className="text-lg font-serif text-white mb-4 flex items-center gap-2">
                <span className="text-blue-400">🎮</span> Platform
              </h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "eFootball 2024",
                  "Controllers provided",
                  "Dream Team squads allowed",
                  "Fair play rules strictly enforced",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group cursor-default">
                    <span className="text-blue-400 text-lg group-hover:animate-pulse">●</span>
                    <span className="group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Match Timing */}
        <AnimatedSection delay={200}>
          <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/10 border border-blue-900/50 rounded-xl p-6 md:p-8 mb-16 shadow-lg shadow-blue-900/20 backdrop-blur-sm">
            <h3 className="text-xl font-serif text-white mb-6 flex items-center gap-2">
              <span className="text-blue-400">⏱️</span> Match Timing
            </h3>
            <ul className="space-y-3 text-gray-300">
              {[
                "Until Quarter Finals: 10 minutes per match",
                "Semi Final & Final: 15 minutes per match",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group cursor-default">
                  <span className="text-blue-400 text-lg group-hover:animate-pulse">●</span>
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Important Rules */}
        <AnimatedSection delay={250}>
          <div className="bg-blue-950/30 rounded-xl p-6 border border-blue-900/40 mb-16">
            <h3 className="text-xl font-bold text-white mb-6">⚠️ Important Rules</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1 font-bold">•</span>
                <div>
                  <span className="font-semibold text-white">Fair Play & Conduct:</span>
                  <ul className="mt-2 space-y-1 text-sm ml-4">
                    <li>• No glitches, bugs, or toxic behavior is allowed.</li>
                    <li>• Pause the game only for substitutions or adjusting settings.</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1 font-bold">•</span>
                <div>
                  <span className="font-semibold text-white">Connection/Disconnection Policy:</span>
                  <ul className="mt-2 space-y-1 text-sm ml-4">
                    <li>• If a Disconnection (DC) occurs under 5 minutes, the match will restart.</li>
                    <li>• If a DC occurs after 5 minutes, the match will continue with the current score and time.</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1 font-bold">•</span>
                <div>
                  <span className="font-semibold text-white">Walkover & Forfeit:</span>
                  <ul className="mt-2 space-y-1 text-sm ml-4">
                    <li>• Any team late by 10 minutes or more will forfeit the match (Walkover).</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1 font-bold">•</span>
                <div>
                  <span className="font-semibold text-white">Proof of Result:</span>
                  <ul className="mt-2 space-y-1 text-sm ml-4">
                    <li>• A screenshot of the final score is compulsory after every match.</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1 font-bold">•</span>
                <div>
                  <span className="font-semibold text-white">Final Authority:</span>
                  <ul className="mt-2 space-y-1 text-sm ml-4">
                    <li>• The Organizer's decision is final in all disputes.</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </AnimatedSection>

        {/* Judging Criteria with neon styling */}
        <AnimatedSection delay={300}>
          <div className="mb-16">
            <h3 className="text-xl font-serif text-white mb-6">What We&apos;re Looking For</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Technical Skill", desc: "Passing accuracy, ball control, and tactics" },
                { title: "Composure", desc: "Staying calm under pressure" },
                { title: "Sportsmanship", desc: "Respectful play and fair conduct" },
                { title: "Match Awareness", desc: "Reading the game and adapting strategy" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative border-l-2 border-blue-500/50 pl-6 py-4 hover:border-blue-400 transition-colors group"
                >
                  <div className="absolute -left-1.5 top-6 w-3 h-3 rounded-full bg-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all" />
                  <h4 className="text-white font-medium mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Awards Section with glow */}
        <AnimatedSection delay={350}>
          <div className="mb-16">
            <h3 className="text-xl font-serif text-white mb-6">Awards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { place: "🥇 1st Place", prize: "Prize Money" },
                { place: "🥈 2nd Place", prize: "Prize Money" },
                { place: "🏅 Best Play", prize: "Special Recognition" },
              ].map((p, i) => (
                <div
                  key={i}
                  className="relative bg-gradient-to-br from-blue-900/40 to-blue-950/30 border border-blue-500/30 rounded-lg p-6 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all group"
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <p className="text-blue-400 text-sm font-mono mb-2">{p.place}</p>
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
              href="https://forms.gle/KmZf6ZdccAdE4BMt7"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-medium tracking-wider rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 touch-scale"
            >
              JOIN THE TOURNAMENT
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
