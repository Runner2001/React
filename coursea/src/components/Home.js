import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

function RenderCard(item) {
  console.log(item)
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-start">
          <div className="col-12 col-md m-1">
            <Card>
              <CardImg src={this.props.image} alt={this.props.name} />
              <CardBody>
                <CardTitle>{this.props.name}</CardTitle>
                {this.props.designation ? (
                  <CardSubtitle>{this.props.designation}</CardSubtitle>
                ) : null}
                <CardText>{this.props.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={this.props.promotion} />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={this.props.leader} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

