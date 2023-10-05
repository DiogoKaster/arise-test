import { useContext } from 'react'
import { RecipeCard } from '../../components/RecipeCard/RecipeCard'
import { RecipeContext } from '../../contexts/RecipeContext'

export function Favorites() {
  const { favoriteRecipes } = useContext(RecipeContext)

  return (
    <section className="max-w-[1200px] mx-auto min-h-screen">
      <div className="p-8 pb-0 text-orange-500">
        <h1 className="text-4xl font-bold mb-4">Receitas Favoritas</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 pb-8">
        {favoriteRecipes.length ? (
          favoriteRecipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              idMeal={recipe.idMeal}
              strInstructions={recipe.strInstructions}
              strMeal={recipe.strMeal}
              strMealThumb={recipe.strMealThumb}
              strYoutube={recipe.strYoutube}
              deleteRecipe={true}
            />
          ))
        ) : (
          <p className="col-span-full text-center">Nenhuma receita favorita</p>
        )}
      </div>
    </section>
  )
}
