import React from "react";
import image1 from"./assets/occasional_saree/Daily_Wear.webp";
import image2 from"./assets/occasional_saree/Festival.webp";
import image3 from"./assets/occasional_saree/Gifting.webp";
import image4 from"./assets/occasional_saree/Party_Wear.webp";


const Shop_by_occation = () => {
    const image_1st =[image1, image2];
    const image_2nd =[image3, image4];
    
    return (
        <section className="p-4">
        <div className="bg-white rounded-2xl text-white w-full p-3 h-auto md:h-[300px] flex items-center justify-center shadow-lg">
            <h1 className="font-bold text-black text-xl md:text-2xl">Shop By Occasion</h1>
        </div>
        <div className="flex-col md:flex-row items-center justify-center gap-4 mt-4">
           <div className="flex items-center justify-center">
                {image_1st.map((image, index) => (
                    <div key={index} className="w-1/2 md:w-1/4 p-2">
                        <img src={image} alt={`Occasion ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                ))}; 
           </div>
           <div className="flex items-center justify-center">
                {image_2nd.map((image, index) => (
                    <div key={index} className="w-1/2 md:w-1/4 p-2">
                        <img src={image} alt={`Occasion ${index + 3}`} className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                ))};
           </div>
        </div>
        </section>
    );
}

export default Shop_by_occation; 