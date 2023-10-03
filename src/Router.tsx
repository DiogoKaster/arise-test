import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'
import { Meal } from './pages/Meal/Meal'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<Meal />} />
      </Route>
    </Routes>
  )
}
