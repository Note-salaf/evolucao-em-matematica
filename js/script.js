const btnAdicionaAlunoTelaPrincipal = document.querySelector('#btnAdicionaAlunoTelaPrincipal')
const btnRegistraEvolucoes = document.querySelector('#btnRegistraEvolucoes')
const dialogAdicionarAluno = document.querySelector('#dialogAdicionarAluno')
const btnCancelar = document.querySelector('#btnCancelar')
const dialogDetalhesAluno = document.querySelector('#dialogDetalhesAluno')
const btnCancelarDetalhes = document.querySelector('#btnCancelarDetalhes')
const btnInserirDetalhes = document.querySelector('#btnInserirDetalhes')
const listaAlunos = document.querySelector('#listaAlunos')
const inputNomeAluno = document.querySelector('#inputNomeAluno')
const btnAdicionar = document.querySelector('#btnAdicionar')



// Funcão para adicionar aluno

function adicionarAluno() {
    if (!inputNomeAluno.value) return;
    const nomeAluno = inputNomeAluno.value.trim()

    const itemAluno = document.createElement('li')

    const botao = document.createElement('button')
    botao.type = 'button'
    botao.textContent = nomeAluno
    botao.classList.add('alunos')
/*
    const btnExcluiAluno = document.createElement('button')
    btnExcluiAluno.type = 'button'
    btnExcluiAluno.textContent = 'Excluir'*/


    itemAluno.appendChild(botao)
    //itemAluno.appendChild(btnExcluiAluno)
    listaAlunos.appendChild(itemAluno)
    
}

function inserirEvolucao() {

}


btnAdicionaAlunoTelaPrincipal.addEventListener('click', () => {
    dialogAdicionarAluno.showModal()
    dialogAdicionarAluno.focus()
})


btnRegistraEvolucoes.addEventListener('click', () => dialogDetalhesAluno.showModal())
btnCancelar.addEventListener('click', () => dialogAdicionarAluno.close())
btnCancelarDetalhes.addEventListener('click', () => dialogDetalhesAluno.close())
btnInserirDetalhes.addEventListener('click', () => alert('inserir ok'))
btnAdicionar.addEventListener('click', adicionarAluno)