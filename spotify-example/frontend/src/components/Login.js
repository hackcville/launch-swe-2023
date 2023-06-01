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
