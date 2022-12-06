function CalcularMonto ( monto , divisa ){
   
    monto= parseFloat(monto);
    
    let = valorFinal=0;

    if (divisa == "dolares" && monto>0 ){
        valorFinal = monto / 160;
        return valorFinal
    }
    else if (divisa == "euros" && monto>0){
        valorFinal = monto / 177;
        return valorFinal;
    }
    else if (divisa =="libras" && monto>0){
        valorFinal = monto / 206;
        return valorFinal
    }
    else{
        alert("ERROR DATOS INCORRECTOS");
    }

}

let monto ="";

console.log("Convertidor de peso arg a moneda extranjera");

while ( monto != "FIN"){

    monto = prompt("Ingrese el monto deseado a calcular o escriba FIN para finalizar");
    
    if ( monto == "FIN"){
        break
    }
    
    let divisa = prompt("Ingrese la divisa a la cual quiere convertir; dolares , euros o libras");

    let resultado = CalcularMonto(monto,divisa);

    console.log("El monto ingresado fue de:",monto);
    console.log("Seleccionaste la divisa -->",divisa);
    console.log("Conversion final de:", resultado);
    console.log("Volver a convertir");
}