import React, { useState } from "react";
import Navbar from "./component/Navbar";
import TextFrom from "./component/TextFrom";
import Alert from "./component/Alert";
// import About from "./component/About";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [mode, DarkMode] = useState("light");
  const [oldState, newState] = useState(null);

  const stchange = (message, type) => {
    newState({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      newState(null);
    }, 1500);
  };

  const toggle = () => {
    if (mode === "light") {
      DarkMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      stchange("dark mode enabled", "success");
    } else {
      DarkMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#343a40";
      stchange("light mode enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar value="React" mode={mode} toggle={toggle} />
        <Alert mode={mode} alert={oldState} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route */}
              {/* exact */}
              {/* path="/" */}
              {/* element={ */}
                <TextFrom mode={mode} stchange={stchange} />
                {/* }
            ></Route>
            <Route exact path="/about" element={<About />}></Route> */}
          {/* </Routes> */}
          {/* <About/> */}
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;
