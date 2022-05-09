import { ADD_TO_CART, DELETE_CART } from '../actions/cartActions'
const initialState = {
    cart: []
}
export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            // let updateCart = [...state.cart, action.payload]
            let updateCart = [...state.cart, action.payload]
            const foundItem = state.cart.find(item => item.id === action.payload.id)
            if (!foundItem) {
                updateCart = [...state.cart, action.payload]
            } else {
                updateCart = state.cart.map(item => ({
                    ...item,
                    quantity: item.id === foundItem.id ? item.quantity + 1 : item.quantity
                }))
            }
            return {
                ...state,
                cart: updateCart
            }
        case DELETE_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}