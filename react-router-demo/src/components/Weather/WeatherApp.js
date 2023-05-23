import { useState, useEffect } from "react";
import Header from "./Header.js";
import Dashboard from "./Dashboard.js";
import { getCoordinates } from "../../utils/WeatherUtils";
import Helmet from "react-helmet";

function WeatherApp() {
  const [input, setInput] = useState("Charlottesville");
  const [location, setLocation] = useState("Charlottesville");
  const [position, setPosition] = useState(null);

  // https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks
  // for some reason, seems to get triggered twice

  //   useEffect(() => {
  //     let ignore = false;
  //     async function fetchData() {
  //       const result = await getCoordinates(
  //         input,
  //         !isNaN(input) && input.length === 5
  //       );
  //       if (!ignore) {
  //         setPosition(result[0]);
  //         setLocation(result[1]);
  //       }
  //     }

  //     fetchData();
  //     return () => {
  //       ignore = true;
  //     };
  //   }, [input]);
  return (
    <>
      <Helmet>
        <title>Weather App</title>
      </Helmet>
      <h1>Weather App</h1>
      {/* <Header onLocationSubmit={(loc) => setInput(loc)} /> */}
      {/* {position && <Dashboard location={location} position={position}/>} */}
    </>
  );
}

export default WeatherApp;
