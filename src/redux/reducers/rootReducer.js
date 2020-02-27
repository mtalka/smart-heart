import { combineReducers } from "redux";
import authReducer from "./authReducer";
import settingsReducer from "./settingsReducer";
import personReducer from "./personReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    settings: settingsReducer,
    persons: personReducer
});

export default rootReducer;
