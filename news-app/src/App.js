import React from "react";
import CardContainer from "./components/card-container/card-container.component";
import "./App.css";
import Header from "./components/navigation/navigation.component";
import { updateNews } from "./redux/news/news.action";
import {connect} from 'react-redux';

class App extends React.Component {
  componentDidMount() {

    let {updateNews} = this.props;
    fetch(
      "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=69cf4a8328d54e23921a8be3e595f01b"
    )
      .then(response => response.json())
      .then(data => {
        data = data.articles
        updateNews({
          id: data.id,
          ...data
        });
      });

      console.log(updateNews)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer News={[{title:"haiii"}]} />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
news:updateNews
});

const mapDispatchToProps = dispatch =>({
  updateNews : news => dispatch(updateNews(news))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);