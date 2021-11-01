import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

class Selected extends Component {

    render() {
        return (
            <div className="row">
                <Card
                    className="mt-5 col-md-6 col-sm-12">
                    <CardImg width="100%" height="100%" src={this.props.selectedDish.image} />
                    <CardBody>
                        <CardTitle className="text-primary">
                            <h4>{this.props.selectedDish.name} </h4>
                        </CardTitle>
                        <h6 className='text-secondary'> {this.props.selectedDish.description} </h6>
                    </CardBody>
                </Card>
                <div className="mt-5 col-md-6 col-sm-12">
                    <h4 className="text-warning">Comment</h4>
                </div>
            </div>
        );
    }


}

export default Selected;