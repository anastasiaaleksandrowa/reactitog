import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

function App() {
    return ( <
        ShopProvider > { /* остальной код */ } <
        /ShopProvider>
    );
}

export default App;