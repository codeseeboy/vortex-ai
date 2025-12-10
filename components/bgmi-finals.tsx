"use client"

import { EventLayout } from "./event-layout"
import { ScrollReveal } from "@/components/scroll-reveal"

export function BGMIFinalsPage() {
  return (
    <EventLayout
      backgroundImage="/img2.jpg"
      title="BGMI FINALS"
      date="December 19"
      time="5:00 PM - 9:00 PM"
      location="Grand Arena"
      accentColor="from-red-950"
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="glass-dark rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold text-red-500 mb-6">The Ultimate Showdown</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              The top 8 squads from the qualifiers face off in the grand finale. This is where legends are made. Four
              intense matches will determine who claims the championship title.
            </p>

            {/* Finals format */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-red-950/30 rounded-xl p-6 border border-red-900/30">
                <div className="text-5xl font-bold text-red-500 mb-3">8</div>
                <h3 className="text-lg font-bold text-white mb-2">Elite Squads</h3>
                <p className="text-gray-400 text-sm">Only the top performers from qualifiers</p>
              </div>
              <div className="bg-red-950/30 rounded-xl p-6 border border-red-900/30">
                <div className="text-5xl font-bold text-red-500 mb-3">4</div>
                <h3 className="text-lg font-bold text-white mb-2">Final Matches</h3>
                <p className="text-gray-400 text-sm">Battle across different maps</p>
              </div>
            </div>

            {/* Prize pool */}
            <div className="bg-gradient-to-r from-red-950/50 to-transparent rounded-xl p-6 border-l-4 border-red-500 mb-10">
              <h3 className="text-xl font-bold text-white mb-4">Championship Rewards</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🥇</div>
                  <p className="text-yellow-400 font-bold">1st Place</p>
                  <p className="text-gray-400 text-sm">Champion Trophy + Prize Pool</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🥈</div>
                  <p className="text-gray-300 font-bold">2nd Place</p>
                  <p className="text-gray-400 text-sm">Runner-up Medal + Prize</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🥉</div>
                  <p className="text-orange-400 font-bold">3rd Place</p>
                  <p className="text-gray-400 text-sm">Bronze Medal + Prize</p>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="space-y-4 mb-10">
              <h3 className="text-xl font-bold text-white">Match Schedule</h3>
              <div className="space-y-3">
                {[
                  { time: "5:00 PM", map: "Erangel", match: "Match 1" },
                  { time: "6:00 PM", map: "Miramar", match: "Match 2" },
                  { time: "7:00 PM", map: "Sanhok", match: "Match 3" },
                  { time: "8:00 PM", map: "Erangel", match: "Final Match" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-red-950/20 rounded-lg border border-red-900/20"
                  >
                    <span className="text-red-400 font-mono w-20">{item.time}</span>
                    <span className="text-white font-bold flex-1">{item.match}</span>
                    <span className="text-gray-400">{item.map}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="text-center text-gray-500 text-sm">
              <p>Finals are for qualified teams only. Watch the livestream if you didn&apos;t make it!</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </EventLayout>
  )
}
