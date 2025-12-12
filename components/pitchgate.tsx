"use client"

import { EventLayout } from "./event-layout"
import { ScrollReveal } from "@/components/scroll-reveal"

export function PitchGatePage() {
  return (
    <EventLayout
      backgroundImage="/img7.webp"
      title="PITCHGATE"
      date="December 19"
      time=""
      location=""
      accentColor="#d97706"
      entryFee="₹150"
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="glass-dark rounded-2xl p-8 md:p-12" style={{ borderColor: "rgba(249, 115, 22, 0.3)" }}>
            <h2 className="text-3xl font-serif font-bold text-orange-400 mb-6">Open the Gateway to Innovation</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Step through the portal and present your groundbreaking ideas to our panel of faculty judges. Poster + Idea Pitch (Avishkar-style). Maximum 4 participants per team.
            </p>

            <div className="mb-10 relative">
              <div className="bg-gradient-to-br from-orange-950/40 to-orange-900/20 border border-orange-900/50 rounded-xl p-10 md:p-12 text-center shadow-lg shadow-orange-900/20 backdrop-blur-sm">
                <h3 className="text-2xl md:text-3xl font-serif text-orange-300 mb-4">Event Flow</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Will share soon. Keep an eye on it!</p>
              </div>
            </div>

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
    </EventLayout>
  )
}
