import { RecipeSearchInput } from '../../components/RecipeSearchInput/RecipeSearchInput'
import { RecipeCard } from '../../components/RecipeCard/RecipeCard'
import { useContext, useEffect } from 'react'
import { RecipeContext } from '../../contexts/RecipeContext'

export function ByName() {
  const { recipeList, fetchRecipesByName } = useContext(RecipeContext)

  useEffect(() => {
    fetchRecipesByName('')
  }, [])

  return (
    <section className="max-w-[1200px] mx-auto min-h-screen">
      <div className="p-2 pr-6 pt-6 text-orange-500">
        <h1 className="text-4xl font-bold mb-4">Procure receitas pelo nome</h1>
      </div>
      <RecipeSearchInput withKeyDown={true} onSearch={fetchRecipesByName} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 pb-8">
        {recipeList.length > 0 ? (
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
          <p>Nenhuma receita encontrada</p>
        )}
      </div>
    </section>
  )
}
