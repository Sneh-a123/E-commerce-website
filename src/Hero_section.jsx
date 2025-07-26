import React, { useEffect, useState } from "react";
import Image1 from "./assets/Slide-image/slide-1 saree.png";
import Image2 from "./assets/Slide-image/slide-2 saree.png";
import Image3 from "./assets/Slide-image/slide-3 saree.png";
import Image4 from "./assets/Slide-image/slide-4 saree.png";
import Tag from "./assets/Slide-image/tag.png";

const images = [Image1, Image2, Image3, Image4];

const Hero_section = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="p-4">
  <div className="bg-gradient-to-r from-[#d10000] via-[#ff4d4d] to-[#ffcccc] rounded-2xl text-white w-full h-auto md:h-[300px] flex md:flex-row items-center justify-between shadow-lg relative overflow-hidden">
    
    {/* Left Side */}
    <div className="w-full md:w-[50%] px-3 text-center flex flex-col items-center justify-center gap-4 py-4">
      <img src={Tag} className="w-[60%] md:w-[70%]" alt="" />
      <h1 className="font-bold text-xl md:text-2xl">Fashion Sale for Women's</h1>
      <button className="bg-[#ffd782] font-semibold text-black px-4 py-2 text-[16px] md:text-[20px] rounded-2xl">
        Shop Now
      </button>
    </div>

    {/* Right Side (Slider) */}
    <div className="w-full md:w-[50%] flex justify-center py-4">
      <div className="border-4 border-[#ffd782] w-[200px] md:w-[250px] h-[200px] md:h-[250px] flex items-center justify-center rounded-full shadow-[0_0_20px_#ffd782] overflow-hidden">
        <div className="bg-[#ffd782] w-[150px] md:w-[180px] h-[150px] md:h-[180px] rounded-full relative shadow-inner overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 200}px)`,
              width: `${images.length * 200}px`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-[200px] h-[200px] align-middle flex-shrink-0 rounded-full relative"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero_section;
