import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { addToCart } from '../actions/cartActions'

const Item = ({ product }) => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const navigate = useNavigate()

  function handleAddToCart() {
    if (!user) {
      navigate('/signin')
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }))
    }
  }

  return (
    <div className='product'>
      <h4> {product.title}</h4>
      <p>{product.price}</p>
      <button onClick={() => handleAddToCart()}>Add To Cart</button>
    </div>
  )
}

export default Item