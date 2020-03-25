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

  return (
    <div className="container">
      <h1 className="mt-5 heading_top-cat">Get Top Torrentz in Categories:</h1>
      <div className="btn-group my-5">
        <button type="button" className="btn btn-light">
          Top Torrentz
        </button>
        <button
          type="button"
          className="btn btn-light dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <div className="dropdown-menu">
          <Link
            to={`/top/movies`}
            className="dropdown-item top-cat"
            href="#movies"
          >
            Movies
          </Link>
          <div className="dropdown-divider"></div>
          <Link
            to={`/top/anime`}
            className="dropdown-item top-cat"
            href="#anime"
          >
            Anime
          </Link>
          <div className="dropdown-divider"></div>
          <Link
            to={`/top/tv`}
            className="dropdown-item top-cat"
            href="#tvshows"
          >
            T.v Shows
          </Link>
          <div className="dropdown-divider"></div>
          <Link
            to={`/top/games`}
            className="dropdown-item top-cat"
            href="#games"
          >
            Games
          </Link>
          <div className="dropdown-divider"></div>
          <Link to={`/top/apps`} className="dropdown-item top-cat" href="#apps">
            Apps
          </Link>
          <div className="dropdown-divider"></div>
          <Link
            to={`/top/music`}
            className="dropdown-item top-cat"
            href="#music"
          >
            Music
          </Link>
          <div className="dropdown-divider"></div>
          <Link
            to={`/top/docs`}
            className="dropdown-item top-cat"
            href="#documentaries"
          >
            Documentaries
          </Link>
          <div className="dropdown-divider"></div>
          <Link
            to={`/top/other`}
            className="dropdown-item top-cat"
            href="#other"
          >
            Others
          </Link>
        </div>
      </div>
      <div className="container">{<Table data={top} />}</div>
      {/* <table className="table table-hover table-dark mt-4">
        <thead>
          <tr>
            <th scope="col">NAME</th>
            <th scope="col">SE</th>
            <th scope="col">LE</th>
            <th scope="col">SIZE</th>
          </tr>
        </thead>
        <tbody>
          {top.map((item, i) => {
            return (
              <tr
                key={i}
                className="c-pointer"
                onClick={getMagnetLink.bind(this, item.link)}
              >
                <td>
                  <span className={`${item.ico} mx-2`}></span>
                  {item.name}
                </td>
                <td className="text-success">{item.se}</td>
                <td className="text-danger">{item.le}</td>
                <td>{item.size}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
}
