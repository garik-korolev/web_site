'use client'

import { useEffect, useMemo, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  )

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

  const availableSlots = useMemo(() => {
    return slots.filter((slot) => slot.available)
  }, [slots])

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
    <section className="booking-wrapper">

      <div className="booking-card">

        <div className="calendar-side">

          <div className="calendar-header">
            <span className="calendar-badge">
              Онлайн-запись
            </span>

            <h2>
              Выберите удобную дату
            </h2>

            <p>
              После выбора даты будут показаны
              свободные часы для консультации.
            </p>
          </div>

          <div className="calendar-container">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>

        </div>

        <div className="booking-side">

          <div className="slots-header">
            <h3>Свободное время</h3>

            <p>
              Доступные слоты на выбранную дату
            </p>
          </div>

          <div className="slots-container">

            {availableSlots.length > 0 ? (
              availableSlots.map((slot: any) => (
                <button
                  key={slot.hour}
                  onClick={() => setSelectedHour(slot.hour)}
                  className={`time-slot ${
                    selectedHour === slot.hour
                      ? 'selected-time'
                      : ''
                  }`}
                >
                  {slot.hour}:00
                </button>
              ))
            ) : (
              <div className="empty-slots">
                На выбранную дату свободных мест нет
              </div>
            )}

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
              className="booking-button"
              onClick={handleBooking}
            >
              Записаться на консультацию
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}
