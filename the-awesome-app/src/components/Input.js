import React, { useContext, useImperativeHandle, useRef } from "react";
import { AppThemeContext } from "../state/context/AppThemeContext";

//React.memo ==> 16.3: the component rerenders only if the state of props changes

// <Input type="text" placeholder="Name" label="Name"/>
const Input = React.memo(React.forwardRef((props, ref)=> {


    console.log("Rendering Input");

    const inputRef = useRef(null);
    const theme = useContext(AppThemeContext);
    const mode = theme.mode;

    useImperativeHandle(ref, () => {

        // this object is what the referenece to this componenet will ponit to.
        return {
            info: "This is a resuable Input componenet",
            version: "1.0",
            input: inputRef.current,
            validate: validate
        }

    });


    function validate(){

        return inputRef.current.checkValidity();
        //return isValid;
    }

    const {label, ...otherProps} = props;

    //console.log("props", props);
    //console.log("otherProps", otherProps);

    return (
        <div className={mode === "dark" ? "form-group" : "input-group mb-3"}>
            {mode === "dark" ? <label>{label}</label> : null}
            {mode === "light" ? <span class="input-group-text">{label}</span> : null}
            <input className="form-control" {...otherProps} ref={inputRef}/>
           
        </div>
    )

}));

export default Input;