// function pegaNome() {
//     let nome = "Matheus"
//     return nome
// }

// function exibirNome() {
//     let resultado = pegaNome()
//     console.log(resultado)
// }
// exibirNome()


// function somaDoisNumeros(num1, num2 = 0) {
//     soma = num1 + num2
//     return soma
// }

// console.log(somaDoisNumeros(8, 3))
// console.log(somaDoisNumeros(7))

///////////////////////////////////////////////////////////////////////////////

// Exercício 1

// function receberNome() {
//     let nome = prompt("Digite seu nome: ", "Insira aqui seu nome")
//     return nome
// }

// function receberIdade() {
//     let idade = prompt("Digite sua idade: ", "Insira aqui sua idade")
//     return idade
// }

// function imprimir(nome, idade) {
//     alert(`Olá ${nome}, sua idade é ${idade} anos!`)
// }

// function chamaFuncao() {
//     imprimir(receberNome(), receberIdade())
// }

// chamaFuncao()


///////////////////////////////////////////////////////////////////////////////////

let nome = "   Matheus   "

console.log(nome.length)
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())

console.log(nome.toLocaleLowerCase().includes("m"))
console.log(nome.toLocaleLowerCase().includes("M"))

console.log(nome)
console.log(nome.trim())


////////////////////////////////////////////////////////////////////////////////////

let numero = 5.54646545648

console.log(numero.toFixed(2))
console.log(isNaN(nome))

