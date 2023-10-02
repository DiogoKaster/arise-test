import { RecipeCard } from '../../components/RecipeCard/RecipeCard'

export function Home() {
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="p-8 pb-0 text-orange-500">
        <h1 className="text-4xl font-bold mb-4">Receitas Aleatórias</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </section>
  )
}
