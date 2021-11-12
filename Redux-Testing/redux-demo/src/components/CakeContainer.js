import React from 'react';
import { connect } from 'react-redux'
import { buyCake } from '../redux/index.js'

class CakeContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <h3>Number of cakes - {this.props.numOfCakes}</h3>
            <button
                onClick={this.props.buyCake}
                className='btn btn-outline-primary'>Buy Cake</button>
        </div>;
    }
}
const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
};

const mapDispatchToProps = disptach => {
    return {
        buyCake: () => disptach(buyCake())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);