import React, { Fragment } from "react";
import { Form } from "./Form";
import { connect } from "react-redux";
import { deleteInformalPost, redactInformalPost } from "../redux/actions";
import { Redacting } from "./Redacting";
import { Others } from "./Others";

function InformalPosts_({ informalPosts, setDelete, setRedact }) {
  return (
    <div className="conversations">
      <div className="dialog">
        <Others />
        {informalPosts.map((post) => (
          <Fragment key={post[1]}>
            <div className="profile profile_ml">
              <img
                className="icon"
                src={require("../images/Bender.jpg")}
                alt="profile-icon"
              />
              <div className="title title_ml title_marlef">Ivan Petrovich</div>
            </div>
            <div className="dialog__post">{post[0]}</div>
            <div className="dialog__control-buttons">
              <button
                className="del"
                onClick={() => setDelete(post[0], post[1])}
              >
                Удалить
              </button>
              <Redacting post={post} setRedact={setRedact} />
            </div>
            {/* )} */}
          </Fragment>
        ))}
      </div>
      <Form />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    informalPosts: state.informalPosts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDelete: (...value) => {
      dispatch(deleteInformalPost(...value));
    },
    setRedact: (...value) => {
      dispatch(redactInformalPost(...value));
    },
  };
};

export const InformalPosts = connect(
  mapStateToProps,
  mapDispatchToProps
)(InformalPosts_);
