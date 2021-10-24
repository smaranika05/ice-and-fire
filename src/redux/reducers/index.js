import { combineReducers } from "redux";
import { charactersReducer, selectedCharactersReducer } from "./charactersReducer";
const reducers = combineReducers({
  allCharacters: charactersReducer,
  character: selectedCharactersReducer,
});
export default reducers;
