import React, { useState, useEffect } from "react";
import Table from "./Table";
import Preloader from "./Preloader";
export default function Categories({ match }) {
  useEffect(() => {
    categories();
  }, []);
  const [category, setCategory] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const categories = () => {
    setLoading(true);
    fetch(`https://torrentz-api.herokuapp.com/category/${match.params.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCategory(data);
        setLoading(false);
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
      <center>{isLoading && <Preloader />}</center>
    </div>
  );
}
