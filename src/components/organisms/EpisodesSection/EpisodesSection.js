import React from "react";
import Button from "../../atoms/Button/Button";
import EpisodesGrid from "../../molecules/EpisodesGrid/EpisodesGrid";
import { Wrapper} from "./EpisodesSection.styles";
import Header from "../../atoms/Header/Header";

const EpisodesSection = () => {
  return (
    <Wrapper>
      <Header title="Episodes" link="/episodes"/>
      <EpisodesGrid/>
      <Button title="All episodes" link="/episodes" />
    </Wrapper>
  );
};

export default EpisodesSection;