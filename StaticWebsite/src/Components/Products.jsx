import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/image1.webp';
import image2 from '../assets/image2.webp';
import image3 from '../assets/image3.webp';
import image4 from '../assets/image4.webp';
import image5 from '../assets/image5.webp';
import image6 from '../assets/image6.webp';


export const Products = () => {
  const productList = [
    { id: 1, name: 'Cotton Summer Saree', price: '₹499', img: image1},
    { id: 2, name: 'Casual White Sneakers', price: '₹899', img: image2},
    { id: 3, name: 'Bluetooth Earbuds', price: '₹1,299', img: image3},
    { id: 4, name: 'Printed Cotton Kurti', price: '₹350', img: image4},
    { id: 5, name: 'Smart Watch Pro', price: '₹2,499', img: image5},
    { id: 6, name: 'Leather Slim Wallet', price: '₹299', img: image6},
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-8">

      <div className="max-w-7xl mx-auto mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">All Products</h2>
          <p className="text-slate-500">Showing {productList.length} items</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productList.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
          >
         
            <div className="h-64 bg-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-yellow-50 transition-colors">
              <img src={product.img} alt={product.name} className="h-63 w-90 object-cover"/>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-800 mt-3 mb-1">
                {product.name}
              </h3>
              <p className="text-2xl font-black text-slate-900 mb-4">
                {product.price}
              </p>

              <Link 
                to={`/products/${product.id}`}
                className="block text-center bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

