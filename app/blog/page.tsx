export default function BlogPage() {
  const posts = [
    {
      title: 'Почему сложно говорить о чувствах',
      text: 'Многие люди с детства привыкают скрывать свои эмоции...',
    },
    {
      title: 'Что такое эмоциональное выгорание',
      text: 'Выгорание — это состояние эмоционального истощения...',
    },
    {
      title: 'Как выстраивать личные границы',
      text: 'Личные границы помогают сохранять уважение к себе...',
    },
  ]

  return (
    <main className="container">
      <div className="page-title">
        <h1>Блог</h1>
      </div>

      <section className="section">
        {posts.map((post, index) => (
          <div className="blog-post" key={index}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
