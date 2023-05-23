import timestamp from "unix-timestamp";

const API_KEY = process.env.REACT_APP_API_KEY;

const getCoordinates = (location, isZipCode=false, country_code='US') => {
    let latitude, longitude, location_name, url;
    if(isZipCode){
      url = new URL("https://api.openweathermap.org/geo/1.0/zip");
      url.searchParams.append('zip', location +','+country_code )
    }
    else{
      url = new URL("https://api.openweathermap.org/geo/1.0/direct");
      url.searchParams.append("q", location +','+country_code);
    }
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("limit", 5);
    console.log(url.href);
    return fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        return isZipCode? obj:obj[0];
      })
      .then((obj) => {
          latitude = obj.lat;
          longitude = obj.lon;
          location_name = obj.name;
          console.log(location_name);
          return [[latitude, longitude], location_name];
      });
  };

  const getWeather = async (location) => {
    const [lat, long] = location;
    if (lat === null && long === null) {
      return "error";
    }

    const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("lat", lat);
    url.searchParams.append("lon", long);
    url.searchParams.append("units", "imperial");
    url.searchParams.append("exclude", "minutely,alerts");

    return fetch(url)
      .then((resp) => {
        return resp.json();
      })
  };
  const formatDate = (dt, options) => {
    return Intl.DateTimeFormat("en-US", options).format(timestamp.toDate(dt));
  };

  const formatTemp = (temp, isCelsius = false, withEnder=true) => {
    if(isCelsius){
      return Math.round((temp - 32) * 5 / 9) + (withEnder?"°C":"");
    }
    else{
      return Math.round(temp) + (withEnder?"°F":"");
    }
  };

  export {getCoordinates, getWeather, formatDate, formatTemp};