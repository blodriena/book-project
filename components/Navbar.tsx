'use client'

import Link from 'next/link'
import { ShoppingBag, BookOpen } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export const Navbar = () => {
  const { state } = useCart()
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-lg">
              <BookOpen size={20} className="text-primary font-bold" />
            </div>
            <span className="heading-4 text-primary group-hover:text-gold transition-colors">
              Literarum
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/books" className="text-foreground hover:text-gold transition-colors font-medium">
              Explore
            </Link>
            <Link href="#" className="text-foreground hover:text-gold transition-colors font-medium">
              Collections
            </Link>
            <Link href="#" className="text-foreground hover:text-gold transition-colors font-medium">
              About
            </Link>
          </div>

          {/* Cart Button */}
          <Link
            href="/cart"
            className="relative flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-gold hover:text-primary transition-all duration-300"
          >
            <ShoppingBag size={20} />
            <span className="hidden sm:inline font-medium">Cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-destructive text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {itemCount > 99 ? '99+' : itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}
