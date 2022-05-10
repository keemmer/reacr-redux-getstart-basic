import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCart } from '../slices/cartSlice'

const CartPage = () => {
  const dispatch = useDispatch()
  const carts = useSelector((state) => state.cart)

  return (
    <div className="cart">
      <div className="cart-body">
        <h4>Title</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4>Amount</h4>
        <h4>Delete</h4>
      </div>
      {
        carts.length > 0 ? (
          carts.map(cart =>
            <div key={cart.id} className="cart-body">
              <p>{cart.title}</p>
              <p>{cart.price}</p>
              <p>{cart.quantity}</p>
              <p>{cart.price * cart.quantity}</p>
              <p style={{ cursor: "pointer" }} onClick={() => dispatch(deleteCart(cart.id))}>X</p>
            </div>
          )
        ) : (
          <p>Cart is empty</p>
        )
      }
    </div>
  )
}

export default CartPage