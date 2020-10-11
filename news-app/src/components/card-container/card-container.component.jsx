import React from "react";
import NewsCard from "../card/card.component";
import "./card-container.styles.scss";

class CardContainer extends React.Component {
  render() {
    const { News } = this.props;
    return (
      <div className="card-container">
        {News.map(article => (
          <NewsCard title={article.title} imgUrl={article.urlToImage} />
        ))}
      </div>
    );
  }
}

export default CardContainer;
