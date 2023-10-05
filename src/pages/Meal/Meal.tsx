import { Link, useParams } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { RecipeContext } from '../../contexts/RecipeContext'

export function Meal() {
  const recipeParams = useParams<{ id: string }>()
  const { recipeList, fetchRecipeById } = useContext(RecipeContext)

  useEffect(() => {
    fetchRecipeById(recipeParams.id)
  }, [])

  console.log(recipeList)
  return (
    <section className="max-w-[1200px] mx-auto min-h-screen">
      <div className="max-w-[800px] mx-auto p-8">
        <div className="pr-8 pt-8 text-orange-500">
          <h1 className="text-4xl font-bold mb-4">{recipeList[0].strMeal}</h1>
        </div>
        <img src={recipeList[0].strMealThumb} alt="" className="max-w-[100%]" />
        <div className="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
          <div>
            <strong className="font-bold">Categoria:</strong>
            <p>{recipeList[0].strCategory}</p>
          </div>
          <div>
            <strong className="font-bold">Area:</strong>
            <p>{recipeList[0].strArea}</p>
          </div>
          <div>
            <strong className="font-bold">Tags:</strong>
            <p>{recipeList[0].strTags}</p>
          </div>
        </div>
        <div className="my-3">
          <strong className="font-bold">Instruções:</strong>
          <p className="text-justify">{recipeList[0].strInstructions}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Ingredientes</h2>
            <ul>
              {recipeList[0].strIngredient ? (
                recipeList[0].strIngredient.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))
              ) : (
                <li>Nenhum ingrediente disponível</li>
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Medidas</h2>
            <ul>
              {recipeList[0].strMeasure ? (
                recipeList[0].strMeasure.map((measure, index) => <li key={index}>{measure}</li>)
              ) : (
                <li>Nenhuma medida disponível</li>
              )}
            </ul>
          </div>
        </div>
        <div className="flex gap-20 w-full items-center justify-center pt-8">
          {recipeList[0].strYoutube && (
            <Link
              to={recipeList[0].strYoutube}
              className="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors">
              YouTube
            </Link>
          )}
          {recipeList[0].strSource && (
            <Link
              to={recipeList[0].strSource}
              className="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors">
              Source
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
