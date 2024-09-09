function irParaProximo(event) {
    if (event.key === "Enter") {
        let raio = parseFloat(document.getElementById("raio").value);
        
        let area = Math.PI * Math.pow(raio,2);
        
        let resultado = document.getElementById("resultado");
        
        if(raio==1){
            resultado.innerHTML = `A área do círculo com raio ${raio} metro é ${area.toFixed(2)} metros quadrados.`;
        }else if(raio==0.565){
            resultado.innerHTML = `A área do círculo com raio ${raio} metros é ${area.toFixed(2)} metro quadrado.`;
        }else{
            resultado.innerHTML = `A área do círculo com raio ${raio} metros é ${area.toFixed(2)} metros quadrados.`;
        }
    }
}