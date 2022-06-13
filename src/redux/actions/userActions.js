import {
    ACCEPT_REQUEST, REJECT_REQUEST,SHOW_ALERT,HIDE_ALERT
} from '../types'


export const addMessage = () => (dispatch) =>{
    dispatch({
        type: ACCEPT_REQUEST
    })
}

export const removeMessage = ()=> (dispatch) =>{
    dispatch({
        type: REJECT_REQUEST
    })
}
export const showAlert = (msg)=> (dispatch) =>{
    dispatch({
        type: SHOW_ALERT,
        payload: msg
    })
}
export const hideAlert = ()=> (dispatch) =>{
    dispatch({
        type: HIDE_ALERT
    })
}