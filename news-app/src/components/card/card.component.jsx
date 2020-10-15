import React from "react";
import "./card.styles.scss";
import { createStructuredSelector } from "reselect";
// import CustomButton from "../custom-button/custom-button.component";
import Card from "@material-ui/core/Card";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addCurrentNews } from "../../redux/news/news.action";
import {
  addToBookmark,
  clearFromBookmark
} from "../../redux/bookmark/bookmark.action";
import { getBookmarkCollections } from "../../redux/bookmark/bookmark.selectors";

const NewsCard = ({
  article,
  addCurrentNews,
  addToBookmark,
  removeFromBookmark,
  history,
  bookmark
}) => {
  const isBookmark = bookmark.find(news => news.title === article.title);
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
          className={isBookmark ? "bookmark-btn bookmarked" : "bookmark-btn"}
          onClick={e => {
            isBookmark ? removeFromBookmark(article) : addToBookmark(article);
            e.stopPropagation();
          }}
        >
          {isBookmark ? "Remove from bookmark" : "+ Add to Bookmark"}
        </Link>
      </Card>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  bookmark: getBookmarkCollections
});

const mapDispatchToProps = dispatch => ({
  addCurrentNews: article => dispatch(addCurrentNews(article)),
  addToBookmark: article => dispatch(addToBookmark(article)),
  removeFromBookmark: article => dispatch(clearFromBookmark(article))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewsCard)
);
