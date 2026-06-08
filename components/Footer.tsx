'use client'

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="heading-4 mb-4 text-gold">Literarum</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Discover, explore, and collect exquisite books from around the world. Premium selection
              and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Browse Books
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  New Releases
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              &copy; 2024 Literarum. All rights reserved.
            </p>
            <div className="flex gap-4 text-primary-foreground/60">
              <a href="#" className="hover:text-gold transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gold transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.334.012 7.053.07 2.695.272.273 2.69.07 7.052.012 8.333 0 8.756 0 12s.012 3.667.07 4.947c.203 4.358 2.625 6.78 6.987 6.983 1.281.058 1.703.07 4.947.07s3.668-.012 4.947-.07c4.358-.202 6.78-2.625 6.977-6.983.058-1.28.07-1.702.07-4.947s-.012-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.982C15.668.012 15.259 0 12 0z" />
                  <circle cx="12" cy="12" r="3.6" />
                </svg>
              </a>
              <a href="#" className="hover:text-gold transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.655 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
