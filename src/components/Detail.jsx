import React from "react";
import { useParams } from "react-router-dom";
import getProperty from "./data";

function Detail(props) {
  let { currentId } = useParams();
  const property = getProperty();
  const item = property.filter((element) => element.id === currentId);
  return (
    <div>
      <img src={`${item.image}`} className="img-fluid" alt="..." />
    </div>
  );
}

export default Detail;
