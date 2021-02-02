import { combineReducers } from "redux";
import leads from "./leads";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  leadsReducer: leads,
  errors,
  messages,
});
