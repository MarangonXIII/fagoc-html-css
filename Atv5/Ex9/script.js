function temperatura(event) {
    if (event.key === "Enter") {
        let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
        
        let celsius = 5 * ((fahrenheit - 32) / 9);
        
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `${fahrenheit}°F é igual a ${celsius.toFixed(2)}°C.`;
    }
}