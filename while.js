var numeroNatural=0;
var ResultadoSuma=0;
var Acomulador=0;

numeroNatural=prompt("Ingrese el numero natural al que quiere encotrar su suma susesiva: ");

while (numeroNatural>=Acomulador){
    ResultadoSuma=ResultadoSuma + Acomulador;
    Acomulador=Acomulador+1
}
alert("La suma de los "+numeroNatural+" primeros naturales es igual: "+ResultadoSuma);