console.log(this === global)
console.log(this === module.exports)


function logThis() {
    console.log('Dentro da função');
    console.log(this === exports)
    console.log(this === global)
}

logThis()