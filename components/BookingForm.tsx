'use client'

import { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [slots, setSlots] = useState<any[]>([])
  const [selectedHour, setSelectedHour] = useState<number | null>(null)

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
      .then((data) => setSlots(data))
  }, [selectedDate])

  async function handleBooking() {
    if (!selectedDate || selectedHour === null) {
      alert('Выберите дату и время')
      return
    }

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
        hour: selectedHour,
      }),
    })

    alert('Запись успешно создана')

    setName('')
    setPhone('')
    setTelegram('')
    setSelectedHour(null)
  }

  return (
    <div className="booking-layout">

      <div className="calendar-card">
        <h2>Выберите дату</h2>

        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
        />
      </div>

      <div className="booking-panel">

        <h2>Свободное время</h2>

        <div className="slots-grid">

          {slots.map((slot: any) => (
            <button
              key={slot.hour}
              disabled={!slot.available}
              className={`slot-btn ${
                slot.available
                  ? 'available'
                  : 'busy'
              } ${
                selectedHour === slot.hour
                  ? 'selected-slot'
                  : ''
              }`}
              onClick={() => setSelectedHour(slot.hour)}
            >
              {slot.hour}:00
            </button>
          ))}

        </div>

        <div className="booking-form">

          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder="Telegram"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
          />

          <button
            className="booking-submit"
            onClick={handleBooking}
          >
            Записаться
          </button>

        </div>

      </div>

    </div>
  )
}
