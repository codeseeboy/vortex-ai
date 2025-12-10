"use client"

import { EventLayout } from "./event-layout"
import { ScrollReveal } from "@/components/scroll-reveal"

export function BGMIQualifiersPage() {
  return (
    <EventLayout
      backgroundImage="/img4.jpg"
      title="BGMI QUALIFIERS"
      date="December 18"
      time="6:00 PM - 9:00 PM"
      location="Battle Ground"
      accentColor="from-pink-950"
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="glass-dark rounded-2xl p-8 md:p-12" style={{ borderColor: "rgba(236, 72, 153, 0.3)" }}>
            <h2 className="text-3xl font-serif font-bold text-pink-400 mb-6">Survive the Upside Down</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              The battleground has merged with the Upside Down. Only the most skilled squads will survive the qualifier
              rounds and earn their spot in the finals. Gear up, strategize, and fight for glory.
            </p>

            {/* Format cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <div className="bg-pink-950/30 rounded-xl p-5 border border-pink-900/30 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">4</div>
                <p className="text-gray-400 text-sm">Players per Squad</p>
              </div>
              <div className="bg-pink-950/30 rounded-xl p-5 border border-pink-900/30 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">3</div>
                <p className="text-gray-400 text-sm">Qualifier Matches</p>
              </div>
              <div className="bg-pink-950/30 rounded-xl p-5 border border-pink-900/30 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">8</div>
                <p className="text-gray-400 text-sm">Teams Advance</p>
              </div>
            </div>

            {/* Rules */}
            <div className="bg-gradient-to-r from-pink-950/50 to-transparent rounded-xl p-6 border-l-4 border-pink-500 mb-10">
              <h3 className="text-xl font-bold text-white mb-4">Qualifier Rules</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">▸</span>
                  Squad mode only - 4 players per team
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">▸</span>
                  Points: Kill points + placement points
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">▸</span>
                  No emulators or trigger devices allowed
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">▸</span>
                  Top 8 teams qualify for finals on Day 2
                </li>
              </ul>
            </div>

            {/* Register button */}
            <div className="mt-10 text-center">
              <a
                href="https://forms.gle/uBCi95H7GzcKfCoY8"
                className="inline-flex items-center gap-3 px-10 py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold tracking-wider rounded transition-all duration-300 hover:shadow-lg hover:shadow-pink-600/30"
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
    </EventLayout>
  )
}
