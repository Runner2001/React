import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/index'

function HookCake() {
    const numofcake = useSelector(state => state.cake.numOfCakes)
    const [number, setNumber] = useState(1);
    const dispatch = useDispatch()
    return (
        <div className='mt-5'>
            <h3>No OF Cake - {numofcake}</h3>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button
                onClick={() => dispatch(buyCake(number))}
                className='btn btn-primary'>Buy Cake</button>
        </div>
    );
}

export default HookCake;