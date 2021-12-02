import React from "react";
import getProperty from "./data";
import Property from "./Property";

function Section(props) {
  const property = getProperty();
  return (
    <div>
      <h1 style={{ margin: "50px" }}>Showing {property.length} properties</h1>
      <div style={{ display: "flex" }}>
        {property.map((item, id) => (
          <Property key={id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Section;
