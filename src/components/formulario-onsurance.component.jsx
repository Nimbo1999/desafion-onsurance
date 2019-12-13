import React from 'react'
import { Row, Col, Radio, Form, InputNumber } from 'antd'
import { TooltipHelp, TempoResult } from '../components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { handleChange } from '../redux/formulario/formulario.actions'
import { selectOnsurance } from '../redux/formulario/formulario.selector'

import './style/style.css'

const EntendaOnsurnance = ({ onsurance, handleChange }) => {
    console.log(onsurance)
    return (
        <Row gutter={32}>
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
                    label='Levando em consideração os cenários apresentados acima, quantas horas por dia estima utilizar seu veículo?'
                    extra='Digite quantas horas diárias você estima que utiliza o seu veículo. Pense num uso médio da semana.
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
        </Row>
    )
}

const mapDispatchToProps = dispatch => ({
    handleChange: (item, tipo) => dispatch(handleChange(item, tipo))
})

const mapStateToProps = createStructuredSelector({
    onsurance: selectOnsurance
})

export default connect(mapStateToProps, mapDispatchToProps)(EntendaOnsurnance)