import React from 'react';
import Products from '../components/products';

function Home() {
  return (
    <div> 
      
        <div className="  px-44 py-20   ">
          <div className=" h-auto">
            <p className=" text-4xl">👋</p>
            <span className="text-gray-600 text-4xl font-bold">Hello there! I'm aashish</span>

            <div>
              <p className="py-3 max-w-xl mt-4 text-gray-500">I'm a full-stack developer that loves building products and web apps that can impact millions of lives</p>
              <p className="max-w-xl text-gray-500">I'm a senior software engineer with 7 years of experience building scalable web apps that are performance optimized and good looking.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="px-44">
            <p className=" font-bold text-gray-600 text-xl">What I've been working on</p>
          </div>
        </div>
        <Products />
      </div>
  );
}

export default Home;
