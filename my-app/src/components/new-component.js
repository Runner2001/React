import React, { Component } from "react";
import { Media } from 'reactstrap';

class Menu extends Component{

    constructor(props){
        super(props);

        this.data = {
            dishes: [
                {
                    id : 0,
                    name : 'First',
                    image : 'assets/buffet.png',
                    label : 'Hot',
                    category : 'mains',
                    price : '4.88',
                    description : 'Hello I am From the First List of the React App Am trying to understand React.'
                },
                {
                    id : 1,
                    name : 'First',
                    image : 'assets/buffet.png',
                    label : 'Hot',
                    category : 'mains',
                    price : '4.88',
                    description : 'Hello I am From the First List of the React App Am trying to understand React.'
                },
                {
                    id : 2,
                    name : 'First',
                    image : 'assets/buffet.png',
                    label : 'Hot',
                    category : 'mains',
                    price : '4.88',
                    description : 'Hello I am From the First List of the React App Am trying to understand React.'
                },
                {
                    id : 3,
                    name : 'First',
                    image : 'assets/buffet.png',
                    label : 'Hot',
                    category : 'mains',
                    price : '4.88',
                    description : 'Hello I am From the First List of the React App Am trying to understand React.'
                },
                {
                    id : 4,
                    name : 'First',
                    image : 'assets/buffet.png',
                    label : 'Hot',
                    category : 'mains',
                    price : '4.88',
                    description : 'Hello I am From the First List of the React App Am trying to understand React.'
                }
            ]
        }
    }

    render(){
        const menu = this.data.dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-12 mt-5'>
                    <Media tag='li'>
                        <Media left middle>
                            <Media object src={dish.image} />
                        </Media>
                        <Media body className='ml-5'>
                            <Media heading>
                                {dish.name}
                            </Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });
        return (
            <div className='container'>
                <div className='row'>
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;