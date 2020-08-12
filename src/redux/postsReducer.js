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
  workPosts: [
    ["Сколько проектов нужно сделать?", 1],
    ["Какой проект самый приоритетный?", 2],
    ["План работ", 3],
  ],
  informalPosts: [
    ["Привет?", 1],
    ["Как дела?", 2],
    ["Как погода?", 3],
    ["Как настроение после карантина?", 4],
  ],
  currPath: "",
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
          (post) => post[1] !== action.payload[1]
        ),
      };
    case DELETE_INFORMAL_POST:
      return {
        ...state,
        informalPosts: state.informalPosts.filter(
          (post) => post[1] !== action.payload[1]
        ),
      };
    case REDACT_WORK_POST:
      return {
        ...state,
        workPosts: state.workPosts.map((post) =>
          post[1] === action.payload[1]
            ? [action.payload[0], post[1]]
            : [post[0], post[1]]
        ),
      };
    case REDACT_INFORMAL_POST:
      return {
        ...state,
        informalPosts: state.informalPosts.map((post) =>
          post[1] === action.payload[1]
            ? [action.payload[0], post[1]]
            : [post[0], post[1]]
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
