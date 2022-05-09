import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <header className="head">

            <ul className="nav">
                <li className="nav-list" >
                    <Link to="/product">Product</Link>
                </li>
                <li className="nav-list" >
                    <Link to="/cart">Cart<span className="cart-num">0</span></Link>
                </li>
                <li className="nav-list" >
                    <Link to="/signin">Sign in</Link>
                </li>
            </ul>

        </header>

    )
}

export default Nav