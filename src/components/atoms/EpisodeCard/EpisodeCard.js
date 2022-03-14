import React from "react";
import { Card, CardImage, Season, Episodes } from "./EpisodeCard.styles";

const EpisodeCard = ({ img, name, episodes }) => {

  return (
    <Card to="/episodes" >
        <CardImage>
          <img src={img} alt="" />
        </CardImage>
        <Season>{name}</Season>
        <Episodes>{episodes} Episodes</Episodes>
    </Card>
  );
};

export default EpisodeCard;