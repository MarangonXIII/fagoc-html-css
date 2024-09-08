function testar(){
    let numero1 = parseInt (document.getElementById("numero1").value);
    let numero2 = parseInt (document.getElementById("numero2").value);

    let resultado = document.getElementById("resultado");
    
    if(numero1 > numero2){
        resultado.innerHTML = "Numero 1 é maior que o Numero 2";
    }else if(numero1 < numero2){
        resultado.innerHTML = "Numero 2 é maior que o Numero 1";
    }else{
        resultado.innerHTML = "Os Numeros são iguais";
    }
}