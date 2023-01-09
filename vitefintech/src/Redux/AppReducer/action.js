import axios from "axios";
import { ACCEPT_GET_DATA_FAILURE, ACCEPT_GET_DATA_REQUEST, ACCEPT_GET_DATA_SUCCESS, ACCEPT_POST_DATA_FAILURE, ACCEPT_POST_DATA_REQUEST, ACCEPT_POST_DATA_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS, REJECTED_GET_DATA_FAILURE, REJECTED_GET_DATA_REQUEST, REJECTED_GET_DATA_SUCCESS, REJECTED_POST_DATA_FAILURE, REJECTED_POST_DATA_REQUEST, REJECTED_POST_DATA_SUCCESS} from "./actionType"

// for user area
export const getData = (getPatientparams) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get("http://localhost:8080/user", getPatientparams)
    .then((r) => dispatch({ type: GET_DATA_SUCCESS, payload: r.data }))
    .catch((err) => dispatch({ type: GET_DATA_FAILURE }));
};
    
export const userPostData=(form)=>(dispatch)=> {

  dispatch({ type: POST_DATA_REQUEST });
  axios.post("http://localhost:8080/user",{...form}).then((res)=>{
    dispatch({ type: POST_DATA_SUCCESS})
  })
  .catch((err) => dispatch({ type: POST_DATA_FAILURE }));
}

// accepted part

export const acceptPostData=(id,form)=>(dispatch)=> {

  dispatch({ type: ACCEPT_POST_DATA_REQUEST });
  axios.post("http://localhost:8080/accept",form).then((res)=>{
    dispatch({ type: ACCEPT_POST_DATA_SUCCESS,payload:res.data})
    axios.delete(`http://localhost:8080/user/${id}`).then((res)=>{
    })
  })
  .catch((err) => dispatch({ type: ACCEPT_POST_DATA_FAILURE }));
}


export const acceptgetData = (getPatientparams) => (dispatch) => {
  console.log("aget");
  dispatch({ type: ACCEPT_GET_DATA_REQUEST });
  axios
    .get("http://localhost:8080/accept", getPatientparams)
    .then((r) => dispatch({ type: ACCEPT_GET_DATA_SUCCESS, payload: r.data }))
    .catch((err) => dispatch({ type: ACCEPT_GET_DATA_FAILURE }));
};


// Rejected part

export const rejectPostData=(form)=>(dispatch)=> {

  dispatch({ type: REJECTED_POST_DATA_REQUEST });
  axios.post("http://localhost:8080/Reject",form).then((res)=>{
    dispatch({ type: REJECTED_POST_DATA_SUCCESS})
  })
  .catch((err) => dispatch({ type: REJECTED_POST_DATA_FAILURE }));
}


export const rejectgetData = (getPatientparams) => (dispatch) => {
  //console.log("aget");
  dispatch({ type: REJECTED_GET_DATA_REQUEST });
  axios
    .get("http://localhost:8080/Reject", getPatientparams)
    .then((r) => dispatch({ type: REJECTED_GET_DATA_SUCCESS, payload: r.data }))
    .catch((err) => dispatch({ type: REJECTED_GET_DATA_FAILURE }));
};


// update purpose
export const updateData=(id,data)=>(dispatch)=> {
   axios.post(`http://localhost:8080/Reject`,data).then((res)=>{
    dispatch({type:REJECTED_POST_DATA_SUCCESS,payload:res.data})
    axios.delete(`http://localhost:8080/user/${id}`).then((res)=>{
    
  })
  .catch((err) => console.log(err));
   })
  
}