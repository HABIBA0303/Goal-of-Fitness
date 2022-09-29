import React from 'react';
import "./item.css"

const Item = ({ item, handleAddToCart }) => {
    const { name, img, age, timerequired, details } = item
    return (

        <div className='items'>
            <img src={img} alt="" />
            <div className='item-info'>
                <h2 className='title'>{name}</h2>
                <p>{details.slice(0, 100)}</p>
                <h3>For Age : {age}</h3>
                <h3>Time required : {timerequired}s</h3>
                <button onClick={() => handleAddToCart(item)}>Add to list</button>
            </div>

        </div>

    );
};

export default Item;