function irParaProximo(event, proximoId) {
    if (event.key === "Enter") {
        document.getElementById(proximoId).focus();
    }
}

function salario(event){
    if (event.key === "Enter") {
        let dinheiroHora = parseFloat(document.getElementById("dinheiroHora").value);
        let horasTrabalhadas = parseFloat(document.getElementById("horasTrabalhadas").value);
       
        let salario = dinheiroHora * horasTrabalhadas;
       
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `Seu salário total no mês é R$ ${salario.toFixed(2)}.`;
    }
}