import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectStep } from '../redux/formulario/formulario.selector'
import { Card, Steps, Button } from 'antd'
import { irProximoStep, irStepAnterior } from '../redux/formulario/formulario.actions'
import { Veiculo, Cotacao, EntendaOnsurnance } from '../components'

import './style/style.css'

const { Step } = Steps

const steps = [
    {
        title: 'Cotação',
        header: 'Cotação Onsurance',
        content: <Cotacao />
    },
    {
        title: 'Veículo',
        header: 'Dados do veículo',
        content: <Veiculo />
    },
    {
        title: 'Onsurance',
        header: 'Entender seu uso Onsurance',
        content: <EntendaOnsurnance />
    },
    {
        title: 'Acessórios',
        content: null
    },
    {
        title: 'Sobre você',
        content: null
    }
]

const styles = [
    {
        width: '50%'
    },
    {
        width: '70%'
    },
]

const IndexComponent = ({ step, irProximoStep, irStepAnterior }) =>  {
    return (
        <div className='conteudo'>
            <Steps current={step} style={{marginBottom: '30px'}}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className='centralizar'>
                <Card 
                    title={<h2>{steps[step].header}</h2>}
                    className='card-main'
                    style={ step === 0 ? styles[0] : styles[1]}
                    actions={[
                        <Button onClick={irStepAnterior} disabled={step === 0} type="link">Anterior</Button>,
                        <Button onClick={irProximoStep} disabled={step === 4} type="link">Próximo</Button>
                    ]}
                >
                    {
                        // step === 0 ? <Cotacao />
                        // :
                        // step === 1 ? <Veiculo />
                        // :
                        // step === 2 ? <EntendaOnsurnance />
                        // :
                        // null
                        steps[step].content
                    }
                </Card>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    irProximoStep: item => dispatch(irProximoStep(item)),
    irStepAnterior: item => dispatch(irStepAnterior(item))
})

const mapStateToProps = createStructuredSelector({
    step: selectStep
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexComponent)