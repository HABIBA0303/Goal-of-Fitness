import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Item from '../Item/Item';
import "./services.css"
const Services = () => {
    const [services, setServices] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('fitness.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleAddToCart = (SelectedProduct) => {
        const newCart = [...cart, SelectedProduct];
        const quantity = localStorage.getItem('add')
        const oldTimeAdd = JSON.parse(quantity)
        if (quantity) {
            const newQuantity = parseInt(quantity) + 1
            localStorage.setItem('add', JSON.stringify(...newCart, newQuantity))
        }
        else {
            localStorage.setItem('add', 1)
        }


        setCart(newCart)

    }
    return (

        <div className='service-content'>
            <div className='service-container'>
                {
                    services.map(items => <Item item={items} handleAddToCart={handleAddToCart}></Item>)

                }
            </div>
            <div className='cart-content'>
                {/* <Cart cart={cart}></Cart> */}
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Services;