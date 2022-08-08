import React from "react";

const Profile = () => {
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/102300466?v=4"
        alt="avatar"
        width="120"
      />
      <h2> Sabiya Tabassum</h2>
      <p>Frontend Developer</p>
      <div>
        <button className="codesandbox">
          <a href="https://codesandbox.io/u/shanolhere">codeSandBox</a>
        </button>
        <button className="github">
          <a href="https://github.com/shanolhere">GitHub</a>
        </button>
      </div>
    </div>
  );
};

export default Profile;
