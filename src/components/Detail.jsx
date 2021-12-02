import React from "react";
import { useParams } from "react-router";
import getProperty from "./data";
import styled from "styled-components";

function Detail(props) {
  let { currentId } = useParams();
  const property = getProperty();
  const item = property.filter((element) => element.id === parseInt(currentId));
  console.log(item[0]);
  return (
    <Container>
      <img src={`${item[0].image}`} className="img-fluid" alt="..." />
      <h1>{item[0].title}</h1>
      <h2>Number of rooms : {item[0].detail.room}</h2>
      <h2>Area : {item[0].detail.area}</h2>
      <h2>Location : {item[0].detail.location}</h2>
      <h2>Price : {item[0].detail.price}</h2>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  width: 100%;
  height: 50em;
  img {
    width: 100%;
    height: 60%;
    padding: 10px 400px;
    background-size: cover;
  }
  h1 {
    text-align: center;
    color: red;
  }
  h2 {
    text-align: center;
    color: blue;
    font-family: "Times New Roman", Times, serif;
  }
`;
