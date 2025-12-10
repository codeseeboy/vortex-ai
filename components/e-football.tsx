"use client"

import { EventLayout } from "./event-layout"
import { ScrollReveal } from "@/components/scroll-reveal"

export function EFootballPage() {
  return (
    <EventLayout
      backgroundImage="/img9.jpg"
      title="E FOOTBALL"
      date="December 18"
      time="2:00 PM - 5:00 PM"
      location="Gaming Arena"
      accentColor="from-blue-950"
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="glass-dark rounded-2xl p-8 md:p-12" style={{ borderColor: "rgba(59, 130, 246, 0.3)" }}>
            <h2 className="text-3xl font-serif font-bold text-blue-400 mb-6">The Digital Pitch Awaits</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Step onto the virtual football field and prove your skills. Compete against the best players in intense
              1v1 matches. Every pass, every shot, every decision counts.
            </p>

            {/* Tournament format */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-blue-950/30 rounded-xl p-6 border border-blue-900/30">
                <h3 className="text-lg font-bold text-white mb-3">Format</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Single elimination bracket</li>
                  <li>• 1v1 matches</li>
                  <li>• 6-minute halves</li>
                  <li>• Extra time for knockouts</li>
                </ul>
              </div>
              <div className="bg-blue-950/30 rounded-xl p-6 border border-blue-900/30">
                <h3 className="text-lg font-bold text-white mb-3">Platform</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• eFootball 2024</li>
                  <li>• Controllers provided</li>
                  <li>• Custom team selection</li>
                  <li>• Online & offline teams allowed</li>
                </ul>
              </div>
            </div>

            {/* Prizes */}
            <div className="bg-gradient-to-r from-blue-950/50 to-transparent rounded-xl p-6 border-l-4 border-blue-500 mb-10">
              <h3 className="text-xl font-bold text-white mb-4">Prizes</h3>
              <div className="flex flex-wrap gap-8">
                <div>
                  <span className="text-3xl font-bold text-yellow-400">1st</span>
                  <p className="text-gray-400 text-sm mt-1">Champion Trophy + Cash Prize</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-gray-300">2nd</span>
                  <p className="text-gray-400 text-sm mt-1">Runner-up Medal</p>
                </div>
              </div>
            </div>

            {/* Register button */}
            <div className="mt-10 text-center">
              <a
                href="https://forms.gle/KmZf6ZdccAdE4BMt7"
                className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wider rounded transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30"
              >
                JOIN THE TOURNAMENT
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
