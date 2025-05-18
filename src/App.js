import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Welcome from './components/Welcome';

import React, { useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null)

  const showAlert = (message,type) => {
    setAlert({
    msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been Enabled","success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" home="Home" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      {/* Define the routes */}
      <Routes>

        <Route exact path="/" element={<Welcome mode={mode} />} />
        <Route exact path="/textutils" element={<Welcome mode={mode}/>} />
        <Route exact path="/welcome" element={<Welcome  mode={mode}/>} />
        <Route exact path="/home" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />} />
        <Route exact path="/about" element={<About title="About" />} />
      </Routes>
    </Router>
    // <>
    //   <Navbar title="TextUtils" home="Home" mode={mode} toggleMode={toggleMode} />
    //   <Alert alert={alert}/>
    //   <TextForm heading="Enter text to analyze" mode={mode} />
    //   <About title="About"/>
      
    // </>
  );
}

export default App;
