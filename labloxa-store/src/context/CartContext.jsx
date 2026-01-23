import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const stored = localStorage.getItem('labloxa_cart');
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.error("Failed to load cart", e);
            return [];
        }
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        try {
            localStorage.setItem('labloxa_cart', JSON.stringify(cartItems));
        } catch (e) {
            console.error("Failed to save cart", e);
        }
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems(prev => {
            // Check if item already exists
            const exists = prev.find(i => i.id === item.id);
            if (exists) return prev; // Or increment quantity if desired, but for unique lots, maybe not.
            return [...prev, item];
        });
        setIsCartOpen(true); // Auto open cart on add
    };

    const removeFromCart = (itemId) => {
        setCartItems(prev => prev.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, isCartOpen, setIsCartOpen }}>
            {children}
        </CartContext.Provider>
    );
};
