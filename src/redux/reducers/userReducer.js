import {
    ACCEPT_REQUEST, REJECT_REQUEST,SHOW_ALERT,HIDE_ALERT
} from '../types'

const details={name:"saurabh anthwal",age:24,profile:"full stack",address:"dehradun"}
const initialState = {
    message: 0,
    alert :"",
    detail:details

}


export const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case ACCEPT_REQUEST:
            return {
                ...state,
                message: state.message + 1
            }

        case REJECT_REQUEST:
            return {
                ...state,
                message: state.message - 1
            }

        case SHOW_ALERT:
            return{
                ...state,
                alert:action.payload
            }

        case HIDE_ALERT:
            return{
                ...state,
                alert:""
            }

        default:
            return state;
    }
}