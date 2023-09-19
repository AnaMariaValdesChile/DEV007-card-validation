# Card Validation

## INTRODUCCION

Esta web tiene como proposito Validar una tarjeta de Credito!

- La idea surge de la necesidad que ocurre en un condominio de departamentos, cuando los ocupantes necesitan usar una instalacion comun (canchas, quincho, gimnasio, piscina, sala de eventos ) y deben dejar una garantia en el caso de que algo se heche a perder. Seria mas eficaz, para la debida reserva, que el ocupante tenga ingrese una tarjeta de credito como garantia, y en el caso de que se haya roto o hechado a perder algo de estas instalaciones luego de que este lo haya usado, se le hace cobro del monto justo, sin pagar mas ni menos.

## FUNCIONALIDAD (para Desarrolladoras)

Este es una web que usa dos funciones basicamente:

#### 1-IsValid para la validacion de la tarjeta de credito. (usando algoritmo de Lunh)

```javascript
  isValid: function (creditCard) {

    const array = creditCard.split("");   //CREAR UN AGGREGLO CON LOS DIGITOS INGRESADOS
    const arrayReverse = array.reverse();  //ORDENAR EL ARREGLO ALREVEZ
    const nuevoArray = [];
    const nuevoArray2 = [];

    if (creditCard === "" || creditCard === "e") {      //NO PERMITE UN STRING VACIO O LETRA "e"
      document.getElementById("mensaje").innerHTML = "Debe ingresar un numero de tarjeta valido".fontcolor('blue')  //MENSAJE DE ERROR

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

  }
```

#### 2-Maskify para esconder los primeros digitos de tu tarjeta luego de ingresada.

```javascript
  maskify: function (creditCard) {

    const arrayCreditCard = creditCard.split("");     //RECIVE UN STRING Y LO CONVIERTE A ARRAY
    const array2CreditCard = []


    if (4 < creditCard.length) {
      for (let k = 0; k < arrayCreditCard.length; k++) {  //RECORRE EN ARREGLO
        if (k <= (arrayCreditCard.length - 5)) {  //CONDICION PARA TODOS LOS NUMERO DEJANDO 4 SIN ACCIONAR
          arrayCreditCard[k] = "#";  //LOS CONVERTIRA A #
          array2CreditCard.push(arrayCreditCard[k]) //LOS PONE EN UN NUEVO ARRAY
        } else
          array2CreditCard.push(arrayCreditCard[k]) //DEJA LOS ULTIMOS 4 SIN MODIFICAR Y LOS PONE EN EL ARRAY
      }
      const enmascarado= array2CreditCard.reduce((a, b) => a + b) //CONCATENA LOS DIGITOS DEL ARRAY
      return enmascarado;  //DEVUELVE EL NUMERO ENMASCARADO
    } else {
      return creditCard; // SI ES 4 O MENOS LO DEVUELVE IGUAL
    }
  }
}
```

# Links Documentacion y Videos

- [Fork](https://desarrolloweb.com/articulos/fork-git)

- [Extensiones visual studio](https://www.youtube.com/watch?v=Y2WlJJ3Jjlk&ab_channel=EDteam)

- [Input type number](https://www.coderbox.net/blog/permitir-solo-numeros-en-un-campo-de-texto-con-javascript/)

- [Como funciona if else](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else)

- [Como invertir un numero en JS](https://devxdev.net/invertir-numero-javascript/)

- [Separar los digitos de un numero](https://www.youtube.com/watch?v=TZvyd45ORJQ&ab_channel=JohnOrtizOrdo%C3%B1ez)

- [Escuchar lo que hace html para enlasar con javascript](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)

- [Tipos de input](https://www.youtube.com/watch?v=u1JRC24rUfk&ab_channel=KikoPalomares)

- [Funcionalidad onclick y eventlistener](https://www.freecodecamp.org/espanol/news/boton-html-onclick-tutorial-de-evento-de-clic-en-javascript/)

- [Organizar al revez elementos de un array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

- [Posicion de elemento en un arreglo](<https://www.freecodecamp.org/espanol/news/el-manual-de-arreglos-en-javascript/#:~:text=El%}20m%C3%A9todo%20de%20arreglo%20indexOf,m%C3%A9todo%20indexOf()%20regresa%20%2D1%20.>)

- [Reconocer numero impares en JS](https://www.forosdelweb.com/f13/reconocer-numeros-impares-javascript-763675/)

- [Convertir numero a string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)

- [Convertir string a numero](<https://keepcoding.io/blog/como-convertir-un-string-en-numero-en-javascript/#:~:text=Convertir%20string%20a%20n%C3%BAmero%20JavaScript%20con%20parseInt(),-Por%20otra%20parte&text=Esta%20instrucci%C3%B3n%20convierte%20directamente%20un,entero%20m%C3%A1s%20cercano%20al%20decimal.>)

- [Sumar elementos de un array](https://es.stackoverflow.com/questions/248429/sumar-elementos-de-un-array-en-javascript)

- [Poner un mensaje luego de precionado el boton en Html](https://www.youtube.com/watch?v=CdOO-Z4SgYY&ab_channel=ProfesorDiegoNogueira)

- [Cambiar los digitos y remplazarlos por # ](https://gist.github.com/ahmadalibaloch/ec97aaebf12853b018239aa05f40dea9)

- [Tipos de addeventlistener](http://www.mywonderland.es/curso_js/addevent/index.html)

- [Ayuda con diseño](https://dribbble.com/)

- [Desactivar las flechas de los inputs numbers](https://www.diariodeunprogramador.net/desactivar-las-flechas-de-los-inputs-numbers/)

- [Tipos de margenes y bordes Css](https://www.lawebera.es/xhtml-css/margen-relleno-bordes-de-capas-con-css-html.php#:~:text=En%20el%20c%C3%B3digo%20CSS%2C%20el,se%20le%20determina%20el%20margen.)

- [Como poner un div al lado de otro](https://donestandares.wordpress.com/2008/01/23/colocar-un-div-junto-de-otro-seguimos-con-los-cursos/)

- [Como poner un div al lado de otro opcion 2](https://uniwebsidad.com/libros/css-avanzado/capitulo-3/selector-de-hijos)

- [Codigos colores CSS](https://htmlcolorcodes.com/es/)

- [Como centrar un div](https://rafaelneto.dev/blog/como-centrar-div/)

- [Estilo de input](https://www.arsys.es/blog/campos-input-texto-css)

- [Selectror padres e hijos CSS](https://uniwebsidad.com/libros/css-avanzado/capitulo-3/selector-de-hijos)

- [Cambiar de color a un string con javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/fontcolor)

- [Dos funciones en un addeventlistener](https://lenguajejs.com/javascript/eventos/addeventlistener/)

- [Imagen al 100% CSS](https://www.freecodecamp.org/espanol/news/tutorial-de-imagenes-responsivas-en-css-como-hacer-que-las-imagenes-sean-responsivas-con-css/#:~:text=Para%20hacer%20que%20una%20imagen,las%20absolutas%2C%20como%20los%20p%C3%ADxeles.)

- [Banner](https://www.youtube.com/watch?v=TpsTGGsyREQ&ab_channel=J%26GProyectosWeb)

### Web APIs

- [✔] **Uso de selectores del DOM**

    <details><summary>Links</summary><p>

  - [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  - [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  - [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
  </p></details>

- [✔] **Manejo de eventos del DOM (listeners, propagación, delegación)**

    <details><summary>Links</summary><p>

  - [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  - [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  - [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  - [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
  </p></details>

- [✔] **Manipulación dinámica del DOM**

    <details><summary>Links</summary><p>

  - [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  - [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  - [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  - [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  - [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  - [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
  </p></details>

### JavaScript

- [✔] **Tipos de datos primitivos**

    <details><summary>Links</summary><p>

  - [Valores primitivos - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures#valores_primitivos)
  </p></details>

- [✔] **Strings (cadenas de caracteres)**

    <details><summary>Links</summary><p>

  - [Strings](https://curriculum.laboratoria.la/es/topics/javascript/06-strings)
  - [String — Cadena de caracteres - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
  </p></details>

- [✔] **Variables (declaración, asignación, ámbito)**

    <details><summary>Links</summary><p>

  - [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  - [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
  </p></details>

- [✔] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

    <details><summary>Links</summary><p>

  - [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  - [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
  </p></details>

- [✔] **Uso de bucles/ciclos (while, for, for..of)**

    <details><summary>Links</summary><p>

  - [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  - [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
  </p></details>

- [✔] **Funciones (params, args, return)**

    <details><summary>Links</summary><p>

  - [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  - [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  - [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  - [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
  </p></details>

- [✔] **Pruebas unitarias (unit tests)**

    <details><summary>Links</summary><p>

  - [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
  </p></details>

- [✔] **Módulos de ECMAScript (ES Modules)**

    <details><summary>Links</summary><p>

  - [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  - [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
  </p></details>

- [✔] **Uso de linter (ESLINT)**

- [✔] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [✔] **Git: Instalación y configuración**

- [✔] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [✔] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [✔] **GitHub: Despliegue con GitHub Pages**

    <details><summary>Links</summary><p>

  - [Sitio oficial de GitHub Pages](https://pages.github.com/)
  </p></details>

### Centrado en el usuario

- [✔] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [✔] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [✔] **Seguir los principios básicos de diseño visual**
