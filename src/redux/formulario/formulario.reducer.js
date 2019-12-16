import { proximoStep, stepAnterior, verificaStep, isEmptyObject } from './formulario.utils'
import { notification } from 'antd'

const INITIAL_STATE = {
    veiculo: {
        marca: '',
        aro: '',
        tipo_de_veiculo: '',
        fabricacao: '',
    },
    onsurance: {
        garagem_casa: null,
        garagem_trabalho: null,
        horas_por_dia: 1
    },
    usuario: {
        nome: '',
        telefone: '',
        cep: '',
        email: ''
    },
    step: 0
}

const Notificar = () => notification.error({
    message: 'Erro(s) no formulário',
    description: 'Erro ao submeter as insformações.',
    duration: 2
})

const formularioReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADICIONAR_VEICULO':
            return {
                ...state,
                veiculo: action.payload
            }

        case 'PROXIMO_STEP':
            return {
                ...state,
                step: proximoStep(state.step)
            }

        case 'PROXIMO_STEP_1':
            const errors = verificaStep(state.step, state.veiculo)
            if(!isEmptyObject(errors)){
                Notificar()
                return {
                    ...state,
                    veiculo: {
                        ...state.veiculo,
                        errors: errors
                    }
                }
            }
            return {
                ...state,
                veiculo: {
                    ...state.veiculo,
                    errors: {}
                },
                step: proximoStep(state.step)
            }

        case 'PROXIMO_STEP_2':
            const errors2 = verificaStep(state.step, state.onsurance)
            if(!isEmptyObject(errors2)){
                Notificar()
                return {
                    ...state,
                    onsurance: {
                        ...state.onsurance,
                        errors: errors2
                    }
                }
            }
            return {
                ...state,
                onsurance: {
                    ...state.onsurance,
                    errors: {}
                },
                step: proximoStep(state.step)
            }

        case 'PROXIMO_STEP_3':
            const errors3 = verificaStep(state.step, state.usuario)
            if(!isEmptyObject(errors3)){
                Notificar()
                return {
                    ...state,
                    usuario: {
                        ...state.usuario,
                        errors: errors3
                    }
                }
            }
            return {
                ...state,
                usuario: {
                    ...state.usuario,
                    errors: {}
                },
                step: proximoStep(state.step)
            }

        case 'STEP_ANTERIOR':
            return {
                ...state,
                step: stepAnterior(state.step)
            }

        case 'MARCA_PNEU':
            return {
                ...state,
                veiculo: {
                    ...state.veiculo,
                    marca: action.payload
                }
            }

        case 'ARO_PNEU':
            return {
                ...state,
                veiculo: {
                    ...state.veiculo,
                    aro: action.payload
                }
            }

        case 'TIPO_DE_VEICULO':
            return {
                ...state,
                veiculo: {
                    ...state.veiculo,
                    tipo_de_veiculo: action.payload,
                    aro: ''
                }
            }

        case 'TIPO_FABRICACAO':
            return {
                ...state,
                veiculo: {
                    ...state.veiculo,
                    fabricacao: action.payload
                }
            }

        case 'ON_HORAS_POR_DIA':
            return {
                ...state,
                onsurance: {
                    ...state.onsurance,
                    horas_por_dia: action.payload
                }
            }

        case 'GARAGEM_CASA':
            return {
                ...state,
                onsurance: {
                    ...state.onsurance,
                    garagem_casa: action.payload
                }
            }

        case 'GARAGEM_TRABALHO':
            return {
                ...state,
                onsurance: {
                    ...state.onsurance,
                    garagem_trabalho: action.payload
                }
            }

        case 'USUARIO_NOME':
            return {
                ...state,
                usuario: {
                    ...state.usuario,
                    nome: action.payload
                }
            }

        case 'USUARIO_TELEFONE':
            return {
                ...state,
                usuario: {
                    ...state.usuario,
                    telefone: action.payload
                }
            }

        case 'USUARIO_CEP':
            return {
                ...state,
                usuario: {
                    ...state.usuario,
                    cep: action.payload
                }
            }

        case 'USUARIO_EMAIL':
            return {
                ...state,
                usuario: {
                    ...state.usuario,
                    email: action.payload
                }
            }

        default:
            return state
    }
}

export default formularioReducer
