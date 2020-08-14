import React, { useState } from "react";
import { connect } from "react-redux";
import { setCurrPath, addFetchPost } from "../redux/actions";
import { withRouter } from "react-router-dom";

function Form__(props) {
  const { addFetchPost } = props;
  const registration = props.registration;
  const setCurrPath = props.setCurrPath;
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  let currpath = props.match.path;
  setCurrPath(currpath);
  const submitHandler = (event) => {
    event.preventDefault();
    if (!registration) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
      return;
    }
    if (value.trim()) {
      addFetchPost({ post: value, id: new Date().toJSON(), path: currpath });
      setValue("");
    }
  };
  return (
    <form onSubmit={submitHandler} className="form">
      {show && (
        <div className="alert">
          Незарегистрированный пользователь не может оставлять посты
        </div>
      )}
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
  setCurrPath,
  addFetchPost,
};
const mapStateToPrors = (state) => {
  return {
    registration: state.registration,
  };
};
const Form_ = withRouter(Form__);
export const Form = connect(mapStateToPrors, mapDispatchToProps)(Form_);
