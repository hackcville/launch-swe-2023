import React, { useState, useEffect } from "react";

function SpotifyApp() {
  // I would recommend that you use a useContext if you want to be able to access the toxen in different components
  // without having to pass it down each time
  const [accessToken, setAccessToken] = useState();
  const path = window.location.search;
  const searchParams = new URLSearchParams(path);
  useEffect(() => {
    if (searchParams.has("code")) {
      const code = searchParams.get("code");
      console.log("code", code);
      fetch("/auth/callback?code=" + code)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.token) setAccessToken(data.token);
        });
    }
  }, []);
  return (
    <>
      <h1>Spotify Example App</h1>
      {accessToken ? <TopTracks accessToken={accessToken} /> : <Login />}
    </>
  );
}

function TopTracks({ accessToken }) {
  console.log(accessToken);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/users/top-items?token=" + accessToken).then(
        (res) => res.json()
      );
      console.log(data);
      setTracks(data.items);
    };
    fetchData();
  }, [accessToken]);
  return (
    <>
      <h2>Top Tracks</h2>
      <ol>
        {tracks.map((track) => (
          <li>{track.name}</li>
        ))}
      </ol>
    </>
  );
}

function Login() {
  return <button onClick={(e) => onClick(e)}>Log In</button>;
}
const onClick = (e) => {
  // URL path to localhost:9000 set in "proxy" in package.json
  fetch("/auth")
    .then((res) => res.json())
    .then((data) => {
      window.open(data.url);
    });
};
export default SpotifyApp;
