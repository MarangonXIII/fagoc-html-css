function calcularDobro(event){
    if (event.key === "Enter") {
        let lado = parseFloat(document.getElementById("lado").value);
        
        let area = Math.pow(lado,2);
        let dobroDaArea = area * 2;
        
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `A área do quadrado é ${area.toFixed(2)} metros quadrados. O dobro da área é ${dobroDaArea.toFixed(2)} metros quadrados.`;
    }
}