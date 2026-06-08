'use client'

import { useContext } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { getCollectionBySlug } from '@/lib/collections'
import { GetCollectionIcon } from '@/components/GetCollectionIcon'
import { CartContext } from '@/context/CartContext'
import { Book, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface CollectionDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CollectionDetailPage(props: CollectionDetailPageProps) {
  const params = await props.params
  const collection = getCollectionBySlug(params.slug)

  if (!collection) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-1 text-3xl mb-4">Collection Not Found</h1>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-gold transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Collections
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 mb-6 font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Collections
          </Link>

          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <div className="text-gold text-3xl">
                <GetCollectionIcon iconType={collection.iconType} />
              </div>
            </div>

            <div className="flex-1">
              <h1 className="heading-1 text-4xl md:text-5xl mb-4">{collection.name}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-4">
                {collection.description}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-gold">
                  {collection.books.length} books
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">
                  Curated with excellence for every reader
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="flex-1 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {collection.books.map((book) => (
              <CollectionBookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function CollectionBookCard({
  book,
}: {
  book: {
    id: string
    title: string
    authors: string[]
    price: number
    averageRating: number
    ratingsCount: number
    imageUrl: string
    description: string
  }
}) {
  const { dispatch } = useContext(CartContext)

  const handleAddToCart = () => {
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
    <div className="bg-card rounded-lg border border-border hover:border-gold/50 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full group">
      {/* Image */}
      <div className="relative h-64 bg-secondary overflow-hidden">
        {book.imageUrl ? (
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gold/10 to-gold/5">
            <Book className="w-16 h-16 text-gold/30" />
          </div>
        )}

        {/* Rating Badge */}
        {book.averageRating > 0 && (
          <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold flex items-center gap-1">
            <span>★</span>
            <span>{book.averageRating.toFixed(1)}</span>
            <span className="text-xs opacity-75">({book.ratingsCount})</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-playfair font-semibold text-lg leading-snug mb-2 line-clamp-2 text-foreground">
          {book.title}
        </h3>

        {/* Authors */}
        <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
          {book.authors.join(', ')}
        </p>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">
          {book.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t border-border">
          <span className="text-2xl font-bold text-gold">${book.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="flex-1 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-semibold text-sm flex items-center justify-center gap-2 group/btn"
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
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
