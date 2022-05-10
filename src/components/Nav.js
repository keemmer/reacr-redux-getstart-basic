import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Nav = () => {
    const carts = useSelector(state => state.cart)
    return (
        <header className="head">

            <ul className="nav">
                <li className="nav-list" >
                    <Link to="/product">Product</Link>
                </li>
                <li className="nav-list" >
                    <Link to="/cart">
                        Cart<span className="cart-num">{carts.reduce((sum, item) => sum + item.quantity, 0)} </span>
                    </Link>
                </li>
                <li className="nav-list" >
                    <Link to="/signin">Sign in</Link>
                </li>
            </ul>

        </header>

    )
}

export default Nav