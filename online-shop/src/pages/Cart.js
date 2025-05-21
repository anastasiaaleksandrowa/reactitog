import React from 'react';

const Cart = ({ cartItems, updateQuantity, removeItem }) => {

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return ( <
        div >
        <
        h2 > Корзина < /h2>

        {
            cartItems.length === 0 ? ( <
                p > Корзина пуста < /p>
            ) : ( <
                > {
                    cartItems.map(item => ( <
                        div key = { item.id }
                        style = {
                            { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } } >
                        <
                        div >
                        <
                        h4 > { item.name } < /h4> <
                        p > Цена за единицу: $ { item.price } < /p> <
                        p > Количество:
                        <
                        input type = "number"
                        min = "1"
                        value = { item.quantity }
                        onChange = {
                            (e) => updateQuantity(item.id, parseInt(e.target.value)) }
                        /> <
                        /p> <
                        /div> <
                        button onClick = {
                            () => removeItem(item.id) } > Удалить < /button> <
                        /div>
                    ))
                }

                <
                h3 > Общая сумма: $ { totalPrice } < /h3> <
                />
            )
        } <
        /div>
    );
};

export default Cart;