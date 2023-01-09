import {
  ACCEPT_GET_DATA_FAILURE,
  ACCEPT_GET_DATA_REQUEST,
  ACCEPT_GET_DATA_SUCCESS,
  ACCEPT_POST_DATA_FAILURE,
  ACCEPT_POST_DATA_REQUEST,
  ACCEPT_POST_DATA_SUCCESS,
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  POST_DATA_FAILURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  REJECTED_GET_DATA_FAILURE,
  REJECTED_GET_DATA_REQUEST,
  REJECTED_GET_DATA_SUCCESS,
  REJECTED_POST_DATA_FAILURE,
  REJECTED_POST_DATA_REQUEST,
  REJECTED_POST_DATA_SUCCESS,
} from "./actionType";

const intialState = {
  REJECTED:[],
  ACCEPT:[],
  USER: [],
  isLoading: false,
  isError: false,
};
export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        USER: payload,
        isLoading: false,
        isError: false,
      };
    }
    case GET_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case POST_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case POST_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case POST_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }


    case ACCEPT_POST_DATA_REQUEST : {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ACCEPT_POST_DATA_SUCCESS: {
      let updatedacceptedData=state.ACCEPT.push(payload);
      let updateduserData=state.USER.filter((e)=>e.id !== payload.id);
      return {
        ...state,
        isLoading: false,
        isError: false,
        ACCEPT:updatedacceptedData,
        USER:updateduserData
      };
    }
    case ACCEPT_POST_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ACCEPT_GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ACCEPT_GET_DATA_SUCCESS: {
      return {
        ...state,
        ACCEPT: payload,
        isLoading: false,
        isError: false,
      };
    }
    case ACCEPT_GET_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }


    case  REJECTED_POST_DATA_REQUEST : {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case  REJECTED_POST_DATA_SUCCESS: {
      let updateRejectData=state.REJECTED.push(payload);
      let updateduserData=state.USER.filter((e)=>e.id !== payload.id);
      return {
        ...state,
        isLoading: false,
        isError: false,
        REJECTED:updateRejectData,
        USER:updateduserData
      };
    }
    case  REJECTED_POST_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case  REJECTED_GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case  REJECTED_GET_DATA_SUCCESS: {
     
      return {
        ...state,
        REJECTED: payload,
        isLoading: false,
        isError: false,
       
      };
    }
    case REJECTED_GET_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }


    default:
      return { ...state };
  }
};
