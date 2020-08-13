import React, { useState } from "react";
import { connect } from "react-redux";
import {
  createInformalPost,
  createWorkPost,
  setCurrPath,
} from "../redux/actions";
import { withRouter } from "react-router-dom";

function Form__(props) {
  const createInformalPost = props.createInformalPost;
  const createWorkPost = props.createWorkPost;
  const setCurrPath = props.setCurrPath;
  const [value, setValue] = useState("");
  let currpath = props.match.path;
  setCurrPath(currpath);
  const submitHandler = (event) => {
    event.preventDefault();
    if (value.trim()) {
      if (currpath === "/work") {
        createWorkPost({ post: value, id: new Date().toJSON() });
      } else {
        createInformalPost({ post: value, id: new Date().toJSON() });
      }

      setValue("");
    }
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="form__group">
        <input
          type="text"
          className="form__control"
          placeholder="Введите Ваш пост и нажмите Enter"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
}
const mapDispatchToProps = {
  createWorkPost,
  createInformalPost,
  setCurrPath,
};

const Form_ = withRouter(Form__);
export const Form = connect(null, mapDispatchToProps)(Form_);
