import React, { useState, useEffect } from "react";
import Table from "./Table";
import Preloader from "./Preloader";
export default function Popular() {
  useEffect(() => {
    populars();
  }, []);
  const [popular, setPopular] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const populars = () => {
    const arr = [
      "movies",
      "anime",
      "tv",
      "games",
      "apps",
      "music",
      "documentaries",
      "other"
    ];
    const random = arr[Math.floor(Math.random() * arr.length)];
    setLoading(true);
    fetch(`https://torrentz-api.herokuapp.com/popular/${random}/d`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPopular(data);
        setLoading(false);
      });
  };

  const categories_week = event => {
    const text = event.target.textContent;
    const lowerText = text.toLowerCase();
    setLoading(true);
    fetch(`https://torrentz-api.herokuapp.com/popular/${lowerText}/w`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPopular(data);
        setLoading(false);
      });
  };
  const categories_day = event => {
    const text = event.target.textContent;
    const lowerText = text.toLowerCase();
    setLoading(true);
    fetch(`https://torrentz-api.herokuapp.com/popular/${lowerText}/d`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPopular(data);
        setLoading(false);
      });
  };
  return (
    <div className="container text-white">
      <h1 className="underline c-pointer" onClick={populars}>
        Popular
      </h1>
      <p className="categories_week">
        Get Popular Category torrents of the week.
        <br />
        <div className="btn-group my-3">
          <button
            type="button"
            className="btn btn-light dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Categories by week
          </button>

          <div className="dropdown-menu">
            <a
              onClick={categories_week}
              className="dropdown-item top-cat"
              href="#movies"
            >
              Movies
            </a>
            <div className="dropdown-divider"></div>
            <a
              onClick={categories_week}
              className="dropdown-item top-cat"
              href="#anime"
            >
              Anime
            </a>
            <div className="dropdown-divider"></div>
            <a
              onClick={categories_week}
              className="dropdown-item top-cat"
              href="#tvshows"
            >
              TV
            </a>
            <div className="dropdown-divider"></div>
            <a
              onClick={categories_week}
              className="dropdown-item top-cat"
              href="#games"
            >
              Games
            </a>
            <div className="dropdown-divider"></div>
            <a
              onClick={categories_week}
              className="dropdown-item top-cat"
              href="#apps"
            >
              Apps
            </a>
            <div className="dropdown-divider"></div>
            <a
              onClick={categories_week}
              className="dropdown-item top-cat"
              href="#music"
            >
              Music
            </a>
            <div className="dropdown-divider"></div>
            <a
              onClick={categories_week}
              className="dropdown-item top-cat"
              href="#documentaries"
            >
              Documentaries
            </a>
            <div className="dropdown-divider"></div>
            <a
              onClick={categories_week}
              className="dropdown-item top-cat"
              href="#other"
            >
              Other
            </a>
          </div>
        </div>
      </p>
      <p className="categories_day">
        Get Trending Category torrents of the day.
        <br />
        <div className="btn-group my-3">
          <button
            type="button"
            className="btn btn-light dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Categories by day
          </button>

          <div className="dropdown-menu">
            <a
              onClick={categories_day}
              className="dropdown-item top-cat"
              href="#movies"
            >
              Movies
            </a>
            <div className="dropdown-divider"></div>
            <a
              onClick={categories_day}
              className="dropdown-item top-cat"
              href="#anime"
            >
              Anime
            </a>
            <div className="dropdown-divider"></div>
            <a
              onClick={categories_day}
              className="dropdown-item top-cat"
              href="#tvshows"
            >
              TV
            </a>
            <div className="dropdown-divider"></div>
            <a
              onClick={categories_day}
              className="dropdown-item top-cat"
              href="#games"
            >
              Games
            </a>
            <div className="dropdown-divider"></div>
            <a
              onClick={categories_day}
              className="dropdown-item top-cat"
              href="#apps"
            >
              Apps
            </a>
            <div className="dropdown-divider"></div>
            <a
              onClick={categories_day}
              className="dropdown-item top-cat"
              href="#music"
            >
              Music
            </a>
            <div className="dropdown-divider"></div>
            <a
              onClick={categories_day}
              className="dropdown-item top-cat"
              href="#documentaries"
            >
              Documentaries
            </a>
            <div className="dropdown-divider"></div>
            <a
              onClick={categories_day}
              className="dropdown-item top-cat"
              href="#other"
            >
              Other
            </a>
          </div>
        </div>
      </p>
      <div
        className="container"
        style={{
          backgroundColor: "#fff",
          borderRadius: "7px"
        }}
      >
        {<Table data={popular} />}
        <center>{isLoading && <Preloader />}</center>
      </div>
    </div>
  );
}
