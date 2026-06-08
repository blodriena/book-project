'use client'

import { Star, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import type { CartItem } from '@/context/CartContext'

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

interface BookCardProps {
  book: Book
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { dispatch } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const rating = book.averageRating || 0
  const hasRatings = (book.ratingsCount || 0) > 0

  const handleAddToCart = () => {
    setIsAdding(true)
    const cartItem: CartItem = {
      id: book.id,
      title: book.title,
      authors: book.authors,
      imageUrl: book.imageUrl || '',
      price: book.price,
      quantity: 1,
    }
    dispatch({ type: 'ADD_ITEM', payload: cartItem })

    setTimeout(() => setIsAdding(false), 600)
  }

  const displayImage = book.imageUrl ? book.imageUrl : '/placeholder-book.svg'

  return (
    <div className="group h-full flex flex-col rounded-lg overflow-hidden bg-card border border-border hover:border-gold transition-all duration-300 hover:shadow-lg">
      {/* Book Image */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-secondary">
        <Image
          src={displayImage}
          alt={book.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        {!book.imageUrl && (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
            <BookCard.PlaceholderIcon />
          </div>
        )}

        {/* Rating Badge */}
        {hasRatings && (
          <div className="absolute top-3 right-3 bg-gold text-primary px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
            <Star size={14} className="fill-primary" />
            <span className="text-sm font-semibold">{rating.toFixed(1)}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-4 gap-3">
        <div>
          <h3 className="heading-4 line-clamp-2 group-hover:text-gold transition-colors">
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
            {book.authors.join(', ')}
          </p>
        </div>

        {book.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{book.description}</p>
        )}

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="heading-4 text-gold">${book.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isAdding
                ? 'bg-gold text-primary'
                : 'bg-secondary text-primary hover:bg-gold hover:text-primary'
            }`}
            title="Add to cart"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

BookCard.PlaceholderIcon = function PlaceholderIcon() {
  return (
    <svg
      className="w-12 h-12 text-muted-foreground opacity-50"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z"
      />
    </svg>
  )
}
