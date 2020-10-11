import React from "react";
import CardContainer from "./components/card-container/card-container.component";
import "./App.css";
import Header from "./components/navigation/navigation.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      News: []
    };
  }
  componentDidMount() {
    fetch(
      "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=69cf4a8328d54e23921a8be3e595f01b"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ News: data.articles });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer News={this.state.News} />
      </div>
    );
  }
}

export default App;
