import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from './cart-icon.component'

import './style/style.css'

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <img src='https://loja.onsurance.me/wp-content/uploads/2019/11/1544902912.png' alt='Logo' className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/">
                    HOME
                </Link>
                <Link className="option" to="/cotacao">
                    FAZER COTAÇÂO
                </Link>
                <Link className="option" to="/comprar">
                    COMPRAR
                </Link>
                <Link className="option" to={`/user`}>
                    MINHA CONTA
                </Link>
                <CartIcon />
            </div>
        </div>
    )
}

export default Header