import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Badge } from 'antd'

import './style/style.css'

const CartIcon = () => {
    const itens = 0
    return (
        <div className='cart-div'>
            <Badge count={itens} title={`${itens} itens no carrinho`} showZero style={{backgroundColor: '#2991d6'}}>
                <FontAwesomeIcon icon={faShoppingCart} size={'2x'} className='cart-icon' />
            </Badge>
        </div>
    )
}

export default CartIcon