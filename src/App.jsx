import React, { useState, useEffect } from "react";
import Login from "./components/Login";
//helper
import { getURLHashToken } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    let _token = getURLHashToken().access_token;
    window.location.hash = "";
    if (_token) setToken(_token);
  }, []);

  return <div className="app">{token ? <h2>Logged In</h2> : <Login />}</div>;
}

export default App;
