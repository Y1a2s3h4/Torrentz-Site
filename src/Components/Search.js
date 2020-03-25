import React, { Component } from "react";
import "../App.css";
import Table from "./Table";
export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      data: [],
      showTable: false
    };
  }
  search_input = e => {
    e.preventDefault();
    fetch(`https://torrentz-api.herokuapp.com/search/${this.state.input}`)
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
            className="far fa-search f-center"
          ></i>
          <input
            type="text"
            placeholder="Search"
            id="input"
            onChange={this.inputValue}
            className="w-100 my-5 form-control"
          />
        </form>
        <div className="container">
          {this.state.showTable && <Table data={this.state.data} />}
        </div>
      </div>
    );
  }
}
