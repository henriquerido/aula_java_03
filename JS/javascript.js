function medir(){

let select = parseInt(document.getElementById('tipotemperatura').value);
// console.log(select);
let temperatura = document.getElementById('temperatura').value;
let calculoF = parseInt(temperatura) * 1.8 + 32;
let calculoK = parseInt(temperatura) + 273;
let resultado = document.getElementById('resultado');

// if (select == 0){
//     resultado.innerHTML = ('Está fazendo ' + calculoK + 'K')
// } else if (select == 1){
//     resultado.innerHTML = ('Está fazendo ' + calculoF + '°F')
// }

switch(select){ 

    case 0:

        resultado.innerHTML = 'Está fazendo ' + calculoK +'K';

    break;
    
     case 1:

        resultado.innerHTML = 'Está fazendo ' + calculoF + '°F';

     break;

     default:
         
        resultado.innerHTML = 'oxe, tá doido é?'

    break;
}
}