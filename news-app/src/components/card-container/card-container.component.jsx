import React from "react";
import NewsCard from "../card/card.component";
import "./card-container.styles.scss";

class CardContainer extends React.Component {
  render() {
    const { news,caption,remove } = this.props;
    return (
      <div className="card-container">
        {news && news.map((article,index) => (
          <NewsCard article={article} key={index} remove={remove} caption={caption} />
        ))}
      </div>
    );
  }
}

export default CardContainer;
