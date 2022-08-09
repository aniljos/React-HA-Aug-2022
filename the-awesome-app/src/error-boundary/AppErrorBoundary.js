import { Component } from "react";

class AppErrorBoundary extends Component{

    state = {
        hasError: false
    }

    componentDidCatch(error, info){

        if(error){
            this.setState({
                hasError: true
            }, () => {

                console.log("AppErrorBoundary error: ", error)
                console.log("AppErrorBoundary info: ", info)
            });
        }
    }

    render(){

        if(this.state.hasError){
            return <div className="alert alert-danger">Something went wrong. Please refresh</div>
        }
        else{
            return this.props.children;
        }
        
    }
}

export default AppErrorBoundary;