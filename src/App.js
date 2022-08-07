import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { Switch, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const tooglemode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "lightblue";
      // backgroundColour: props.mode === "dark" ? "white" : "yellow",
      showalert("light mode enable", "Success");
      // document.title = 'TextUtils-Light Mode'
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("dark mode enable", "Success");
      // document.title = 'TextUtils-Dark Mode'
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About "
          mode={mode}
          tooglemode={tooglemode}
          showalert={showalert}
        />
        <Alert alert={alert} showalert={showalert} />

        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Textform
                title="Enter String to Analyize "
                mode={mode}
                tooglemode={tooglemode}
                showalert={showalert}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
