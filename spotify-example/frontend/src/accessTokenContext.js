import React, { createContext, useState } from "react";
const AccessTokenContext = createContext("");

function AccessTokenProvider({ children }) {
  const [accessToken, setAccessToken] = useState("");
  const obj = { accessToken: accessToken, setAccessToken: setAccessToken };
  return (
    <AccessTokenContext.Provider value={obj}>
      {children}
    </AccessTokenContext.Provider>
  );
}
export default AccessTokenProvider;
export { AccessTokenContext };
