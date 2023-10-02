//*pegar o botão e verificar quando usuario clicar
const botoes = document.querySelectorAll('.botao');

//mostrar o personagem ou esconder
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice )=> { 
    botao.addEventListener('click', () => {

        //*verificar se já existe um botao selecinado, se sim, remova
        desselecionarBotao();

        //*adiciar a classe "selecionado" no botão que foi clicado
        botao.classList.add('selecionado');

        //verificar se existe personagem selecionado
        desselecinarPersonagem();

        //adicionar a classe "selecionado"no personagem selecionado
        personagens[indice].classList.add('selecionado');
    })
})

function desselecinarPersonagem() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
