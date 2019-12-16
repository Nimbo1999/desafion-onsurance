import React from 'react'
import { connect } from 'react-redux'
import { selectFormularioVeiculo } from '../redux/formulario/formulario.selector'
import { createStructuredSelector } from 'reselect'
import { Row, Col, Form, Input, Select, Radio } from 'antd'
import { handleChange } from '../redux/formulario/formulario.actions'

import './style/style.css'

const { Option } = Select

const ErroMarca = () => <p style={{color: '#e57373', fontSize: '14px'}}>A marca do veículo deve ser informada!</p>
const ErroFabricacao = () => <p style={{color: '#e57373', fontSize: '14px'}}>Você deve informar a fabricação do pneu!</p>
const ErroTipoV = () => <p style={{color: '#e57373', fontSize: '14px'}}>É necessário informar o tipo do veículo!</p>
const ErroAro = () => <p style={{color: '#e57373', fontSize: '14px'}}>Obrigatório informar o aro do veículo!</p>
const ErroTotal = () => <p style={{color: '#e57373', fontSize: '14px'}}>É obrigatório informar o valor total do pneu!</p>
const ErroQtd = () => <p style={{color: '#e57373', fontSize: '14px'}}>É Obrigatório informar a quantidade de pneus!</p>
const ErroPlaca = () => <p style={{color: '#e57373', fontSize: '14px'}}>É Obrigatório informar a placa do seu veículo!</p>


const Veiculo = ({veiculo, handleChange}) => {
    console.log(veiculo)
    return (
        <>
            <Row gutter={32}>
                <Col md={24}>
                    <Form.Item 
                        label='Marca do Pneu'
                        required
                        extra={ veiculo.errors ? veiculo.errors.marca ? <ErroMarca /> : null : null }
                    >
                        <Input
                            value={veiculo.marca}
                            onChange={e => handleChange(e.target.value, 'MARCA_PNEU')}
                            placeholder='Bridgestone, Pirelli, Goodyear.'
                        />
                    </Form.Item>
                </Col>
                <Col md={12}>
                    <Form.Item
                        label='Fabricação'
                        required
                        extra={ veiculo.errors ? veiculo.errors.fabricacao ? <ErroFabricacao /> : null : null }
                    >
                        <Select
                            style={{ width: '100%' }}
                            placeholder='Selecione a opção de fabricação do seu pneu'
                            onChange={(e) => handleChange(e, 'TIPO_FABRICACAO')}
                            value={veiculo.fabricacao}
                        >
                            <Option value='Nacional'>Nacional</Option>
                            <Option value='Internacional'>Internacional</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col md={12}>
                    <Form.Item
                        label='Tipo de veículo'
                        required
                        extra={ veiculo.errors ? veiculo.errors.tipo_de_veiculo ? <ErroTipoV /> : null : null }
                    >
                        <Select
                            style={{ width: '100%' }}
                            placeholder='Selecione seu tipo de veículo'
                            onChange={(e) => handleChange(e, 'TIPO_DE_VEICULO')}
                            value={veiculo.tipo_de_veiculo}
                        >
                            <Option value='car'>Carro</Option>
                            <Option value='moto'>Moto</Option>
                            <Option value='caminhonete'>Caminhonete</Option>
                        </Select>
                    </Form.Item>
                </Col>
                {
                    veiculo.tipo_de_veiculo === 'car' ?
                        (<Col md={24}>
                            <Form.Item
                                label='Qual o Aro do seu veículo?'
                                required
                                extra={ veiculo.errors ? veiculo.errors.aro ? <ErroAro /> : null : null }
                            >
                                <Select
                                    style={{ width: '100%' }}
                                    onChange={e => handleChange(e, 'ARO_PNEU')}
                                    value={veiculo.aro}
                                >
                                    <Option value='15'>15</Option>
                                    <Option value='16'>16</Option>
                                    <Option value='17'>17</Option>
                                    <Option value='18'>18</Option>
                                    <Option value='20'>20</Option>
                                    <Option value='22'>22</Option>
                                </Select>
                            </Form.Item>
                        </Col>)
                    : veiculo.tipo_de_veiculo === 'moto' ?
                        (<Col xs={24}>
                            <Form.Item
                                label='Qual o Aro do seu veículo?'
                                required
                                extra={ veiculo.errors ? veiculo.errors.aro ? <ErroAro /> : null : null }
                            >
                                <Radio.Group
                                    onChange={e => handleChange(e.target.value, 'ARO_PNEU')}
                                    value={veiculo.aro}
                                >
                                    <Radio value='Liga leve'>Liga leve</Radio>
                                    <Radio value='Roda raiada'>Roda raiada</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>)
                    : veiculo.tipo_de_veiculo === 'caminhonete' ?
                        (<Col md={24}>
                            <Form.Item
                                label='Qual o Aro do seu veículo?'
                                required
                                extra={ veiculo.errors ? veiculo.errors.aro ? <ErroAro /> : null : null }
                            >
                                <Select
                                    style={{ width: '100%' }}
                                    onChange={e => handleChange(e, 'ARO_PNEU')}
                                    value={veiculo.aro}
                                >
                                    <Option value='15'>15</Option>
                                    <Option value='17.5'>17.5</Option>
                                    <Option value='16'>16</Option>
                                    <Option value='20'>20</Option>
                                    <Option value='22.5'>22.5</Option>

                                </Select>
                            </Form.Item>
                        </Col>)
                    : null
                }
                <Col md={12}>
                    <Form.Item 
                        label='Valor total dos pneus'
                        required
                        extra={ veiculo.errors ? veiculo.errors.total ? <ErroTotal /> : null : null }
                    >
                        <Input
                            value={veiculo.total}
                            onChange={e => {
                                let valor = e.target.value
                                valor = valor.replace(/\D/g, '')
                                handleChange(valor, 'VALOR_TOTAL_PNEU')
                            }}
                            placeholder='Apenas números inteiros'
                        />
                    </Form.Item>
                </Col>
                <Col md={12}>
                    <Form.Item 
                        label='Quantidade de pneus'
                        required
                        extra={ veiculo.errors ? veiculo.errors.qtd ? <ErroQtd /> : null : null }
                    >
                        <Input
                            value={veiculo.qtd}
                            onChange={e => {
                                let valor = e.target.value
                                valor = valor.replace(/\D/g, '')
                                handleChange(valor, 'QUANTIDADE_PNEU')
                            }}
                            placeholder='Apenas números inteiros'
                        />
                    </Form.Item>
                </Col>
                <Col md={24}>
                    <Form.Item 
                        label='Placa do seu veículo'
                        required
                        extra={ veiculo.errors ? veiculo.errors.vehiclePlate ? <ErroPlaca /> : null : null }
                    >
                        <Input
                            value={veiculo.vehiclePlate}
                            onChange={e => handleChange(e.target.value, 'PLACA_DO_VEICULO')}
                        />
                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    handleChange: (item, tipo) => dispatch(handleChange(item, tipo))
})

const mapStateToProps = createStructuredSelector({
    veiculo: selectFormularioVeiculo
})

export default connect(mapStateToProps, mapDispatchToProps)(Veiculo)
