import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api/";


export const DataContext = React.createContext({
  characters: [],
  episodes: [],
});

const DataProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`${baseURL}character`);
      setCharacters(result.data.results);
    };

    fetchItems();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`${baseURL}episode`);
      console.log(result.data.results);
      setEpisodes(result.data.results);
    };

    fetchItems();
  }, []);

  return (
    <DataContext.Provider
      value={{
        characters,
        episodes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;