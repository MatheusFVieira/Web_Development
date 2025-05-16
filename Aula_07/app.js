// const btnClicar = document.getElementById("btnClicar")
// const paragrafo = document.getElementById("paragrafo")

// btnClicar.addEventListener("click", function () {
//     paragrafo.textContent = "Matheus Freitas Vieira"
// })

const form = document.getElementById("form")
const btnEnviar = document.getElementById("btnEnviar")
const inputEmail = document.getElementById("email")
const inputNome = document.getElementById("nome")
const inputAssunto = document.getElementById("assunto")
const inputMensagem = document.getElementById("mensagem")
const mensagemErro = document.getElementById("error")
const cadastro = document.getElementById("cadastroUsuarios")

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault()

    let nome = inputNome.value
    let email = inputEmail.value
    let assunto = inputAssunto.value
    let mensagem = inputMensagem.value

    if (nome === "" || email === "" || mensagem === "") {
        mensagemErro.textContent = "Preencha os campos vazios!"
        mensagemErro.style.color = "#ff0000"
        // mensagemErro.setAttribute("src", "Link da Imagem")
        return
    } else {
        mensagemErro.textContent = ""
    }

    // alert(`Nome: ${nome}\n E-mail: ${email}\n Assunto: ${assunto}\n Mensagem: ${mensagem}`)

    const cardUsuarios = document.createElement('div')
    cardUsuarios.innerHTML = `
    <h3> Nome: ${nome} </h3>
    <p> E-mail: ${email} </p>
    `

    cadastro.append(cardUsuarios)

    form.reset()

})
