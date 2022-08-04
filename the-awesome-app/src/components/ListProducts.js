import React, {Component, PureComponent} from 'react'
import axios from 'axios';
import './ListProducts.css';
import EditProduct from './EditProduct';

class ListProducts extends PureComponent{

    //state to be immutable
    state = {
        products: [],
        selectedProduct: null
    };

    url = "http://localhost:9000/products";

    constructor(props){
        super(props);

        console.log("[ListProducts constructor]");
    }

    componentWillMount(){
        console.log("[ListProducts componentWillMount]");
    }

    async componentDidMount(){

        console.log("[ListProducts componentDidMount]");
        //const url = "http://localhost:9000/products";
        // axios
        //     .get(url)
        //     .then((response) => {
        //         console.log("success", response);
        //     }, (error) => {
        //         console.log("error", error);
        //     });

        // ES7 async/await => works with promise

        try {
            
           const response =  await axios.get(this.url);
           console.log("success", response);
           this.setState({
                products: response.data 
           });

        } catch (error) {
            console.log("error", error);
        }


    }

    deleteProduct = async (product, index) => {
        //alert("deleting product with id: " + product.id);
        const url = this.url + "/" + product.id;

        try {
            
            await axios.delete(url);
            alert("deleted product with id: " + product.id);

            //create a copy of products
            const products = [...this.state.products];
            //modify the copy
            products.splice(index, 1);
            //update the copy to the state
            this.setState({
                products
            });



        } catch (error) {
            alert("failed to delete product with id: " + product.id);
        }

    }

    editProduct = (product) =>{

        this.setState({
            selectedProduct: product
        });
    }

    editUpdate= async (updatedProduct)=> {
        

        try {

            const url = this.url + "/" + updatedProduct.id;
            await axios.put(url, updatedProduct);
            const response = await axios.get(this.url);
            this.setState({
                products: response.data,
                selectedProduct: null
            });
            alert("updated product " + updatedProduct.id);

        } catch (error) {
            alert("failed to update product " + updatedProduct.id);
        }
    }

    editCancel = () => {
        
        alert("cancelling the update");
        this.setState({
            selectedProduct: null
        });
    }

    renderProducts(){

        const {products} = this.state;

        const result = products.map((product, index) => {

            return (
                <div className='product' key={product.id}>

                    <p>Id: {product.id}</p>
                    <p>Name: {product.name}</p>
                    <p>Description: {product.description}</p>
                    <p>Price: {product.price}</p>

                    <div>
                        <button onClick={() =>{this.editProduct(product)}}>Edit</button> &nbsp;
                        <button onClick={() => { this.deleteProduct(product, index)}}>Delete</button>
                    </div>
                </div>
            );

        });
        console.log("results", result);
        return result;
    }

    render(){

        console.log("[ListProducts render]");
        const {products, selectedProduct} = this.state;

        return (
            <div>
                <h3>List Products</h3>
                <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                    {this.renderProducts()}
                </div>

                <div>
                   {selectedProduct !== null ? 
                            <EditProduct key={selectedProduct.id} 
                                currentProduct={selectedProduct}
                                onSave={this.editUpdate}
                                onCancel={this.editCancel}/> : null}
                </div>

            </div>
        )
    }


    componentWillReceiveProps(nextProps){
        console.log("[ListProducts componentWillReceiveProps]", nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState){

    //     console.log("[ListProducts shouldComponentUpdate]", nextProps, nextState);

    //     //continue with update 
    //     return true;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log("[ListProducts componentWillUpdate]", nextProps, nextState);
    }
    componentDidUpdate(){
        console.log("[ListProducts componentDidUpdate]");
    }
    componentWillUnmount(){
        console.log("[ListProducts componentWillUnmount]");
    }

}

export default ListProducts;