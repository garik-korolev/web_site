export default function AboutPage() {
  return (
    <main className="container">
      <div className="page-title">
        <h1>О себе</h1>
      </div>

      <section className="section">
        <h2>Мой подход</h2>

        <p>
          Я практикующий психолог, работающий в гештальт-подходе.
          В своей работе я создаю безопасное пространство,
          где можно исследовать свои чувства,
          переживания и жизненные ситуации.
        </p>
      </section>

      <section className="section">
        <h2>Образование</h2>

        <div className="cards">
          <div className="card">
            <h3>Высшее образование</h3>
            <p>
              Московский институт психологии
              — психологическое консультирование.
            </p>
          </div>

          <div className="card">
            <h3>Переподготовка</h3>
            <p>
              Программа профессиональной переподготовки
              по гештальт-терапии.
            </p>
          </div>

          <div className="card">
            <h3>Дополнительное обучение</h3>
            <p>
              Работа с тревожностью, кризисными состояниями,
              эмоциональным выгоранием.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
