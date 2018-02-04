//package imports
import axios from 'axios';

//App imports
import {//GET_GHIBLI_PEOPLE,
        GET_GHIBLI_PEOPLE_LOADING, 
        GET_GHIBLI_PEOPLE_ERROR, 
        GET_GHIBLI_PERSON_FILMS,
        GET_GHIBLI_PERSON_FILMS_LOADING, 
        GET_GHIBLI_PERSON_FILMS_ERROR, 
        DISPLAY_GHIBLI_PERSON_FILMS,
        DISPLAY_CLOSE_GHIBLI_PERSON_FILMS,
        DISPLAY_GHIBLI_PEOPLE} from './ghibliTypes'

export function getGhibliPeople() {
    return (dispatch) => {
        //send dispatch to store to let store know we're loading
        //dispatch(setTimeout(() => getGhibliPeopleLoading(true), 5000)); 
        dispatch(getGhibliPeopleLoading(true)); 

        //make axios call to get a list of ghibli people
        axios.get('https://ghibliapi.herokuapp.com/people')
            .then((response) => {
                console.log("getGhibliPeople response: ", response);
                if (response.statusText !== "OK")
                {
                    dispatch(getGhibliPeopleError(true));
                }
                else
                {
                    dispatch(getGhibliPeopleLoading(false)); 
                }

                dispatch(displayGhibliPeople(response.data));
            })
            .catch((error) => {
                console.log(error);
                getGhibliPeopleError(true);
            })
    }
    
    //    type: GET_GHIBLI_PEOPLE

}
    
export function getGhibliPeopleLoading(arePeopleLoading) {
    return {
        type: GET_GHIBLI_PEOPLE_LOADING,
        payload: arePeopleLoading
    }
}

export function getGhibliPeopleError(didGhibliError) {
    return {
        type: GET_GHIBLI_PEOPLE_ERROR,
        payload: didGhibliError
    }
}

export function getGhibliPersonFilms(personObject) {
    console.log("Entering getGhibliPersonFilms: ", personObject);

    //get list of films for person
    let listOfFilms = personObject.films;

    return (dispatch) => {
        //send dispatch to store to let store know we're loading
        //dispatch(setTimeout(() => getGhibliPeopleLoading(true), 5000)); 
        dispatch(getGhibliPersonFilmsLoading(true)); 

        for (let i = 0; i < listOfFilms.length; i++)
        {
            //make axios call to get a list of ghibli people
            axios.get(listOfFilms[i])
                .then((response) => {
                    console.log("getGhibliPersonFilms Response: ", response);
                    if (response.statusText !== "OK")
                    {
                        dispatch(getGhibliPersonFilmsError(true)); 
                    }
                    if (i === (listOfFilms.length - 1)) //length (no. of elements) less one check
                    {
                        dispatch(getGhibliPersonFilmsLoading(false)); 
                    }

                    //send retrieved film
                    dispatch(displayGhibliPersonFilms(response.data));
                })
                .catch((error) => {
                    console.log(error);
                    dispatch(getGhibliPersonFilmsError(true));
                })
        }
    }

       // return {
       //     type: GET_GHIBLI_PERSON_FILMS
       // }
}

export function getGhibliPersonFilmsLoading(areFilmsLoading) {
    return {
        type: GET_GHIBLI_PERSON_FILMS_LOADING,
        payload: areFilmsLoading
    }
}

export function getGhibliPersonFilmsError(didFilmRetrievalError) {
    return {
        type: GET_GHIBLI_PERSON_FILMS_ERROR,
        payload: didFilmRetrievalError
    }
}

export function displayGhibliPeople(listOfPeople, ghibliPeopleRetrieved) {
    return {
        type: DISPLAY_GHIBLI_PEOPLE,
        payload: {listOfPeople: listOfPeople,
                  ghibliPeopleRetrieved: ghibliPeopleRetrieved}
    }
}

export function displayGhibliPersonFilms(filmData) {
    return {
        type: DISPLAY_GHIBLI_PERSON_FILMS,
        payload: filmData
    }
}

export function displayCloseGhibliPersonFilms() {
    return {
        type: DISPLAY_CLOSE_GHIBLI_PERSON_FILMS
    }
}
