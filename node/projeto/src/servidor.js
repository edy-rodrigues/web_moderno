const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bd = require('./bd')

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/produtos', (request, response, next) => {
    response.send(bd.getProdutos()) // Converte para JSON automaticamente
})


app.get('/produtos/:id', (request, response, next) => {
    response.send(bd.getProduto(request.params.id))
})


app.post('/produtos', (request, response, next) => {
    const produto = bd.salvarProduto({
        nome: request.body.nome,
        preco: request.body.preco
    })
    response.send(produto) // JSON
})


app.put('/produtos/:id', (request, response, next) => {
    const produto = bd.salvarProduto({
        id: request.params.id,
        nome: request.body.nome,
        preco: request.body.preco
    })
    response.send(produto) // JSON
})


app.delete('/produtos/:id', (request, response, next) => {
    const produto = bd.excluirProduto(request.params.id)
    response.send(produto) // JSON
})


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})
