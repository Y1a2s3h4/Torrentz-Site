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
    fetch(`https://torrentz-api.herokuapp.com/trending/${text}/w`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTrend(data);
      });
  };
  const categories_day = event => {
    const text = event.target.textContent;
    fetch(`https://torrentz-api.herokuapp.com/trending/${text}/d`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTrend(data);
      });
  };
  return (
    <div className="container">
      <h1 onClick={trending} className="c-pointer underline mt-5">
        Trending
      </h1>
      <p className="by_week">
        Get trending torrents of the
        <a onClick={trendWeek} href="#week">
          {" "}
          week{" "}
        </a>
        from all categories
      </p>
      <p className="categories_week">
        Get Trending Category torrents of the week.
        <br />
        Categories:{" "}
        <a onClick={categories_week} href="#tv">
          tv
        </a>
        ,{" "}
        <a onClick={categories_week} href="#apps">
          apps
        </a>
        ,{" "}
        <a onClick={categories_week} href="#music">
          {" "}
          music
        </a>
        ,{" "}
        <a onClick={categories_week} href="#other">
          other
        </a>
        ,{" "}
        <a onClick={categories_week} href="#games">
          games
        </a>
        ,{" "}
        <a onClick={categories_week} href="#anime">
          anime
        </a>
        ,{" "}
        <a onClick={categories_week} href="#movies">
          movies
        </a>
        ,{" "}
        <a onClick={categories_week} href="#documentaries">
          docs
        </a>
        (documentaries)
      </p>
      <p className="categories_day">
        Get Trending Category torrents of the day.
        <br />
        Categories:{" "}
        <a onClick={categories_day} href="#tv">
          tv
        </a>
        ,{" "}
        <a onClick={categories_day} href="#apps">
          apps
        </a>
        ,{" "}
        <a onClick={categories_day} href="#music">
          {" "}
          music
        </a>
        ,{" "}
        <a onClick={categories_day} href="#other">
          other
        </a>
        ,{" "}
        <a onClick={categories_day} href="#games">
          games
        </a>
        ,{" "}
        <a onClick={categories_day} href="#anime">
          anime
        </a>
        ,{" "}
        <a onClick={categories_day} href="#movies">
          movies
        </a>
        ,{" "}
        <a onClick={categories_day} href="#documentaries">
          docs
        </a>
        (documentaries)
      </p>
      <div className="container">{<Table data={trend} />}</div>
    </div>
  );
}
