import React from 'react';

const Product = ({ product, addToCart }) => {
    const { id, name, price, size, image } = product;

    return ( <
        div className = "product-card" >
        <
        img src = { image }
        alt = { name }
        className = "product-image" / >
        <
        h3 > { name } < /h3> <
        p > Размер: { size } < /p> <
        p > Цена: $ { price } < /p> <
        button onClick = {
            () => addToCart(product) } > Добавить в корзину < /button> <
        /div>
    );
};

export default Product;