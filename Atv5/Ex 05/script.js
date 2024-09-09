function centiMetros(event){
    if (event.key === "Enter") {
        let metros = parseFloat(document.getElementById("metros").value);
        
        let centimetros = metros * 100;

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `${metros} metros é igual a ${centimetros} centímetros`;
    }
}