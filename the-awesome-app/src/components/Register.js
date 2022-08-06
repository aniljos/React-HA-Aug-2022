import { useRef, useState, useCallback } from "react"
import Input from "./Input";

function Register(){

    const nameInputRef = useRef(null);
    const [email, setEmail] = useState("");

    function register(){

        //debugger;
        const name = nameInputRef.current.input.value;
        console.log("name", name);
        console.log("email", email);
    }

    var x = 10;
    const changeName = useCallback((evt)=> {
        
        console.log("Name updated", evt.target.value);

    }, []);


    return (
        <div>
            <h3>Register</h3>

            {/* <div className="form-group">
                <label>Name</label>
                <input className="form-control" type="text" placeholder="Name" ref={nameInputRef}/>
            </div> */}

            <Input type="text" placeholder="Name" label="Name" ref={nameInputRef} onChange={changeName}/>

            <div className="form-group">
                <label>Email</label>
                <input className="form-control" type="email" 
                    placeholder="Email" value={email} onChange={evt => setEmail(evt.target.value)}/>
            </div>
            <br/>
            <div>
                <button className="btn btn-info" onClick={register}>Register</button>
            </div>
            
        </div>
    )
}

export default Register