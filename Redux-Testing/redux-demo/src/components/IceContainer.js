import React, { useState } from 'react';
import { connect } from 'react-redux'
import { buyIce } from '../redux/index.js'

function IceContainer(props) {
    const [number, setNumber] = useState(1);
    return <div className='mt-5 container col-12'>
        <h3>Number of Ice - {props.noOfIce}</h3>
        <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
        <button
            onClick={() => props.buyIce(number)}
            className='btn ms-2 btn-outline-primary'>Buy Cake</button>
    </div>;
}

const mapStateToProps = state => {
    return {
        noOfIce: state.ice.noOfIce
    }
};

const mapDispatchToProps = disptach => {
    return {
        buyIce: (number) => disptach(buyIce(number))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IceContainer);