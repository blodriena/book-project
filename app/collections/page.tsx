'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { COLLECTIONS } from '@/lib/collections'
import { GetCollectionIcon } from '@/components/GetCollectionIcon'
import Link from 'next/link'

export default function CollectionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-1 text-4xl md:text-5xl mb-4">All Collections</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our curated collections of books across all genres and categories. Discover
            bestsellers, new arrivals, award winners, and more.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="flex-1 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {COLLECTIONS.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group"
              >
                <div className="bg-card rounded-xl border border-border hover:border-gold hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Collection Preview */}
                  <div className="relative h-48 bg-gradient-to-br from-secondary via-secondary to-muted overflow-hidden">
                    {/* Icon display */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                      <div className="text-8xl text-gold">
                        <GetCollectionIcon iconType={collection.iconType} />
                      </div>
                    </div>

                    {/* Book previews overlay */}
                    <div className="absolute inset-0 flex items-end justify-center p-4 gap-1">
                      {collection.books.slice(0, 3).map((book, idx) => (
                        <div
                          key={book.id}
                          className="w-12 h-32 rounded overflow-hidden shadow-lg transform group-hover:translate-y-2 transition-transform"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          {book.imageUrl ? (
                            <img
                              src={book.imageUrl}
                              alt={book.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gold/30 to-gold/10" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="heading-3 text-xl">{collection.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {collection.books.length} books
                        </p>
                      </div>
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-gold">
                          <GetCollectionIcon iconType={collection.iconType} />
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-2">
                      {collection.description}
                    </p>

                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 hover:bg-primary/10 text-primary rounded-lg transition-colors font-semibold text-sm group/btn">
                      Explore Collection
                      <svg
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
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
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
