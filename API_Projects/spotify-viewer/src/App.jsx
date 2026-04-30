import { useEffect, useState } from "react";
import Login from "./components/Login";
import Playlist from "./components/Playlist";

export default function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find(elem => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToken(token);
  }, []);

  return token ? <Playlist token={token} /> : <Login />;
}