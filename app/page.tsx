'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full border border-gold/20">
                  <BookOpen size={16} className="text-gold" />
                  <span className="text-sm font-semibold text-gold">Premium Book Selection</span>
                </div>

                <h1 className="heading-1 text-4xl md:text-5xl lg:text-6xl leading-tight">
                  Discover Your Next
                  <br />
                  <span className="text-gold">Literary Treasure</span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Explore thousands of carefully curated books. From timeless classics to contemporary
                  bestsellers, find your perfect read in our premium collection.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/books"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-gold hover:text-primary transition-all duration-300 font-semibold group"
                >
                  Start Exploring
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="#featured"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all duration-300 font-semibold"
                >
                  View Featured Books
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <p className="heading-3 text-gold">10K+</p>
                  <p className="text-sm text-muted-foreground">Books in Stock</p>
                </div>
                <div>
                  <p className="heading-3 text-gold">5★</p>
                  <p className="text-sm text-muted-foreground">Customer Rating</p>
                </div>
                <div>
                  <p className="heading-3 text-gold">100%</p>
                  <p className="text-sm text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden md:flex items-center justify-center animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
              <div className="relative w-full h-full max-w-md aspect-square">
                {/* Decorative books stack */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-80">
                    {/* Book 1 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold-light rounded-lg shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500" />
                    {/* Book 2 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500" />
                    {/* Book 3 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500" />

                    {/* Center accent */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <BookOpen size={48} className="mx-auto mb-4 text-gold" />
                        <p className="font-playfair text-2xl font-bold">Literarum</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="heading-4">Fast Delivery</h3>
              <p className="text-muted-foreground">Ships within 24-48 hours to your doorstep</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="heading-4">Quality Guaranteed</h3>
              <p className="text-muted-foreground">Authentic books with perfect condition checks</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="heading-4">Expert Curation</h3>
              <p className="text-muted-foreground">Hand-picked by book enthusiasts and critics</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
