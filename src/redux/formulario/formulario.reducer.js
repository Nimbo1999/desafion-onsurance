import { proximoStep, stepAnterior } from './formulario.utils'

const INITIAL_STATE = {
    veiculo: {
        marca: '',
        modelo: '',
        tipo_de_veiculo: '',
        extra_info: '',
        fabricacao: '',
        ano: null,
        valor_fipe: null,
        teve_seguro: null,
    },
    onsurance: {
        garagem_casa: null,
        garagem_trabalho: null,
        horas_por_dia: 1
    },
    step: 0
}

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

        case 'STEP_ANTERIOR':
            return {
                ...state,
                step: stepAnterior(state.step)
            }

        case 'MARCA_VEICULO':
            return {
                ...state,
                veiculo: {
                    ...state.veiculo,
                    marca: action.payload
                }
            }
        
        case 'MODELO_VEICULO':
            return {
                ...state,
                veiculo: {
                    ...state.veiculo,
                    modelo: action.payload
                }
            }

        case 'TIPO_DE_VEICULO':
            return {
                ...state,
                veiculo: {
                    ...state.veiculo,
                    tipo_de_veiculo: action.payload,
                    extra_info: ''
                }
            }

        case 'TEVE_SEGURO':
            return {
                ...state,
                veiculo: {
                    ...state.veiculo,
                    teve_seguro: action.payload
                }
            }
        
        case 'EXTRA_INFO':
            return {
                ...state,
                veiculo: {
                    ...state.veiculo,
                    extra_info: action.payload
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

        case 'ANO_DO_MODELO':
            return {
                ...state,
                veiculo: {
                    ...state.veiculo,
                    ano: action.payload
                }
            }

        case 'VALOR_TABELA_FIPE':
            return {
                ...state,
                veiculo: {
                    ...state.veiculo,
                    valor_fipe: action.payload
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
    
        default:
            return state
    }
}

export default formularioReducer