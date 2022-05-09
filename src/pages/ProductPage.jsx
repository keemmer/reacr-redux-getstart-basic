import React from 'react'
import Item from '../components/Item'
import {products} from '../data/products'

const ProductPage = () => {
  return (
    <div className="product-box">
        {products.map(prod => <Item key={prod.id} product={prod}/>)}
    </div>
  )
}

export default ProductPage