import {
  CURR_PATH,
  ADD_FETCH_POST,
  DELETE_FETCH_POST,
  REDACT_FETCH_POST,
  FETCH_POSTS,
  CHANGE_FIRSTNAME,
  CHANGE_SECONDNAME,
  REGISTRATION,
  ALERT,
} from "./types";

const initialState = {
  posts: [],
  currPath: "/",
  registration: false,
  firstname: "Firstname",
  secondname: "Secondname",
  alert: false,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FETCH_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    case DELETE_FETCH_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };

    case REDACT_FETCH_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case CURR_PATH:
      return {
        ...state,
        currPath: action.payload,
      };
    case CHANGE_FIRSTNAME:
      return {
        ...state,
        firstname: action.payload,
      };
    case CHANGE_SECONDNAME:
      return {
        ...state,
        secondname: action.payload,
      };
    case REGISTRATION:
      return {
        ...state,
        registration: action.payload,
      };
    case ALERT:
      return {
        ...state,
        alert: action.payload,
      };

    default:
      return state;
  }
};
