import React from 'react'
import { Row, Col, Radio, Form, InputNumber } from 'antd'
import { TooltipHelp, TempoResult } from '../components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { handleChange } from '../redux/formulario/formulario.actions'
import { selectOnsurance } from '../redux/formulario/formulario.selector'

import './style/style.css'

const style = {
    padding: '20px 0px'
}

const EntendaOnsurnance = ({ onsurance, handleChange }) => {
    console.log(onsurance)
    return (
        <>
            <Row gutter={32}>
                <Col xs={24}>
                    <p>
                        O Onsurance é tarifado por minuto. E você liga-desliga seu Onsurance quando quiser e
                        paga só nos momentos em que o seguro está ligado!
                    </p>
                    <h2 style={style}>
                        Imagine o seguinte cenário:
                    </h2>
                    <p>
                        Você possui garagem em casa, um local protegido, pode deixar seu Onsurance desligado.
                        Economia pelo tempo em que o veículo está parado lá. Da mesma forma na garagem do trabalho,
                        shopping ou outra. Enquanto o veículo está estacionado o Onsurance pode ficar desligado. 
                    </p>
                    <h2 style={style}>
                        Você só liga o Onsurance quando precisar de verdade. Praticidade e economia na palma da sua mão!
                    </h2>
                </Col>
                <Col sm={24} md={12}>
                    <Form.Item
                        label={<>
                            Possui garagem em casa
                            <TooltipHelp title='Se seu carro fica na garagem de casa, selecione a opção Sim. Caso contrário, escolha Não.' />
                        </>}
                        colon={false}
                        required
                    >
                        <Radio.Group
                            onChange={e => handleChange(e.target.value, 'GARAGEM_CASA')}
                            value={onsurance.garagem_casa}
                        >
                            <Radio value={true}>Sim</Radio>
                            <Radio value={false}>Não</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col sm={24} md={12}>
                    <Form.Item
                        label={<>
                            Possui garagem no trabalho 
                            <TooltipHelp title='Se seu carro fica na garagem de casa, selecione a opção Sim. Caso contrário, escolha Não.' />
                        </>}
                        colon={false}
                        required
                    >
                        <Radio.Group
                            onChange={e => handleChange(e.target.value, 'GARAGEM_TRABALHO')}
                            value={onsurance.garagem_trabalho}
                        >
                            <Radio value={true}>Sim</Radio>
                            <Radio value={false}>Não</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item
                        colon={false}
                        label='Levando em consideração os cenários apresentados acima, quantas horas por dia estima que o Onsurance ficaria ligado?'
                        extra='Digite quantas horas diárias você estima que deixaria o Onsurance ligado. Pense num uso médio da semana.
                        Considere menos de 1 hora se você não usa o carro todo dia.'
                    >
                        <InputNumber 
                            style={{width: '100%'}}
                            min={1}
                            max={24}
                            onChange={(e) => handleChange(e, 'ON_HORAS_POR_DIA')}
                            value={onsurance.horas_por_dia}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                        <TempoResult title='Horas/ Semana' horas={onsurance.horas_por_dia} dias={7} />
                </Col>
                <Col xs={24} md={8}>
                        <TempoResult title='Horas/ Mês' horas={onsurance.horas_por_dia} dias={30} />
                </Col>
                <Col xs={24} md={8}>
                        <TempoResult title='Horas/ Ano' horas={onsurance.horas_por_dia} dias={3650} />
                </Col>
                <Col xs={24}>
                    <h2 style={style}>
                        Onsurance Onboard
                    </h2>
                    <p>
                        Todos os clientes do Onsurance-auto precisam ter o dispositivo Onsurance Onboard instalado em seus veículos.
                        O custo de instalação já incluído no serviço. Seu carro conectado com ainda mais segurança!
                    </p>
                    <h2 style={style}>
                        O valor de R$ 39,90 será abatido mensalmente dos seus créditos.
                    </h2>
                    <p>
                        Obs. O dispositivo chegará na sua casa e você receberá as orientações para levar na oficina parceira
                        para instalação. Não se preocupe, seu Onsurance passa a valer imediatamente após o envio da sua documentação online.
                    </p>
                </Col>
            </Row>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    handleChange: (item, tipo) => dispatch(handleChange(item, tipo))
})

const mapStateToProps = createStructuredSelector({
    onsurance: selectOnsurance
})

export default connect(mapStateToProps, mapDispatchToProps)(EntendaOnsurnance)