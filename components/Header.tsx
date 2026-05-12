import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <h3>Психолог</h3>

          <div>
            <Link href="/">Главная</Link>
            <Link href="/about">О себе</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/contacts">Контакты</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
