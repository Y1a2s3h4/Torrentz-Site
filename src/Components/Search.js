import React, { Component } from "react";
import "../App.css";
import Table from "./Table";
import Preloader from "./Preloader";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      data: [],
      showTable: false,
      isLoading: false
    };
  }
  search_input = e => {
    e.preventDefault();
    this.setState({ showTable: true, isLoading: true });
    fetch(`https://torrentz-api.herokuapp.com/search/${this.state.input}`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({ data: result, isLoading: false }, () => {
          console.log(this.state);
        });
      });
  };
  inputValue = e => {
    this.setState({ input: [e.target.value] });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.search_input}>
          <input
            type="text"
            placeholder="Search"
            id="input"
            onChange={this.inputValue}
            className=" f-pos w-100 my-5 form-control"
          />
        </form>
        <div
          className="container mt-custom"
          style={{
            backgroundColor: "#fff",
            borderRadius: "7px"
          }}
        >
          {this.state.showTable && <Table data={this.state.data} />}
          {this.state.isLoading && <Preloader />}
        </div>
      </div>
    );
  }
}
