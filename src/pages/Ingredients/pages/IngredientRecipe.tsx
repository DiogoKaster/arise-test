import { useParams } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { RecipeCard } from '../../../components/RecipeCard/RecipeCard'
import { RecipeContext } from '../../../contexts/RecipeContext'

export function IngredientRecipes() {
  const { ingredient } = useParams<{ ingredient: string }>()
  const { recipeList, fetchRecipeByIngredient } = useContext(RecipeContext)

  useEffect(() => {
    if (ingredient) {
      fetchRecipeByIngredient(ingredient)
    }
  }, [ingredient])

  return (
    <section className="max-w-[1200px] mx-auto min-h-screen">
      <div className="p-8 pb-0 text-orange-500">
        <h1 className="text-4xl font-bold mb-4">Receitas feitas com {ingredient}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 pb-8">
        {recipeList.map((recipe, index) => (
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
