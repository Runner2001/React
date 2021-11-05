import React from "react";
import { useParams } from "react-router";
import { products } from "../Product";

const SeeMore = () => {
  const { id } = useParams();
  const see = products.filter((item) => item.id === parseInt(id));
  console.log(see);
  return (
    <div className="container col-12">
      <div className="row">
        <div key={see[0].id} className="card col-md-6">
          <img src={see[0].img} className="card-img-top mt-2" />
          <div className="card-body">
            <h2 className="card-title mb-4">{see[0].Name}</h2>
            <p>Cpu : {see[0].Cpu}</p>
            <p>Ram : {see[0].Ram}</p>
            <p>Storage : {see[0].Storage}</p>
            <p>Camera : {see[0].Camera}</p>
            <p className="card-text text-muted">{see[0].Brief}</p>
            <button className="btn btn-primary">Buy</button>
            <span className="text-primary ms-2 fs-6">{see[0].Price}</span>
            <p className="card-text mt-2">
              <small className="text-muted">Release Date 12/1/2021</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeMore;
