import { useEffect, useState } from "react";
import axios from 'axios';

function GadgetStore(){

    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetchProducts();

    }, [])

    async function fetchProducts(){

        try {

            const url = process.env.REACT_APP_BASE_URL + "/products";
            const response = await axios.get(url); 
            setProducts(response.data);

        } catch (error) {
            console.log("error", error);
        }

    }

    return (
        <div>
            <h3>Gadgets</h3>
        </div>
    )
}

export default GadgetStore;