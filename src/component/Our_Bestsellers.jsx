import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/best_sellers/image1.webp";
import img2 from "../assets/best_sellers/image2.webp";
import img3 from "../assets/best_sellers/image3.webp";
import img4 from "../assets/best_sellers/image4.webp";
import img5 from "../assets/best_sellers/image5.webp";
import img6 from "../assets/best_sellers/image6.webp";
import img7 from "../assets/best_sellers/image7.webp";
import img8 from "../assets/best_sellers/image8.webp";
import img9 from "../assets/best_sellers/image9.webp";
import img10 from "../assets/best_sellers/image10.webp";

const Our_Bestsellers = () => {
    const navigate = useNavigate(); // ✅ navigate hook
//   const carouselRef = useRef(null);

  const handleProductClick = (product) => {
  navigate("/products", { state: { product } }); // ✅ product naam se bhejo
};
    const bestsellers = [
        { id: 1, img: img1, name: "Baby Blue Chiffon Floral Printed Saree – Elegant, Lightweight & Stylish- Rang Panchami", price: "₹ 3,299.00" },
        { id: 2, img: img2, name: "Baby Pink Georgette Saree with Graceful Lace Border - Kitkat", price: "₹ 1,680.00" },
        { id: 3, img: img3, name: "Beige Chiffon Saree with Resham & Stone Work - Aishwrya", price: "₹ 4,960.00" },
        { id: 4, img: img4, name: "Black Georgette Saree with Multicolor Abstract Print - Shamli", price: "₹ 1,930.00" },
        { id: 5, img: img5, name: "Black Silk Printed Saree with Striped Pattern – Traditional Yet Trendy - Rang Panchami", price: "₹ 2,249.00" },
        { id: 6, img: img6, name: "Blue Crepe Silk Saree with Foil Work - Chameli", price: "₹ 2,380.00" },
        { id: 7, img: img7, name: "Blue Floral Georgette Saree - Gulabo", price: "₹ 1,745.00" },
        { id: 8, img: img8, name: "Blue Floral Georgette Saree - Gulabo", price: "₹ 1,745.00" },
        { id: 9, img: img9, name: "Blue Striped Chiffon Saree – Soft, Flowing & Stylish - Rang Panchami", price: "₹ 2,749.00" },
        { id: 10, img: img10, name: "Green Chiffon Butti Printed Saree – Soft, Flowing & Stylish Look - Rang Panchami", price: "₹ 2,799.00" }
        
    ]
    return (
        <section id="best-seller" className="p-4">
           <div className="bg-white rounded-2xl shadow-lg py-4 px-6 text-center">
        <h1 className="font-bold text-black text-xl md:text-3xl">
          Our Bestsellers
        </h1>
      </div>
            <div className="flex-col md:flex-row items-center justify-center gap-4 space-y-5 mt-4">
                {/* Add your bestsellers content here */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-ellipsis">
                    {bestsellers.map((item) => (
                        <a href=""><div  key={item.id} onClick={() => handleProductClick(item)} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                            <img src={item.img} alt={item.name} className="w-full h-auto rounded-lg mb-2" />
                            <h2 className="text-sm font-semibold">{item.name}</h2>
                            <p className="text-gray-600">{item.price}</p>
                        </div></a>
                    ))}
                </div>
                <div className="flex justify-center">
                    <a href=""><button className="bg-red-700 text-white font-bold text-center px-20 py-2 cursor-pointer">View All</button></a>
                </div>
            </div>
        </section>
    );
}

export default Our_Bestsellers;