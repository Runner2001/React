import React, { Component } from "react";
import { Card, CardImg, CardText, CardTitle } from 'reactstrap';
import Selected from "./selected";

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            alldishes: this.props.dishes,
            selectDish: [],
        }
    }

    onSelectdishes(dish) {
        this.setState({ selectDish: dish })
    }

    render() {
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
                </div>
                <Selected
                    selectedDish={this.state.selectDish}
                />
            </div>
        );
    }
}

export default Menu;