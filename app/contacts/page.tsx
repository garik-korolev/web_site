import BookingCalendar from '../../components/BookingCalendar'

export default function ContactsPage() {
  return (
    <main className="contacts-page">

      <section className="contacts-hero">

        <div className="container">

          <div className="contacts-heading">

            <span className="contacts-badge">
              Контакты и запись
            </span>

            <h1>
              Запись на консультацию
            </h1>

            <p>
              Индивидуальная психологическая поддержка
              в гештальт-подходе.
              Онлайн и очные встречи.
            </p>

          </div>

          <div className="contact-cards">

            <div className="contact-card">
              <h3>Telegram</h3>

              <a
                href="https://t.me/Galina_Koroleva"
                target="_blank"
              >
                @Galina_Koroleva
              </a>
            </div>

            <div className="contact-card">
              <h3>Email</h3>

              <a href="mailto:nexy@bk.ru">
                nexy@bk.ru
              </a>
            </div>

            <div className="contact-card">
              <h3>Телефон</h3>

              <a href="tel:+79992232501">
                +7 (999) 223-25-01
              </a>
            </div>

            <div className="contact-card">
              <h3>Формат работы</h3>

              <p>
                Онлайн-консультации и очные встречи
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="booking-section">
        <div className="container">
          <BookingCalendar />
        </div>
      </section>

    </main>
  )
}
