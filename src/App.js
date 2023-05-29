import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (mesage, type) => {
    setAlert({
      msg: mesage,
      type,
    });
    setTimeout(() => {setAlert(null)}, 1500)
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been enabled', 'success');
      document.title = "My react app - light mode"
    } else if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert('Dark mode has been enabled', 'success');
      document.title = "My react app - dark mode"
    }
  };
  return (
    <>
      {/* <Navbar title="TeXtUtils" aboutText="About website" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text below" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
