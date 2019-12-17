import React from 'react'
import { Row, Col, Radio, Form, Input } from 'antd'
import { TooltipHelp, TempoResult } from '../components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { handleChange } from '../redux/formulario/formulario.actions'
import { selectOnsurance } from '../redux/formulario/formulario.selector'

import './style/style.css'

const ErroGaragem = () => <p style={{color: '#e57373', fontSize: '14px'}}>É obrigatório escolher uma opção!</p>
const ErroHoras = () => <p style={{color: '#e57373', fontSize: '14px'}}>Esse campo é obrigatório!</p>

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
                    extra={ onsurance.errors ? onsurance.errors.garagem_casa ? <ErroGaragem /> : null : null }
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
                    extra={ onsurance.errors ? onsurance.errors.garagem_trabalho ? <ErroGaragem /> : null : null }
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
                    extra={ onsurance.errors ? onsurance.errors.horas_por_dia ? <ErroHoras /> : null : null }
                >
                    <Input
                        placeholder='Digite quantas horas diárias você estima que utiliza o seu veículo. Considere menos de 1 hora se você não usa o carro todo dia.'
                        onChange={(e) => {
                            let value = e.target.value
                            value = Number.parseInt(value.replace(/\D/g, ''))
                            if(isNaN(value)){
                                value = ''
                            }else if (value < 0){
                                value = 1
                            } else if (value > 24){
                                value = 24
                            }
                            handleChange(value, 'ON_HORAS_POR_DIA')
                        }}
                        onBlur={(e) => e.target.value === '0' ? handleChange(1, 'ON_HORAS_POR_DIA') : null}
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