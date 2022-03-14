import React from "react";
import Button from "../../atoms/Button/Button";
import Header from "../../atoms/Header/Header";
import CharactersGrid from "../../molecules/CharactersGrid/CharactersGrid";
import { Wrapper} from "./CharactersSection.styles";

const CharactersSection = () => {
  return (
    <Wrapper>
      <Header title="Characters"></Header>
      <CharactersGrid number="4" />
      <Button title="All characters" link="/characters" />
    </Wrapper>
  );
};

export default CharactersSection;