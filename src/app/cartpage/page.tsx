'use client';

import { useCart } from '@/context/CartContext';
 import Image from 'next/image';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-4 border-b pb-4">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">Size: {item.size}</p>
                <p className="text-gray-600">Color: {item.color}</p>
                <p className="text-gray-600">Price: ${item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="px-3 py-1 border rounded-md"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-3 py-1 border rounded-md"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
               >
                Remove
              </button>
            </div>
          ))}
           <div className="mt-6">
            <h3 className="text-xl font-semibold">Total: ${calculateTotal()}</h3>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Clear Cart
            </button>
           </div>
        </div>
      )}
   </div>
   );
}
