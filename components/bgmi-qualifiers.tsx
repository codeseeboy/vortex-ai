"use client"

import { EventLayout } from "./event-layout"
import { ScrollReveal } from "@/components/scroll-reveal"

export function BGMIQualifiersPage() {
  return (
    <EventLayout
      backgroundImage="/bgmi2.jpg"
      title="BGMI QUALIFIERS"
      date="Thursday"
      time=""
      location=""
      accentColor="#ec4899"
      entryFee="₹200"
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="glass-dark rounded-2xl p-8 md:p-12" style={{ borderColor: "rgba(236, 72, 153, 0.3)" }}>
            <h2 className="text-3xl font-serif font-bold text-pink-400 mb-6">VORTEX.AI BGMI TOURNAMENT – QUALIFIERS</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Get ready to dominate the battlefield. Classic mode across Erangel & Miramar.
            </p>

            <div className="mb-10 relative">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800/60 rounded-xl p-10 md:p-12 text-center shadow-lg shadow-gray-900/30 backdrop-blur-sm">
                <h3 className="text-2xl md:text-3xl font-serif text-gray-200 mb-4">Match Schedule</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Will share soon. Keep an eye on it!</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <div className="bg-pink-950/30 rounded-xl p-5 border border-pink-900/30 text-center">
                <div className="text-sm text-gray-400">Mode</div>
                <div className="text-2xl font-bold text-pink-400">Classic</div>
              </div>
              <div className="bg-pink-950/30 rounded-xl p-5 border border-pink-900/30 text-center">
                <div className="text-sm text-gray-400">Maps</div>
                <div className="text-2xl font-bold text-pink-400">Erangel • Miramar</div>
              </div>
              <div className="bg-pink-950/30 rounded-xl p-5 border border-pink-900/30 text-center">
                <div className="text-sm text-gray-400">Entry Fee</div>
                <div className="text-2xl font-bold text-pink-400">FREE</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <div className="bg-pink-950/30 rounded-xl p-5 border border-pink-900/30 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">2</div>
                <p className="text-gray-400 text-sm">Groups (A & B)</p>
              </div>
              <div className="bg-pink-950/30 rounded-xl p-5 border border-pink-900/30 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">2</div>
                <p className="text-gray-400 text-sm">Matches per team</p>
              </div>
              <div className="bg-pink-950/30 rounded-xl p-5 border border-pink-900/30 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">Top 50%</div>
                <p className="text-gray-400 text-sm">Qualify for Finals</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-950/50 to-transparent rounded-xl p-6 border-l-4 border-pink-500 mb-10">
              <h3 className="text-xl font-bold text-white mb-4">Point System (Placement + Kill)</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
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
                    <span className="text-pink-400 mt-1">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-pink-950/30 rounded-xl p-6 border border-pink-900/40 mb-10">
              <h3 className="text-xl font-bold text-white mb-4">Important Rules</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">1️⃣</span>
                  Fair Play is mandatory — No hackers. No iPad/tablet players.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">2️⃣</span>
                  Management will not be responsible for any Wi‑Fi or internet issues.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">3️⃣</span>
                  Rematch Policy: If a team faces internet issues within the first 3–5 minutes and cannot enter the match, a rematch may be considered. After 5 minutes or once entered, no rematch will be provided.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">4️⃣</span>
                  Timing is strict — Teams must join the room before the match starts. No excuses for late joiners.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">5️⃣</span>
                  Mandatory Screenshot Submission: Every team must provide a result screenshot immediately after they die. Failure to provide a screenshot may lead to points not being counted.
                </li>
              </ul>
            </div>

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
