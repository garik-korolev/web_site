import Hero from '../components/Hero'
export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="section">
        <div className="container">
          <h2>Почему люди обращаются к психологу</h2>

          <div className="cards">
            <div className="card">
              <h3>Тревога и стресс</h3>
              <p>
                Помощь в проживании тревожных состояний,
                эмоционального напряжения и выгорания.
              </p>
            </div>

            <div className="card">
              <h3>Отношения</h3>
              <p>
                Сложности в отношениях с партнером,
                семьей и окружающими.
              </p>
            </div>

            <div className="card">
              <h3>Поиск себя</h3>
              <p>
                Поддержка в периоды жизненных изменений
                и внутреннего поиска.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Что такое гештальт-подход</h2>

          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            Гештальт-терапия помогает лучше понимать себя,
            свои чувства, потребности и способы взаимодействия с миром.
            Это пространство для честного диалога,
            осознавания и бережных изменений.
          </p>
        </div>
      </section>
    </main>
  )
}
