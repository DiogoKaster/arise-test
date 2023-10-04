import { Link, Outlet } from 'react-router-dom'

export function ByLetterLayout() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  return (
    <section className="max-w-[1200px] mx-auto min-h-screen">
      <div className="p-8 pb-0 text-orange-500">
        <h1 className="text-4xl font-bold mb-4">Receitas por letra</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-3 px-8 mb-6">
        {alphabet.map((letter, index) => (
          <Link
            to={`/by-letter/${letter}`}
            key={index}
            className="hover:text-orange-500 hover:scale-105">
            {letter}
          </Link>
        ))}
      </div>
      <Outlet />
    </section>
  )
}
