import React from "react";
import { Wrapper } from "./EpisodesGrid.styles";
import EpisodeCard from "../../atoms/EpisodeCard/EpisodeCard";
import { episodesData } from "../../providers/data";

const EpisodesGrid = () => {
  return (
    <Wrapper>
    {episodesData.map((season) => {
      return (
        <EpisodeCard
          id={season.id}
          key={season.id}
          img={season.img}
          name={season.name}
          episodes={season.episodes}
        />
      );
    })}
  </Wrapper>
  );
};

export default EpisodesGrid;