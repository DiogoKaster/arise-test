import { Link } from 'react-router-dom'

export function RecipeCard() {
  return (
    <div className="bg-white shadow rounded-xl hover:scale-105 transition-all">
      <Link to="/">
        <img src="" alt="" className="rounded-t-xl w-full h-48 object-cover" />
      </Link>
      <div className="p-3">
        <h3 className="font-bold">Nome da Receita</h3>
        <p className="mb-4">Descrição da receita</p>
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors">
            YouTube
          </Link>
        </div>
      </div>
    </div>
  )
}
