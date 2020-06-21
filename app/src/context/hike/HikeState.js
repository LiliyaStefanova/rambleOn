import React, {useReducer} from 'react';
import axios from 'axios';
import HikeContext from './hikeContext';
import hikeReducer from './hikeReducer';
import {
    ADD_HIKE,
    GET_HIKES,
    DELETE_HIKE,
    UPDATE_HIKE,
    GET_HIKE_DETAILS,
    SET_LOADING,
    HIKE_ERROR,
    SET_CURRENT,
    CLEAR_CURRENT
} from '../types';


const HikeState = (props) => {
    const initialState = {
        hikes: [],
        current: null,
        loading: false,
        error: null
    };

//dispatch enables actions to be dispatched to the reducers
const [ state, dispatch ] = useReducer(hikeReducer, initialState);

const PATH_BASE = 'http://localhost:8080';
const PATH_GRAPHQL = '/rambleOn';

const request = (query) => {
    const finalQuery = {query: query}
    console.log(`Final query looks like: ${JSON.stringify(finalQuery)}`);
    return axios({
        method: 'post',
        url: `${PATH_BASE}${PATH_GRAPHQL}`,
        headers: { 'Content-Type': 'application/json' },
        data: finalQuery
    }).then(response =>{ return response.data;})
      .catch(error => {return error;});
}


//The list of walks will be fetched from the back end here

// Get hikes
const getHikes = async () => {
    try{
        const query = `query{walks{id,name,startLocation,endLocation,startDate,endDate,distance,difficulty}}`;
        const result = await request(query);
        dispatch({type: GET_HIKES, payload: result.data.walks});
        
    } catch(err){
        dispatch({type: HIKE_ERROR, payload: err.res.message})
    }
   
}

// Add hike
const addHike = async hike => {
    let {name, startLocation, endLocation, startDate, endDate, distance, difficulty, summary } = hike;
    const mutation = `
       mutation{
           addWalk(newWalk:{
             name:"${name}",
             startLocation:"${startLocation}",
             endLocation:"${endLocation}",
             startDate: "${startDate}",
             endDate:"${endDate}",
             distance:${distance},
             difficulty:${difficulty},
             summary:"${summary}"
            }
           ){id} 
         }
       `
    try {
        // TODO - what gets returned here?
        const result = await request(mutation);
        dispatch({type: ADD_HIKE, payload: result.data.walk});
    } catch(err){
        dispatch({type: HIKE_ERROR, payload: err.res.message});
    }

}

//Delete hike
const deleteHike = async id => {

}

// Update hike
const updateHike = async hike => {

}

const setLoading = () => {
    dispatch({type: SET_LOADING})
}

const setCurrent = hike => {
    dispatch({type: SET_CURRENT, payload: hike});
}

const clearCurrent = () => {
    dispatch({type: CLEAR_CURRENT});
}



return (
    <HikeContext.Provider
        value={{
            hikes: state.hikes,
            loading: state.loading,
            error: state.error,
            getHikes,
            addHike,
            deleteHike,
            updateHike,
            setCurrent,
            clearCurrent
        }}
        >
        {props.children}
        </HikeContext.Provider>
)

}

export default HikeState;