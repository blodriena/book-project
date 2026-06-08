'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { useCart } from '@/context/CartContext'

export default function CartPage() {
  const { state, dispatch } = useCart()

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
    }
  }

  const handleRemoveItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const subtotal = state.total
  const shipping = state.items.length > 0 ? 10 : 0
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-secondary to-background py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-1 text-4xl md:text-5xl">Shopping Cart</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {state.items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="mx-auto mb-4 text-gold" size={48} />
            <h2 className="heading-2 mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Start adding books to your cart and continue shopping. We have an amazing collection waiting for you.
            </p>
            <Link
              href="/books"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-gold hover:text-primary transition-all duration-300 font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="heading-3 mb-6">Your Books</h2>

              {state.items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 p-6 bg-card border border-border rounded-lg hover:border-gold transition-colors duration-300"
                >
                  {/* Book Image */}
                  <div className="relative w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-secondary">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>

                  {/* Book Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="heading-4 hover:text-gold transition-colors">
                        <Link href={`/books/${item.id}`}>{item.title}</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.authors.join(', ')}</p>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-secondary rounded transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-12 text-center px-2 py-1 bg-secondary border border-border rounded focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-secondary rounded transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="flex items-center gap-6">
                        <span className="heading-4 text-gold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="p-2 text-destructive hover:bg-destructive/10 rounded transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-8 sticky top-24 space-y-6">
                <h3 className="heading-3">Order Summary</h3>

                <div className="space-y-3 pb-6 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className={shipping === 0 ? 'text-gold' : ''}>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="heading-4">Total</span>
                  <span className="heading-2 text-gold">${total.toFixed(2)}</span>
                </div>

                <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-gold hover:text-primary transition-all duration-300 font-semibold">
                  Proceed to Checkout
                </button>

                <Link
                  href="/books"
                  className="block w-full text-center py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all duration-300 font-semibold"
                >
                  Continue Shopping
                </Link>

                {/* Promo Code */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Promo Code (optional)</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 bg-secondary border border-border rounded text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                    <button className="px-4 py-2 bg-secondary hover:bg-muted rounded text-sm font-medium transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L7.414 9l3.293 3.293a1 1 0 01-1.414 1.414l-4-4z" />
                    </svg>
                    Secure checkout
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L7.414 9l3.293 3.293a1 1 0 01-1.414 1.414l-4-4z" />
                    </svg>
                    Free returns within 30 days
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L7.414 9l3.293 3.293a1 1 0 01-1.414 1.414l-4-4z" />
                    </svg>
                    24/7 Customer support
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
