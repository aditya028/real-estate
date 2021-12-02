import React from "react";
import { Link } from "react-router-dom";

function Property({ item }) {
  return (
    <div style={{ margin: "10px" }}>
      <div className="card" style={{ width: "18rem" }}>
        <img src={`${item.image}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <Link to={`/detail/${item.id}`} className="btn btn-primary m-2">
            Details
          </Link>
          <Link to={`/tenant/${item.id}`} className="btn btn-primary m-2">
            Tenant
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Property;
