import React, { useState, useEffect } from "react";
import Login from "./components/Login";
//helper
import { getURLHashToken } from "./spotify";
//api
import SpotifyWebApi from "spotify-web-api-js";
//data layer
import { useDataLayerValue } from "./components/DataLayer";
//actions
import * as actions from "./actions";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    let _token = getURLHashToken().access_token;
    window.location.hash = "";
    if (_token) {
      dispatch({
        type: actions.SET_TOKEN,
        payload: {
          token: _token,
        },
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: actions.SET_USER,
          payload: {
            user,
          },
        });
      });
    }
  }, []);

  return <div className="app">{token ? <h2>Logged In</h2> : <Login />}</div>;
}

export default App;
