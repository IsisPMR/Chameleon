import * as React from "react";
import { GlobalContext } from "./GlobalContextProvider";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { username, password } = React.useContext(GlobalContext);
  const [userInput, setUser] = React.useState("");
  const [passwordInput, setPassword] = React.useState("");


  const reDirection = useHistory();

  return (
    <>
      <div class="backG">
        <div class="formTitle">Welcome Admin!</div>
        <div class="loginForm">
          <div>
            <TextField
              label="Username"
              onChange={userField => setUser(userField.target.value)}
            />
          </div>
          <br />
          <div>
            <TextField
              label="Password"
              type="password"
              onChange={passwordField =>
                setPassword(passwordField.target.value)
              }
            />
          </div>
          <br />
          <br />

          <button
            onClick={() => {
              if (username === userInput && password === passwordInput) {
                console.log("LogIn Successfull"); 
                reDirection.push("/adminadd");
                window.localStorage.setItem('user', username); 
              } else {
                console.log("LogIn failed");
                reDirection.push("/Chameleon");
              }
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
