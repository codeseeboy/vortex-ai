"use client"

import Image from "next/image"

export function VideoBackground() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden"
      style={{
        perspective: '1000px',
      }}
    >
      <Image src="/vortex-ai/img001.jpg" alt="Background" fill className="object-cover" priority quality={75} style={{ willChange: 'transform' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20" />
    </div>
  )
}
