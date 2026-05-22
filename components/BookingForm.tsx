'use client'

export default function BookingForm() {
  return (
    <section className="section">
      <div className="container">
        <h2>Запись на консультацию</h2>

        <form
          action="https://formspree.io/f/xwvzbkbo"
          method="POST"
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Ваш Email"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
          />

          <textarea
            name="message"
            placeholder="Кратко опишите ваш запрос"
            rows={6}
          />

          <button type="submit">
            Записаться
          </button>
        </form>
      </div>
    </section>
  )
}
