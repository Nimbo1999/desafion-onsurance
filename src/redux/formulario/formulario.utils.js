export const proximoStep = stepAtual => {
    return stepAtual + 1
}

export const stepAnterior = stepAtual => {
    return stepAtual - 1
}

export const verificaStep = (stepNumber, stepValue) => {
    let errors = {}
    switch (stepNumber){
        case 1:
            if(stepValue.marca === ''){
                errors = { ...errors, marca: true }
            }
            if(stepValue.aro === ''){
                errors = { ...errors, aro: true }
            }
            if(stepValue.tipo_de_veiculo === ''){
                errors = { ...errors, tipo_de_veiculo: true }
            }
            if(stepValue.fabricacao === ''){
                errors = { ...errors, fabricacao: true }
            }
    }
    return errors
}

export const isEmptyObject = obj => {
    return obj.toSource() === "({})";
}