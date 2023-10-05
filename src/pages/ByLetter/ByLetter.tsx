import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { RecipeCard } from '../../components/RecipeCard/RecipeCard'
import { RecipeContext } from '../../contexts/RecipeContext'

export function ByLetter() {
  const { letter } = useParams<{ letter: string }>()
  const { recipeList, fetchRecipesByLetter } = useContext(RecipeContext)

  useEffect(() => {
    if (letter) {
      fetchRecipesByLetter(letter)
    }
  }, [letter])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 pb-8">
      {recipeList.map((recipe, index) => (
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
