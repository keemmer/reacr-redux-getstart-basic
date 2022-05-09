import React from 'react'

const Item = ({product}) => {
  return (
    <div className='product'>
        <h4> {product.title}</h4>
        <p>{product.price}</p>
        <button>Add To Cart</button>
    </div>
  )
}

export default Item