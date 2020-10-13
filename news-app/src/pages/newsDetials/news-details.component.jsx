import React from "react";
import "./news-details.styles.scss";
import { connect } from "react-redux";
import { selectCurrentNewsArticle } from "../../redux/news/news.selectors";
import { createStructuredSelector } from "reselect";

const NewsDetails = ({ article }) => {
  return (
    <div className="news-details">
      <div className="img-container">
        <img src={article.urlToImage} alt="Article News"></img>
      </div>
      <div className="details-container">
        <h1>{article.title}</h1>
        <p>- {article.author}</p>
        <p>{article.content}</p>
        <h4>{article.description}</h4>
        <a href={article.url}>Read More...</a>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  article: selectCurrentNewsArticle
});

export default connect(mapStateToProps)(NewsDetails);
