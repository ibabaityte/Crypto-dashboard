import {combineReducers} from "redux";

const currenciesReducer = (currencies = null, action) => {
    if(action.type === "SET_CURRENCIES"){
        return action.payload
    }

    return null;
}

export default combineReducers({
    currenciesReducer
});