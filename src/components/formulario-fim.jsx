import React from 'react'
import { Result, Button, message } from 'antd'
import { connect } from 'react-redux'
import { irProximoStep, irStepAnterior, handleChange } from '../redux/formulario/formulario.actions'
import { selectUsuario, selectFormularioVeiculo, selectOnsurance } from '../redux/formulario/formulario.selector'
import { createStructuredSelector } from 'reselect'

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
}

const FormularioFim = ({ irProximoStep, veiculo, onsurance, usuario, handleChange, irStepAnterior }) => {
    console.log(usuario)
    return (
        <Result
            status='success'
            title='Todas as informações foram coletadas!'
            subTitle='Para visualizar o resultado precione o botão de confirmar.'
            extra={
                <Button onClick={async () => {
                    let telefone = usuario.telefone.replace(/\D/g, '')
                    const params = {
                        totalValue: Number.parseInt(veiculo.total),
                        qtd: Number.parseInt(veiculo.qtd),
                        vehicleType: veiculo.tipo_de_veiculo,
                        firstName: usuario.nome,
                        lastName: usuario.sobreNome,
                        userEmail: usuario.email,
                        vehiclePlate: veiculo.vehiclePlate,
                        dailyUsage: onsurance.horas_por_dia,
                        phone: telefone
                    }
                    const url = `https://us-central1-onsurance-new.cloudfunctions.net/quote/tires?totalValue=${params.totalValue}&qtd=${params.qtd}&vehicleType=${params.vehicleType}&firstName=${params.firstName}&lastName=${params.lastName}&userEmail=${params.userEmail}&vehiclePlate=${params.vehiclePlate}&dailyUsage=${params.dailyUsage}&phone=${params.phone}`
                    await fetch(url, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        handleChange(result, 'RESULTADO_FINAL')
                        irProximoStep('PROXIMO_STEP')
                    })
                    .catch(e => message.error('Houve uma falha na comunicação com o servidor, tente mais tarde.', 3, () => irStepAnterior()))
                }}>
                    Confirmar
                </Button>
            }
        />
    )
}

const mapDispatchToProps = dispath => ({
    irProximoStep: item => dispath(irProximoStep(item)),
    irStepAnterior: item => dispath(irStepAnterior(item)),
    handleChange: (item, tipo) => dispath(handleChange(item, tipo))
})

const mapStateToProps = createStructuredSelector({
    veiculo: selectFormularioVeiculo,
    onsurance: selectOnsurance,
    usuario: selectUsuario,

})

export default connect(mapStateToProps, mapDispatchToProps)(FormularioFim)