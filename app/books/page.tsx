'use client'

import { useEffect, useState, useCallback } from 'react'
import { Loader2 } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BookCard } from '@/components/BookCard'
import { SearchBar } from '@/components/SearchBar'
import { Filters, type FilterState } from '@/components/Filters'
import { fetchBooks } from '@/lib/books'

interface Book {
  id: string
  title: string
  authors: string[]
  imageUrl?: string
  price: number
  averageRating?: number
  ratingsCount?: number
  description?: string
}

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([])
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('fiction')
  const [filters, setFilters] = useState<FilterState>({
    minPrice: 0,
    maxPrice: 100,
    minRating: 0,
    selectedGenres: [],
  })
  const [displayCount, setDisplayCount] = useState(20)

  // Fetch books
  useEffect(() => {
    const loadBooks = async () => {
      setLoading(true)
      const fetchedBooks = await fetchBooks(searchQuery)
      setBooks(fetchedBooks)
      setLoading(false)
    }
    loadBooks()
  }, [searchQuery])

  // Apply filters
  useEffect(() => {
    let result = books

    // Price filter
    result = result.filter((book) => book.price >= filters.minPrice && book.price <= filters.maxPrice)

    // Rating filter
    if (filters.minRating > 0) {
      result = result.filter((book) => (book.averageRating || 0) >= filters.minRating)
    }

    setFilteredBooks(result)
  }, [books, filters])

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query || 'fiction')
    setDisplayCount(20)
  }, [])

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters)
    setDisplayCount(20)
  }

  const displayedBooks = filteredBooks.slice(0, displayCount)
  const hasMore = displayCount < filteredBooks.length

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-secondary to-background py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-1 text-4xl md:text-5xl mb-4">Browse Our Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover thousands of books. Search, filter, and find your next favorite read.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <Filters onFilterChange={handleFilterChange} />
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            {/* Search Bar */}
            <div>
              <SearchBar onSearch={handleSearch} placeholder="Search by title, author..." />
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between">
              <h2 className="heading-3">
                {loading ? 'Loading...' : `${filteredBooks.length} Books Found`}
              </h2>
              <div className="text-sm text-muted-foreground">
                Showing {displayedBooks.length} of {filteredBooks.length}
              </div>
            </div>

            {/* Books Grid */}
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 text-gold animate-spin" />
              </div>
            ) : filteredBooks.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground mb-4">No books found matching your criteria.</p>
                <p className="text-sm text-muted-foreground">Try adjusting your filters or search query.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {displayedBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                  <div className="flex justify-center pt-8">
                    <button
                      onClick={() => setDisplayCount((prev) => prev + 20)}
                      className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-gold hover:text-primary transition-all duration-300 font-semibold"
                    >
                      Load More Books
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}
