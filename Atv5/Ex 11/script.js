function irParaProximo(event, proximoId) {
    if (event.key === "Enter") {
        document.getElementById(proximoId).focus();
    }
}

function cubo(event){
    if (event.key === "Enter") {
        let int1 = parseInt(document.getElementById("int1").value);
        let int2 = parseInt(document.getElementById("int2").value);
        let real = parseFloat(document.getElementById("real").value);

        let total1 = (2 * int1) * (int2 / 2);
        let total2 = (3 * int1) + real;
        let total3 = Math.pow(real, 3);

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `O produto do dobro do primeiro com metade do segundo: ${total1.toFixed(2)}<br>A soma do triplo do primeiro com o terceiro: ${total2.toFixed(2)}<br>O terceiro elevado ao cubo: ${total3.toFixed(2)}`;
    }
}