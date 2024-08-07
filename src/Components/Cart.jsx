import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice'; // Make sure this path is correct
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const handleQuantityChange = (item, newQuantity) => {
        const quantityDiff = newQuantity - item.quantity;
        if (quantityDiff > 0) {
            // Add items
            for (let i = 0; i < quantityDiff; i++) {
                dispatch(addItem(item));
            }
        } else if (quantityDiff < 0) {
            // Remove items
            for (let i = 0; i < Math.abs(quantityDiff); i++) {
                dispatch(removeItem(item.id));
            }
        }
    };

    // Calculate total items and total bill
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalBill = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const handleCheckout = () => {
      if (cartItems.length > 0) {
          navigate('/checkout');
      } else {
          alert('Your cart is empty. Add some items before checking out.');
      }
  };

  
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul className="space-y-4 mb-8">
                        {cartItems.map((item) => (
                            <li key={item.id} className="flex items-center justify-between border-b pb-2">
                                <div className="flex items-center">
                                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                                    <div className="text-left">
                                        <h2 className="font-semibold">{item.title}</h2>
                                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <select 
                                        value={item.quantity} 
                                        onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                                        className="mr-2 border rounded p-1"
                                    >
                                        {[...Array(10).keys()].map(num => (
                                            <option key={num + 1} value={num + 1}>{num + 1}</option>
                                        ))}
                                    </select>
                                    <button 
                                        onClick={() => handleAddItem(item)}
                                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                    >
                                        Add
                                    </button>
                                    <button 
                                        onClick={() => handleRemoveItem(item.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="bg-gray-100 p-4 rounded">
                        <h2 className="text-xl font-bold mb-2">Order Summary</h2>
                        <p>Total Items: {totalItems}</p>
                        <p className="text-xl font-bold mt-2">Total Bill: ${totalBill.toFixed(2)}</p>
                        <button 
                            onClick={handleCheckout}
                            className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};