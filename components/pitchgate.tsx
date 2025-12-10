"use client"

import { EventLayout } from "./event-layout"
import { ScrollReveal } from "@/components/scroll-reveal"

export function PitchGatePage() {
  return (
    <EventLayout
      backgroundImage="/images/img7.webp"
      title="PITCHGATE"
      date="December 19"
      time="10:00 AM - 1:00 PM"
      location="Conference Hall"
      accentColor="from-orange-950"
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="glass-dark rounded-2xl p-8 md:p-12" style={{ borderColor: "rgba(249, 115, 22, 0.3)" }}>
            <h2 className="text-3xl font-serif font-bold text-orange-400 mb-6">Open the Gateway to Innovation</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Step through the portal and present your groundbreaking ideas to our panel of faculty judges. Bring your
              project poster, deliver a compelling 6-minute pitch, and convince them your idea deserves to win.
            </p>

            {/* Requirements */}
            <div className="space-y-6 mb-10">
              <h3 className="text-xl font-bold text-white">Requirements</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-950/30 rounded-xl p-5 border border-orange-900/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-600/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-white">Project Poster</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Prepare a visual poster showcasing your project idea, features, and impact.
                  </p>
                </div>

                <div className="bg-orange-950/30 rounded-xl p-5 border border-orange-900/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-600/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-white">6-Minute Pitch</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Present and explain your idea within the strict 6-minute time limit.
                  </p>
                </div>

                <div className="bg-orange-950/30 rounded-xl p-5 border border-orange-900/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-600/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-white">Innovation Focus</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Your idea should demonstrate creativity, feasibility, and real-world impact.
                  </p>
                </div>

                <div className="bg-orange-950/30 rounded-xl p-5 border border-orange-900/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-600/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-white">Faculty Judging</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Panel of experienced faculty members will evaluate your presentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Judging criteria */}
            <div className="bg-gradient-to-r from-orange-950/50 to-transparent rounded-xl p-6 border-l-4 border-orange-500 mb-10">
              <h3 className="text-xl font-bold text-white mb-4">Judging Criteria</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">25%</div>
                  <p className="text-gray-400 text-xs mt-1">Innovation</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">25%</div>
                  <p className="text-gray-400 text-xs mt-1">Feasibility</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">25%</div>
                  <p className="text-gray-400 text-xs mt-1">Presentation</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">25%</div>
                  <p className="text-gray-400 text-xs mt-1">Impact</p>
                </div>
              </div>
            </div>

            {/* Register button */}
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
