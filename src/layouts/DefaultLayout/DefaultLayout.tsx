import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'

export function DefaultLayout() {
  return (
    <div className="h-full bg-gray-100">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
