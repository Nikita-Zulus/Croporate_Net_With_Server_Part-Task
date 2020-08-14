import React, { Fragment, useEffect } from "react";
import { Form } from "./Form";
import { connect } from "react-redux";
import { deleteFetchPost, redactFetchPost, fetchPosts } from "../redux/actions";
import { Redacting } from "./Redacting";
import { Others } from "./Others";

function WorkPosts_({
  workPosts,
  setDelete,
  setRedact,
  getPosts,
  firstname,
  secondname,
  registration,
}) {
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="conversations">
      <div className="dialog">
        <Others words={["В сроки укладываемся", "Всё по графику"]} />
        {workPosts.map((post) =>
          post.post.length ? (
            <Fragment key={post.id}>
              <div className="profile profile_ml">
                <img
                  className="icon"
                  src={require("../images/Bender.jpg")}
                  alt="profile-icon"
                />
                <div className="title title_ml title_marlef">
                  {`${firstname} ${secondname}`}
                </div>
              </div>
              <div className="dialog__post">{post.post}</div>
              <div className="dialog__control-buttons">
                <button
                  className="del"
                  onClick={
                    !registration
                      ? () => {
                          return;
                        }
                      : () => {
                          return setDelete({ id: post.id });
                        }
                  }
                >
                  Удалить
                </button>
                <Redacting
                  post={post}
                  setRedact={setRedact}
                  getPosts={getPosts}
                  registration={registration}
                />
              </div>
            </Fragment>
          ) : (
            <div key={post.id}></div>
          )
        )}
      </div>
      <Form />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDelete: (value) => {
      dispatch(deleteFetchPost(value));
    },
    setRedact: (value) => {
      dispatch(redactFetchPost(value));
    },
    getPosts: () => {
      dispatch(fetchPosts());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    workPosts: state.workPosts,
    firstname: state.firstname,
    secondname: state.secondname,
    registration: state.registration,
  };
};

export const WorkPosts = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkPosts_);
