import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToTime } from '../Count/Count';
import "./cart.css"

const Cart = (props) => {
    const [total, setTotal] = useState(0)
    const click = (p) => {

        addToTime(total);
        setTotal(p)
    }
    const { cart } = props
    let exercise = 0;
    for (const time of cart) {
        exercise = exercise + time.timerequired;

    }

    const badtoast = () => {
        toast.success('You Have Done well', {
            position: "top-center"
        })
    }

    return (
        <div className='cart-container' >

            <div className='profile' >

                <h1>Habiba Rashid</h1>
            </div>
            <div className='box' >
                <div>
                    <h2>95<small>kg</small></h2>
                    <p>Weight</p>
                </div >
                <div>
                    <h2>5.3</h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2>32<span>yrs</span></h2>
                    <p>Age</p>
                </div>
            </div >
            <div>
                <h1>Add A Break</h1>
                <div className='btn'>
                    <button onClick={() => click(10)}>10s</button>
                    <button onClick={() => click(20)}>20s</button>
                    <button onClick={() => click(30)}>30s</button>
                    <button onClick={() => click(40)}>40s</button>
                    <button onClick={() => click(50)}>50s</button>
                </div>
            </div>
            <div>
                <h1>Exercise Details</h1>
                <div className='exercise'>
                    <h3>Exercise time</h3>
                    <p>{exercise} seconds</p>
                </div>
                <div className='exercise'>
                    <h3>Break time</h3>
                    <p>{total} seconds</p>
                </div>
                <button className='activity-btn' onClick={badtoast}>Activity Completed</button>

            </div >
            <ToastContainer />
        </div >
    );
};

export default Cart;