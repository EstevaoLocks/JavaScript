let conteudo = document.getElementById("conteudo");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    if (conteudo.parentNode) {
        conteudo.parentNode.removeChild(conteudo);

        document.getElementById("btn").innerHTML = "Add";
    }
});