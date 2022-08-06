import { useRef, useState, useCallback } from "react"
import Input from "./Input";

function Register(){

    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const [email, setEmail] = useState("");

    function register(){

        debugger;

        const isNameValid = nameInputRef.current.validate();
        const isEmailValid = emailInputRef.current.validate();

        if(isNameValid && isEmailValid){
            const name = nameInputRef.current.input.value;
            console.log("name", name);
            console.log("email", email);
        }
        
    }

    var x = 10;
    const changeName = useCallback((evt)=> {
        
        console.log("Name updated", evt.target.value);

    }, []);

    const changeEmail = useCallback((evt) => {

        setEmail(evt.target.value);

    }, [email]);

    return (

        <form>
            <div>
                <h3>Register</h3>

                {/* <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" type="text" placeholder="Name" ref={nameInputRef}/>
                </div> */}

                <Input type="text" placeholder="Name" label="Name" 
                            ref={nameInputRef} onChange={changeName} required/>

                {/* <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="email" 
                        placeholder="Email" value={email} onChange={evt => setEmail(evt.target.value)}/>
                </div> */}

                <Input label="Email" type="email" 
                        placeholder="Email" value={email} onChange={changeEmail} ref={emailInputRef}/>
                <br/>
                <div>
                    <button type="button" className="btn btn-info" onClick={register}>Register</button>
                </div>
                
            </div>
        </form>
    )
}

export default Register