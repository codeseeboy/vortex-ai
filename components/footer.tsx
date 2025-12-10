"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="relative py-12 sm:py-16 lg:py-20 bg-[#020202] border-t border-red-900/10">
      {/* Subtle red glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-16 bg-red-900/10 blur-[80px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Logo */}
          <Image
            src="/vortex-ai/font.png"
            alt="Vortex AI"
            width={160}
            height={64}
            className="mx-auto w-[120px] sm:w-[140px] lg:w-[160px] h-auto opacity-70"
          />

          <p className="mt-3 sm:mt-4 text-gray-500 text-xs sm:text-sm tracking-wider">
            Presented by <span className="text-red-600">ASCAI</span>
          </p>

          {/* Social links */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://instagram.com/ascai_sjcem"
              className="text-gray-600 hover:text-red-500 transition-colors text-[11px] sm:text-xs tracking-wider mobile-tap"
            >
              @ASCAI_SJCEM
            </a>
            <span className="text-gray-800 text-xs">•</span>
            <a
              href="#"
              className="text-gray-600 hover:text-red-500 transition-colors text-[11px] sm:text-xs tracking-wider mobile-tap"
            >
              Twitter
            </a>
            <span className="text-gray-800 text-xs">•</span>
            <a
              href="#"
              className="text-gray-600 hover:text-red-500 transition-colors text-[11px] sm:text-xs tracking-wider mobile-tap"
            >
              Discord
            </a>
          </div>

          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-900/50">
            <p className="text-gray-700 text-[10px] sm:text-xs">© 2025 ASCAI. All rights reserved.</p>
            <p className="text-gray-800 text-[10px] sm:text-xs mt-1">December 18-19 | Enter the Upside Down</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
