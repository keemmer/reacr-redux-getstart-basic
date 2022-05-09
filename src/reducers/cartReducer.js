import { ADD_TO_CART, DELETE_CART } from '../actions/cartActions'

const initialState = []

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            // let updateCart = [...state.cart, action.payload]
            let updateCart = [...state, action.payload]
            const foundItem = state.find(item => item.id === action.payload.id)
            if (!foundItem) {
                updateCart = [...state, action.payload]
            } else {
                updateCart = state.map(item => ({
                    ...item,
                    quantity: item.id === foundItem.id ? item.quantity + 1 : item.quantity
                }))
            }
            return updateCart
        case DELETE_CART:
            return state.filter(item => item.id !== action.payload)
        default:
            return state
    }
}