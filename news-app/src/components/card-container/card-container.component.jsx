import React from "react";
import NewsCard from "../card/card.component";
import "./card-container.styles.scss";

class CardContainer extends React.Component {
  render() {
    const { news } = this.props;
    return (
      <div className="card-container">
        {news.map(article => (
          <NewsCard title={article.title} imgUrl={article.urlToImage} />
        ))}
      </div>
    );
  }
}

export default CardContainer;
