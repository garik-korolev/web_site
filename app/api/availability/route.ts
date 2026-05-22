import { NextResponse } from 'next/server'
import { calendar } from '../../../lib/google-calendar'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const date = searchParams.get('date')

  if (!date) {
    return NextResponse.json([])
  }

  const start = new Date(`${date}T00:00:00`)
  const end = new Date(`${date}T23:59:59`)

  const events = await calendar.events.list({
    calendarId: process.env.GOOGLE_CALENDAR_ID,
    timeMin: start.toISOString(),
    timeMax: end.toISOString(),
    singleEvents: true,
    orderBy: 'startTime',
  })

  const busySlots =
    events.data.items?.map((event) => {
      const startDate = event.start?.dateTime

      if (!startDate) return null

      return new Date(startDate).getHours()
    }) || []

  const allSlots = [
    9, 10, 11, 12,
    13, 14, 15, 16, 17, 18
  ]

  const slots = allSlots.map((hour) => ({
    hour,
    available: !busySlots.includes(hour),
  }))

  return NextResponse.json(slots)
}
