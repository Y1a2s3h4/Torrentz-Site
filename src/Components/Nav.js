import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid text-uppercase">
        <Link to="/">
          <a className="navbar-brand text-white" href="#home">
            Torrentz
          </a>
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
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/movies">
                Top <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/tvshows">
                Trending
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/tvshows">
                Popular
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
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
                <Link className="dropdown-item" to="/popular">
                  <i class="fal fa-film pr-2"></i>Movies
                </Link>
                <Link className="dropdown-item" to="/newreleases">
                  <i class="fal fa-user-ninja pr-2"></i>Anime
                </Link>
                <Link className="dropdown-item" to="/newreleases">
                  <i class="fal fa-tv-alt p-1"></i>T.V Shows
                </Link>
                <Link className="dropdown-item" to="/newreleases">
                  <i class="fal fa-gamepad p-1"></i>Games
                </Link>
                <Link className="dropdown-item" to="/newreleases">
                  <i class="fab fa-windows pr-2"></i>Apps
                </Link>
                <Link className="dropdown-item" to="/newreleases">
                  <i class="fal fa-music-alt pr-2"></i>Music
                </Link>
                <Link className="dropdown-item" to="/newreleases">
                  <i class="fal fa-camera-movie"></i>Documentaries
                </Link>
                <Link className="dropdown-item" to="/newreleases">
                  <i class="fal fa-box-open"></i>Others
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
