//Obtem o botão do formulário da página HTML
var btnSalvarContato = document.querySelector("#btnSalvarContato");

//Executa a função anonima ao clicar no botão
btnSalvarContato.addEventListener("click", function (event) {
    //Evita o comportamento padrão que seria recarregar a página
    event.preventDefault();
    
    //Obtem o formulário da nossa página HTML
    var frmContato = document.querySelector("#frmContato");

    //Validar campos do formulário
    if (validarFormularioAluno(frmContato) == false) {
        return;
    }

    var linhaContato = criaLinhaContato(frmContato);

    //Coloca o elemento tr como filha da tabela de alunos
    var tabelaContato = document.querySelector("#tabela-contato").querySelector("tbody");
    tabelaContato.appendChild(linhaContato);

    frmContato.reset();
})

function criaLinhaContato(frmContato) {
    //Cria um elemento tr dentro do documento HTML
    var linhaContato = document.createElement("tr");

    //Coloca os elementos td como filhos do elemento tr
    linhaContato.appendChild(criaColuna(frmContato.nome.value));
    linhaContato.appendChild(criaColuna(frmContato.trabalho.value));
    linhaContato.appendChild(criaColuna(frmContato.prova.value));
    linhaContato.appendChild(criaColunaAcoes());

    return linhaContato;
}

function criaColuna(valor) {
    var coluna = document.createElement("td");
    coluna.textContent = valor;
    return coluna;
}

function criaColunaAcoes() {
    // Criando a coluna ações
    var colunaAcoes = document.createElement("td");
    colunaAcoes.classList.add("td-acoes");

    //Criando o botão excluir
    var botaoExcluir = document.createElement("span");
    botaoExcluir.classList.add("btn-excluir");
    botaoExcluir.textContent = "Excluir";

    colunaAcoes.appendChild(botaoExcluir);

    return colunaAcoes;
}

function validarFormularioAluno(frmContato) {
    var divMensagens = document.querySelector("#divMensagens");
    divMensagens.textContent = "";

    if (frmContato.nome.value.length == 0) {
        criaMensagem("Nome inválido");
        return false;
    }
    if ( validarNotaTrabalho(frmContato.trabalho.value) == false ) {
        criaMensagem("Email inválida.");
        return false;
    }
    if ( validarNotaProva(frmContato.prova.value) == false ) {
        criaMensagem("Telefone inválida.");
        return false;
    }

    return true;
}

function criaMensagem(texto) {
    var msg = document.createElement("div");
    msg.classList.add("alert");
    msg.classList.add("alert-warning");
    msg.textContent = texto;

    var divMensagens = document.querySelector("#divMensagens");
    divMensagens.appendChild(msg);
}s