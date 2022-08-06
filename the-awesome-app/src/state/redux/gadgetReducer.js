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

        const cart = [...currentState.cart];
        const index = cart.findIndex(item => item.id === action.id);
        if(index != -1){

            cart.splice(index, 1);
            return {
                ...currentState,
                cart
            };
        }

    }

    return currentState;
}