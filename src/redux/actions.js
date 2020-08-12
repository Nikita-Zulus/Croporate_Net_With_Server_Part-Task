import {
  CREATE_WORK_POST,
  CREATE_INFORMAL_POST,
  DELETE_WORK_POST,
  DELETE_INFORMAL_POST,
  REDACT_INFORMAL_POST,
  REDACT_WORK_POST,
  CURR_PATH,
} from "./types";

export function createWorkPost(...values) {
  return {
    type: CREATE_WORK_POST,
    payload: [...values],
  };
}
export function createInformalPost(...values) {
  return {
    type: CREATE_INFORMAL_POST,
    payload: [...values],
  };
}
export function deleteWorkPost(...values) {
  return {
    type: DELETE_WORK_POST,
    payload: [...values],
  };
}
export function deleteInformalPost(...values) {
  return {
    type: DELETE_INFORMAL_POST,
    payload: [...values],
  };
}
export function redactWorkPost(...values) {
  return {
    type: REDACT_WORK_POST,
    payload: [...values],
  };
}
export function redactInformalPost(...values) {
  return {
    type: REDACT_INFORMAL_POST,
    payload: [...values],
  };
}
export function setCurrPath(value) {
  return {
    type: CURR_PATH,
    payload: value,
  };
}
