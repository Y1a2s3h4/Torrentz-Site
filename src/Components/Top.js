import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "./Table";

export default function Top(props) {
  useEffect(() => {
    disp();
  }, []);
  const [top, setTop] = useState([]);
  // const [topCategories, setTopCategories] = useState("");

  const disp = () => {
    fetch(`https://torrentz-api.herokuapp.com/top`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTop(data);
      })
      .catch(err => console.log(err));
  };
  const top_categories = event => {
    const text = event.target.textContent;
    const lowerText = text.toLowerCase();
    fetch(`https://torrentz-api.herokuapp.com/top/${lowerText}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTop(data);
      });
  };
  return (
    <div className="container ">
      <h1 className="mt-5 heading_top-cat text-white">
        Get Top Torrentz in Categories:
      </h1>
      <div className="btn-group my-5">
        <button
          onClick={disp}
          type="button"
          className="btn btn-light dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Top Torrentz
        </button>
        <div className="dropdown-menu">
          <a
            onClick={top_categories}
            className="dropdown-item top-cat"
            href="#movies"
          >
            Movies
          </a>
          <div className="dropdown-divider"></div>
          <a
            onClick={top_categories}
            className="dropdown-item top-cat"
            href="#anime"
          >
            Anime
          </a>
          <div className="dropdown-divider"></div>
          <a
            onClick={top_categories}
            className="dropdown-item top-cat"
            href="#tvshows"
          >
            TV
          </a>
          <div className="dropdown-divider"></div>
          <a
            onClick={top_categories}
            className="dropdown-item top-cat"
            href="#games"
          >
            Games
          </a>
          <div className="dropdown-divider"></div>
          <a
            onClick={top_categories}
            className="dropdown-item top-cat"
            href="#apps"
          >
            Apps
          </a>
          <div className="dropdown-divider"></div>
          <a
            onClick={top_categories}
            className="dropdown-item top-cat"
            href="#music"
          >
            Music
          </a>
          <div className="dropdown-divider"></div>
          <a
            onClick={top_categories}
            className="dropdown-item top-cat"
            href="#documentaries"
          >
            Docs
          </a>
          <div className="dropdown-divider"></div>
          <a
            onClick={top_categories}
            className="dropdown-item top-cat"
            href="#other"
          >
            Other
          </a>
        </div>
      </div>
      <div className="container">{<Table data={top} />}</div>
    </div>
  );
}
