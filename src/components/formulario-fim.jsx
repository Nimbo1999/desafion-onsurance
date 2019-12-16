import React from 'react'
import { Result, Button } from 'antd'
import { connect } from 'react-redux'
import { irProximoStep } from '../redux/formulario/formulario.actions'

const FormularioFim = ({ irProximoStep }) => {
    return (
        <Result
            status='success'
            title='Todas as informações foram coletadas!'
            subTitle='Para visualizar o resultado precione o botão de confirmar.'
            extra={
                <Button onClick={() => irProximoStep('PROXIMO_STEP')}>
                    Confirmar
                </Button>
            }
        />
    )
}

const mapDispatchToProps = dispath => ({
    irProximoStep: item => dispath(irProximoStep(item))
})

export default connect(null, mapDispatchToProps)(FormularioFim)