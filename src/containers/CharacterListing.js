import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCharacters } from "../redux/actions/charactersActions";
import CharacterComponent from "./CharacterComponent";

const CharacterPage = () => {
  const characters = useSelector((state) => state.allCharacters.characters);
  const dispatch = useDispatch();
  const fetchCharacters = async () => {
    const response = await axios
      .get("https://www.anapioficeandfire.com/api/characters?pageSize=50")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setCharacters(response.data));
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  console.log("Characters :", characters);
  return (
    <div className="ui grid container">
      <CharacterComponent />
    </div>
  );
};

export default CharacterPage;
