"use client"

import { useState } from "react"

const faqs = [
  {
    q: "When will the detailed schedule be shared?",
    a: "We will share it soon. Keep an eye on the announcements section and the event pages.",
  },
  {
    q: "Do I have to pay any fee at entry?",
    a: "Yes, each event has its own entry fee shown on the event card and page. Please check before registering.",
  },
  {
    q: "Can I register on the spot?",
    a: "Online registration is preferred. Limited on-spot slots may be available, but not guaranteed.",
  },
  {
    q: "Do I need to bring my own laptop or phone?",
    a: "Bring your own device for coding and mobile tournaments unless the event page says controllers or setups are provided.",
  },
  {
    q: "Will Wi-Fi be provided?",
    a: "Yes, campus Wi-Fi will be available. Still, keep a mobile hotspot as backup.",
  },
  {
    q: "Where are the events happening?",
    a: "All events are on campus at the designated labs and halls. Exact spots are listed on each event page.",
  },
]

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-black py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-red-500 font-serif uppercase tracking-[0.25em] text-2xl md:text-3xl">FAQs</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-serif text-white">Questions from the Upside Down</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`group relative border border-red-900/50 rounded-lg backdrop-blur-sm transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(190,24,93,0.15)] ${
                  isOpen ? "bg-gradient-to-br from-red-950/50 via-black/60 to-red-900/30 shadow-[0_0_32px_rgba(239,68,68,0.3)] scale-[1.01]" : "bg-red-950/15"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-4 md:px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="text-white font-serif text-lg md:text-xl tracking-wide flex items-center gap-2">
                    <span className="text-red-500 opacity-80 group-hover:opacity-100 transition-opacity">⟡</span>
                    {item.q}
                  </span>
                  <span
                    className={`text-red-300 transition-transform duration-300 text-xl ${isOpen ? "rotate-45 scale-110" : "rotate-0"}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`px-4 md:px-5 text-gray-200 text-sm md:text-base leading-relaxed border-t border-red-900/40 transition-all duration-500 ease-out origin-top ${
                    isOpen ? "max-h-40 py-4 opacity-100 translate-y-0" : "max-h-0 py-0 opacity-0 -translate-y-1"
                  }`}
                >
                  {item.a}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
