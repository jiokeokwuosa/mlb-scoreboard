import { 
    INPUT_CHANGE,
    GET_SCORES_SUCCESS,
    GET_SCORES_FAILURE,
    CLEAR_FORM,
    SET_FAVOURITE,
    GET_DETAILS_SUCCESS   
   } from '../actions/types';

const initialState  = { 
    scores:[], 
    details:[],
    day:28,
    month:7,
    year:2015,
    next_day_date:null,
    name:'',
    mainNav:'!home',
    mainNav1: 'partOne',
    key1: 0,
    game_data_directory:''
};

const authReducer = (state= initialState, action) =>{
    switch(action.type){        
        case INPUT_CHANGE:
            return{
                ...state,
                [action.payload.name]:action.payload.value                              
            }
        case CLEAR_FORM:
            return{
                ...state,
                scores: []                          
            }
        case GET_SCORES_SUCCESS:
            let myObj = {};
            if(action.payload.result.game){
                myObj = {
                    scores:action.payload.result.game 
                }         
            }
            return{
                ...state,
                ...myObj, 
                day:action.payload.result.day,
                month:action.payload.result.month,
                year:action.payload.result.year                
            }
        case GET_SCORES_FAILURE:
            return{
                ...state,  
                scores:{}
            }
        case SET_FAVOURITE:
            state.scores[0]=state.scores[action.payload];
            state.scores.unshift(state.scores[action.payload]) 
            return{
                ...state                    
            }
        
        case GET_DETAILS_SUCCESS:
                let myObj1 = {};
                if(action.payload.result.boxscore){
                    myObj1 = {
                        scores:action.payload.result.boxscore
                    }         
                }
                return{
                    ...state,
                    ...myObj1                                  
                }
                   
        default:
            return state;
        
    }
}
export default authReducer;