const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const chinesa = funcionario => funcionario.pais === 'China'
const mulher = funcionario => funcionario.genero === 'F'
const menorSalario = (func, funcionario) => {
    return func.salario < funcionario.salario ? func : funcionario
}


axios.get(url).then(response => {
    const funcionarios = response.data

    // pais china, genero mulher, menor salario
    console.log(funcionarios.filter(chinesa).filter(mulher).reduce(menorSalario))
})