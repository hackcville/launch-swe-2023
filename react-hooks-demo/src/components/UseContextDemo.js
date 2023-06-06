import React, { useContext, useState } from "react";

// https://reactjs.org/docs/hooks-reference.html#usecontext
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

function UseContextDemo() {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    console.log("hello");
    theme === theme.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Toolbar />
        <ThemeTogglerButton />
      </ThemeContext.Provider>
    </>
  );
}

function ThemeTogglerButton() {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}> Change Theme</button>;
}
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const { theme } = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      {" "}
      I am styled by theme context!{" "}
    </button>
  );
}

export default UseContextDemo;
