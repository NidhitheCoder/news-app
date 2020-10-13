import React from "react";
import CardContainer from "./components/card-container/card-container.component";
import "./App.css";
import Header from "./components/navigation/navigation.component";
import { setNews } from "./redux/news/news.action";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    let { setNews } = this.props;
    fetch(
      "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=69cf4a8328d54e23921a8be3e595f01b"
    )
      .then(response => response.json())
      .then(data => {
        data = data.articles;
        setNews(data);
      });
  }

  render() {
    const {news} = this.props;
    return (
      <div className="App">
      <Header />
      <CardContainer news={news} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news.news
});

const mapDispatchToProps = dispatch => ({
  setNews: news => dispatch(setNews(news))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
