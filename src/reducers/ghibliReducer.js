import {GET_GHIBLI_PEOPLE,
    GET_GHIBLI_PEOPLE_LOADING, 
    GET_GHIBLI_PEOPLE_ERROR, 
    GET_GHIBLI_PERSON_FILMS,
    GET_GHIBLI_PERSON_FILMS_LOADING, 
    GET_GHIBLI_PERSON_FILMS_ERROR, 
    DISPLAY_GHIBLI_PERSON_FILMS,
    DISPLAY_CLOSE_GHIBLI_PERSON_FILMS,
    DISPLAY_GHIBLI_PEOPLE} from '../actions/ghibliTypes'

const ghibliReducer = (state, action) => {
    switch (action.type) {
        case GET_GHIBLI_PEOPLE: 
            console.log("GET_GHIBLI_PEOPLE");
            return state;
        case GET_GHIBLI_PEOPLE_LOADING: 
            console.log("GET_GHIBLI_PEOPLE_LOADING");
            state = {...state, ghibliPeopleAreLoading: action.payload}
            return state;
        case GET_GHIBLI_PEOPLE_ERROR:
            console.log("GET_GHIBLI_PEOPLE_ERROR");
            state = {...state, ghibliPeopleRetrievalError: action.payload}
            return state;
        case GET_GHIBLI_PERSON_FILMS: 
            console.log("GET_GHIBLI_PERSON_FILMS");
            return state; 
        case GET_GHIBLI_PERSON_FILMS_LOADING: 
            console.log("GET_GHIBLI_PERSON_FILMS_LOADING");
            state = {...state, ghibliFilmsAreLoading: action.payload}
            return state; 
        case GET_GHIBLI_PERSON_FILMS_ERROR: 
            console.log("GET_GHIBLI_PERSON_FILMS_ERROR");
            state = {...state, ghibliFilmsRetreivalError: action.payload}
            return state;
        case DISPLAY_GHIBLI_PEOPLE:
            console.log("DISPLAY_GHIBLI_PEOPLE");
            state = {...state, 
                listOfGhibliPeople: action.payload.listOfPeople, 
                ghibliPeopleRetreived: action.payload.ghibliPeopleRetreived}
            return state;
        case DISPLAY_GHIBLI_PERSON_FILMS: 
            console.log("DISPLAY_GHIBLI_PERSON_FILMS");
            state = {...state, 
                filmsToDisplay: state.filmsToDisplay.concat(action.payload),
                ghibliFilmsRetreived: true};
            return state;
        case DISPLAY_CLOSE_GHIBLI_PERSON_FILMS: 
            console.log("DISPLAY_CLOSE_GHIBLI_PERSON_FILMS");
            state = {...state, 
                filmsToDisplay: [],
                ghibliFilmsRetreived: false};
            return state; 
        default: 
            return state;
    } //end switch

} //end of ghibliReducer

export default ghibliReducer;