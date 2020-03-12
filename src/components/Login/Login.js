import * as React from 'react';
import {  GlobalContext } from './GlobalContextProvider';
import TextField from '@material-ui/core/TextField';
import "./Login.css";
import { useHistory } from 'react-router-dom';

const Login = () => {
    const {username, password} = React.useContext(GlobalContext);
    const [userInput, setUser] = React.useState("");
    const [passwordInput, setPassword] = React.useState("");

    const reDirection = useHistory();

    return <>
    <div>
        <div>
            <TextField label="Username" onChange={userField => setUser(userField.target.value)}/>
        </div>
        <div>
            <TextField label="Password" type="password" onChange={passwordField => setPassword(passwordField.target.value)}/>
        </div>

    <button onClick={() => {if(username === userInput && password === passwordInput){
                            console.log("LogIn Successfull");
                            reDirection.push("/Chameleon")
                            }else{
                               console.log("LogIn failed");
    }}}>Log in</button>

    </div>
    </>
    };

export default Login;