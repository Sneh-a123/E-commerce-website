import React from "react";
import { useLocation } from "react-router-dom";
import Pages_header from "./Pages_header";

const Products = () => {
  const location = useLocation();
  const product = location.state?.product; // ✅ Carousel se aaya hua data

  // Agar koi product data nahi mila to error message dikha do
const handleAddToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Agar product pehle se hai to qty badhao
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${product.name} added to cart!`);
};


  if (!product) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-red-500">
          No product data found!
        </h2>
        <p className="text-gray-500 mt-2">
          Please go back and select a product from the carousel.
        </p>
      </section>
    );
  }

  return (
    <section className="flex flex-col space-y-10 p-3 md:p-5 items-center justify-center min-h-screen bg-gradient-to-tr from-blue-100 via-white to-pink-100">
      {/* Page Header */}
      <Pages_header
        headingName="Products"
        breadcrumb={{ to: "/products", label: "Products" }}
      />

      {/* Product Card */}
      <div className="bg-white p-10 w-[80%] rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
        {/* Product Image */}
        <img
          src={product.img}
          alt={product.name}
          className="w-72 h-72 object-cover rounded-lg"
        />

        {/* Product Details */}
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <span className="text-red-500 text-xl font-semibold">
            {product.Price}
          </span>
          <h2 className="text-lg">{product.details || "High Quality Saree"}</h2>
          <p className="text-gray-500">Delivered Within 7 days</p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
  className="bg-yellow-400 cursor-pointer px-5 py-2 rounded-lg font-medium"
  onClick={() => handleAddToCart(product)}
>
  Add to Cart
</button>

            <button className="bg-green-500 text-white px-5 cursor-pointer py-2 rounded-lg font-medium">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
