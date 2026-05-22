import BookingForm from '../../components/BookingForm'
export default function ContactsPage() {
  return (
    <main className="container">
      <div className="page-title">
        <h1>Контакты</h1>
      </div>

      <section className="section">
        <div className="contact-list">
          <div className="card">
            <h3>Telegram</h3>
            <p>@your_telegram</p>
          </div>

          <div className="card">
            <h3>Email</h3>
            <p>psychologist@example.com</p>
          </div>

          <div className="card">
            <h3>Формат работы</h3>
            <p>Онлайн-консультации и очные встречи</p>
          </div>
        </div>
      </section>
    </main>
  )
}
