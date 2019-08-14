import { combineReducers } from "redux"; //combine reducers
import LibraryReducer from "./LibraryReducer";
import SelectionReducer from "./SelectionReducer";

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
