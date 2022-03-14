import React from "react";
import bg from "../../../assets/images/bg.png";
import CharactersSection from "../CharactersSection/CharactersSection";
import EpisodesSection from "../EpisodesSection/EpisodesSection";
import { Background} from "./Main.styles";

const Main = () => {
    return(
        <>
        <Background>
            <img src={bg} alt="background"/>
        </Background>
        <CharactersSection></CharactersSection>
        <EpisodesSection/>
        </>
    );
};

export default Main;