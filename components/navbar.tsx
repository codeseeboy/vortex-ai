"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/0 backdrop-blur-sm" : "bg-gradient-to-b from-black/80 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9">
                <Image src="/vortex-ai/ascai-logo.png" alt="ASCAI" fill className="object-contain" priority />
              </div>
              <span className="text-white font-serif text-sm sm:text-base tracking-[0.2em]">
                VORTEX <span className="text-white">AI</span> <span className="text-white">2.0</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
            </div>

            {/* CTA Button */}
            <Link
              href="#events"
              className="hidden lg:flex items-center px-5 py-2 border border-gray-500 text-white text-xs tracking-[0.2em] font-serif hover:border-white/80 hover:bg-white/10 hover:text-white transition-all"
            >
              EVENTS
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 mobile-tap"
              aria-label="Toggle menu"
            >
              <span
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-500 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image src="/vortex-ai/img1.png" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

        <div className="relative flex flex-col items-center justify-center h-full gap-8 px-6">
          <a
            href="#events"
            onClick={() => setMenuOpen(false)}
            className="text-2xl sm:text-3xl font-serif text-white tracking-[0.25em] hover:text-gray-200 transition-colors"
          >
            EVENTS
          </a>

          <div className="absolute bottom-12 left-0 right-0 text-center">
            <p className="text-gray-600 text-xs tracking-[0.3em]">DECEMBER 18-19, 2025</p>
          </div>
        </div>
      </div>
    </>
  )
}
