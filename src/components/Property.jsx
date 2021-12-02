import React from "react";

function Property({ item }) {
  return (
    <div style={{ margin: "10px" }}>
      <div className="card" style={{ width: "18rem" }}>
        <img src={`${item.image}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <a href={`/details/${item.id}`} className="btn btn-primary m-2">
            Details
          </a>
          <a href={`/tenant/${item.id}`} className="btn btn-primary m-2">
            Tenant
          </a>
        </div>
      </div>
    </div>
  );
}

export default Property;
