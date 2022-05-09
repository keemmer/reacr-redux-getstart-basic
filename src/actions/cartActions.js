export const ADD_TO_CART = "ADD_TO_CART"
export const DELETE_CART = "DELETE_CART"
// const action = {
//     type: 'ADD_TO_CART',
//     payload: {
//         id: '',
//         title: '',
//         price: 0,
//         quantity: 0,
//     }
// }

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function deleteCart(id){
    return {
        type: DELETE_CART,
        payload: id
    }
}