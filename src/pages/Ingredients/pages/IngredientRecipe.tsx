import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../../lib/axios'
import { Recipe } from '../../Home/Home'
import { RecipeCard } from '../../../components/RecipeCard/RecipeCard'

export function IngredientRecipe() {
  const { ingredient } = useParams()
  const [recipes, setRecipes] = useState([] as Recipe[])

  async function fetchRecipeByIngredient() {
    const response = await api.get(`/filter.php?i=${ingredient}`)
    setRecipes(response.data.meals)
  }

  useEffect(() => {
    fetchRecipeByIngredient()
  }, [])

  return (
    <section className="max-w-[1200px] mx-auto min-h-screen">
      <div className="p-8 pb-0 text-orange-500">
        <h1 className="text-4xl font-bold mb-4">Receitas feitas com {ingredient}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 pb-8">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            idMeal={recipe.idMeal}
            strMeal={recipe.strMeal}
            strMealThumb={recipe.strMealThumb}
          />
        ))}
      </div>
    </section>
  )
}
