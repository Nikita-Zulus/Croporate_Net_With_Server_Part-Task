import {
  CURR_PATH,
  ADD_FETCH_POST,
  DELETE_FETCH_POST,
  REDACT_FETCH_POST,
  FETCH_POSTS,
  CHANGE_FIRSTNAME,
  CHANGE_SECONDNAME,
  REGISTRATION,
} from "./types";

const initialState = {
  workPosts: [],
  informalPosts: [],
  currPath: "/",
  registration: false,
  firstname: "Firstname",
  secondname: "Secondname",
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FETCH_POST:
      return action.payload.path === "/work"
        ? { ...state, workPosts: [...state.workPosts, action.payload] }
        : { ...state, informalPosts: [...state.informalPosts, action.payload] };

    case DELETE_FETCH_POST:
      return {
        ...state,
        workPosts: state.workPosts.filter(
          (post) => post.id !== action.payload.id
        ),
        informalPosts: state.informalPosts.filter(
          (post) => post.id !== action.payload.id
        ),
      };

    case REDACT_FETCH_POST:
      return {
        ...state,
        workPosts: state.workPosts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
        informalPosts: state.informalPosts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case FETCH_POSTS:
      return {
        ...state,
        workPosts: [...action.payload].filter((post) => post.path === "/work"),
        informalPosts: [...action.payload].filter(
          (post) => post.path === "/informal"
        ),
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

    default:
      return state;
  }
};
