import React from 'react'

export const About = () => {
  return (
    <div className="flex flex-col w-full">
    
      <section className="bg-orange-50 py-20 px-8 text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Mission</h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We are democratizing commerce by bringing the smallest sellers online. 
          Our platform empowers millions of entrepreneurs to start their own 
          businesses with zero investment.
        </p>
      </section>

      <section className="py-16 px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border-b-4 border-orange-400 bg-white shadow-sm text-center">
            <h3 className="text-4xl font-black text-orange-500 mb-2">10M+</h3>
            <p className="text-slate-700 font-medium">Entrepreneurs</p>
          </div>
          <div className="p-8 border-b-4 border-orange-400 bg-white shadow-sm text-center">
            <h3 className="text-4xl font-black text-orange-500 mb-2">700+</h3>
            <p className="text-slate-700 font-medium">Categories</p>
          </div>
          <div className="p-8 border-b-4 border-orange-400 bg-white shadow-sm text-center">
            <h3 className="text-4xl font-black text-orange-500 mb-2">28,000+</h3>
            <p className="text-slate-700 font-medium">Pincodes Served</p>
          </div>
        </div>
      </section>

    </div>
  )
}