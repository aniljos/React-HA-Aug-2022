import React, {Component} from 'react'
import axios from 'axios';

class ListProducts extends Component{

    state = {
        products: []
    };

    async componentDidMount(){

        const url = "http://localhost:9000/products";
        // axios
        //     .get(url)
        //     .then((response) => {
        //         console.log("success", response);
        //     }, (error) => {
        //         console.log("error", error);
        //     });

        // ES7 async/await => works with promise

        try {
            
           const response =  await axios.get(url);
           console.log("success", response);
           this.setState({
                products: response.data 
           });

        } catch (error) {
            console.log("error", error);
        }


    }

    render(){
        return (
            <div>
                <h3>List Products</h3>
            </div>
        )
    }

}

export default ListProducts;