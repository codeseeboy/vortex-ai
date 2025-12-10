"use client"

import Image from "next/image"

export function VideoSection() {
  return (
    <section id="portal" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Image background */}
      <div className="absolute inset-0 w-full h-full">
        <Image src="/vortex-ai/img001.jpg" alt="Portal" fill className="object-cover" priority quality={75} />
      </div>

      {/* Top and bottom black overlays */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Center text */}
      <div className="relative z-20 text-center px-4">
        <p className="text-red-500 text-[10px] sm:text-xs tracking-[0.4em] mb-3 sm:mb-4">ENTER THE</p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white text-shadow-subtle">
          UPSIDE DOWN
        </h2>
        <p className="mt-3 sm:mt-4 text-red-500 text-xs sm:text-sm max-w-xs sm:max-w-md mx-auto font-serif tracking-[0.2em]">
          December 18-19 | The gateway opens soon
        </p>
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line z-30 pointer-events-none" />

      {/* Vignette */}
      <div className="absolute inset-0 vignette z-20 pointer-events-none" />
    </section>
  )
}
