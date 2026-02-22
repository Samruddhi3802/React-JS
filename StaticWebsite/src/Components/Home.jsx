import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full">
      <section className="bg-pink-50 py-20 px-8 flex flex-col items-center text-center">
        <h2 className="text-5xl font-extrabold text-slate-900 mb-4">
          Lowest Prices, Best Quality
        </h2>
        <p className="text-slate-600 text-xl max-w-2xl mb-8">
          Shop for the latest fashion, electronics, and home decor from the comfort of your home. 
          Everything you need, delivered to your doorstep.
        </p>
        <button 
          onClick={() => navigate('/products')}
          className="bg-pink-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-pink-700 transition-all shadow-lg"
        >
          Explore Products
        </button>
      </section>

      <section className="bg-slate-100 py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h4 className="text-pink-600 font-bold text-xl mb-2">Free Delivery</h4>
            <p className="text-slate-600">On all orders above $499</p>
          </div>
          <div>
            <h4 className="text-pink-600 font-bold text-xl mb-2">Easy Returns</h4>
            <p className="text-slate-600">7-day hassle-free return policy</p>
          </div>
          <div>
            <h4 className="text-pink-600 font-bold text-xl mb-2">Cash on Delivery</h4>
            <p className="text-slate-600">Pay only when you receive it</p>
          </div>
        </div>
      </section>
    </div>
  );
};