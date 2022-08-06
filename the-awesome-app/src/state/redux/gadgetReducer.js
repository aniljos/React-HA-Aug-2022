const initState = {
    cart: [],
    products: [],
    
}

export const gadgetReducer = (currentState=initState, action)=> {

    // {type: "ADD_TO_CART", item : {product, qunatity}}
    if(action.type === "ADD_TO_CART"){

        const cart = [...currentState.cart];
        cart.push(action.item);
        return {
            
           ...currentState,
           cart
        }

    }

    // {type: "REMOVE_FROM_CART", id: 4}
    if(action.type === "REMOVE_FROM_CART"){

        debugger;
        const cart = [...currentState.cart];
        const index = cart.findIndex(item => {
            console.log("item", item.product.id)
            return   item.product.id === action.id
        });

        if(index != -1){

            cart.splice(index, 1);
            return {
                ...currentState,
                cart
            };
        }

    }

    //{type: "GET_PRODUCTS", products: [......]}
    if(action.type === "GET_PRODUCTS"){

        return {
            ...currentState, 
            products: action.products
        }

    }

    return currentState;
}