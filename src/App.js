import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      {/* <Navbar title="TeXtUtils" aboutText="About website" /> */}
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading='Enter the text below' />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
