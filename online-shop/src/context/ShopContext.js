import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);


    const [filterSize, setFilterSize] = useState('All');

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? {...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prev, {...product, quantity: 1 }];
            }
        });
    };

    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return;
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? {...item, quantity } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };


    const changeFilterSize = (size) => {
        setFilterSize(size);
    };

    return ( <
        ShopContext.Provider value = {
            {
                cartItems,
                addToCart,
                updateQuantity,
                removeItem,
                filterSize,
                changeFilterSize
            }
        } > { children } <
        /ShopContext.Provider>
    );
};