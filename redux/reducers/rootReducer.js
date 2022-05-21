import { combineReducers } from "redux";
import NoteReducer from "./NoteReducer";
import ProfileReducer from "./profile_reducer";


// Root Reducer
const rootReducer = combineReducers({
 profile : ProfileReducer,
 notes : NoteReducer
});

export default rootReducer;