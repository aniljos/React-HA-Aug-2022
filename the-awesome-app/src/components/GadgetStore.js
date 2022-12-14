import { useEffect, useState } from "react";
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { createAddToCartAction, createGetProductsAction } from "../state/redux/actionCreators";

function GadgetStore(){

    const products = useSelector(state => state.gadgets.products);
    //const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {

        //fetchProducts();
        dispatch(createGetProductsAction());

    }, [])

    async function fetchProducts(){

        try {

            const url = process.env.REACT_APP_BASE_URL + "/products";
            const response = await axios.get(url); 
            //setProducts(response.data);

        } catch (error) {
            console.log("error", error);
        }

    }

    function addToCart(product){

        // dispatch({
        //     type: "ADD_TO_CART",
        //     item: {product, quantity: 1}
        // })
        dispatch(createAddToCartAction(product, 1));
    }

    function renderProducts() {

        const productsView =  products.map((item, index) => {
            return (
                <div className="col" key={index} data-testid="gadget">
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button href="#" className="btn btn-primary" onClick={() => {addToCart(item)}}>Add To Cart</button>
                        </div>
                    </div>
    
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }
    



    return (
        <div>
            <h3>Gadgets</h3>
            {renderProducts()}
        </div>
    )
}

export default GadgetStore;