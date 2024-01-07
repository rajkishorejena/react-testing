import React, { useState } from "react";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [initialState, SetInitialState] = useState("");
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
        name="username"
        placeholder="please enter your name"
      />
      <label>{initialState}</label>
      <button onClick={() => SetInitialState("Update Button Clicked")}>
        Update
      </button>
    </div>
  );
};

export default Login;
