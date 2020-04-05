import React, { useState, useEffect } from "react";
import Table from "./Table";
export default function Categories({ match }) {
  useEffect(() => {
    categories();
  }, []);
  const [category, setCategory] = useState([]);
  const categories = () => {
    fetch(`https://torrentz-api.herokuapp.com/category/${match.params.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCategory(data);
      });
  };
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#fff",
        borderRadius: "7px"
      }}
    >
      <Table data={category} />
    </div>
  );
}
