import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Nav = () => {
    const carts = useSelector((state) => state.cart)
    const { user } = useSelector((state) => state.auth)

    return (
        <header className="head">
            <ul className="nav">
                <li className="nav-list" >
                    <Link to="/product">Product</Link>
                </li>
                {
                    user &&
                    <li className="nav-list" >
                        <Link to="/cart">Cart<span className="cart-num">{carts.reduce((sum, item) => sum + item.quantity, 0)}</span></Link>
                    </li>
                }
                {
                    user ? (
                        <li className="nav-list" >
                            <button>Sign out</button>
                        </li>
                    ) : (
                        <li className="nav-list" >
                            <Link to="/signin">Sign in</Link>
                        </li>
                    )
                }

            </ul>
        </header>

    )
}

export default Nav