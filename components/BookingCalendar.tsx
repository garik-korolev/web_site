'use client'

import { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [slots, setSlots] = useState<any[]>([])

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [telegram, setTelegram] = useState('')

  useEffect(() => {
    if (!selectedDate) return

    const formatted = selectedDate
      .toISOString()
      .split('T')[0]

    fetch(`/api/availability?date=${formatted}`)
      .then((res) => res.json())
      .then(setSlots)
  }, [selectedDate])

  async function book(hour: number) {
    if (!selectedDate) return

    await fetch('/api/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        telegram,
        date: selectedDate,
        hour,
      }),
    })

    alert('Запись успешно создана')
  }

  return (
    <div className="booking-wrapper">

      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
      />

      {selectedDate && (
        <div className="slots">

          <h3>Свободное время</h3>

          <div className="slots-grid">
            {slots.map((slot) => (
              <button
                key={slot.hour}
                disabled={!slot.available}
                className={
                  slot.available
                    ? 'slot available'
                    : 'slot busy'
                }
                onClick={() => book(slot.hour)}
              >
                {slot.hour}:00
              </button>
            ))}
          </div>

          <input
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            placeholder="Telegram"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
          />

        </div>
      )}
    </div>
  )
}
