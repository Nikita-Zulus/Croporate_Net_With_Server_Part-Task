import {
  CREATE_WORK_POST,
  CREATE_INFORMAL_POST,
  DELETE_WORK_POST,
  DELETE_INFORMAL_POST,
  REDACT_WORK_POST,
  REDACT_INFORMAL_POST,
  CURR_PATH,
} from "./types";

const initialState = {
  workPosts: [{ post: "Сколько проектов нужно сделать?", id: 1 }],
  informalPosts: [
    { post: "Привет", id: 1 },
    { post: "Как дела?", id: 2 },
  ],
  currPath: "/",
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WORK_POST:
      return { ...state, workPosts: [...state.workPosts, action.payload] };
    case CREATE_INFORMAL_POST:
      return {
        ...state,
        informalPosts: [...state.informalPosts, action.payload],
      };
    case DELETE_WORK_POST:
      return {
        ...state,
        workPosts: state.workPosts.filter(
          (post) => post.id !== action.payload.id
        ),
      };
    case DELETE_INFORMAL_POST:
      return {
        ...state,
        informalPosts: state.informalPosts.filter(
          (post) => post.id !== action.payload.id
        ),
      };
    case REDACT_WORK_POST:
      return {
        ...state,
        workPosts: state.workPosts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case REDACT_INFORMAL_POST:
      return {
        ...state,
        informalPosts: state.informalPosts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case CURR_PATH:
      return {
        ...state,
        currPath: action.payload,
      };

    default:
      return state;
  }
};
