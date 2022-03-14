import React from "react";
import CharactersSection from "../components/organisms/CharactersSection/CharactersSection";
import EpisodesSection from "../components/organisms/EpisodesSection/EpisodesSection";
import Main from "../components/organisms/Main/Main";

const Home = () => {
  return (
      <>
      <Main>
        <CharactersSection/>
        <EpisodesSection/>
      </Main>
      </>
  );
};

export default Home;
