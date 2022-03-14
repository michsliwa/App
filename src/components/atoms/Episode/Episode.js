import React from "react";
import { Row, Col } from "./Episode.styles";

const Episode = ({ id, title, airDate }) => {

  return (
    <Row>
      <Col>{id}</Col>
      <Col>{title}</Col>
      <Col>{airDate}</Col>
    </Row>
  );
};

export default Episode;