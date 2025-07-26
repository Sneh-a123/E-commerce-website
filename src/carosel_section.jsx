import React, {useRef} from "react";
import Image1 from "./assets/Carosel-image/saree1.jpg";
import Image2 from "./assets/Carosel-image/saree2.jpg";
import Image3 from "./assets/Carosel-image/saree3.jpg"; 
import Image4 from "./assets/Carosel-image/saree4.jpg";
import Image5 from "./assets/Carosel-image/saree5.jpg";
import Image6 from "./assets/Carosel-image/saree6.jpg";
import Image7 from "./assets/Carosel-image/saree7.jpg";
import Image8 from "./assets/Carosel-image/saree8.jpg";
import Image9 from "./assets/Carosel-image/saree9.jpg";
import Image10 from "./assets/Carosel-image/saree10.jpg";

const carosel_section = () => {
    const products = [
        {
            id: 1,
            img:Image1,
            name: "Teal and Gold Floral Saree...",
            Price: "₹ 1,050"
        },
        {
            id: 2,
            img:Image2,
            name: "Teal and Gold Floral Saree...",
            Price: "₹ 1,050"
        },
        {
            id: 3,
            img:Image3,
            name: "Teal and Gold Floral Saree...",
            Price: "₹ 1,050"
        },
         {
            id: 4,
            img:Image4,
            name: "Teal and Gold Floral Saree...",
            Price: "₹ 1,050"
        },
         {
            id: 5,
            img:Image5,
            name: "Teal and Gold Floral Saree...",
            Price: "₹ 1,050"
        },
         {
            id: 6,
            img:Image6,
            name: "Teal and Gold Floral Saree...",
            Price: "₹ 1,050"
        },
         {
            id: 7,
            img:Image7,
            name: "Teal and Gold Floral Saree...",
            Price: "₹ 1,050"
        },
         {
            id: 8,
            img:Image8,
            name: "Teal and Gold Floral Saree...",
            Price: "₹ 1,050"
        },
         {
            id: 9,
            img:Image9,
            name: "Teal and Gold Floral Saree...",
            Price: "₹ 1,050"
        },
         {
            id: 10,
            img:Image10,
            name: "Teal and Gold Floral Saree...",
            Price: "₹ 1,050"
        }
    ]
    const carouselRef = useRef(null);
    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            left: -200,
            behavior: 'smooth'
            
        });
    };
    const scrollRight = () => {
        carouselRef.current.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    };
    return(
        <>
             <section className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Latest Collection</h2>
        <div className="flex gap-2">
          <button onClick={scrollLeft} className="p-2 bg-gray-200 rounded-full">←</button>
          <button onClick={scrollRight} className="p-2 bg-gray-200 rounded-full">→</button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[200px] bg-white shadow-md rounded-lg p-4 flex-shrink-0"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="text-red-500 font-bold">{product.Price}</p>
            <button className="mt-2 w-full bg-[#ffd782] text-black py-1 rounded-lg font-medium">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>

        </>
    )
}

export default carosel_section;