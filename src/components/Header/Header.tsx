import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="bg-white text-black shadow h-16 flex justify-between items-stretch">
      <Link to="/" className="inline-flex items-center h-full px-5 text-orange-500 font-bold">
        Início
      </Link>
      <div className="flex items-center gap-1">
        <Link
          to="/by-name"
          className="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white">
          Pesquisar Receitas
        </Link>
        <Link
          to="/by-name"
          className="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white">
          Receitas por Letra
        </Link>
        <Link
          to="/by-name"
          className="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white">
          Receitas por Ingrediente
        </Link>
      </div>
    </header>
  )
}
