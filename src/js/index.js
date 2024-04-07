const botaoMostraProjetos = document.querySelector(".btn-mostrar-projetos");
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");


botaoMostraProjetos.addEventListener("click", () => {
    botaoMostarprojetos();
    esconderBotao();
})

function esconderBotao() {
    botaoMostraProjetos.classList.add("remover");
}

function botaoMostarprojetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add("ativo");
    });
}

