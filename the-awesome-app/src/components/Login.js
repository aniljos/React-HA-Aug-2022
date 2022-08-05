import { useRef, useState } from "react";

function Login(){

    const [message, setMessage]= useState("");
    const nameInputRef = useRef(null);
    const pwdInputRef = useRef(null);

    function login(){

        const name = nameInputRef.current.value;
        const password = pwdInputRef.current.value;

        if(name && password){

            setMessage("");
            try {
                
                const url = "http://localhost:9000/login";

            } catch (error) {
                
            }
        }
        else{
            setMessage("Please enter the credentials");
        }
    }
    return (
        <div>
            <h3>Login</h3>
            
            {message ? <div className="alert alert-warning">{message}</div> : null}

            <div className="form-group">
                <label>Name</label>
                <input className="form-control" placeholder="UserName" ref={nameInputRef}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" ref={pwdInputRef}/>
            </div>

            <br/>
            <button className="btn btn-success" onClick={login}>Login</button>
        </div>
    )
}

export default Login;