import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Container from "./components/Container";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      budget: 50,
      color: "darkgreen",
      size: {
        fontSize: "200px",
      },
      items: [
        {
          name: "Drink",
          icon: "fas fa-glass-martini",
          price: 15,
        },
        {
          name: "Wine",
          icon: "fas fa-wine-glass",
          price: 13,
        },
        {
          name: "Beer",
          icon: "fas fa-beer",
          price: 7,
        },
      ],
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(price) {
    this.setState({
      budget: this.state.budget - price,
    });
  }

  render() {
    return <Container clickHandler={this.clickHandler} {...this.state} />;
  }
}

export default App;
