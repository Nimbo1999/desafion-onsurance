export const adicionarVeiculo = item => ({
    type: 'ADICIONAR_VEICULO',
    payload: item
})

export const irProximoStep = () => ({
    type: 'PROXIMO_STEP'
})

export const irStepAnterior = () => ({
    type: 'STEP_ANTERIOR'
})

export const handleChange = (item, tipo) => ({
    type: tipo,
    payload: item
})