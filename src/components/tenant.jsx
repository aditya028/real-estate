import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import EachTenant from "./EachTenant";
import styled from "styled-components";
import { getTenant } from "./data";

function Tenant(props) {
  let { currentId } = useParams();
  const [tenant, setTenant] = useState(getTenant(parseInt(currentId)));
  const history = useHistory();

  const handleDelete = (id) => {
    const item = tenant.filter((obj) => obj.id !== id);
    setTenant(item);
  };

  const handleNewTenant = () => {
    history.push("/new");
  };

  return (
    <Conatainer>
      <h1>Showing {tenant.length} Tenants</h1>
      <button
        type="button"
        onClick={handleNewTenant}
        className="btn btn-primary"
        id="btn1"
      >
        Add Tenant
      </button>
      <ul className="list-group">
        {tenant.map((item, id) => (
          <EachTenant key={id} onDelete={handleDelete} item={item} />
        ))}
      </ul>
    </Conatainer>
  );
}

export default Tenant;

const Conatainer = styled.div`
  h1 {
    text-align: center;
    color: red;
    font-family: sans-serif;
  }
  #btn1 {
    margin: 1% 45%;
  }
`;
