import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const getMagnetLink = (link) => {
      fetch(`https://torrentz-api.herokuapp.com/torrent?link=${link}`)
        .then((res) => res.text())
        .then((data) => {
          window.open(data);
        })
        .catch((err) => console.log(err) && alert("Something went wrong! :("));
    };
    return (
      <div className="table-responsive mb-5">
        <table className="table table-hover">
          <thead>
            <tr className="text-purple">
              <th scope="col">NAME</th>
              <th scope="col">SE</th>
              <th scope="col">LE</th>
              <th scope="col">SIZE</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item, i) => {
              const { name, ico, link, se, le, size } = item;
              return (
                <tr
                  key={i}
                  className="c-pointer dark-purple"
                  onClick={getMagnetLink.bind(this, link)}
                >
                  <td>
                    <span className={`${ico} mx-2`}></span>
                    {name}
                  </td>
                  <td className="text-success">{se}</td>
                  <td className="text-danger">{le}</td>
                  <td>{size}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
