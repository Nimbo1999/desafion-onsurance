import React from 'react'
import { Card, Row, Col } from 'antd'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectResults, selectUsuario, selectFormularioVeiculo, selectOnsurance } from '../redux/formulario/formulario.selector'
import { IconeCotacao } from '../components'
import { faShoppingBasket, faCoins, faClock, faPiggyBank } from '@fortawesome/free-solid-svg-icons'

const styleCentralizado = {
    textAlign: 'center',
    padding: '15px 0px'
}

const ResultadoFormulario = ({ results, usuario, veiculo, onsurance }) => {
    console.log(results)
    return (
        <div className="centralizar">
            <Row gutter={32}>
                <Col sm={24}>
                    <h1 style={{...styleCentralizado, fontWeight: 'bold'}}>Cotação para {usuario.nome} {usuario.sobreNome}</h1>
                </Col>
                <Col sm={24}>
                    <p style={{...styleCentralizado, fontSize: '16px'}}>Veja os detalhes que o Onsurance preparou para o seu pneu aro {veiculo.aro}.</p>
                </Col>
                <Col xs={24}>
                    <Card>
                        <Col sm={12} md={6}>
                            <IconeCotacao footerText='Crédito inicial parcelável em até 12x' icon={faShoppingBasket}>
                                <h1 style={{color: '#2ecc71', textAlign: 'center'}}>
                                    R$ 50
                                </h1>
                            </IconeCotacao>
                        </Col>
                        <Col sm={12} md={6}>
                            <IconeCotacao footerText='Consumo por minuto de uso.' icon={faCoins}>
                                <h1 style={{color: '#2ecc71', textAlign: 'center'}}>
                                    R$ {results.minuteValue}
                                </h1>
                            </IconeCotacao>
                        </Col>
                        <Col sm={12} md={6}>
                            <IconeCotacao footerText='Duração estimada dos créditos.' icon={faClock}>
                                <h1 style={{color: '#2ecc71', textAlign: 'center'}}>
                                    {results.creditDuration} meses
                                </h1>
                            </IconeCotacao>
                        </Col>
                        <Col sm={12} md={6}>
                            <IconeCotacao footerText='Consumo anual dos créditos.' icon={faPiggyBank}>
                                <h1 style={{color: '#2ecc71', textAlign: 'center'}}>
                                    R$ {results.anualCost}
                                </h1>
                            </IconeCotacao>
                        </Col>
                    </Card>
                </Col>
                <Col sm={24}>
                    <h2 style={{...styleCentralizado, fontWeight: 'bold'}}>Crédito pré-pago que Nunca expira!</h2>
                </Col>
                <Col sm={12}>
                    <p style={{...styleCentralizado, fontSize: '16px'}}>
                        O Onsurance do pneu do seu {veiculo.tipo_de_veiculo === 'car' ? 'carro' :veiculo.tipo_de_veiculo} aro {veiculo.aro} da marca {veiculo.marca},
                        de valor R${veiculo.total} custa R${results.minuteValue} por minuto!
                        Considerando seu uso diário de {onsurance.horas_por_dia} horas o crédito inicial durará {results.creditDuration} meses.
                    </p>
                </Col>
                <Col sm={12}>
                    <p style={{...styleCentralizado, fontSize: '16px'}}>
                        Quando acabar, é só fazer uma recarga mínima de R$ 299. Cobertura integral de até 100% contra roubo, furto e acidentes!
                    </p>
                </Col>
                <Col span={12} offset={6} style={{textAlign: 'center'}}>
                    <a href='https://onsurance.me/produto/' target='blanck'>Contratar Agora!</a>
                </Col>
                {/* <Col sm={24}>
                    <p style={{...styleCentralizado, fontSize: '16px'}}>
                        Cobertura integral de até 100% contra roubo, furto e acidentes!
                    </p>
                </Col> */}
            </Row>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    results: selectResults,
    usuario: selectUsuario,
    veiculo: selectFormularioVeiculo,
    onsurance: selectOnsurance
})

export default connect(mapStateToProps)(ResultadoFormulario);