import { proximoStep, stepAnterior } from './formulario.utils'

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

        default:
            return state
    }
}

export default formularioReducer
