import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

export const Checkout = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalBill = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const handlePlaceOrder = () => {
        // Here you would typically:
        // 1. Validate the form
        // 2. Send the order to your backend
        // 3. Process the payment
        // 4. Clear the cart and show a confirmation

        // For this example, we'll just clear the cart and show a confirmation
        dispatch(clearCart());
        setOrderPlaced(true);
    };

    if (orderPlaced) {
        return <div>Thank you for your order!</div>;
    }

    return (
        <div className="max-w-lg mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Order Summary</h2>
                <p>Total Items: {totalItems}</p>
                <p>Total Bill: ${totalBill.toFixed(2)}</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                    <label className="block">Name</label>
                    <input type="text" className="w-full border rounded p-2" required />
                </div>
                <div>
                    <label className="block">Address</label>
                    <input type="text" className="w-full border rounded p-2" required />
                </div>
                <div>
                    <label className="block">Credit Card</label>
                    <input type="text" className="w-full border rounded p-2" required />
                </div>
                <button 
                    onClick={handlePlaceOrder}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};