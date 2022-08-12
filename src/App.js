import { useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import TextForm from "./components/TextForm ";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [modes, setMode] = useState(localStorage.getItem("mode"));
  if(modes === "dark"){
    document.body.style.backgroundColor = "rgb(20, 20, 20)";

  }
  else{
    document.body.style.backgroundColor = "#f0f0f0";
  }
  const toggleMode = () => {
    if (modes === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(20, 20, 20)";
      localStorage.clear();
      localStorage.setItem("mode", "dark");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f0f0f0";
      localStorage.clear();
      localStorage.setItem("mode", "light");
    }
  };
  return (
    <>
      <Router>
        <NavBar
          title="TextUtils"
          about="About"
          mode={modes}
          toggleMode={toggleMode}
        />
        <Routes>
          <Route
            exact
            path="/home"
            element={
              <TextForm heading="Enter a text to analyze" mode={modes} />
            }
          />

          <Route
            index
            element={
              <TextForm heading="Enter a text to analyze" mode={modes} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
