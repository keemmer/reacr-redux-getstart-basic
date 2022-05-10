import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setAuth } from '../actions/authActions'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const carts = useSelector((state) => state.cart)
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function handleSignout() {
        dispatch(setAuth(null));
        navigate("/product")
    }
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
                            <button onClick={() => handleSignout()}>Sign out</button>
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