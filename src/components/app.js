import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: {},
    };
  }

  getquote() {
    axios.get("https://quotes.rest/qod").then((request) => {
      this.setState({
        quote: request.data.contents.quotes[0],
      });
      console.log(this.state.quote);
    });
  }

  componentDidMount() {
    this.getquote();
  }

  render() {
    return (
      <div className="app">
        <div className="quote">
          <h1>{this.state.quote.title}!</h1>
          <h4>{this.state.quote.quote}</h4>
        </div>
      </div>
    );
  }
}
