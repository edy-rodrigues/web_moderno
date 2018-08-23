// Operador ... rest(juntar)/spread(espalhar)
// usar rest com  parâmetro de função

const funcionario = { nome: 'Maria', salario: 12345.66 }
const clone = { ativo: true , ...funcionario }
console.log(funcionario)
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoA)
console.log(grupoFinal)