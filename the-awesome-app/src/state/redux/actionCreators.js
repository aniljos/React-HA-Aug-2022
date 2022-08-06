import axios from 'axios';

export const createAddToCartAction = (product, quantity)=>{

    return {
        type: "ADD_TO_CART",
        item: {product, quantity}
    }
};

export const removeItemFromCartAction = (productId)=>{

    return {
        type: "REMOVE_FROM_CART",
        id: productId
    }
};

export const createGetProductsAction = () => {

    // return {
    //     type: "GET_PRODUCTS",
    //     products: []
    // }

    return async (dispatch) => {

        //Make the API call
        const url = process.env.REACT_APP_BASE_URL + "/products";
        try {

            const response = await axios.get(url);
            dispatch({
                type: "GET_PRODUCTS",
                products: response.data
            });

        } catch (error) {
            
        }

    }
}

