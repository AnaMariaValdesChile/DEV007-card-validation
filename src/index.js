import validator from './validator.js';

const apretarBoton = document.getElementById("botonValidar")

apretarBoton.addEventListener("click", llamarValidador)

apretarBoton.addEventListener("click", datosNumeral)

function llamarValidador(){
  const creditCardNumber = document.getElementById("numeroTarjeta").value;
  if (validator.isValid(creditCardNumber)===true){
    document.getElementById("mensaje").innerHTML = "Su tarjeta SI es valida".fontcolor('green');
  } else{
    document.getElementById("mensaje").innerHTML = "Su tarjeta NO es valida".fontcolor('A93226');
  }
}
function datosNumeral(){
  const creditCardNumber = document.getElementById("numeroTarjeta").value;
  document.getElementById("mascara").innerHTML=validator.maskify(creditCardNumber)
}


console.log(validator);