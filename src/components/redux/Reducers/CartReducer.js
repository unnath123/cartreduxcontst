import React from 'react'
import { ADD_TO_CART, DELETE_FROM_CART } from "../Actions/actionTypes";

let initialState = [];

const CartReducer = (state=initialState, actions) => {
    switch (actions.type) {
        case ADD_TO_CART:
            return [...state, actions.payload]
    
        case DELETE_FROM_CART:
            return state.filter((ele)=>ele.id!=actions.payload)

        default:
            return state
    }
}

export default CartReducer
