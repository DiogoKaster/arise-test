import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'
import { Meal } from './pages/Meal/Meal'
import { ByName } from './pages/ByName/ByName'
import { ByLetter } from './pages/ByLetter/ByLetter'
import { Ingredients } from './pages/Ingredients/Ingredients'
import { IngredientRecipe } from './pages/Ingredients/pages/IngredientRecipe'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<Meal />} />
        <Route path="/by-name" element={<ByName />} />
        <Route path="/by-letter" element={<ByLetter />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/ingredients/:ingredient" element={<IngredientRecipe />} />
      </Route>
    </Routes>
  )
}
