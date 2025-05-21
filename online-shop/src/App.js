import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import ProductList from './pages/ProductList';


function App() {
    return ( <
        ShopProvider >

        const [cartItems, setCartItems] = useState([]);

        const handleAddToCart = (product) => {
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
            setCartItems(prev =>
                prev.map(item =>
                    item.id === id ? {...item, quantity } : item
                )
            );
        };

        const removeItem = (id) => {
            setCartItems(prev => prev.filter(item => item.id !== id));
        };

        return ( <
            Router >

            /ShopProvider>
        );
    }

    export default App;