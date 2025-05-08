function question(nPerguntas, nAcertos){
    if(nPerguntas < 5){
        let num1 = Math.floor(Math.random() * 100);
        let num2 = Math.floor(Math.random() * 100);

        let op = Math.floor(Math.random() * 10);
        let resp, correto;

        if(op <= 2){
            resp = Number(prompt(`Quanto é ${num1} x ${num2}? `, "Digite aqui sua resposta"));
            correto = num1 * num2;
        } else if(op <= 5){
            resp = Number(prompt(`Quanto é ${num1} / ${num2}? (arredonde para inteiro)`, "Digite aqui sua resposta"));
            correto = Math.round(num1 / num2);
        } else if(op <= 7){
            resp = Number(prompt(`Quanto é ${num1} + ${num2}? `, "Digite aqui sua resposta"));
            correto = num1 + num2;
        } else {
            resp = Number(prompt(`Quanto é ${num1} - ${num2}? `, "Digite aqui sua resposta"));
            correto = num1 - num2;
        }

        if(resp === correto){
            alert("Resposta certa!");
            nAcertos++;
        } else{
            alert(`Resposta errada! A resposta certa era ${correto}`);
        }

        nPerguntas++;
        return question(nPerguntas, nAcertos);
    } else {
        return nAcertos;
    }
}

function game(){
    let acertos = question(0, 0);
    alert(`Você acertou ${acertos} perguntas!`);

    let escolha = prompt("Você gostaria de jogar novamente? (sim) (nao): ", "Insira aqui sua escolha");
    escolha = escolha.toLowerCase().trim();

    if(escolha === "sim"){
        game();
    } else {
        alert("Obrigado por jogar!");
    }
}

function receberNome() {
    let nome = prompt("Digite seu nome para iniciar o jogo: ", "Insira aqui seu nome");
    return nome;
}

function boasVindas(){
    let nome = receberNome() || "Convidado";
    alert(`Olá ${nome}, seja bem-vindo ao MathGame!`);
    game();
}

boasVindas();