"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface PortalTransitionProps {
  isOpen: boolean
  targetUrl: string
  onComplete: () => void
  backgroundImage: string
}

export function PortalTransition({ isOpen, targetUrl, onComplete, backgroundImage }: PortalTransitionProps) {
  const router = useRouter()
  const [phase, setPhase] = useState<"cracks" | "opening" | "expanding" | "navigating">("cracks")

  useEffect(() => {
    if (isOpen) {
      // Phase 1: Red cracks appear
      setPhase("cracks")
      // Phase 2: Portal starts opening
      setTimeout(() => setPhase("opening"), 400)
      // Phase 3: Portal expands
      setTimeout(() => setPhase("expanding"), 800)
      // Phase 4: Navigate
      setTimeout(() => {
        setPhase("navigating")
        router.push(targetUrl)
      }, 1400)
      // Cleanup
      setTimeout(() => {
        onComplete()
        setPhase("cracks")
      }, 1800)
    }
  }, [isOpen, targetUrl, router, onComplete])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {/* Screen shake effect */}
      <div className={phase === "cracks" || phase === "opening" ? "animate-shake" : ""}>
        {/* Red lightning cracks - more dramatic */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <filter id="crack-glow">
              <feGaussianBlur stdDeviation="0.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {phase === "cracks" && (
            <>
              {/* Main center crack */}
              <path
                d="M50,0 L47,15 L53,20 L48,35 L54,42 L50,50 L46,58 L52,65 L49,80 L51,90 L50,100"
                fill="none"
                stroke="#dc2626"
                strokeWidth="0.4"
                filter="url(#crack-glow)"
                strokeDasharray="1000"
                strokeDashoffset="0"
                style={{ transition: "stroke-dashoffset 0.4s ease-out" }}
              />
              {/* Left crack */}
              <path
                d="M25,0 L28,20 L23,28 L27,40 L24,52 L26,65 L22,78 L25,100"
                fill="none"
                stroke="#ef4444"
                strokeWidth="0.25"
                filter="url(#crack-glow)"
                strokeDasharray="1000"
                strokeDashoffset="0"
                style={{ transition: "stroke-dashoffset 0.5s ease-out 0.1s" }}
              />
              {/* Right crack */}
              <path
                d="M75,0 L72,18 L78,25 L74,38 L77,48 L73,60 L76,75 L74,88 L75,100"
                fill="none"
                stroke="#ef4444"
                strokeWidth="0.25"
                filter="url(#crack-glow)"
                strokeDasharray="1000"
                strokeDashoffset="0"
                style={{ transition: "stroke-dashoffset 0.5s ease-out 0.15s" }}
              />
              {/* Additional cracks */}
              <path
                d="M40,0 L42,30 L38,50 L41,70 L39,100"
                fill="none"
                stroke="#b91c1c"
                strokeWidth="0.15"
                filter="url(#crack-glow)"
                strokeDasharray="1000"
                strokeDashoffset="0"
                style={{ transition: "stroke-dashoffset 0.6s ease-out 0.2s" }}
              />
              <path
                d="M60,0 L58,25 L62,45 L59,65 L61,85 L60,100"
                fill="none"
                stroke="#b91c1c"
                strokeWidth="0.15"
                filter="url(#crack-glow)"
                strokeDasharray="1000"
                strokeDashoffset="0"
                style={{ transition: "stroke-dashoffset 0.6s ease-out 0.25s" }}
              />
            </>
          )}
        </svg>
      </div>

      {/* Portal circle expanding from center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden"
        style={{
          width:
            phase === "expanding" || phase === "navigating"
              ? "400vmax"
              : phase === "opening"
                ? "80px"
                : phase === "cracks"
                  ? "20px"
                  : "0px",
          height:
            phase === "expanding" || phase === "navigating"
              ? "400vmax"
              : phase === "opening"
                ? "80px"
                : phase === "cracks"
                  ? "20px"
                  : "0px",
          transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "0 0 80px 30px rgba(185, 28, 28, 0.6), 0 0 150px 60px rgba(185, 28, 28, 0.3), inset 0 0 60px 20px rgba(185, 28, 28, 0.4)",
        }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Red swirl effect */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0%, rgba(185, 28, 28, 0.4) 25%, transparent 50%, rgba(185, 28, 28, 0.4) 75%, transparent 100%)",
            animation: "spin 1.5s linear infinite",
          }}
        />
      </div>

      {/* Red flash on expand */}
      <div
        className="absolute inset-0 bg-red-600/30"
        style={{
          opacity: phase === "expanding" ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, transparent 30%, rgba(0, 0, 0, 0.8) 100%)",
          opacity: 1,
          transition: "opacity 0.3s",
        }}
      />
    </div>
  )
}
