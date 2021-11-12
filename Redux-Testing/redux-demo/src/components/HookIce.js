import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIce } from '../redux/index'

function HookIce() {
    const noOfIce = useSelector(state => state.ice.noOfIce)
    const dispatch = useDispatch()
    return (
        <div className='mt-5'>
            <h3>No OF Ice - {noOfIce}</h3>
            <button
                onClick={() => dispatch(buyIce())}
                className='btn btn-primary'>Buy Ice</button>
        </div>
    );
}

export default HookIce;