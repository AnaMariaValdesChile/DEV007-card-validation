import validator from "./validator.js";

// ------------------Errors --- Name
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const inputName = document.getElementById("input-name");
const errorName = document.getElementById("error-name");

inputName.addEventListener("keyup", () => {
  errorName.textContent = "";
  const inputNameArray = inputName.value.split("");
  for (let i = 0; i < numbers.length; i++) {
    if (inputNameArray.includes(numbers[i])) {
      errorName.textContent = "Este campo solo permite letras";
      break;
    }
  }
});

// ------------------Errors --- Depto
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const inputDepto = document.getElementById("input-depto");
const errorDepto = document.getElementById("error-depto");

inputDepto.addEventListener("keyup", () => {
  errorDepto.textContent = "";
  const inputDeptoArray = inputDepto.value.split("");
  for (let j = 0; j < letters.length; j++) {
    if (inputDeptoArray.includes(letters[j])) {
      errorDepto.textContent = "Este campo solo permite numeros";
      break;
    }
  }
});

// ------------------Errors --- Modulo
const inputModulo = document.getElementById("input-modulo");
const errorModulo = document.getElementById("error-modulo");

inputModulo.addEventListener("keyup", () => {
  errorModulo.textContent = "";
  const inputModuloArray = inputModulo.value.split("");
  for (let k = 0; k < letters.length; k++) {
    if (inputModuloArray.includes(letters[k])) {
      errorModulo.textContent = "Este campo solo permite numeros";
      break;
    }
  }
});

// ------------------Errors --- Card
const inputCard = document.getElementById("input-card");
const errorCard = document.getElementById("error-card");

inputCard.addEventListener("keyup", () => {
  errorCard.textContent = "";
  const inputCardArray = inputCard.value.split("");
  for (let k = 0; k < letters.length; k++) {
    if (inputCardArray.includes(letters[k])) {
      errorCard.textContent = "Este campo solo permite numeros";
      break;
    }
  }
});
// ------------------Mensaje Valida tarjeta
const divContainer = document.createElement("div");
divContainer.setAttribute("id", "response");

const nameMessage = document.createElement("label");
nameMessage.setAttribute("id", "labelName");

const creditCardNumber = document.createElement("label");
creditCardNumber.setAttribute("id", "labelCard");

const checkMessage = document.createElement("label");
checkMessage.setAttribute("id", "labelCheck");

const buttonBack = document.createElement("button");
buttonBack.setAttribute("id", "buttonBack");
buttonBack.textContent = "volver";

buttonBack.addEventListener("click", () => {
  location.reload();
});

divContainer.appendChild(nameMessage);
divContainer.appendChild(creditCardNumber);
divContainer.appendChild(checkMessage);
divContainer.appendChild(buttonBack);

// ------------------Function Valid Card

function llamarValidator() {
  nameMessage.textContent =
    "Estimad@ " + document.getElementById("input-name").value;
  creditCardNumber.textContent =
    "Su tarjeta n° " +
    validator.maskify(document.getElementById("input-card").value);
  const creditCardN = creditCardNumber.textContent;
  const container = document.getElementById("container");
  if (validator.isValid(creditCardN) === true) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    checkMessage.style.color = "green";
    checkMessage.textContent = "es valida";
    container.appendChild(divContainer);
  } else {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    checkMessage.style.color = "red";
    checkMessage.textContent = "es invalida";
    container.appendChild(divContainer);
  }
}
const clickButton = document.getElementById("button");

clickButton.addEventListener("click", llamarValidator);

console.log(validator);
