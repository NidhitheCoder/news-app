import React from "react";
import "./news-details.styles.scss";
// import { connect } from "react-redux";
// import {getArticle} from '../../redux/news/news.action';

function NewsDetails({ article }) {
  console.log("state :", article);
  return <div className="news-details"> News details here</div>;
}


export default NewsDetails;
