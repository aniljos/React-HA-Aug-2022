import React, {Component} from 'react';

class Counter extends Component {

    // immutable
    state = {
        count: 0,
        message: "Hello"
    } 

    inputRef = React.createRef();

    

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

        //this.setState(slice of the updated state, callback(invoked after the state is updated))
        //setState is async
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("Count: ", this.state.count);
        });
        
    }

    decr = () => {

        this.setState({
            count : this.state.count - 1
        })
    }

    change = (evt) => {

        const value = evt.target.value;
        this.setState({
            count: Number(value)
        });
    }

    update = () => {

        console.log("inputref", this.inputRef);
        console.log("inputref value", this.inputRef.current.value);
        
        this.setState({
            count : Number(this.inputRef.current.value)
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
                    <button onClick={this.decr}>Decr</button>
                </div>
                <div>
                    
                    {/* Controlled Input */}
                    Count: <input type="number" 
                                placeholder='Count' value={this.state.count} onChange={this.change}/>
                </div>
                <div>
                    {/* Uncontrolled Input */}
                    <input type="number" defaultValue={this.state.count} 
                        placeholder="Update Count" ref={this.inputRef}/>&nbsp;
                    <button onClick={this.update}>Update</button>                    
                </div>
            </div>
        )
    }
}

export default Counter;