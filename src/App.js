import { useState } from "react";
import "./App.css";
import EnterText from "./Components/EnterText";
import NavBar from "./Components/NavBar";
// import ViewMode from "./Components/ViewMode";
import Alert from "./Components/Alert";

function App() {

  const [mode, setMode] = useState('light')

  const toggle = () => {

    if (mode === 'dark') {

      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      setMode('light')
      showAlert("Light mode enabled.!", "success")
    }
    else {

      document.body.style.backgroundColor = '#122932'
      document.body.style.color = 'whitesmoke'
      setMode('dark')
      showAlert("Dark mode enabled.!", "success")
    }

  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null)
    },2500)
  }

  return (
    <>
      {/* Nav Bar */}
      <NavBar title='DG' mode={mode} toggle={toggle} />

      {/* Alert */}
      <Alert alert={alert} />

      {/* Sample Project */}
      <EnterText head='Enter Text' mode={mode} showAlert={showAlert}  />

      {/* Dark mode , light Mode */}
      {/* <ViewMode /> */}
    </>
  );
}

export default App;