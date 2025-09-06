//Defino o botão
let btn = document.getElementById("btn");
//Define bandeira sinalizadora
let flag = true;

function randomColor () {
    return (
        // O "#" é para o código da cor
        // O math.floor arredonda o número (para baixo)
        // O math.random gera um número aleatório (entre [0; 1[)
        // O "* 0x1000000" multiplica o número aleatório por esse número (que é um número hexadecimal)
        // O toString converte o resultado em uma string (hexadecimal)
        // O padStart garante que esse número tenha 6 caracteres, pois se ele não tiver, será completado com zeros
        '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')
    )
}

let elementP = '';

btn.addEventListener("click", function () {
    document.body.style.backgroundColor = randomColor();

    if (document.getElementById("oP") === null) {
        
        elementP = document.createElement("p");
        elementP.setAttribute("id", "oP");
        document.body.appendChild(elementP);
        elementP.innerHTML = "Esta é a cor do fundo: " + randomColor();
        document.getElementById("oP").style.color = "#ffffff";

    }else {

        elementP.innerHTML = "Esta é a cor do fundo: " + randomColor();
        document.getElementById("oP").style.color = "#ffffff";
    }
});