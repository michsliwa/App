import React from "react";
import { Card,CardImage, CardInfo, CardInfoSpan } from "./CharacterCard.styles";

const CharacterCard = ({ name, img, status, species, location, gender }) => {
  return (
    <Card>
      <CardImage>
        <img src={img} alt={name} />
      </CardImage>
      <CardInfo><CardInfoSpan>Name:</CardInfoSpan>&nbsp; {name}</CardInfo>
      <CardInfo><CardInfoSpan>Status:</CardInfoSpan>&nbsp; {status}</CardInfo>
      <CardInfo><CardInfoSpan>Type:</CardInfoSpan>&nbsp; {species}</CardInfo>
      <CardInfo><CardInfoSpan>Gender:</CardInfoSpan>&nbsp; {gender}</CardInfo>
      <CardInfo><CardInfoSpan>Location:</CardInfoSpan>&nbsp; {location}</CardInfo>
    </Card>
  );
};

export default CharacterCard;