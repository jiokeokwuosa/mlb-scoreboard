import API from "./../../assets/js/api"

import { 
    INPUT_CHANGE,
    GET_SCORES_SUCCESS,
    GET_SCORES_FAILURE,
    CLEAR_FORM,
    SET_FAVOURITE,
    GET_DETAILS_SUCCESS,
    GET_DETAILS_FAILURE
   } 
    from './types';    
    
export const inputChange = (name, value) => async dispatch => {
    try {       	
        dispatch({
            type: INPUT_CHANGE,
            payload:{
                name:name,
                value:value
            }
        }) 
    } catch (error) {
        console.error(error);
    }    

}
export const getScores = (year, month, day) => async dispatch => {    
    try {   
        document.body.classList.add('loading-indicator');	   
        const result = await API.loadScores(year,month,day); 

        dispatch({
            type: CLEAR_FORM
        }) 
       
        dispatch({
            type: GET_SCORES_SUCCESS, 
            payload: {
              result: result.data.data.games              
            }         
        }) 
         

        document.body.classList.remove('loading-indicator');      
   
    } catch (err) {       
        document.body.classList.remove('loading-indicator');        
        dispatch({
            type: GET_SCORES_FAILURE           
        })	
    }
}
export const getDetails = (url) => async dispatch => {    
    try {   
        document.body.classList.add('loading-indicator');	   
        const result = await API.loadDetails(url); 

        dispatch({
            type: CLEAR_FORM
        }) 
       
        dispatch({
            type: GET_DETAILS_SUCCESS, 
            payload: {
              result: result.data.data.games              
            }         
        }) 
        document.body.classList.remove('loading-indicator');      
   
    } catch (err) {       
        document.body.classList.remove('loading-indicator');        
        dispatch({
            type: GET_DETAILS_FAILURE         
        })	
    }
}



