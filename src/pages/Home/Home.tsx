import { RecipeCard } from '../../components/RecipeCard/RecipeCard'
import { useEffect, useContext } from 'react'
import { RecipeContext } from '../../contexts/RecipeContext'

export interface Recipe {
  idMeal: string
  strMeal: string
  strInstructions: string
  strMealThumb: string
  strYoutube: string
}

export function Home() {
  const { recipeList, fetchRandomRecipes } = useContext(RecipeContext)

  useEffect(() => {
    fetchRandomRecipes()
  }, [])

  return (
    <section className="max-w-[1200px] mx-auto min-h-screen">
      <div className="p-8 pb-0 text-orange-500">
        <h1 className="text-4xl font-bold mb-4">Receitas Aleatórias</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 pb-8">
        {recipeList ? (
          recipeList.map((recipe, index) => (
            <RecipeCard
              key={index}
              idMeal={recipe.idMeal}
              strInstructions={recipe.strInstructions}
              strMeal={recipe.strMeal}
              strMealThumb={recipe.strMealThumb}
              strYoutube={recipe.strYoutube}
            />
          ))
        ) : (
          <p>Carregando receitas...</p>
        )}
      </div>
    </section>
  )
}
