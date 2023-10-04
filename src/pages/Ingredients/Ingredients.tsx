import { RecipeSearchInput } from '../../components/RecipeSearchInput/RecipeSearchInput'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../lib/axios'

interface Ingredient {
  strIngredient: string
}

export function Ingredients() {
  const [originalIngredients, setOriginalIngredients] = useState([] as Ingredient[])
  const [ingredients, setIngredients] = useState([] as Ingredient[])

  async function fetchIngredients() {
    const response = await api.get('/list.php?i=list')
    const data = response.data.meals || []
    setOriginalIngredients(data)
    setIngredients(data)
  }

  function filterIngredients(search: string) {
    if (search.trim() === '') {
      setIngredients(originalIngredients)
    } else {
      const filteredIngredients = originalIngredients.filter((ingredient) =>
        ingredient.strIngredient.toLowerCase().includes(search.toLowerCase())
      )
      setIngredients(filteredIngredients)
    }
  }

  useEffect(() => {
    fetchIngredients()
  }, [])

  return (
    <section className="max-w-[1200px] mx-auto min-h-screen">
      <div className="p-2 pr-6 pt-6 text-orange-500">
        <h1 className="text-4xl font-bold mb-4">Ingredientes</h1>
      </div>
      <RecipeSearchInput onSearch={filterIngredients} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2 pb-8">
        {ingredients.length > 0 ? (
          ingredients.map((ingredient, index) => (
            <Link
              to={`/ingredients/${ingredient.strIngredient}`}
              key={index}
              className="bg-white rounded shadow-md p-4 font-bold hover:scale-105 transition-all">
              <p>{ingredient.strIngredient}</p>
            </Link>
          ))
        ) : (
          <p>Nenhum ingrediente encontrado</p>
        )}
      </div>
    </section>
  )
}
