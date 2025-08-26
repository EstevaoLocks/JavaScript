let conteudo = document.getElementById("conteudo");
let btn = document.getElementById("btn");
let flag = true;
let tagp = '';

btn.addEventListener("click", function () {
    if (conteudo.parentNode && flag) {
        conteudo.parentNode.removeChild(conteudo);

        document.getElementById("btn").innerHTML = "Add";
        flag = false;
    }else {
        tagp = document.querySelector("body").createElement('p');
        tagp.setAttribute('id', 'conteudo');
        tagp.innerHTML = "conteudo a remover";

        document.getElementById("btn").innerHTML = "Deletar";
        flag = true;
    }
});
