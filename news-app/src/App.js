import React from "react";
// import CardContainer from "./components/card-container/card-container.component";
import "./App.css";
import Header from "./components/navigation/navigation.component";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homePage.component";
import Bookmarks from "./pages/bookmarks/bookmarks.component";
import NewsDetails from "./pages/newsDetials/news-details.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route path="/news" component={NewsDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
