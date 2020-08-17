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
import axios from "axios";

const url = "https://corporate-net-task-30111.firebaseio.com";

export function setAlert(value) {
  return {
    type: ALERT,
    payload: value,
  };
}
export function setCurrPath(value) {
  return {
    type: CURR_PATH,
    payload: value,
  };
}
export function changeFirstname(value) {
  return {
    type: CHANGE_FIRSTNAME,
    payload: value,
  };
}
export function changeSecondname(value) {
  return {
    type: CHANGE_SECONDNAME,
    payload: value,
  };
}
export function registrate(value) {
  return {
    type: REGISTRATION,
    payload: value,
  };
}
export function addFetchPost(value) {
  return async (dispatch) => {
    try {
      const response = await axios.post(url + "/notes.json", value);
      console.log("addPost", response.data);
      const payload = {
        ...value,
        id: response.data.name,
      };
      console.log(payload);
      dispatch({ type: ADD_FETCH_POST, payload });
    } catch (e) {
      throw new Error(e.message);
    }
  };
}
export function deleteFetchPost(id) {
  return async (dispatch) => {
    try {
      await axios.delete(`${url}/notes/${id.id}.json`);
      dispatch({
        type: DELETE_FETCH_POST,
        payload: id,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  };
}

export function redactFetchPost(value) {
  return async (dispatch) => {
    try {
      await axios.patch(`${url}/notes/${value.id}.json`, value);
      dispatch({
        type: REDACT_FETCH_POST,
        payload: value,
      });
      console.log("Redact", value);
    } catch (e) {
      throw new Error(e.message);
    }
  };
}
export function fetchPosts() {
  return async (dispatch) => {
    const response = await axios.get(url + "/notes.json");
    console.log(response);
    const payload =
      response.data !== null
        ? Object.keys(response.data).map((key) => {
            return {
              ...response.data[key],
              id: key,
            };
          })
        : [
            { post: "", id: "1", path: "/work" },
            { post: "", id: "1", path: "/informal" },
          ];
    console.log(payload);
    dispatch({ type: FETCH_POSTS, payload });
    console.log("fetchPosts", response.data);
  };
}
