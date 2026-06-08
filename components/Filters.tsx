'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FiltersProps {
  onFilterChange: (filters: FilterState) => void
}

export interface FilterState {
  minPrice: number
  maxPrice: number
  minRating: number
  selectedGenres: string[]
}

const GENRES = ['Fiction', 'Non-Fiction', 'Mystery', 'Romance', 'Science Fiction', 'Biography']

export const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    minPrice: 0,
    maxPrice: 100,
    minRating: 0,
    selectedGenres: [],
  })
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    price: true,
    rating: true,
    genres: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handlePriceChange = (min: number, max: number) => {
    const newFilters = { ...filters, minPrice: min, maxPrice: max }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleRatingChange = (rating: number) => {
    const newFilters = { ...filters, minRating: rating }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleGenreToggle = (genre: string) => {
    const newGenres = filters.selectedGenres.includes(genre)
      ? filters.selectedGenres.filter((g) => g !== genre)
      : [...filters.selectedGenres, genre]

    const newFilters = { ...filters, selectedGenres: newGenres }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const hasActiveFilters =
    filters.minPrice > 0 ||
    filters.maxPrice < 100 ||
    filters.minRating > 0 ||
    filters.selectedGenres.length > 0

  const handleResetFilters = () => {
    const defaultFilters: FilterState = {
      minPrice: 0,
      maxPrice: 100,
      minRating: 0,
      selectedGenres: [],
    }
    setFilters(defaultFilters)
    onFilterChange(defaultFilters)
  }

  return (
    <div className="space-y-6 p-5 bg-card border border-border rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="heading-4">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={handleResetFilters}
            className="text-xs text-gold hover:text-gold-light transition-colors font-medium"
          >
            Reset
          </button>
        )}
      </div>

      {/* Price Filter */}
      <div className="border-b border-border pb-4">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full mb-3 hover:text-gold transition-colors"
        >
          <span className="font-semibold text-foreground">Price</span>
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedSections.price ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.price && (
          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="number"
                min="0"
                max={filters.maxPrice}
                value={filters.minPrice}
                onChange={(e) => handlePriceChange(Number(e.target.value), filters.maxPrice)}
                placeholder="Min"
                className="w-full px-3 py-2 bg-secondary border border-border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="number"
                min={filters.minPrice}
                max="500"
                value={filters.maxPrice}
                onChange={(e) => handlePriceChange(filters.minPrice, Number(e.target.value))}
                placeholder="Max"
                className="w-full px-3 py-2 bg-secondary border border-border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              ${filters.minPrice} - ${filters.maxPrice}
            </div>
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="border-b border-border pb-4">
        <button
          onClick={() => toggleSection('rating')}
          className="flex items-center justify-between w-full mb-3 hover:text-gold transition-colors"
        >
          <span className="font-semibold text-foreground">Rating</span>
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedSections.rating ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.rating && (
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.minRating === rating}
                  onChange={() => handleRatingChange(filters.minRating === rating ? 0 : rating)}
                  className="w-4 h-4 rounded bg-secondary border-border cursor-pointer accent-gold"
                />
                <span className="text-sm group-hover:text-gold transition-colors">
                  {rating}+ Stars
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Genre Filter */}
      <div>
        <button
          onClick={() => toggleSection('genres')}
          className="flex items-center justify-between w-full mb-3 hover:text-gold transition-colors"
        >
          <span className="font-semibold text-foreground">Genre</span>
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedSections.genres ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.genres && (
          <div className="space-y-2">
            {GENRES.map((genre) => (
              <label key={genre} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.selectedGenres.includes(genre)}
                  onChange={() => handleGenreToggle(genre)}
                  className="w-4 h-4 rounded bg-secondary border-border cursor-pointer accent-gold"
                />
                <span className="text-sm group-hover:text-gold transition-colors">{genre}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
