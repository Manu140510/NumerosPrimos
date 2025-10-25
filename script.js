function verificarPrimo(){
    let numero = parseInt(document.getElementById("numeroInput").value);
    let resultadoElemento = document.getElementById("resultado");   
    let ehprimo = true;

    if (numero <=1){
        ehprimo = false;
    } else{
        for (let i=2; i<= Math.sqrt(numero);i++){
            if (numero % i === 0){
                ehprimo = false;
                break;
            }
        }
    }
     if (ehprimo){
         resultadoElemento.textContent = numero + " É um número primo.";
         resultadoElemento.style.color = "green";
     } else{
        resultadoElemento.textContent = numero + " Não é uma número primo.";
        resultadoElemento.style.color = "red";
     }
      document.getElementById("resultado")
     }

    

