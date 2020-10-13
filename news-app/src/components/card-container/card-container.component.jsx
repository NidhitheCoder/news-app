import React from "react";
import NewsCard from "../card/card.component";
import "./card-container.styles.scss";

class CardContainer extends React.Component {
  render() {
    const { news } = this.props;
    return (
      <div className="card-container">
        {news && news.map(({title,urlToImage,...otherProps},index) => (
          <NewsCard title={title} imgUrl={urlToImage} {...otherProps} key={index} />
        ))}
      </div>
    );
  }
}

export default CardContainer;
