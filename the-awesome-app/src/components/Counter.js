import {Component} from 'react';

class Counter extends Component {

    state = {
        count: 0
    } 

    constructor(props){
        super(props);

        console.log("Counter props", this.props);
        this.state.count = this.props.initCount;
    }
    
    inc = (evt) => {
        console.log("inc invoked", evt);
        console.log("inc", this);
        // this.state.count++;
        // console.log("Count: ", this.state.count);

        //this.setState(slice of the updated state)
        this.setState({
            count: this.state.count + 1
        });
    }

    render(){
        //return the JSX
        return (
            <div>
                <h3>Counter: {this.state.count}</h3>
                <p>This is a class component</p>
                <div>
                    <button onClick={this.inc}>Inc</button>&nbsp;
                    <button>Decr</button>
                </div>
            </div>
        )
    }
}

export default Counter;