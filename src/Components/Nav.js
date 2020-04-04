import React from "react";
import { Link } from "react-router-dom";
import brand from "../vendors/brand.png";
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid ">
        <Link to="/" className="text-white navbar-brand" href="#home">
          {/* <img
            className="d-inline-block align-top mr-2"
            style={{ width: "30px", height: "30px" }}
            src={brand}
            alt="..."
          /> */}
          Torrentz
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="text-white nav-link" to="/top">
                Top
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-white nav-link" to="/trending">
                Trending
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-white nav-link" to="/popular">
                Popular
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="text-white nav-link dropdown-toggle"
                href="#dropdown"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item hover" to="/movies">
                  <i className="fal fa-film pr-2"></i>Movies
                </Link>
                <Link className="dropdown-item hover" to="/anime">
                  <i className="fal fa-user-ninja pr-2"></i>Anime
                </Link>
                <Link className="dropdown-item hover" to="/tvshows">
                  <i className="fal fa-tv-alt p-1"></i>T.V Shows
                </Link>
                <Link className="dropdown-item hover" to="/games">
                  <i className="fal fa-gamepad p-1"></i>Games
                </Link>
                <Link className="dropdown-item hover" to="/apps">
                  <i className="fab fa-windows pr-2"></i>Apps
                </Link>
                <Link className="dropdown-item hover" to="/music">
                  <i className="fal fa-music-alt pr-2"></i>Music
                </Link>
                <Link className="dropdown-item hover" to="/documentaries">
                  <i className="fal fa-camera-movie"></i>Documentaries
                </Link>
                <Link className="dropdown-item hover" to="/others">
                  <i className="fal fa-box-open"></i>Others
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
