import React from 'react'
import { Row, Col, Form, Input } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

const SobreVoce = () => {
    return (
        <Row gutter={32}>
            <Col xs={24}>
                <h2>Precisamos de algumas informações sobre você para prestar um atendimento melhor.</h2>
            </Col>
            <Col md={24}>
                <Form.Item label='Qual o seu nome?' colon={false} required>
                    <Input
                        // value={veiculo.marca}
                        // onChange={e => handleChange(e.target.value, 'MARCA_PNEU')}
                    />
                </Form.Item>
            </Col>
            <Col md={12}>
                <Form.Item label='Celular' required>
                    <Input
                        prefix={<FontAwesomeIcon icon={faMobileAlt} style={{color: '#4db6ac'}} />}
                        // value={veiculo.marca}
                        // onChange={e => handleChange(e.target.value, 'MARCA_PNEU')}
                    />
                </Form.Item>
            </Col>
            <Col md={12}>
                <Form.Item label='CEP' required>
                    <Input
                        suffix={<FontAwesomeIcon icon={faMapMarkedAlt} style={{color: '#4db6ac'}} />}
                        // value={veiculo.marca}
                        // onChange={e => handleChange(e.target.value, 'MARCA_PNEU')}
                    />
                </Form.Item>
            </Col>
            <Col md={24}>
                <Form.Item label='Qual o seu email?' colon={false} required>
                    <Input
                        prefix={<FontAwesomeIcon icon={faEnvelope} style={{color: '#4db6ac'}} />}
                        // value={veiculo.marca}
                        // onChange={e => handleChange(e.target.value, 'MARCA_PNEU')}
                    />
                </Form.Item>
            </Col>
        </Row>
    )
}

export default SobreVoce;
