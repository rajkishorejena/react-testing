import React, { useState } from "react";

const Login = () => {
  const [userName, setUsername] = useState("");
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
    </div>
  );
};

export default Login;
