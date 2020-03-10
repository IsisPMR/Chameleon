import * as React from 'react';
import {  GlobalContext } from './GlobalContextProvider';
import TextField from '@material-ui/core/TextField';

const Login = () => {
    const {username, password} = React.useContext(GlobalContext);
    const [userInput, setUser] = React.useState("");
    const [passwordInput, setPassword] = React.useState("");

    return <>
    <div>
        <div>
            <TextField label="username" onChange={userField => setUser(userField.target.value)}/>
        </div>
        <div>
            <TextField label="Password" type="password" onChange={passwordField => setPassword(passwordField.target.value)}/>
        </div>

    <button onClick={() => {if(username === userInput && password === passwordInput){
                            console.log("Succsesfull LogIn");
                            }else{
                            console.log("LogIn Failed");
    }}}>Log in</button>
    </div>
    </>
    };

export default Login;