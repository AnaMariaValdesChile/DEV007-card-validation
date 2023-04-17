### Mi Primer Proyecto - Card Validation

# PARTE VISUAL

- La pagina web cuenta con un Html 
- Contiene una parte que es un Titulo 
- Contiene una Imagen como logo de una tarjeta, que ademas tiene la funcionalidad de recargar la pagina cuando la precionas. 
- Contiene una parte que es un Imput para ingresar el numero de Tarjeta.
- Contiene una Boton que es el que ejecutara la accion (funcion) cuando se le de Click.
- En la parte de abajo contiene un Banner donde se pueden visualizar 3 imagenes (fotografias), se se cambian durante 10 segundo y se repite infinitamente.

**Table of Contents**

#### <abbr title="Hyper Text Markup Language">HTML</abbr> y Css

![](https://github.com/AnaMariaValdesChile/DEV007-card-validation/blob/main/Screenshot_1.png?raw=true)

#### Titulo

![](https://github.com/AnaMariaValdesChile/DEV007-card-validation/blob/main/titulo.png?raw=true)

#### Icono Tarjeta
![](https://github.com/AnaMariaValdesChile/DEV007-card-validation/blob/main/IconoTarjeta&Refresh.png?raw=true)

#### Input Type Text
![](https://github.com/AnaMariaValdesChile/DEV007-card-validation/blob/main/InputTypeText.png?raw=true)

#### Boton Validar
![](https://github.com/AnaMariaValdesChile/DEV007-card-validation/blob/main/Boton.png?raw=true)

#### Banner

![](https://github.com/AnaMariaValdesChile/DEV007-card-validation/blob/main/banner01.png?raw=true)
![](https://github.com/AnaMariaValdesChile/DEV007-card-validation/blob/main/banner03.png?raw=true)
![](https://github.com/AnaMariaValdesChile/DEV007-card-validation/blob/main/benner02.png?raw=true)

# INTRODUCCION

Esta web tiene como proposito Validar una tarjeta de Credito!
- La idea surge de la necesidad que ocurre en un condominio de departamentos, cuando los ocupantes necesitan usar una instalacion comun (canchas, quincho, gimnasio, piscina, sala de eventos ) y deben dejar una garantia en el caso de que algo se heche a perder.  Seria mas eficaz, para la debida reserva, que  el ocupante tenga ingrese una tarjeta de credito como garantia, y en el caso de que se haya roto o hechado a perder algo de estas instalaciones luego de que este lo haya usado, se le hace cobro del monto justo, sin pagar mas ni menos.

# FUNCIONALIDAD  (para la Usuaria)

#### 1-INGRESO A LA WEB
L@s usuari@s pueden dirigirse a la pagina y encontrar en su titulo la indicacion: "para reservar valide su tarjeta de credito".

![](https://github.com/AnaMariaValdesChile/DEV007-card-validation/blob/main/intro.png?raw=true)

#### 2-INGRESAR EL NUMERO DE TARJETA

- En la barra de color blanco pueden ingresar el numero se su tarjeta de credito, esta puede ser solo en numeros, YA QUE ESTAN BLOQUEADAS LAS LETRAS.

![](https://github.com/AnaMariaValdesChile/DEV007-card-validation/blob/main/ingreso-numero-tarjeta.png?raw=true)

#### 3-VALIDAR EL NUMERO DE TARJETA

- A la derecha de la barra para ingresar el numero encontrarar el boton "validar", el cual tomara los datos de tu tarjeta y los pasara por el sistema interno.

![](https://github.com/AnaMariaValdesChile/DEV007-card-validation/blob/main/boton-validar.png?raw=true)

#### 4-RESULTADO VALIDACION

- Si tu tarjeta es valida, te aparecera a cambio de esta barra y este boton, un mensaje donde te apareceran los primeros numeros de tu tarjeta bloqueados por un #, y un mensaje en color verde que dice "Su tarjeta SI es valida.

![](https://github.com/AnaMariaValdesChile/DEV007-card-validation/blob/main/tarjeta-valida.png?raw=true)

- Si tu tarjeta NO es valida, te aparecera a cambio de esta barra y este boton, un mensaje donde te apareceran los primeros numeros de tu tarjeta bloqueados por un #, y un mensaje en color rojo que dice "Su tarjeta NO es valida.

![](https://github.com/AnaMariaValdesChile/DEV007-card-validation/blob/main/tarjeta-no-valida.png?raw=true)

- Si no se ingresa nada, o se ingresa un digito valor "e", te aparecera, a cambio de la barra y el boton, el siguiente mensaje en color azul: "Debe ingresar un numero de tarjeta valido", por lo que tendras que refrescar la pagina.

![](https://github.com/AnaMariaValdesChile/DEV007-card-validation/blob/main/no-valido.png?raw=true)

- A la derecha de la barra blanca para escribir, encontraras un Icono que representa a una tarjeta de credito, el cual ayuda a la usuaria a entender sin leer que en la siguiente barra se ingresa el numero de tarjeta. Este icono ademas cumple la funcion de Refrescar la pagina si le das click.

![](https://github.com/AnaMariaValdesChile/DEV007-card-validation/blob/main/refrescar.png?raw=true)

- Si el numero es menor o igual a 4, el numero no se enmacasrara con #, sino que devolvera el numero tal cual.

![](https://github.com/AnaMariaValdesChile/DEV007-card-validation/blob/main/numero-menor-igual-cuatro.png?raw=true)


# FUNCIONALIDAD  (para Desarrolladoras)


Este es una web que usa dos funciones basicamente para la validacion de la tarjeta de credito.

- isValid:  Esta funcion se confecciono basandose en el algoritmo de Lunh.

```javascript
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

  }
```
- maskify: Esta funcion busca esconder los primeros digitos de tu tarjeta luego de ingresada.

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


# Tarjeta de crédito válida

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Hito: Criterios de aceptación mínimos del proyecto](#4-hito-criterios-de-aceptación-mínimos-del-proyecto)
* [5. Hito Opcional: Mostrar la franquicia de tarjeta](#5-hito-opcional-mostrar-la-franquicia-de-tarjeta)
* [6. Consideraciones técnicas](#6-consideraciones-técnicas)
* [7. Objetivos de aprendizaje](#7-objetivos-de-aprendizaje)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Para considerar Project Feedback](#9-para-considerar-project-feedback)

***

## 1. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://user-images.githubusercontent.com/12631491/217016579-865679e0-0949-4afd-b13f-d2ebba7a0c54.png)

## 2. Resumen del proyecto

En este proyecto tendrás que construir una aplicación web que le permita a un
usuario validar el número de una tarjeta de crédito. Además, tendrás que
implementar funcionalidad para ocultar todos los dígitos de una tarjeta menos
los últimos cuatro.

La temática es libre. Tú debes pensar en qué situaciones de la vida real se
necesitaría validar una tarjeta de crédito y pensar en cómo debe ser esa
experiencia de uso (qué pantallas, explicaciones, mensajes, colores, ¿marca?)
etc.

Como continuación del proyecto de preadmisión, volverás a trabajar sobre
fundamentos de JavaScript, incluyendo conceptos como variables, condicionales,
y funciones, así como eventos y manipulación básica del DOM, fundamentos de
HTML y CSS. Mientras desarrollas este proyecto, te familiarizarás con nuevos
conceptos también.

### Los objetivos generales de este proyecto son los siguientes

* Trabajar en base a un boilerplate, la estructura básica de un proyecto en
  distintas carpetas (a través modulos en JS).
* Conocer las herramientas de mantenimiento y mejora del código (linters y
  pruebas unitarias).
* Aprender sobre objetos, estructuras, métodos e iteración (bucles)
  en JavaScript
* Implementar control de versiones con git (y la plataforma github)

## 3. Consideraciones generales

* Este proyecto lo resolvemos de manera **individual**.
* El rango de tiempo estimado para completar el proyecto es de 1 a 3 Sprints.
* Enfócate en aprender y no solamente en "completar" el proyecto.
* Te sugerimos que no intentes saberlo todo antes de empezar a codear.
  No te preocupes demasiado ahora por lo que _todavía_ no entiendas.
  Irás aprendiendo.

## 4. Hito: Criterios de aceptación mínimos del proyecto

Estos son los requisitos que tu proyecto debe que cumplir para asegurar que tu
trabajo cubra los objetivos principales.

**1. Una interfaz que debe permitir a la usuaria:**

* Insertar un numero (texto) que quieres validar. Usa solo caracteres numéricos
  (dígitos) en la tarjeta a validar [0-9].  
* Ver si el resultado es válido o no.  
* Ocultar todos los dígitos del número de tarjeta a exepción de los últimos
  4 caracteres.  
* No debes poder ingresar un campo vacío.  

**2. Pruebas unitarias de los métodos.**  
Los metódos de `validator` (`isValid` y `maskify`) deben tener cobertura con
pruebas unitarias.

**3. Código de tu proyecto subido a tu repo e interfaz "desplegada".**  
El código final debe estar subido en un repositorio en GitHub. La interfaz o
pagina web, debe ser "desplegada" (accesible públicamente online) usando
GitHub Pages.
  
**4. Un README que contiene una definición del producto.**  
En el README cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso
para definir el producto final a nivel de experiencia y de interfaz.  
Estas preguntas sirven como guía:

* Quiénes son los principales usuarios de producto.
* Cuáles son los objetivos de estos usuarios en relación con tu producto.
* Cómo crees que el producto que estás creando está resolviendo sus problemas.

Con estos requisitos cumplidos puedes
[considerar agendar un Project Feedback con unx coach.](#9-para-considerar-project-feedback)

## 5. Hito Opcional: Mostrar la franquicia de tarjeta

Las partes opcionales tienen como intención permitirte profundizar un poco más
sobre los objetivos de aprendizaje del proyecto. Todo en la vida tiene pros y
contras, decide sabiamente si quieres invertir el tiempo en profundizar/
perfeccionar o aprender cosas nuevas en el siguiente proyecto.

En hito 2 puedes además de validar si el número de la
tarjeta es válida, mostrar la [franquicia](https://es.wikipedia.org/wiki/N%C3%BAmero_de_tarjeta_bancaria)
de la tarjeta (ej: Visa, MasterCard, etc)
usando estas [reglas de validación](https://stevemorse.org/ssn/cc.html).
Si escribes un nuevo método para eso, hay que hacer pruebas unitarias.

## 6. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript. En
este proyecto NO está permitido usar librerías o frameworks, solo JavaScript
puro también conocido como Vanilla JavaScript.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene un _boilerplate_ con tests (pruebas). Un _boilerplate_
es la estructura basica de un proyecto que sirve como un punto de partida con
archivos inicial y configuración basica de dependencias y tests.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El boilerplate que les damos contiene esta estructura:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── validator.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── validator.spec.js
```

### Descripción de scripts / archivos

* `README.md`: debe explicar la información necesaria para el uso de tu aplicación
  web, así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/style.css`: este archivo debe contener las reglas de estilo. Queremos que
  escribas tus propias reglas, por eso NO está permitido el uso de frameworks de
  CSS (Bootstrap, Materialize, etc).
* `src/validator.js`: acá debes implementar el objeto `validator`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`validator`) debe contener dos
  métodos:
  - `validator.isValid(creditCardNumber)`: `creditCardNumber` es un `string`
     con el número de tarjeta que se va a verificar. Esta función debe retornar
     un `boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).
  - `validator.maskify(creditCardNumber)`: `creditCardNumber` es un `string` con
    el número de tarjeta y esta función debe retornar un `string` donde todos menos
    los últimos cuatro caracteres sean reemplazados por un numeral (`#`) o 🐱.
    Esta función deberá siempre mantener los últimos cuatro caracteres
    intactos, aún cuando el `string` sea de menor longitud.

    Ejemplo de uso

    ```js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''
    ```

* `src/index.js`: acá debes escuchar eventos del DOM, invocar
  `validator.isValid()` y `validator.maskify()` según sea necesario y
  actualizar el resultado en la UI (interfaz de usuario).
* `test/validator.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `validator.isValid()` y `validator.maskify()`.

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

***

#### Deploy

Hacer que los sitios estén publicados (o _desplegados_) para que usuarias de
la web puedan acceder a él es algo común en proyectos de desarrollo de software.

En este proyecto, utilizaremos _Github Pages_ para desplegar nuestro sitio web.

El comando `npm run deploy` puede ayudarte con esta tarea y también puedes
 consultar su [documentación oficial](https://docs.github.com/es/pages).

## 7. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

### Web APIs

- [ ] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [ ] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Tipos de datos primitivos**

  <details><summary>Links</summary><p>

  * [Valores primitivos - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures#valores_primitivos)
</p></details>

- [ ] **Strings (cadenas de caracteres)**

  <details><summary>Links</summary><p>

  * [Strings](https://curriculum.laboratoria.la/es/topics/javascript/06-strings)
  * [String — Cadena de caracteres - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
</p></details>

- [ ] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
</p></details>

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

## 8. Pistas, tips y lecturas complementarias

### Prepara tu PC para trabajar

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [VS Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://curriculum.laboratoria.la/es/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://curriculum.laboratoria.la/es/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar la versión completa de [Cmder](https://cmder.app/)
   que incluye [Git bash](https://git-scm.com/download/win).
3. Tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura.
Debes realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. Para ver la interfaz de tu programa en el navegador, usa el comando
   `npm start` para arrancar el servidor web y dirígete a
   `http://localhost:5000` en tu navegador.
8. A codear se ha dicho! :rocket:

### Recursos y temas relacionados

Súmate al canal de Slack [#project-card-validation](https://claseslaboratoria.slack.com/archives/C03LXJ10WJD)

A continuación un video de Michelle que te lleva a través del algoritmo de Luhn
y un par de cosas más que debes saber para resolver este proyecto. ¡Escúchala
con detenimiento y sigue sus consejos! :)

[![tips credit card](https://img.youtube.com/vi/f0zL6Ot9y_w/0.jpg)](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

[Link](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

Terminal y shell de UNIX:

[![Playlist de Terminal y shell de UNIX](https://img.youtube.com/vi/GB35Eyb-J4c/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Control de versiones y trabajo colaborativo con Git y GitHub:

[![Playlist de control de versiones y trabajo colaborativo](https://img.youtube.com/vi/F1EoBbvhaqU/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

Desarrollo Front-end:

* Aprende más sobre [strings](https://es.javascript.info/string),
[arreglos](https://es.javascript.info/array),
[iterar arreglos](https://dev.to/duxtech/6-maneras-de-iterar-un-array-3fbm),
[objetos](https://es.javascript.info/object) y
[como definir métodos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects#definici%C3%B3n_de_m%C3%A9todos)

Organización del Trabajo:

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.
* [Blog: cómo funciona el algoritmo de Luhn](http://www.quobit.mx/asi-funciona-el-algoritmo-de-luhn-para-generar-numeros-de-tarjetas-de-credito.html).

***

## 9. Para considerar Project Feedback

En resumen, los criterios de aceptación mínimos del proyecto para considerar
Project Feedback:

* [ ] Tiene una interfaz que permite a la usuaria saber si la tarjeta es valido
  y ocultar el numero hasta las 4 ultimos digitos.
* [ ] El proyecto será entregado incluyendo pruebas unitarios de los métodos de
  `validator` (`isValid` y `maskify`).
* [ ] El proyecto será entregado libre de _errores_ de `eslint` (_warnings_ son ok).
* [ ] El proyecto será entregado subiendo tu código a GitHub.
* [ ] La interfaz será "desplegada" usando GitHub Pages.
* [ ] El README contiene una definición del producto.
