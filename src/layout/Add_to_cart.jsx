import React, { useEffect, useState } from "react";

const Add_To_Cart = ({ isOpen, setIsOpen }) => {
  const [cartItems, setCartItems] = useState([]);
  

  // LocalStorage se data load karna
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, [isOpen]);

const totalPrice = cartItems.reduce((acc, item) => {
  const price = parseFloat(String(item.Price).replace(/[^\d.]/g, "")) || 0; // sirf number rakho
  const qty = parseInt(item.qty) || 1;
  return acc + price * qty;
}, 0);

  // Quantity decrease
  const decreaseQty = (id) => {
    const updated = cartItems.map((p) =>
      p.id === id && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p
    );
    localStorage.setItem("cart", JSON.stringify(updated));
    setCartItems(updated);
  };

  // Quantity increase
  const increaseQty = (id) => {
    const updated = cartItems.map((p) =>
      p.id === id ? { ...p, qty: p.qty + 1 } : p
    );
    localStorage.setItem("cart", JSON.stringify(updated));
    setCartItems(updated);
  };

  if (!isOpen) return null;

  return (
    <div className="bg-white absolute top-0 right-0 w-[310px] h-[100vh] p-3 shadow-lg overflow-y-auto transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
      </div>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-gray-500">
          <i className="fa-solid fa-cart-shopping text-4xl mb-3"></i>
          <p className="text-lg font-medium">No items in your cart</p>
          <p className="text-sm text-gray-400">Add products to see them here</p>
        </div>
      ) : (
        <>
          {/* Items List */}
          <div className="mt-4 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 border-b pb-2"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.Price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="mt-6 border-t pt-3 flex justify-between font-bold">
            <span>Total:</span>
            <span>{totalPrice}</span>
          </div>

          {/* Checkout Button */}
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Buy The Product
          </button>
        </>
      )}
    </div>
  );
};

export default Add_To_Cart;
