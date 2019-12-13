import { createSelector } from 'reselect'

const selectFormulario = state => state.formulario;

export const selectFormularioVeiculo = createSelector(
    [selectFormulario],
    form => form.veiculo 
)

export const selectStep = createSelector(
    [selectFormulario],
    form => form.step
)

export const selectOnsurance = createSelector(
    [selectFormulario],
    form => form.onsurance
)