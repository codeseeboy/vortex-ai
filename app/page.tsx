import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { EventsSection } from "@/components/events-section"
import { CountdownSection } from "@/components/countdown-section"
import { FAQs } from "@/components/faqs"
import { Footer } from "@/components/footer"
import { Particles } from "@/components/particles"

export default function HomePage() {
  return (
    <main className="relative bg-black">
      <Navbar />
      <Particles />

      <div className="relative z-10">
        <HeroSection />
        <VideoSection />
        <EventsSection />
        <CountdownSection />
        <FAQs />
        <Footer />
      </div>
    </main>
  )
}
