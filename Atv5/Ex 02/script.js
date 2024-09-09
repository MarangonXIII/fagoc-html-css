function mostrarnumero(event) {
    if (event.key === "Enter") {
        let numero = parseInt(document.getElementById("numero").value);
        
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `O número informado foi ${numero}`;
    }
}