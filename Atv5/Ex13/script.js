function irParaProximo(event, proximoId) {
    if (event.key === "Enter") {
        document.getElementById(proximoId).focus();
    }
}

function salario(event) {
    if (event.key === "Enter") {
        let ganhoHora = parseFloat(document.getElementById("ganhoHora").value);
        let horasTrabalhadas = parseInt(document.getElementById("horasTrabalhadas").value);

        let salarioBruto = ganhoHora * horasTrabalhadas;

        let impostoRenda = salarioBruto * 0.11;
        let inss = salarioBruto * 0.08;
        let sindicato = salarioBruto * 0.05;

        let totalDescontos = impostoRenda + inss + sindicato;
        let salarioLiquido = salarioBruto - totalDescontos;

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `
            <b>+ Salário Bruto: R$ ${salarioBruto.toFixed(2)}</b><br>
            - IR (11%): R$ ${impostoRenda.toFixed(2)}<br>
            - INSS (8%): R$ ${inss.toFixed(2)}<br>
            - Sindicato (5%): R$ ${sindicato.toFixed(2)}<br>
            <b>= Salário Líquido: R$ ${salarioLiquido.toFixed(2)}</b>
        `;
    }
}