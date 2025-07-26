import React from "react";
import image1 from "./assets/occasional_saree/Daily_Wear.webp";
import image2 from "./assets/occasional_saree/Festival.webp";
import image3 from "./assets/occasional_saree/Gifting.webp";
import image4 from "./assets/occasional_saree/Party_Wear.webp";

const Shop_by_occation = () => {
  const images = [image1, image2, image3, image4];

  return (
    <section className="p-4 md:p-8">
      {/* Heading */}
      <div className="bg-white rounded-2xl shadow-lg py-4 px-6 text-center">
        <h1 className="font-bold text-black text-xl md:text-3xl">
          Shop By Occasion
        </h1>
      </div>

      {/* Image Grid */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
         <a href=""> <div
            key={index}
            className="w-full transition-transform duration-300 hover:scale-105"
          >
            <img
              src={image}
              alt={`Occasion ${index + 1}`}
              className="w-full object-cover rounded-lg shadow-md"
            />
          </div></a>
        ))}
      </div>
    </section>
  );
};

export default Shop_by_occation;
