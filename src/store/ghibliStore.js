//package based imports
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';

//app based imports
import reducer from '../reducers/ghibliReducer'

const initialState = {
    ghibliPeopleAreLoading: false,
    ghibliPeopleRetrievalError: false,
    ghibliPeopleRetreived: false,
    listOfGhibliPeople: [],
    ghibliFilmsAreLoading: false,
    ghibliFilmsRetreivalError: false,
    ghibliFilmsRetreived: false,
    filmsToDisplay: []
}

export default createStore(
    reducer,  //local reducer from ghibliReducer
    initialState, //set initial state
    applyMiddleware(logger, thunk)
); //apply both the thunk and the redux logger middleware