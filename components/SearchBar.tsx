'use client'

import { Search } from 'lucide-react'
import { useState, useCallback } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search by title, author, ISBN...',
}) => {
  const [query, setQuery] = useState('')

  const handleSearch = useCallback(
    (value: string) => {
      setQuery(value)
      onSearch(value)
    },
    [onSearch]
  )

  const handleClear = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <div className="w-full">
      <div className="relative flex items-center">
        <Search className="absolute left-4 text-muted-foreground pointer-events-none" size={20} />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
