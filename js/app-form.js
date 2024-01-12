var contatos = document.querySelectorAll(".contato");


function validarNotaTrabalho(notaTrabalho) {
    if (notaTrabalho.length == 0 || notaTrabalho < 0 || notaTrabalho > 10) {
        return false;
    } else {
        return true;
    }
}

function validarNotaProva(notaProva) {
    if (notaProva.length == 0 || notaProva < 0 || notaProva > 300000000000) {
        return false;
    } else {
        return true;
    }
}