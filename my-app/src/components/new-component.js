import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component{

    constructor(props){
        super(props);

        this.state = {
            selectDish: null
        }
    }

    onSelectdishes(dish){
        this.setState({selectDish: dish})
    }
    renderDish(dish){
       return (dish!=null)?<CardText>{dish.description}</CardText> : <div>Nothing</div>
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-xs-12 col-sm-6 col-md-4 col-lg-2 mt-5'>
                    <Card 
                        onClick={() => this.onSelectdishes(dish)}
                    >
                            <CardImg width="50%" src={dish.image} />
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                            
                    </Card>
                </div>
            );
        });
        return (
            <div className='container'>
                <div className='row'>
                        {menu}
                        {this.renderDish(this.state.selectDish)}
                </div>
            </div>
        );
    }
}

export default Menu;