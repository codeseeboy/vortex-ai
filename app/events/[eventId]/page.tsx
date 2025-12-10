import type React from "react"
import { notFound } from "next/navigation"
import { VecnaCodeLabPage } from "@/components/vecna-code-lab"
import { EFootballPage } from "@/components/e-football"
import { BGMIQualifiersPage } from "@/components/bgmi-qualifiers"
import { PitchGatePage } from "@/components/pitchgate"
import { CRPage } from "@/components/cr"
import { BGMIFinalsPage } from "@/components/bgmi-finals"

const eventComponents: Record<string, React.ComponentType> = {
  "vecna-code-lab": VecnaCodeLabPage,
  "e-football": EFootballPage,
  "bgmi-qualifiers": BGMIQualifiersPage,
  pitchgate: PitchGatePage,
  cr: CRPage,
  "bgmi-finals": BGMIFinalsPage,
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ eventId: string }>
}) {
  const { eventId } = await params
  const EventComponent = eventComponents[eventId]

  if (!EventComponent) {
    notFound()
  }

  return <EventComponent />
}

export async function generateStaticParams() {
  return [
    { eventId: "vecna-code-lab" },
    { eventId: "e-football" },
    { eventId: "bgmi-qualifiers" },
    { eventId: "pitchgate" },
    { eventId: "cr" },
    { eventId: "bgmi-finals" },
  ]
}
