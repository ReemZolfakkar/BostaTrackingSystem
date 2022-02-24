import { combineReducers } from "redux";
import { selectedorderReducer } from "./orderReducer";
const reducers=combineReducers({
    order:selectedorderReducer
});
export default reducers;