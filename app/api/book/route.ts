import { NextResponse } from 'next/server'
import { calendar } from '../../../lib/google-calendar'

export async function POST(req: Request) {
  const body = await req.json()

  const {
    name,
    phone,
    telegram,
    date,
    hour,
  } = body

  const start = new Date(date)
  start.setHours(hour)

  const end = new Date(start)
  end.setHours(hour + 1)

  await calendar.events.insert({
    calendarId: process.env.GOOGLE_CALENDAR_ID,
    requestBody: {
      summary: `Консультация — ${name}`,
      description: `
Телефон: ${phone}
Telegram: ${telegram}
      `,
      start: {
        dateTime: start.toISOString(),
      },
      end: {
        dateTime: end.toISOString(),
      },
    },
  })

  return NextResponse.json({
    success: true,
  })
}
