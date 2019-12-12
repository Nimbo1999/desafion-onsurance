import { combineReducers } from 'redux';
import formularioReducer from './formulario/formulario.reducer'

const rootReducer = combineReducers({
    formulario: formularioReducer
})

export default rootReducer