function temperatura2(event){
    if (event.key === "Enter") {
        let celsius = parseFloat(document.getElementById("celsius").value);
        
        let fahrenheit = (celsius * 9 / 5) + 32;
        
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F.`;
    }
}