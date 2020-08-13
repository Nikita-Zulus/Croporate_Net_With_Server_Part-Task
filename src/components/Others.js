import React, { Fragment } from "react";

export const Others = () => {
  return (
    <Fragment>
      <div className="profile_others">
        <div className="profile profile_ml">
          <img
            className="icon"
            src={require("../images/Без названия.jpg")}
            alt="profile-icon"
          />
          <div className="title title_ml title_marlef">Olga Vladimirovna</div>
        </div>
        <div className="dialog__post">Всем привет</div>
      </div>
      <div className="profile_others">
        <div className="profile profile_ml">
          <img
            className="icon"
            src={require("../images/Homer_Simpson.jpg")}
            alt="profile-icon"
          />
          <div className="title title_ml title_marlef">Andrey Makarov</div>
        </div>
        <div className="dialog__post">Привет привет</div>
      </div>
    </Fragment>
  );
};
