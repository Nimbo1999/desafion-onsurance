import React from 'react'
// import { Card } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconeCotacao = ({ footerText, children, icon }) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center'}}>
            <div>
                <FontAwesomeIcon icon={icon} size='5x' />
            </div>
            <div style={{overflow: 'hidden'}}>
                {children}
                <p>{footerText}</p>
            </div>
        </div>
    )
}

export default IconeCotacao;