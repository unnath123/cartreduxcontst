import { ADD_TO_CART, CLEAR_ALL, DELETE_FROM_CART } from "./actionTypes"

export const add_to_cart = (item) =>{
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const delete_from_cart = (id) =>{
    return {
        type:DELETE_FROM_CART,
        payload: id
    }
}
export const clear_all = () =>{
    return {
        type:CLEAR_ALL
    }
}