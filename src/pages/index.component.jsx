import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectStep } from '../redux/formulario/formulario.selector'
import { Card, Steps, Button } from 'antd'
import { irProximoStep, irStepAnterior } from '../redux/formulario/formulario.actions'
import { Veiculo, Cotacao, EntendaOnsurnance, SobreVoce, FormularioFim, ResultadoFormulario } from '../components'

import './style/style.css'

const { Step } = Steps

const steps = [
    {
        title: 'Cotação',
        header: 'Cotação Onsurance',
        content: <Cotacao />
    },
    {
        title: 'Pneu',
        header: 'Dados do pneu',
        content: <Veiculo />
    },
    {
        title: 'Onsurance',
        header: 'Entender seu uso Onsurance',
        content: <EntendaOnsurnance />
    },
    {
        title: 'Sobre você',
        header: 'Conte-nos sobre você!',
        content: <SobreVoce />
    },
    {
        title: 'Finalizando',
        header: 'Finalizando',
        content: <FormularioFim />
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
            {
                step === 5 ? 
                    (<ResultadoFormulario />)
                :
                <>
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
                            actions={ step !== 4 ? [
                                <Button onClick={irStepAnterior} disabled={step === 0} type="link">Anterior</Button>,
                                <Button onClick={() => {
                                    switch(step){
                                        case 0:
                                            irProximoStep('PROXIMO_STEP')
                                            break
                                        case 1:
                                            irProximoStep('PROXIMO_STEP_1')
                                            break
                                        case 2:
                                            irProximoStep('PROXIMO_STEP_2')
                                            break
                                        default:
                                            irProximoStep('PROXIMO_STEP_3')
                                            break
                                    }
                                }} disabled={step === 4} type="link">Próximo</Button>
                            ] : null }
                            extra={step === 4 ? <Button onClick={irStepAnterior}type="link">Voltar</Button> : null}
                        >
                            {
                                steps[step].content
                            }
                        </Card>
                    </div>
                </>
            }
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