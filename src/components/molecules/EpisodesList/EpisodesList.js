import React, { useContext } from "react";
import Episode from "../../atoms/Episode/Episode";
import { DataContext } from "../../providers/DataProvider";
import { Header, Title, Wrapper } from "./EpisodesList.styles";

const EpisodesList = () => {

    const { episodes } = useContext(DataContext);

  return (
    <Wrapper id="list">
      <Title>Episodes list</Title>
      <Header>
        <div>#</div>
        <div>Title</div>
        <div>Air date</div>
      </Header>
      {episodes.map((episode) => {
        return (
          <Episode
            key={episode.episode}
            id={episode.episode}
            title={episode.name}
            airDate={episode.air_date}
          />
        );
      })}
    </Wrapper>
  )
}

export default EpisodesList;
