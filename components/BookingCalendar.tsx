'use client'
      body: JSON.stringify({
        name,
        phone,
        telegram,
        date: selectedDate,
        hour: selectedHour,
      }),
    })

    alert('Запись успешно создана')
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
          {slots.map((slot) => (
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
