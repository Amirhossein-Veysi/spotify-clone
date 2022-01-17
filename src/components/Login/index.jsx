import React from "react";
//css
import "./Login.css";
//image
import Logo from "../../img/spotify-green-logo.png";

function Login() {
  return (
    <div className="login">
      <img src={Logo} alt="Spotify Logo" />
      <a>Login With Spotify</a>
    </div>
  );
}

export default Login;
