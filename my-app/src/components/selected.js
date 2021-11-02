import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';


function Selected(props) {
    return (
        <div className="row">
            <Card
                className="mt-5 col-md-6 col-sm-12">
                <CardImg className='mt-2' width="100%" height="100%" src={props.selectedDish.image} />
                <CardBody>
                    <CardTitle className="text-primary">
                        <h4>{props.selectedDish.name} </h4>
                    </CardTitle>
                    <h6 className='text-secondary'> {props.selectedDish.description} </h6>
                </CardBody>
            </Card>
        </div>
    );
}

export default Selected;