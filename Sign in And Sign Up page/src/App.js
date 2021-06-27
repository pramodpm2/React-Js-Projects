import React, { useState } from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Alert from "@material-ui/lab/Alert";
import Home from './components/Home'
function App() {
  const [field, setField] = useState(true);
  const [login, setLogin] = useState(true);
  const [alert, setAlert] = useState(true);
  const [regAlert,setRegAlert]=useState(false)
  return (
    <div>
      {login ? (
        <div className="App">
          {field ? (
            <Login
              field={field}
              setField={setField}
              login={login}
              setLogin={setLogin}
              regAlert={regAlert}
              setRegAlert={setRegAlert}
            ></Login>
          ) : (
            <SignUp field={field} setField={setField} setRegAlert={setRegAlert}></SignUp>
          )}
        </div>
      ) : (
          <div>
            
            {
              alert &&
              <Alert  onClose={() => {setAlert(false)}}>
              Log in successful !
            </Alert>
            }
         
          <Home setLogin={setLogin}></Home>
        </div>
      )}

      {/* <Home></Home> */}
    </div>
  );
}

export default App;
