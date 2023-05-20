var setaDireita = window.document.getElementById('setaDireita');
var leonardo = window.document.getElementById('leonardo');
var samantha = window.document.getElementById('samantha');
var bruna = window.document.getElementById('bruna');
var setaEsquerda = window.document.getElementById('setaEsquerda');

function rolarDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function rolarEsquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}
