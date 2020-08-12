import React from "react";

export const Profile = () => {
  return (
    <div className="profile">
      <img
        className="icon"
        src={require("../images/Bender.jpg")}
        alt="profile-icon"
      />
      <div className="title title_ml">Ivan Petrovich</div>
    </div>
  );
};
