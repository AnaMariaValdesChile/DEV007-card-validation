const validator = {
  isValid: function (creditCard) {

    const array = creditCard.split("");//crear un arreglo con los digitos del numero ingresado
    const arrayReverse = array.reverse();//ordenar el arreglo al revez
    const nuevoArray = [];
    const nuevoArray2 = [];

    if (creditCard === "" || creditCard === "e") {      //no permite que entre string vacio o letra e.
      document.getElementById("mensaje").innerHTML = "Debe ingresar un numero de tarjeta valido".fontcolor('blue')  //muestra error

    } else {
      for (let i = 0; i < arrayReverse.length; i++) { //RECORRE EL ARREGLO
        if (i % 2 !== 1) {                             //CONDICION INDICE  PAR 
          nuevoArray.push(arrayReverse[i])             //AGREGA EL ELEMENTO
        } else {                                    //CONDICION INDICE IMPAR 
          nuevoArray.push(arrayReverse[i] * 2)    //AGREGA EL ELEMENTO MULTIPLICADO POR DOS
        }
      }

      for (let j = 0; j < nuevoArray.length; j++) {   //RECORRE EL NUEVO ARREGLO
        if (nuevoArray[j] < 10) {                       // SI ES MENOR QUE DIEZ
          const convertirAnumero = parseInt(nuevoArray[j])  // LO CONVIERTE A NUMERO
          nuevoArray2.push(convertirAnumero)             //Y LO PONE EN OTRO ARREGLO
        } else {                                            //SI ES MAYOR A 10 (DE 2 DIGITOS)
          const numeroAstring = nuevoArray[j].toString();    // PASA EL NUMERO A UNA CADENA DE STRING
          const dosDigitos = numeroAstring.split("");       //SEPARA EL STRING EN UN ARREGLO 
          const sumaDosDigitos = parseInt(dosDigitos[0]) + parseInt(dosDigitos[1]);  //SUMA LOS DOS ELEMENTOS COMO NUMEROS
          nuevoArray2.push(sumaDosDigitos)                //PONE ESA SUMA EN EL NUEVO ARREGLO
        }
      }
    }

    const total = nuevoArray2.reduce((a, b) => a + b) ;   // SUMA TODOS LOS DIGITOS
    let resultado = [];                                // CREA VARIABLE RESULTADO
    if (total % 10 === 0) {                               //CONDICON SI ES DIVISIBLE POR 10
      resultado = true;                                   //RESULTADO ES IGUAL A VERDADERO
    } else{                                               // CONDICION SI NO ES DIVISIBLE PO 10
      resultado=false ;                                   // RESULTADO FALSO
    }
    return resultado                                       // RETORNA VARIABLE CON RESULTADO
    
  },


  maskify: function (creditCard) {

    const arrayCreditCard = creditCard.split("");        
    const array2CreditCard = []


    if (4 < creditCard.length) {
      for (let k = 0; k < arrayCreditCard.length; k++) {
        if (k <= (arrayCreditCard.length - 5)) {
          arrayCreditCard[k] = "#";
          array2CreditCard.push(arrayCreditCard[k])
        } else
          array2CreditCard.push(arrayCreditCard[k])
      }
      const enmascarado= array2CreditCard.reduce((a, b) => a + b)
      return enmascarado;
    } else {
      return creditCard;
    }
    
  }
}


export default validator;
