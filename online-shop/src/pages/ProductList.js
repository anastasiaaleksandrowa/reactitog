import React, { useState } from 'react';
import Product from '../components/Product';

const productsData = [

    { id: 1, name: 'Товар 1', price: 100, size: 'S', image: 'path/to/image1' },
    { id: 2, name: 'Товар 2', price: 200, size: 'M', image: 'path/to/image2' },

];

const sizes = ['S', 'XS', 'L', 'M'];

const ProductList = () => {
    const [filterSize, setFilterSize] = useState('All');
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

    const filteredProducts =
        filterSize === 'All' ?
        productsData :
        productsData.filter(p => p.size === filterSize);

    return ( <
        div >
        <
        h2 > Каталог товаров < /h2>

        { /* Фильтр по размеру */ } <
        div >
        <
        button onClick = {
            () => setFilterSize('All') } > Все размеры < /button> {
            sizes.map(size => ( <
                button key = { size }
                onClick = {
                    () => setFilterSize(size) } > { size } < /button>
            ))
        } <
        /div>

        { /* Список товаров */ } <
        div className = "product-grid" > {
            filteredProducts.map(product => ( <
                Product key = { product.id }
                product = { product }
                addToCart = { handleAddToCart }
                />
            ))
        } <
        /div>

        { /* Можно добавить ссылку на корзину */ } <
        /div>
    );
};

export default ProductList;