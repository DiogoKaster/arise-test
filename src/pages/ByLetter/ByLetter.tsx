import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { RecipeCard } from '../../components/RecipeCard/RecipeCard'
import { Recipe } from '../Home/Home'

export function ByLetter() {
  const { letter } = useParams()
  const [recipes, setRecipes] = useState([] as Recipe[])

  async function fetchRecipesByLetter() {
    const response = await api.get(`/search.php?f=${letter}`)
    setRecipes(response.data.meals)
  }

  useEffect(() => {
    fetchRecipesByLetter()
  }, [recipes])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 pb-8">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          idMeal={recipe.idMeal}
          strInstructions={recipe.strInstructions}
          strMeal={recipe.strMeal}
          strMealThumb={recipe.strMealThumb}
          strYoutube={recipe.strYoutube}
        />
      ))}
    </div>
  )
}
