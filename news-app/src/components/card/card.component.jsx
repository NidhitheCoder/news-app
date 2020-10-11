import React from "react";
import "./card.styles.scss";
import CustomButton from '../custom-button/custom-button.component';
import Card from '@material-ui/core/Card';

const NewsCard = ({ title,imgUrl }) => (
  <Card className="card">
  <img src={imgUrl} className="img" alt="news"/>
    <h5>{title}</h5>
    <CustomButton />
  </Card>
);

export default NewsCard;
