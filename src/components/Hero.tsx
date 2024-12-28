import React from 'react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
          alt="Modern interior design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Transform Your Space<br />Into a Work of Art
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Award-winning interior designer Shivani Verma brings your vision to life with 
            innovative designs and exceptional attention to detail.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors">
            Explore Our Services
          </button>
        </div>
      </div>
    </div>
  );
}