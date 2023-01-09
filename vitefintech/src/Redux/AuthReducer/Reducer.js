import { ADMIN_LOGIN_FAILURE, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS } from "./ActionType"

const initialState={
    ADMIN:{},
    isAuth:false,
    isLoading:false,
    isError:false
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ADMIN_LOGIN_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case ADMIN_LOGIN_SUCCESS:{
            return {
                ...state,
                isAuth:true,
                isLoading:false,
                isError:false,
                ADMIN:payload
            }
        }
        case ADMIN_LOGIN_FAILURE:{
            return {
                ...state,
                isAuth:false,
                isLoading:false,
                isError:true,
                
            }
        }
        
        default:{
            return {...state}
        }
    }
}