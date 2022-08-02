
function Hello(props){

    console.log("Hello props", props);

    //props.color = "green";
    //return JSX
    return (
        <div>
            <h3 style={{color: props.color}}>Message: {props.message}</h3>
            <p>This is a simple functional component</p>
            <p>Generated at {new Date().toLocaleString()}</p>
        </div>
    )
}

export default Hello;