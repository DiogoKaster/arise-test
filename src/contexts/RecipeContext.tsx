import { createContext, useState } from 'react'
import { api } from '../lib/axios'

interface Recipe {
  idMeal: string
  strMeal: string
  strCategory: string
  strArea: string
  strTags: string
  strSource?: string
  strInstructions: string
  strMealThumb: string
  strYoutube: string
  strIngredient: string[]
  strMeasure: string[]
}

interface RecipeContextType {
  recipeList: Recipe[]
  favoriteRecipes: Recipe[]
  addToFavorites: (recipe: Recipe) => void
  deleteFromFavorites: (id: string) => void
  fetchRandomRecipes: () => void
  fetchRecipeById: (id?: string) => void
  fetchRecipesByName: (name?: string) => void
  fetchRecipesByLetter: (letter: string) => void
  fetchRecipeByIngredient: (ingredient: string) => void
}

export const RecipeContext = createContext({} as RecipeContextType)

interface RecipeContextProviderProps {
  children: React.ReactNode
}

export function RecipeContextProvider({ children }: RecipeContextProviderProps) {
  const [recipeList, setRecipeList] = useState([] as Recipe[])
  const [favoriteRecipes, setFavoriteRecipes] = useState([] as Recipe[])

  function addToFavorites(recipe: Recipe) {
    if (favoriteRecipes.find((favorite) => favorite.idMeal === recipe.idMeal)) {
      return
    } else {
      alert('Receita adicionada aos favoritos!')
      setFavoriteRecipes([...favoriteRecipes, recipe])
    }
  }

  function deleteFromFavorites(id: string) {
    const newFavoriteRecipes = favoriteRecipes.filter((recipe) => recipe.idMeal !== id)
    setFavoriteRecipes(newFavoriteRecipes)
  }

  async function fetchRandomRecipes() {
    const recipesArray = []

    for (let i = 0; i < 10; i++) {
      const response = await api.get('/random.php')
      const recipe = response.data.meals[0]
      recipesArray.push(recipe)
    }

    setRecipeList(recipesArray)
  }

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
      strSource: meal.strSource,
      strYoutube: meal.strYoutube,
      strIngredient: ingredients,
      strMeasure: measures
    }

    setRecipeList([recipe])
  }

  async function fetchRecipesByName(name?: string) {
    if (!name) {
      setRecipeList([])
    } else {
      const response = await api.get(`/search.php?s=${name}`)
      setRecipeList(response.data.meals)
    }
  }

  async function fetchRecipesByLetter(letter: string) {
    const response = await api.get(`/search.php?f=${letter}`)
    setRecipeList(response.data.meals)
  }

  async function fetchRecipeByIngredient(ingredient: string) {
    const response = await api.get(`/filter.php?i=${ingredient}`)
    setRecipeList(response.data.meals)
  }

  return (
    <RecipeContext.Provider
      value={{
        recipeList,
        favoriteRecipes,
        addToFavorites,
        deleteFromFavorites,
        fetchRandomRecipes,
        fetchRecipeById,
        fetchRecipesByName,
        fetchRecipesByLetter,
        fetchRecipeByIngredient
      }}>
      {children}
    </RecipeContext.Provider>
  )
}
