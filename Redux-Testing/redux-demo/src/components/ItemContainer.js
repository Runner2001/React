import React from 'react';
import { connect } from 'react-redux'

function ItemContainer(props) {
    return (
        <div className='mt-5'>
            <h2 className='text-info'>No Of Item {props.name} - <span className='text-danger'> {props.item} </span> </h2>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    const itemstate = ownProps.name === 'cake' ? state.cake.numOfCakes : state.ice.noOfIce

    return { item: itemstate, name: ownProps.name }
}

export default connect(mapStateToProps)(ItemContainer);