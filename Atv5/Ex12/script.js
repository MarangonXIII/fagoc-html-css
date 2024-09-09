function irParaGenero(event) {
    if (event.key === "Enter") {
        document.getElementById("genero").focus();
    }
}

function peso() {
    let altura = parseFloat(document.getElementById("altura").value);
    let genero = document.getElementById("genero").value;
    let pesoIdeal;
    let pesoHelicoptero;

    if (genero === "homem") {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (genero === "mulher") {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else if (genero === "combate") {
        pesoHelicoptero = (42069 * altura) - 666;
    }

    if (pesoIdeal) {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `Seu peso ideal é ${pesoIdeal.toFixed(2)} kg.`;
    } else if (pesoHelicoptero) {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `Quem foi que colocou um helicóptero na baçança?`;
    } else {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = '';
    }
}