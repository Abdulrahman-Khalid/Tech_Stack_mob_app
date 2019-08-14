import { combineReducers } from "redux"; //combine reducers
import LibraryReducer from "./LibraryReducer";

export default combineReducers({
  libraries: LibraryReducer
});
