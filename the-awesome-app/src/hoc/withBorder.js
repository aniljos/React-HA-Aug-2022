

// The HOC is a function which receives the component to extends/wrap/compose
function withBorder(Component){

    // returns a new component(functional/class)
    return (props) => {

        return (
            <div style={{border: "2px solid blue", padding: "7px"}}>

                <Component {...props} />
            
            </div>
        );
    }
}

export default withBorder;