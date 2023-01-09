import axios from "axios";
import {ADMIN_LOGIN_FAILURE,ADMIN_LOGIN_REQUEST,ADMIN_LOGIN_SUCCESS, } from "./ActionType"

export const login=(payload) => (dispatch)=>{
dispatch({type:ADMIN_LOGIN_REQUEST});

return axios
  .post("http://localhost:8080/Admin", payload)
  .then((r) =>
  
    dispatch({
      type:ADMIN_LOGIN_SUCCESS,
      payload: r.data,
      // user: payload.username,
    })
  )
  .catch((err) => dispatch({ type:ADMIN_LOGIN_FAILURE }));
}




