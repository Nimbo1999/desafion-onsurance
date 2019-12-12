import React from 'react'
import { connect } from 'react-redux'
import { selectFormularioVeiculo } from '../redux/formulario/formulario.selector'
import { createStructuredSelector } from 'reselect'
import { Row, Col, Form, Input, Select, Radio, InputNumber } from 'antd'
import { handleChange } from '../redux/formulario/formulario.actions'

import './style/style.css'

// /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const { Option } = Select

const Veiculo = ({veiculo, handleChange}) => {
    console.log(veiculo)
    return (
        <>
            <Row gutter={32}>
                <Col md={12}>
                    <Form.Item label='Marca do Veículo' required>
                        <Input 
                            value={veiculo.marca}
                            onChange={e => handleChange(e.target.value, 'MARCA_VEICULO')} placeholder='Toyota, Hyundai, Mitsubishi' 
                        />
                    </Form.Item>
                </Col>
                <Col md={12}>
                    <Form.Item label='Modelo do veículo' required>
                        <Input
                            value={veiculo.modelo} 
                            onChange={e => handleChange(e.target.value, 'MODELO_VEICULO')}
                            placeholder='Corolla, I30, Palio...' 
                        />
                    </Form.Item>
                </Col>
                <Col md={24}>
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
                            <Option value='V.U.C'>V.U.C</Option>
                        </Select>
                    </Form.Item>
                </Col>
                {
                    veiculo.tipo_de_veiculo === 'Carro' ? 
                        (<Col md={24}>
                            <Form.Item label='Como seu carro será usado?' required>
                                <Select
                                    style={{ width: '100%' }}
                                    placeholder='Qual é o tipo de uso?'
                                    onChange={e => handleChange(e, 'EXTRA_INFO')}
                                    value={veiculo.extra_info}
                                >
                                    <Option value='Passeio'>Passeio</Option>
                                    <Option value='Utilitário'>Utilitário</Option>
                                    <Option value='Taxi'>Taxi</Option>
                                    <Option value='Motorista de App'>Motorista de App</Option>
                                </Select>
                            </Form.Item>
                        </Col>)
                    : veiculo.tipo_de_veiculo === 'Moto' ? 
                        (<Col xs={24}>
                            <Form.Item
                                label='Cilindradas da moto'
                                required
                                >
                                <Radio.Group
                                    onChange={e => handleChange(e.target.value, 'EXTRA_INFO')}
                                    value={veiculo.extra_info}
                                >
                                    <Radio value='Abaixo de 250cc'>Abaixo de 250cc</Radio>
                                    <Radio value='250cc e Acima'>250cc e Acima</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>)
                    : veiculo.tipo_de_veiculo === 'Caminhonete' ? 
                        (<Col md={24}>
                            <Form.Item label='Como sua caminhonete será usada?' required>
                                <Select
                                    style={{ width: '100%' }}
                                    placeholder='Qual é o tipo de uso?'
                                    onChange={e => handleChange(e, 'EXTRA_INFO')}
                                    value={veiculo.extra_info}
                                >
                                    <Option value='Passeio'>Passeio</Option>
                                    <Option value='Utilitário'>Utilitário</Option>
                                </Select>
                            </Form.Item>
                        </Col>)
                    : null
                }
                <Col md={12}>
                    <Form.Item label='Fabricação' required>
                        <Select
                            style={{ width: '100%' }}
                            placeholder='Selecione a opção de fabricação do seu veículo'
                            onChange={(e) => handleChange(e, 'TIPO_FABRICACAO')}
                            value={veiculo.fabricacao}
                        >
                            <Option value='Nacional'>Nacional</Option>
                            <Option value='Internacional'>Internacional</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col md={12}>
                    <Form.Item label='Ano do modelo' required>
                        <InputNumber
                            style={{ width: '100%' }}
                            placeholder='2019'
                            min={0}
                            max={2020}
                            onChange={(e) => handleChange(e, 'ANO_DO_MODELO')}
                            value={veiculo.ano}
                        />
                            
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item label='Valor FIPE do veículo' extra='Digite o valor FIPE do seu veículo, sem casas decimais' required>
                        <InputNumber
                            style={{ width: '100%' }}
                            placeholder='37000'
                            min={0}
                            max={9999999}
                            step={100}
                            onChange={(e) => handleChange(e, 'VALOR_TABELA_FIPE')}
                            value={veiculo.valor_fipe}
                        />
                    </Form.Item>
                </Col>
                <Col md={24} style={{marginBottom: '15px', marginTop: '10px'}}>
                    Não sabe o valor do seu veículo? <a href='https://veiculos.fipe.org.br/'>Consulte a tabela FIPE clicando aqui.</a>
                </Col>
                <Col xs={24}>
                    <Form.Item
                        label='Tem ou teve algum seguro?'
                        extra='Caso já tenha tido ou tenha algum seguro ativo, clique em Sim. Do contrário, clique em Não.'
                        required
                        colon={false}
                    >
                        <Radio.Group
                            onChange={e => handleChange(e.target.value, 'TEVE_SEGURO')}
                            value={veiculo.teve_seguro}
                        >
                            <Radio value={true}>Sim</Radio>
                            <Radio value={false}>Não</Radio>
                        </Radio.Group>
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