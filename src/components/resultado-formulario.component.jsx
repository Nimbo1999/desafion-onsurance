import React from 'react'
import { Card } from 'antd'

const styleCentralizado = {
    textAlign: 'center',
    padding: '10px 0px'
}

const ResultadoFormulario = () => {
    return (
        <div className="centralizar">
            <Card className='card-main' style={{width: '70%'}}>
                <h2 style={styleCentralizado}>Cotação para 'nome'</h2>
                <p style={styleCentralizado}>Veja os detalhes que o Onsurance preparou para o seu pneu aro 'aro'.</p>
                <h2 style={styleCentralizado}>Crédito pré-pago que Nunca expira!</h2>
                <p style={styleCentralizado}>O Onsurance da marca</p>
            </Card>
        </div>
    )
}

export default ResultadoFormulario;