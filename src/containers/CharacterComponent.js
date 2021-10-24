import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CharacterComponent = () => {
  const characters = useSelector((state) => state.allCharacters.characters);
  const renderList = characters.map((character, id) => {
    const { name, gender, titles, aliases } = character;



    if (name != '')
      return (
        <div className="four wide column" key={id} >


          <div className="ui link cards">
            <div className="card">

              <div className="content">
                <div className="header">{gender} character</div>
                <div className="meta name">{name}</div>
                <div className="meta aliases">Titles:
                  <p>{titles}</p></div>
                <div className="meta aliases">Aliases:
                  <p>{aliases}</p></div>


              </div>
            </div>
          </div>

        </div>
      );
  });
  return <>{renderList}</>;
};

export default CharacterComponent;
