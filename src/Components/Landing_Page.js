import React from "react";
import { Link } from "react-router-dom";
export default function Landing_Page() {
  return (
    <div className="container">
      <center>
        <h1 className="heading text-center text-uppercase text-white">
          Find Best Torrentz Here
        </h1>
        <Link to="/search" className="btn-search btn btn-outline-primary">
          search <i class="far fa-search"></i>
        </Link>
      </center>
      <div className="bg-img"></div>
    </div>
  );
}
