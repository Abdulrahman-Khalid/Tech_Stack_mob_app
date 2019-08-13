import { combineReducers } from "redux"; //combine reducers
import LiberaryReducer from "./LiberaryReducer";

export default combineReducers({
  liberaries: LiberaryReducer
});
