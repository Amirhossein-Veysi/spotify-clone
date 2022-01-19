import React from "react";
//css
import "./Login.css";
//image
import Logo from "../../img/spotify-green-logo.png";
//spotify
import {loginUrl} from "../../spotify";

function Login() {
  return (
    <div className="login">
      <img src={Logo} alt="Spotify Logo" />
      <a href={loginUrl}>Login With Spotify</a>
    </div>
  );
}

export default Login;
