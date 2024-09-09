function irParaProximo(event, proximoId) {
    if (event.key === "Enter") {
        document.getElementById(proximoId).focus();
    }
}

function soma(event){
    if (event.key === "Enter") {
        let numero1 = parseInt(document.getElementById("numero1").value);
        let numero2 = parseInt(document.getElementById("numero2").value);

        let soma = numero1 + numero2;

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `${numero1} + ${numero2} = ${soma}`;
    }
}