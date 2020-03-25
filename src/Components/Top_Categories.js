import React, { useState, useEffect } from "react";
import Table from "./Table";
export default function Top_Categories({ match }) {
  useEffect(() => {
    topCategories();
  }, []);

  const [topCat, setTopCat] = useState([]);

  const topCategories = () => {
    fetch(`https://torrentz-api.herokuapp.com/top/${match.params.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTopCat(data);
      });
  };
  return (
    <div className="container">
      <h1 className="my-5">Top {match.params.id}:</h1>
      <div className="container">{<Table data={topCat} />}</div>
    </div>
  );
}
