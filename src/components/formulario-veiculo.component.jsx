import React from 'react'
import { connect } from 'react-redux'
import { selectFormularioVeiculo } from '../redux/formulario/formulario.selector'
import { createStructuredSelector } from 'reselect'
import { Row, Col, Form, Input, Select, Radio } from 'antd'
import { handleChange } from '../redux/formulario/formulario.actions'

import './style/style.css'

// /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const { Option } = Select

const Veiculo = ({veiculo, handleChange}) => {
    console.log(veiculo)
    return (
        <>
            <Row gutter={32}>
                <Col md={24}>
                    <Form.Item label='Marca do Pneu' required>
                        <Input 
                            value={veiculo.marca}
                            onChange={e => handleChange(e.target.value, 'MARCA_PNEU')}
                            placeholder='Bridgestone, Pirelli, Goodyear.' 
                        />
                    </Form.Item>
                </Col>
                <Col md={12}>
                    <Form.Item label='Fabricação' required>
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
                    <Form.Item label='Tipo de veículo' required>
                        <Select
                            style={{ width: '100%' }}
                            placeholder='Selecione seu tipo de veículo'
                            onChange={(e) => handleChange(e, 'TIPO_DE_VEICULO')}
                            value={veiculo.tipo_de_veiculo}
                        >
                            <Option value='Carro'>Carro</Option>
                            <Option value='Moto'>Moto</Option>
                            <Option value='Caminhonete'>Caminhonete</Option>
                        </Select>
                    </Form.Item>
                </Col>
                {
                    veiculo.tipo_de_veiculo === 'Carro' ? 
                        (<Col md={24}>
                            <Form.Item label='Qual o Aro do seu veículo?' required>
                                <Select
                                    style={{ width: '100%' }}
                                    onChange={e => handleChange(e, 'EXTRA_INFO')}
                                    value={veiculo.extra_info}
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
                    : veiculo.tipo_de_veiculo === 'Moto' ? 
                        (<Col xs={24}>
                            <Form.Item
                                label='Qual o Aro do seu veículo?'
                                required
                                >
                                <Radio.Group
                                    onChange={e => handleChange(e.target.value, 'EXTRA_INFO')}
                                    value={veiculo.extra_info}
                                >
                                    <Radio value='Liga leve'>Liga leve</Radio>
                                    <Radio value='Roda raiada'>Roda raiada</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>)
                    : veiculo.tipo_de_veiculo === 'Caminhonete' ? 
                        (<Col md={24}>
                            <Form.Item label='Qual o Aro do seu veículo?' required>
                                <Select
                                    style={{ width: '100%' }}
                                    onChange={e => handleChange(e, 'EXTRA_INFO')}
                                    value={veiculo.extra_info}
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
                    : null
                }
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