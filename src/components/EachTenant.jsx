import React from "react";

function EachTenant({ item, onDelete }) {
  return (
    <div style={{ margin: "0 10%" }}>
      <li className="list-group-item">
        <div className="row">
          <div className="col">{item.name}</div>
          <div className="col-1">
            <button type="button" className="btn btn-secondary">
              Edit
            </button>
          </div>
          <div className="col-1">
            <button
              onClick={() => onDelete(item.id)}
              type="button"
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default EachTenant;
