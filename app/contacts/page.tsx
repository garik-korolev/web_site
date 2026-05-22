import BookingCalendar from '../../components/BookingCalendar'

export default function ContactsPage() {
  return (
    <main className="container">

      <div className="page-title">
        <h1>Контакты</h1>
        <p>
          Выберите удобное время для консультации
        </p>
      </div>

      <section className="section">

        <div className="contact-grid">

          <div className="card">
            <h3>Telegram</h3>

            <p>
              <a
                href="https://t.me/Galina_Koroleva"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Galina_Koroleva
              </a>
            </p>
          </div>

          <div className="card">
            <h3>Email</h3>

            <p>
              <a href="mailto:nexy@bk.ru">
                nexy@bk.ru
              </a>
            </p>
          </div>

          <div className="card">
            <h3>Телефон</h3>

            <p>
              <a href="tel:+79992232501">
                +7 (999) 223-25-01
              </a>
            </p>
          </div>

          <div className="card">
            <h3>Формат работы</h3>
            <p>
              Онлайн-консультации и очные встречи
            </p>
          </div>

        </div>

        <BookingCalendar />

      </section>

    </main>
  )
}
