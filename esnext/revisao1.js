// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

// Template String
const template = `Bom dia ${a}`
console.log(template)

// Destructing
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2]
console.log(x, y)

const { idade, nome } = { nome: 'Ana', idade: 9 }
console.log(idade, nome)