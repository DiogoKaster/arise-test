import { Link } from 'react-router-dom'

interface RecipeCardProps {
  idMeal: string
  strMeal: string
  strInstructions?: string
  strMealThumb: string
  strYoutube?: string
}

export function RecipeCard({
  idMeal,
  strMeal,
  strInstructions,
  strMealThumb,
  strYoutube
}: RecipeCardProps) {
  return (
    <div className="bg-white shadow rounded-xl hover:scale-105 transition-all">
      <Link to={`/meal/${idMeal}`}>
        <img src={strMealThumb} alt="" className="rounded-t-xl w-full h-48 object-cover" />
      </Link>
      <div className="p-3">
        <h3 className="font-bold">{strMeal}</h3>
        <p className="mb-4 overflow-hidden max-h-48 line-clamp-4">{strInstructions}</p>
        <div className="flex items-center justify-between">
          {strYoutube && (
            <Link
              to={strYoutube}
              className="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors">
              YouTube
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
