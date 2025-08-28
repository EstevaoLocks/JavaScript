
//Defino o id "conteudo"
let conteudo = document.getElementById("conteudo");
//Defino o botão
let btn = document.getElementById("btn");
//Define bandeira sinalizadora
let flag = true;
let tagp = '';

btn.addEventListener("click", function () {

    if (flag) {
        //Pega novamente o <p> e remove ele
        conteudo = document.getElementById("conteudo");
        conteudo.parentNode.removeChild(conteudo);

        //Seta o botão e a bandeira
        document.getElementById("btn").innerHTML = "Add";
        flag = false;

    }else {
        let conteudop = "conteudo a remover";
        //Cria o novo <p>
        let newp = document.createElement("p");
        //Posiciona ele antes do botão
        document.body.insertBefore(newp, btn);

        //Muda o conteudo dele e define um id refazer o processo
        newp.innerHTML = conteudop;
        newp.setAttribute("id", "conteudo");
        
        //Seta o botão e a bandeira
        document.getElementById("btn").innerHTML = "Deletar";
        flag = true;

    }
});
