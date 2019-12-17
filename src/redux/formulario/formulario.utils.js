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
            if(stepValue.qtd === null || stepValue.qtd === ''){
                errors = { ...errors, qtd: true }
            }
            if(stepValue.total === null || stepValue.total === ''){
                errors = { ...errors, total: true }
            }
            if(stepValue.vehiclePlate === ''){
                errors = { ...errors, vehiclePlate: true }
            }
            break;
        case 2:
            if(stepValue.garagem_casa === null){
                errors = { ...errors, garagem_casa: true }
            }
            if(stepValue.garagem_trabalho === null){
                errors = { ...errors, garagem_trabalho: true }
            }
            if(stepValue.horas_por_dia === ''){
                errors = { ...errors, horas_por_dia: true }
            }
            break;
        case 3:
            if(stepValue.nome === ''){
                errors = { ...errors, nome: true }
            }
            if(stepValue.sobreNome === ''){
                errors = { ...errors, sobreNome: true }
            }
            if(stepValue.telefone === ''){
                errors = { ...errors, telefone: 'É obrigatório informar o seu número!' }
            } else if(!/\(\d{2}\)\s\d{4,5}-\d{4}/g.test(stepValue.telefone)){
                errors = { ...errors, telefone: 'Esse número de telefone não é válido!' }
            }
            if(stepValue.cep === ''){
                errors = { ...errors, cep: true }
            }
            if(stepValue.email === ''){
                errors = { ...errors, email: 'É obrigatório informar seu email!' }
            } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(stepValue.email)){
                errors = { ...errors, email: 'Esse Email não é válido!' }
            }
            break;
        default:
            console.log('Error no útils, linha 56')
            break;
    }
    return errors
}

export const isEmptyObject = obj => {
    // null é "empty"
    if (obj == null) return true;

    // Suponhamos que se tenha uma propriedade length com um valor diferente de zero
    // Essa proriedade será verdadeira
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // Caso contrário ela tem todas as sua propriedades?
    // Isto não se manipula
    // toString e valueOf são erros de enumeração no IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}