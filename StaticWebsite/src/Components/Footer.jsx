import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-2xl font-bold tracking-tight">Meesho</h2>
          <p className="text-sm leading-relaxed">
            Providing quality products at affordable prices. Join our community of millions of entrepreneurs today.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold uppercase text-xs tracking-widest">Shop</h3>
          <p className="hover:text-white transition-colors text-sm">All Products</p>
          <p className="hover:text-white transition-colors text-sm">Women Fashion</p>
          <p className="hover:text-white transition-colors text-sm">Men Fashion</p>
          <p className="hover:text-white transition-colors text-sm">Kids Section</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold uppercase text-xs tracking-widest">Company</h3>
          <p className="hover:text-white transition-colors text-sm">About Us</p>
          <p className="hover:text-white transition-colors text-sm">Careers</p>
          <p className="hover:text-white transition-colors text-sm">Contact</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold uppercase text-xs tracking-widest">Help</h3>
          <p className="hover:text-white transition-colors text-sm">FAQ</p>
          <p className="hover:text-white transition-colors text-sm">Terms of Service</p>
          <p className="hover:text-white transition-colors text-sm">Privacy Policy</p>
        </div>

      </div>


      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-10 pt-6 text-center text-xs">
        <p>&copy; 2026 Meesho Clone. All rights reserved.</p>
      </div>
    </footer>
  )
}