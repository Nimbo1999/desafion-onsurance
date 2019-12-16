import React from 'react'
import { Row, Col, Form, Input } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { selectUsuario } from '../redux/formulario/formulario.selector'
import { connect } from 'react-redux'
import { handleChange } from '../redux/formulario/formulario.actions'
import { createStructuredSelector } from 'reselect'

const SobreVoce = ({ usuario, handleChange }) => {
    console.log(usuario)
    return (
        <Row gutter={32}>
            <Col xs={24}>
                <h2>Precisamos de algumas informações sobre você para prestar um atendimento melhor.</h2>
            </Col>
            <Col md={24}>
                <Form.Item label='Qual o seu nome?' colon={false} required>
                    <Input
                        value={usuario.nome}
                        onChange={e => {
                            handleChange(e.target.value, 'USUARIO_NOME')
                        }}
                    />
                </Form.Item>
            </Col>
            <Col md={12}>
                <Form.Item label='Telefone' required>
                    <Input
                        prefix={<FontAwesomeIcon icon={faMobileAlt} style={{color: '#4db6ac'}} />}
                        value={usuario.telefone}
                        onChange={e => {
                            let celular = e.target.value
                            .replace(/\D/g, '')
                            .replace(/(\d{2})(\d)/, '($1) $2')
                            .replace(/(\d{4})(\d)/, '$1-$2')
                            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
                            .replace(/(-\d{4})\d+?$/, '$1')
                            handleChange(celular, 'USUARIO_TELEFONE')
                        }}
                    />
                </Form.Item>
            </Col>
            <Col md={12}>
                <Form.Item label='CEP' required>
                    <Input
                        suffix={<FontAwesomeIcon icon={faMapMarkedAlt} style={{color: '#4db6ac'}} />}
                        value={usuario.cep}
                        onChange={e => {
                            let cep = e.target.value
                            .replace(/\D/g, '')
                            .replace(/(\d{5})(\d)/, '$1-$2')
                            .replace(/(-\d{3})\d+?$/, '$1')
                            handleChange(cep, 'USUARIO_CEP')
                        }}
                    />
                </Form.Item>
            </Col>
            <Col md={24}>
                <Form.Item label='Qual o seu email?' colon={false} required>
                    <Input
                        prefix={<FontAwesomeIcon icon={faEnvelope} style={{color: '#4db6ac'}} />}
                        value={usuario.email}
                        onChange={e => {
                            handleChange(e.target.value, 'USUARIO_EMAIL')
                        }}
                    />
                </Form.Item>
            </Col>
        </Row>
    )
}

const mapDispatchToProps = dispatch => ({
    handleChange: (item, tipo) => dispatch(handleChange(item, tipo))
})

const mapStateToProps = createStructuredSelector({
    usuario: selectUsuario
})

export default connect(mapStateToProps, mapDispatchToProps)(SobreVoce);
