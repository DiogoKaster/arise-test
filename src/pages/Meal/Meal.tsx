import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface Recipe {
  idMeal: string
  strMeal: string
  strCategory: string
  strArea: string
  strTags: string
  strInstructions: string
  strMealThumb: string
  strYoutube: string
  strIngredient: string[]
  strMeasure: string[]
}

export function Meal() {
  const recipeParams = useParams<{ id: string }>()
  const [recipe, setRecipe] = useState({} as Recipe)

  async function fetchRecipeById(id?: string) {
    const response = await api.get(`/lookup.php?i=${id}`)
    const meal = response.data.meals[0]

    const ingredients = []
    const measures = []

    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`
      const measureKey = `strMeasure${i}`

      if (meal[ingredientKey] && meal[measureKey]) {
        ingredients.push(meal[ingredientKey])
        measures.push(meal[measureKey])
      }
    }

    const recipe = {
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strCategory: meal.strCategory,
      strArea: meal.strArea,
      strTags: meal.strTags,
      strInstructions: meal.strInstructions,
      strMealThumb: meal.strMealThumb,
      strYoutube: meal.strYoutube,
      strIngredient: ingredients,
      strMeasure: measures
    }

    setRecipe(recipe)
  }

  useEffect(() => {
    fetchRecipeById(recipeParams.id)
  }, [])

  return (
    <section className="max-w-[1200px] mx-auto min-h-screen">
      <div className="max-w-[800px] mx-auto p-8">
        <div className="pr-8 pt-8 text-orange-500">
          <h1 className="text-4xl font-bold mb-4">{recipe.strMeal}</h1>
        </div>
        <img src={recipe.strMealThumb} alt="" className="max-w-[100%]" />
        <div className="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
          <div>
            <strong className="font-bold">Categoria:</strong>
            <p>{recipe.strCategory}</p>
          </div>
          <div>
            <strong className="font-bold">Area:</strong>
            <p>{recipe.strArea}</p>
          </div>
          <div>
            <strong className="font-bold">Tags:</strong>
            <p>{recipe.strTags}</p>
          </div>
        </div>
        <div className="my-3">
          <strong className="font-bold">Instruções:</strong>
          <p className="text-justify">{recipe.strInstructions}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Ingredientes</h2>
            <ul>
              {recipe.strIngredient ? (
                recipe.strIngredient.map((ingredient, index) => <li key={index}>{ingredient}</li>)
              ) : (
                <li>Nenhum ingrediente disponível</li>
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Medidas</h2>
            <ul>
              {recipe.strMeasure ? (
                recipe.strMeasure.map((measure, index) => <li key={index}>{measure}</li>)
              ) : (
                <li>Nenhuma medida disponível</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
