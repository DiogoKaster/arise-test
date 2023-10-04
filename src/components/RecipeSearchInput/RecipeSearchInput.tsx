import { useState } from 'react'

interface RecipeSearchInputProps {
  onSearch: (search: string) => void
  withKeyDown?: boolean
}

export function RecipeSearchInput({ onSearch, withKeyDown = false }: RecipeSearchInputProps) {
  const [search, setSearch] = useState('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
    if (!withKeyDown) {
      onSearch(event.target.value)
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      onSearch(search)
    }
  }

  return (
    <div className="mb-4 p-2">
      <input
        onChange={handleInputChange}
        {...(withKeyDown && { onKeyDown: handleKeyDown })}
        type="text"
        placeholder="Nome da receita"
        className="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full px-4 py-2 focus:outline-none"
      />
    </div>
  )
}
