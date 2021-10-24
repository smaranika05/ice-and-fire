import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedCharacter,
  removeSelectedCharacter,
} from "../redux/actions/charactersActions";
const CharacterDetails = () => {
  const { characterId } = useParams();
  let character = useSelector((state) => state.character);
  const { name, gender } = character;
  const dispatch = useDispatch();
  const fetchCharacterDetail = async (id) => {
    const response = await axios
      .get(`https://www.anapioficeandfire.com/api/characters/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedCharacter(response.data));
  };

  useEffect(() => {
    if (characterId && characterId !== "") fetchCharacterDetail(characterId);
    return () => {
      dispatch(removeSelectedCharacter());
    };
  }, [characterId]);
  return (
    <div className="ui grid container">
      {Object.keys(character).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">

              <div className="column rp">
                <h1>{name}</h1>
                <h2>
                  <a className="ui teal tag label">{gender}</a>
                </h2>



              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
