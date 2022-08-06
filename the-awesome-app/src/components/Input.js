import React, { useImperativeHandle, useRef } from "react";

//React.memo ==> 16.3: the component rerenders only if the state of props changes

// <Input type="text" placeholder="Name" label="Name"/>
const Input = React.forwardRef((props, ref)=> {


    console.log("Rendering Input");

    const inputRef = useRef(null);
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
        <div className="form-group">
            <label>{label}</label>
            <input className="form-control" {...otherProps} ref={inputRef}/>
           
        </div>
    )

});

export default Input;