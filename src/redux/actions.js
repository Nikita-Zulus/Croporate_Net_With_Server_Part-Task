import {
  CREATE_WORK_POST,
  CREATE_INFORMAL_POST,
  DELETE_WORK_POST,
  DELETE_INFORMAL_POST,
  REDACT_INFORMAL_POST,
  REDACT_WORK_POST,
  CURR_PATH,
} from "./types";

export function createWorkPost(value) {
  return {
    type: CREATE_WORK_POST,
    payload: value,
  };
}
export function createInformalPost(value) {
  return {
    type: CREATE_INFORMAL_POST,
    payload: value,
  };
}
export function deleteWorkPost(value) {
  return {
    type: DELETE_WORK_POST,
    payload: value,
  };
}
export function deleteInformalPost(value) {
  return {
    type: DELETE_INFORMAL_POST,
    payload: value,
  };
}
export function redactWorkPost(value) {
  return {
    type: REDACT_WORK_POST,
    payload: value,
  };
}
export function redactInformalPost(value) {
  return {
    type: REDACT_INFORMAL_POST,
    payload: value,
  };
}
export function setCurrPath(value) {
  return {
    type: CURR_PATH,
    payload: value,
  };
}
