import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "./Table";
export default function Top() {
  useEffect(() => {
    trending();
  }, []);
  const [trend, setTrend] = useState([]);
  const trending = () => {
    fetch(`https://torrentz-api.herokuapp.com/trending`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTrend(data);
      });
  };
  const trendWeek = () => {
    fetch(`https://torrentz-api.herokuapp.com/trending/all/w`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTrend(data);
      });
  };
  const categories_week = event => {
    const text = event.target.textContent;
    const lowerText = text.toLowerCase();
    fetch(`https://torrentz-api.herokuapp.com/trending/${lowerText}/w`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTrend(data);
      });
  };
  const categories_day = event => {
    const text = event.target.textContent;
    const lowerText = text.toLowerCase();

    fetch(`https://torrentz-api.herokuapp.com/trending/${lowerText}/d`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTrend(data);
      });
  };
  return (
    <div className="container text-white">
      <h1 onClick={trending} className="c-pointer underline mt-5">
        Trending
      </h1>
      <p className="by_week">
        Get trending torrents of the
        <a onClick={trendWeek} href="#week" style={{ color: "#FFB6C1" }}>
          {" "}
          week{" "}
        </a>
        from all categories
      </p>
      <p className="categories_week">
        Get Trending Category torrents of the week.
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

          <div className="dropdown-menu" style={{ marginLeft: "8rem" }}>
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
              Docs
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

          <div className="dropdown-menu" style={{ marginLeft: "8rem" }}>
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
              Docs
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
      <div className="container">{<Table data={trend} />}</div>
    </div>
  );
}
