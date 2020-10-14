import React from "react";
import "./card.styles.scss";
// import CustomButton from "../custom-button/custom-button.component";
import Card from "@material-ui/core/Card";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addCurrentNews } from "../../redux/news/news.action";
import {
  addToBookmark,
  clearFromBookmark
} from "../../redux/bookmark/bookmark.action";

const NewsCard = ({
  article,
  caption,
  remove,
  addCurrentNews,
  addToBookmark,
  removeFromBookmark,
  history
}) => {
  return (
    <div
      className="link-button"
      onClick={() => {
        addCurrentNews(article);
        history.push("/news");
      }}
    >
      <Card className="card">
        <img src={article.urlToImage} className="img" alt="news" />
        <h5>{article.title}</h5>
        <Link
          className={remove ? "bookmark-btn bookmarked" : "bookmark-btn"}
          onClick={e => {
            remove ? removeFromBookmark(article) : addToBookmark(article);
            e.stopPropagation();
          }}
        >
          {caption}
        </Link>
      </Card>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addCurrentNews: article => dispatch(addCurrentNews(article)),
  addToBookmark: article => dispatch(addToBookmark(article)),
  removeFromBookmark: article => dispatch(clearFromBookmark(article))
});

export default withRouter(connect(null, mapDispatchToProps)(NewsCard));
