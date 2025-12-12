"use client"

import { EventLayout } from "./event-layout"
import { ScrollReveal } from "@/components/scroll-reveal"

export function BGMIFinalsPage() {
  return (
    <EventLayout
      backgroundImage="/bgmi2.jpg"
      title="BGMI"
      date="Friday"
      time=""
      location=""
      accentColor="#6b7280"
      entryFee="₹200"
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="glass-dark rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold text-red-500 mb-6">Grand Finals</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Top 18 teams battle across 3 matches. Highest total points wins the championship.
            </p>

            <div className="mb-10 relative">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800/60 rounded-xl p-10 md:p-12 text-center shadow-lg shadow-gray-900/30 backdrop-blur-sm">
                <h3 className="text-2xl md:text-3xl font-serif text-gray-200 mb-4">Match Schedule</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Will share soon. Keep an eye on it!</p>
              </div>
            </div>

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

            <div className="text-center text-gray-500 text-sm mb-10">
              <p>Finals are for qualified teams only. Highest points across 3 matches wins.</p>
            </div>

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
    </EventLayout>
  )
}
