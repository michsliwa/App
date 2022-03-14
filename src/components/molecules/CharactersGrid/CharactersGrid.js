import React, { useContext } from "react";
import CharacterCard from "../../atoms/CharacterCard/CharacterCard";
import { DataContext } from "../../providers/DataProvider";
import { Wrapper } from "./CharactersGrid.styles";

const CharactersGrid = ({ number }) => {
  const { characters } = useContext(DataContext);

  const items = characters.slice(0, number);

  return (
    <Wrapper>
      {items.map((item) => {
        return (
          <CharacterCard
            key={item.id}
            id={item.id}
            img={item.image}
            name={item.name}
            species={item.species}
            gender={item.gender}
            location={item.location.name}
            status={item.status}
          />
        );
      })}
    </Wrapper>
  );
};

export default CharactersGrid;