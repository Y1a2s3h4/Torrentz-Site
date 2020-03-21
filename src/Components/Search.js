import React, { Component } from "react";
import "../App.css";
import Table from "./Table";
export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: "parasite",
      data: [],
      showTable: false
    };
  }
  search_input = e => {
    e.preventDefault();
    fetch(`http://3.7.5.138:8000/search/${this.state.input}`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({ data: result }, () => {
          console.log(this.state);
        });
      });
    this.setState({ showTable: true });
  };
  inputValue = e => {
    this.setState({ input: [e.target.value] });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.search_input}>
          <i
            onSubmit={this.search_input}
            class=" far fa-search f-center c-pointer"
          ></i>
          <input
            type="text"
            placeholder="Search"
            id="input"
            onChange={this.inputValue}
            className="f-center form-control"
          />
        </form>
        <div className="container">
          {this.state.showTable && <Table data={this.state.data} />}
        </div>
      </div>
    );
  }
}
