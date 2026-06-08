'use client'

import Link from 'next/link'
import { Book } from 'lucide-react'
import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { GetCollectionIcon } from './GetCollectionIcon'

export interface CollectionBook {
  id: string
  title: string
  authors: string[]
  price: number
  averageRating: number
  ratingsCount: number
  imageUrl: string
  description: string
}

interface BookCollectionProps {
  name: string
  slug: string
  description: string
  iconType: 'flame' | 'sparkles' | 'award' | 'book' | 'heart' | 'brain' | 'rocket'
  books: CollectionBook[]
  viewAllUrl?: string
}

export function BookCollection({
  name,
  slug,
  description,
  iconType,
  books,
  viewAllUrl,
}: BookCollectionProps) {
  const { dispatch } = useContext(CartContext)

  const handleAddToCart = (book: CollectionBook) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: book.id,
        title: book.title,
        price: book.price,
        image: book.imageUrl,
        authors: book.authors,
      },
    })
  }

  return (
    <section className="py-12 border-b border-border last:border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
              <div className="text-gold">
                <GetCollectionIcon iconType={iconType} />
              </div>
            </div>
            <div>
              <h2 className="heading-2 text-2xl md:text-3xl">{name}</h2>
              <p className="text-muted-foreground mt-1">{description}</p>
            </div>
          </div>

          {viewAllUrl && (
            <Link
              href={viewAllUrl}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-gold hover:text-gold/80 transition-colors font-semibold text-sm"
            >
              View All
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          )}
        </div>

        {/* Books Scroll */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {books.map((book) => (
              <div
                key={book.id}
                className="flex-shrink-0 w-44 group snap-start"
              >
                {/* Book Card */}
                <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-52 bg-secondary overflow-hidden">
                    {book.imageUrl ? (
                      <img
                        src={book.imageUrl}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gold/10 to-gold/5">
                        <Book className="w-12 h-12 text-gold/30" />
                      </div>
                    )}

                    {/* Rating Badge */}
                    {book.averageRating > 0 && (
                      <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs font-semibold flex items-center gap-1">
                        <span>★</span>
                        <span>{book.averageRating.toFixed(1)}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-3 flex flex-col flex-1">
                    <h3 className="font-playfair font-semibold text-sm line-clamp-2 mb-1 text-foreground">
                      {book.title}
                    </h3>

                    <p className="text-xs text-muted-foreground line-clamp-1 mb-3 flex-1">
                      {book.authors[0]}
                    </p>

                    <div className="flex items-center justify-between gap-2 mt-auto">
                      <span className="text-lg font-bold text-gold">
                        ${book.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleAddToCart(book)}
                        className="p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                        title="Add to cart"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Gradient */}
          <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* View All Mobile */}
        {viewAllUrl && (
          <Link
            href={viewAllUrl}
            className="md:hidden mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary/5 hover:bg-primary/10 text-primary rounded-lg transition-colors font-semibold"
          >
            View All {name}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        )}
      </div>
    </section>
  )
}
