// let nome = "Matheus"

// if (nome === 'Matheus' || nome === null || nome === "") {
//     console.log("É você!")
// }
// else if (nome === 'Fulano') {
//     console.log("Você é o Fulano!")
// }
// else {
//     console.log("Não é você!")
// }
// const senha = 1234

// // let numero = parseInt(prompt("Digite um número: "))

// console.log(`Seu nome é ${nome}`)

// console.log("5" == 5)
// console.log("5" === 5)

// console.log('uva' > 'banana')
// console.log('Uva' > 'banana')
// console.log('abacaxi' > 'banana')


// nome === 'Matheus' ? console.log("É você") : console.log("Não é você")


let user = prompt("Digite seu usuário: ", "Insira aqui seu uruário")
let senha = parseInt(prompt("Digite sua senha: ", "Insira aqui o sua senha"))

// if (user === '1234' && senha === 1234) {
//     alert("Login efetuado com sucesso!")
// }
// else {
//     alert("Login ou senha incorreta!")
// }


if (
    (user == 'Matheus' && senha === 1234) ||
    (user == 'Caio' && senha === 4567) ||
    (user == "Admin" && senha === 7891)
) {
    alert("Login efetuado com sucesso!")
}
else {
    alert("Login ou senha incorreta!")
}