"use client";

import Footer from "@/components/footer";
import Footerend from "@/components/footerend";
import Header from "@/components/header";
import Topnav from "@/components/topnav";
import { FaCaretDown } from "react-icons/fa";

export default function AllProducts() {
  // Mock product data
  const products = [
    { id: 1, name: "The Dandy chair", price: 250, image: "/The Dandy chair.png" },
    { id: 2, name: "The Dandy chair", price: 250, image: "/The Dandy chair 2.png" },
    { id: 3, name: "The Dandy chair", price: 250, image: "/The Dandy chair 3.png" },
    { id: 4, name: "The Dandy chair", price: 250, image: "/The Silky Vase.png" },
    { id: 5, name: "The Dandy chair", price: 250, image: "/The Lucy Lamp.png" },
    { id: 6, name: "The Dandy chair", price: 250, image: "/Dandy Chair Black.png" },
    { id: 7, name: "The Dandy chair", price: 250, image: "/The Dandy chair 4.png" },
    { id: 8, name: "The Dandy chair", price: 250, image: "/The Dandy chair 5.png" },
    { id: 9, name: "The Dandy chair", price: 250, image: "/The Dandy chair 6.png" },
  ];

  return (
    <><div>
        <Topnav/>
        <Header/>
      {/* Banner Section */}
      <div
        className="w-[390px] relative h-[146px] md:h-[209px] md:w-full bg-cover bg-center flex items-center container mx-auto"
        style={{ backgroundImage: `url('All Products.png')` }}
      >
        <h1 className="relative z-10 text-white text-4xl font-normal pl-20 pt-10 md:pt-20">All products</h1>
      </div>
      <div className="md:hidden">
      <div className="flex justify-center pt-4 gap-10">
        <div className="flex justify-center items-center bg-slate-50 px-3">
        <button className="w-[100px] h-[56px] font-normal text-base text-center">Filters</button>
        <FaCaretDown/>
        </div>
        <div className="flex justify-center items-center bg-slate-50 px-3">
        <button className="w-[100px] h-[56px] font-normal text-base">Sorting</button>
        <FaCaretDown/>
        </div>
        </div>
      </div>
      {/* Product Listing Section */}
      <div className="flex container mx-auto">
        {/* Filters Section */}
        <aside className=" bg-white w-1/4 p-6 font-light space-x-12 hidden md:block">
          <h2 className="text-lg font-normal  mt-6 mb-4 pl-12">Product type</h2>
          <ul className="space-y-3">
            {["Furniture", "Homeware", "Sofas", "Light fittings", "Accessories"].map((type) => (
              <li key={type}>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>{type}</span>
                </label>
              </li>
            ))}
          </ul>

          <h2 className="text-lg font-normal mt-6 mb-4">Price</h2>
          <ul className="space-y-3">
            {["0 - 100", "101 - 250", "250 +"].map((range) => (
              <li key={range}>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>{range}</span>
                </label>
              </li>
            ))}
          </ul>

          <h2 className="text-lg font-normal mt-6 mb-4">Designer</h2>
          <ul className="space-y-3">
            {["Robert Smith", "Liam Gallagher", "Biggie Smalls", "Thom Yorke"].map((designer) => (
              <li key={designer}>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>{designer}</span>
                </label>
              </li>
            ))}
          </ul>
        </aside>

        {/* Products Grid */}
        
        <section className=" bg-white w-full p-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-110 transition duration-1000 hover:shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-[163px] md:w-[305px] h-[201px] md:h-[375px] object-fill "
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                <p className="text-gray-500 mt-2">£{product.price}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Load More Button */}
      <div className="flex justify-center bg-white">
        <button className="bg-gray-100 py-3 px-6 mb-5 rounded-md hover:bg-gray-700">
          Load more
        </button>
      </div>
      <Footer/>
      <Footerend/>
      </div>
      </>
      
    
  );
}
