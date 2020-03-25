import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid text-uppercase">
        <Link to="/" className="navbar-brand" href="#home">
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
              <Link className="nav-link" to="/top">
                Top
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trending">
                Trending
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/popular">
                Popular
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
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
                <Link className="dropdown-item" to="/movies">
                  <i className="fal fa-film pr-2"></i>Movies
                </Link>
                <Link className="dropdown-item" to="/anime">
                  <i className="fal fa-user-ninja pr-2"></i>Anime
                </Link>
                <Link className="dropdown-item" to="/tvshows">
                  <i className="fal fa-tv-alt p-1"></i>T.V Shows
                </Link>
                <Link className="dropdown-item" to="/games">
                  <i className="fal fa-gamepad p-1"></i>Games
                </Link>
                <Link className="dropdown-item" to="/apps">
                  <i className="fab fa-windows pr-2"></i>Apps
                </Link>
                <Link className="dropdown-item" to="/music">
                  <i className="fal fa-music-alt pr-2"></i>Music
                </Link>
                <Link className="dropdown-item" to="/documentaries">
                  <i className="fal fa-camera-movie"></i>Documentaries
                </Link>
                <Link className="dropdown-item" to="/others">
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
