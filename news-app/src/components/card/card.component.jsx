import React from "react";
import "./card.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import Card from "@material-ui/core/Card";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addCurrentNews } from "../../redux/news/news.action";

const NewsCard = ({ article, addCurrentNews, history, dispatch }) => {
  return (
    <Link
      className="link-button"
      to="/news"
      onClick={() => {
        addCurrentNews(article);
      }}
    >
      <Card className="card">
        <img src={article.urlToImage} className="img" alt="news" />
        <h5>{article.title}</h5>
        <CustomButton
          caption="Bookmark"
          onClick={() => console.log("do you want to bookmark")}
        />
      </Card>
    </Link>
  );
};

const mapDispatchToProps = dispatch => ({
  addCurrentNews: article => dispatch(addCurrentNews(article))
});

export default withRouter(connect(null, mapDispatchToProps)(NewsCard));
