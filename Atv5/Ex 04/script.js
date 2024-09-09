function irParaProximo(event, proximoId) {
    if (event.key === "Enter") {
        document.getElementById(proximoId).focus();
    }
}

function media(event){
    if (event.key === "Enter") {
        let nota1 = parseFloat(document.getElementById("nota1").value);
        let nota2 = parseFloat(document.getElementById("nota2").value);
        let nota3 = parseFloat(document.getElementById("nota3").value);
        let nota4 = parseFloat(document.getElementById("nota4").value);
        
        let media = (nota1 + nota2 + nota3 + nota4) / 4;
        
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `A média das notas é ${media.toFixed(2)}`;
    }
}