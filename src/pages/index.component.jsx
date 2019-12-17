import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectStep, selectFormulario, SelectLoading } from '../redux/formulario/formulario.selector'
import { Card, Steps, Button, message } from 'antd'
import { irProximoStep, irStepAnterior, handleChange } from '../redux/formulario/formulario.actions'
import { Veiculo, Cotacao, EntendaOnsurnance, SobreVoce, ResultadoFormulario } from '../components'

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
        header: 'Conte-nos sobre você',
        content: <SobreVoce />
    },
    {
        title: 'Resultado',
        header: 'Resultado da cotação',
        content: <ResultadoFormulario />
    }
]

const styles = [
    {
        width: '50%'
    },
    {
        width: '100%'
    },
]

const IndexComponent = ({ step, irProximoStep, irStepAnterior, state, handleChange, loading }) =>  {
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
                            actions={[
                                <Button onClick={irStepAnterior} disabled={step === 0} type="link">Anterior</Button>,
                                <Button onClick={async () => {
                                    switch(step){
                                        case 0:
                                            await irProximoStep('PROXIMO_STEP')
                                            break
                                        case 1:
                                            await irProximoStep('PROXIMO_STEP_1')
                                            break
                                        case 2:
                                            await irProximoStep('PROXIMO_STEP_2')
                                            break
                                        default:
                                            handleChange(true, 'SET_LOADING')
                                            const requestOptions = {
                                                method: 'GET',
                                                redirect: 'follow'
                                            }
                                            let telefone = state.usuario.telefone.replace(/\D/g, '')
                                            const params = {
                                                totalValue: Number.parseInt(state.veiculo.total),
                                                qtd: Number.parseInt(state.veiculo.qtd),
                                                vehicleType: state.veiculo.tipo_de_veiculo,
                                                firstName: state.usuario.nome,
                                                lastName: state.usuario.sobreNome,
                                                userEmail: state.usuario.email,
                                                vehiclePlate: state.veiculo.vehiclePlate,
                                                dailyUsage: state.onsurance.horas_por_dia,
                                                phone: telefone
                                            }
                                            const url = `https://us-central1-onsurance-new.cloudfunctions.net/quote/tires?totalValue=${params.totalValue}&qtd=${params.qtd}&vehicleType=${params.vehicleType}&firstName=${params.firstName}&lastName=${params.lastName}&userEmail=${params.userEmail}&vehiclePlate=${params.vehiclePlate}&dailyUsage=${params.dailyUsage}&phone=${params.phone}`
                                            await fetch(url, requestOptions)
                                            .then(response => response.json())
                                            .then(result => {
                                                handleChange(false, 'SET_LOADING')
                                                handleChange(result, 'RESULTADO_FINAL')
                                                irProximoStep('PROXIMO_STEP_3')
                                            })
                                            .catch(e => message.error('Houve uma falha na comunicação com o servidor, tente mais tarde.', 3, () => irStepAnterior()))
                                            break
                                    }
                                }} disabled={step === 4} type="link" loading={loading}>Próximo</Button>
                            ]}
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
    irStepAnterior: item => dispatch(irStepAnterior(item)),
    handleChange: (item, tipo) => dispatch(handleChange(item, tipo))
})

const mapStateToProps = createStructuredSelector({
    step: selectStep,
    state: selectFormulario,
    loading: SelectLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexComponent)