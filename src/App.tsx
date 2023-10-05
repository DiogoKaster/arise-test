import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { RecipeContextProvider } from './contexts/RecipeContext'

export function App() {
  return (
    <BrowserRouter>
      <RecipeContextProvider>
        <Router />
      </RecipeContextProvider>
    </BrowserRouter>
  )
}
