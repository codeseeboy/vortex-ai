"use client"

import { EventLayout } from "./event-layout"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CRPage() {
  return (
    <EventLayout
      backgroundImage="/images/img8.jpg"
      title="CLASH ROYALE"
      date="December 19"
      time="2:00 PM - 4:00 PM"
      location="Arena Stage"
      accentColor="from-purple-950"
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="glass-dark rounded-2xl p-8 md:p-12" style={{ borderColor: "rgba(147, 51, 234, 0.3)" }}>
            <h2 className="text-3xl font-serif font-bold text-purple-400 mb-6">Enter the Arena</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Deploy your troops, cast your spells, and destroy enemy towers in epic real-time battles. The Clash Royale
              tournament awaits the most strategic minds.
            </p>

            {/* Format */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-purple-950/30 rounded-xl p-6 border border-purple-900/30">
                <h3 className="text-lg font-bold text-white mb-4">Tournament Format</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">▸</span>
                    1v1 Single Elimination
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">▸</span>
                    Best of 3 matches
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">▸</span>
                    Tournament standard levels
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">▸</span>
                    All cards unlocked
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
                    Stable internet connection
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-400">▸</span>
                    Be present 15 mins early
                  </li>
                </ul>
              </div>
            </div>

            {/* Rules */}
            <div className="bg-gradient-to-r from-purple-950/50 to-transparent rounded-xl p-6 border-l-4 border-purple-500 mb-10">
              <h3 className="text-xl font-bold text-white mb-4">Battle Rules</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  Friendly battle mode - tournament standard
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  No emotes allowed during battle
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  Disconnection = loss (unless within first 30 seconds)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  Judges&apos; decision is final
                </li>
              </ul>
            </div>

            {/* Register button */}
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
