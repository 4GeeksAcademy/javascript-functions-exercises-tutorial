<!-- hide -->
<div align="center">

# Tutorial para Practicar Funciones de Javascript

<img width="560" alt="Portada del tutorial: las palabras Learn How to use FUNCTIONS junto al logo amarillo de JavaScript y el icono de una mano pulsando un botón" src="https://raw.githubusercontent.com/4GeeksAcademy/javascript-functions-exercises-tutorial/master/.learn/assets/preview.png">

[![Tutorial certificado](https://img.shields.io/badge/4Geeks_Academy-Tutorial_certificado-2563eb)](https://4geeks.com/es/interactive-exercise/javascript-functions-exercises-tutorial-es)
[![Autocorregido con LearnPack](https://img.shields.io/badge/LearnPack-10_ejercicios_autocorregidos-2563eb)](https://github.com/learnpack/learnpack)
[![Abrir en GitHub Codespaces](https://img.shields.io/badge/Abrir_en-GitHub_Codespaces-fb5a1f)](https://codespaces.new/?repo=4GeeksAcademy/javascript-functions-exercises-tutorial)

Lee estas instrucciones en [🇺🇸 inglés](https://github.com/4GeeksAcademy/javascript-functions-exercises-tutorial/blob/HEAD/README.md)

</div>
<!-- endhide -->

Este tutorial de LearnPack tiene 11 carpetas de ejercicios sobre funciones en JavaScript: una pantalla de bienvenida y 10 retos que se corrigen solos con Jest sobre Node.js 22. Practicarás declarar y llamar funciones, los parámetros, la instrucción `return`, las funciones anónimas, las funciones flecha y `.sort()`. Su dificultad es fácil, dura unas 5 horas y cada ejercicio viene con instrucciones en español y en inglés.

<!-- hide -->
## 📋 Sobre este tutorial

- **Dificultad:** fácil, pensado para quien ya escribe variables y algún `if` pero nunca ha escrito una función.
- **Duración estimada:** 5 horas.
- **Tecnologías:** JavaScript, Node.js.
- **Ejercicios:** 11 carpetas, 10 de ellas con fichero de test automático.
- **Corrección:** automática, con Jest 29.7.0 y `rewire` para leer las variables de tu fichero.
- **Videosoluciones:** los 10 ejercicios corregidos enlazan un vídeo explicativo en español; 4 lo tienen también en inglés.
- **Idiomas:** cada ejercicio incluye `README.md` y `README.es.md`.
<!-- endhide -->

## 🎯 ¿Qué vas a aprender?

El tutorial recorre lo esencial de las funciones en JavaScript, una idea por ejercicio:

- **Qué es realmente una función:** un trozo de código encerrado entre llaves que escribes una vez y reutilizas tantas veces como quieras.
- **Declarar no es llamar:** una función no hace nada hasta que alguien la invoca, y el intérprete solo sabe que existe cuando ya ha sido definida.
- **Parámetros y argumentos:** cuántos declarar, por qué conviene ponerles nombres descriptivos y cómo entran los valores en el cuerpo de la función.
- **La instrucción `return`:** por qué casi toda función debería devolver algo y cómo eso te permite encadenar el resultado de una función dentro de otra.
- **El scope:** lo que vive dentro de las llaves es local, lo que vive fuera es global.
- **Funciones anónimas:** funciones sin nombre que solo puedes usar si las guardas en una variable, del tipo `let multi = function(a, b) { ... }`.
- **Funciones flecha:** la sintaxis `=>`, por qué existe y cómo evita tener que usar `.bind()` cuando más adelante llegues a React.
- **Métodos propios de los arrays:** usar `.sort()` dentro de tu propia función para devolver una lista de nombres en orden alfabético.
- **Imprimir en la consola:** `console.log()` como herramienta para ir viendo qué devuelve una función.

## 👀 ¿Qué vas a construir?

Cada ejercicio es un pequeño programa de Node.js que completas dentro de `app.js`. Estos son los 10 que se corrigen:

- **`01` Hello World:** llamar a `console.log()` una sola vez para que la consola imprima `Hello World`.
- **`02` What is a Function:** la función `sum()` ya está escrita; llámala con `3445324` y `53454423` y guarda el resultado, `56899747`, en una variable llamada `superduper`.
- **`03` Calling a Function:** llamar tres veces a la función `calculateArea()`, ya escrita, una por cada figura, y guardar los resultados en `squareArea1`, `squareArea2` y `squareArea3`.
- **`04` Defining VS Calling a Function:** escribir `multi` desde cero para que reciba dos números y devuelva su multiplicación. Se corrige con `multi(3, 6)` y `multi(4, 12)`, y el fichero ya la llama con `multi(7, 53812212)`.
- **`05` Anonymous Functions:** aquí `multi` es una función anónima guardada en una variable. Úsala para imprimir la multiplicación de `324234` por `47`, que da `15238998`.
- **`06` Arrow Function:** aquí `multi` llega como declaración `function` tradicional; hay que reescribirla con sintaxis de flecha. La salida debe ser idéntica, pero la palabra `function` tiene que desaparecer del fichero.
- **`07` Functions Should Return:** te dan `dollarToEuro()` y `euroToYen()`. Encadénalas para convertir 137 dólares a yenes e imprimir el resultado, `15137.609500000002`.
- **`08` Function Parameters:** escribir `renderPerson()` con cinco parámetros para que devuelva la frase `Bob is a 23 years old male born in 05/22/1983 with green eyes`.
- **`09` Array Methods:** escribir `sortNames()` para que reciba un array de nombres, lo ordene con `.sort()` y devuelva el array ordenado.
- **`10` Remove Vowels:** escribir una función flecha llamada `rapid` que recorra un texto, elimine todas las vocales y ponga el resto en mayúsculas, de modo que `rapid("Wonderful")` devuelva `WNDRFL`.

Estas son las tres figuras del ejercicio `03` y el motivo de que haya que llamar a `calculateArea()` con `(4, 4)`, `(2, 2)` y `(5, 5)`:

![Tres cuadrados dibujados uno al lado del otro con sus medidas escritas en los lados: un primer cuadrado de 4 por 4 pulgadas, otro más pequeño de 2 por 2 pulgadas y uno mayor de 5 por 5 pulgadas](https://raw.githubusercontent.com/4GeeksAcademy/javascript-functions-exercises-tutorial/master/.learn/assets/call-a-function.png)

## 🎓 ¿Qué necesitas antes de empezar?

- **Sintaxis básica de JavaScript:** declarar variables con `let` o `const` y entender un `if` sencillo. El ejercicio `01` arranca en `console.log()`, así que no se da por sabido nada más.
- **Ninguna experiencia previa con funciones:** la definición, la sintaxis, los parámetros y el `return` se enseñan desde cero dentro del propio tutorial.
- **Nada que instalar si usas Codespaces:** el contenedor ya instala por ti Node.js 22, Jest y la CLI de LearnPack.
- **Node.js si lo ejecutas en local:** todos los ejercicios corren sobre Node, aquí no hay navegador, ni HTML, ni DOM.

## ✅ ¿Cómo funciona la corrección automática?

10 de las 11 carpetas tienen fichero de test: nueve se llaman `tests.js` y el de `07-Function-that-returns` se llama `test.js`. Solo `00-Welcome`, que es la pantalla de bienvenida, no tiene. Al pulsar `Run`, LearnPack ejecuta ese fichero con Jest 29.7.0 y te enseña exactamente qué comprobación ha fallado.

Los tests miran tres cosas distintas, y saber cuál se ha roto te ahorra mucho tiempo:

1. **Lo que has impreso.** `console.log` se sustituye por un mock, así que los tests pueden contar cuántas veces lo has llamado y comparar el valor exacto que recibió.

2. **Tus variables y funciones por su nombre.** El test carga `app.js` con `rewire` y saca los valores de dentro, así que nombres como `superduper`, `squareArea1`, `multi`, `renderPerson`, `sortNames` o `rapid` tienen que coincidir al pie de la letra.

3. **El código fuente de tu `app.js`.** Varios tests leen el fichero como texto plano y le pasan una expresión regular. Así es como el ejercicio `09` exige `.sort(` y el `10` exige a la vez `const rapid = ... =>` y un bucle `for`.

> 💡 La corrección es estricta a propósito, pero tómala como una guía y no como un juez. Si un ejercicio te bloquea, abre el menú, sigue adelante y vuelve después.

## 💡 ¿Qué errores conviene evitar?

1. **Imprimir cuando el ejercicio espera un `return`.** En el `04`, el `08`, el `09` y el `10` la línea del `console.log()` ya viene escrita al final de `app.js`. Si tu función termina con un print en vez de con `return`, devuelve `undefined` y las comprobaciones fallan aunque la consola se vea bien.

2. **Escribir la palabra `function` en el ejercicio `06`.** El test pasa la regex `/function/gm` por todo el fichero y falla si aparece en cualquier sitio, comentarios incluidos. Además comprueba que `multi.prototype` sea `undefined`, así que solo pasa una función flecha de verdad.

3. **Declarar `rapid` con `let` en el ejercicio `10`.** La expresión regular espera `const rapid = ... =>`, y otro test exige un bucle `for`, de modo que resolverlo con `replace()` y sin bucle tampoco pasa.

4. **No dejar los números literales en el código.** Los ejercicios `02`, `03` y `05` buscan en tu fichero las llamadas tal cual: `sum(3445324, 53454423)`, `calculateArea(4, 4)`, `calculateArea(2, 2)`, `calculateArea(5, 5)` y `multi(324234, 47)`. Calcular el resultado a mano y asignarlo directamente no cuenta.

5. **Dejarte `console.log()` de depuración.** Los ejercicios `01`, `05`, `06`, `07` y `08` comprueban que la consola se llamó exactamente una vez. Un print olvidado tumba una solución que por lo demás es correcta.

6. **Devolver un string donde se espera un número.** Los ejercicios `05` y `06` comparan contra el número `15238998`, así que envolverlo en un template literal o concatenarle cualquier texto hace que la comparación falle.

7. **Cambiar la frase o el orden de los parámetros en el `08`.** La llamada que ya viene en el fichero es `renderPerson('Bob', '05/22/1983', 'green', 23, 'male')`, es decir: nombre, fecha de nacimiento, color de ojos, edad y género. La frase se compara carácter a carácter, incluidas las palabras `is a`, `years old`, `born in` y `with green eyes`.

## ❓ Preguntas frecuentes

### ¿Tengo que instalar algo para empezar?

No. Al abrir el repositorio en GitHub Codespaces obtienes un contenedor que instala solo Node.js 22, Jest 29.7.0 y la CLI de LearnPack, y los ejercicios se abren dentro de VS Code por su cuenta. La instalación local es opcional y solo necesita Node.js y un par de comandos en la terminal.

### ¿Cuánto se tarda en terminar los 10 ejercicios?

El paquete está estimado en 5 horas. Los primeros son ejercicios de dos minutos alrededor de `console.log()` y de llamar a una función ya escrita; los tres últimos (`08` Function Parameters, `09` Array Methods y `10` Remove Vowels) son pequeños algoritmos donde se va la mayor parte del tiempo.

### ¿Qué diferencia hay entre una función normal, una anónima y una flecha?

Una función normal tiene nombre propio: `function multi(a, b) { return a * b; }`. Una anónima no lo tiene, así que solo puedes usarla si la guardas en una variable: `let multi = function(a, b) { return a * b; }`. Una función flecha es la forma corta de esa segunda, `const multi = (a, b) => a * b`, y no crea su propio `this`, que es la razón de que no necesite `.bind()`. Los ejercicios `04`, `05` y `06` recorren la misma multiplicación en los tres estilos: en el `04` la escribes tú, en el `05` te la dan ya hecha como función anónima y en el `06` la conviertes en flecha.

### ¿Por qué falla el ejercicio si la salida de la consola parece correcta?

Porque varios tests ni siquiera miran la consola. Unos leen tu código fuente con una expresión regular y otros cargan tus variables con `rewire` y llaman a tu función con valores que tú no probaste, como `multi(4, 12)` en el ejercicio `04` o `rapid("Wonderful")` en el `10`. Lee el nombre de la comprobación que falló: ahí está la pista de cuál de los tres controles se rompió.

### ¿Están los ejercicios y los vídeos en español?

Sí. Las 11 carpetas incluyen `README.md` y `README.es.md`, y puedes cambiar de idioma desde el menú de ejercicios sin perder el progreso. La versión en español enlaza un vídeo explicativo para los 10 ejercicios corregidos; la inglesa enlaza 4, los de los ejercicios `01`, `02`, `04` y `05`.

### ¿Cuesta algo y de quién es el código que escribo?

Acceder a este repositorio y a sus ejercicios no cuesta nada, y lo que escribas dentro de `app.js` es tuyo. El contenido del tutorial en sí no es open source: se publica con todos los derechos de propiedad intelectual reservados, lo que no permite republicarlo ni redistribuirlo. El texto completo está en [LICENSE.md](https://github.com/4GeeksAcademy/javascript-functions-exercises-tutorial/blob/HEAD/LICENSE.md).

<!-- hide -->
## 📚 Tutoriales relacionados

Este paquete es el tercer paso de la serie interactiva de JavaScript:

1. [JavaScript para principiantes](https://4geeks.com/es/interactive-exercise/ejercicios-javascript-para-principiantes)
2. [Arrays y bucles](https://4geeks.com/es/interactive-exercise/javascript-array-loops-exercises-es)
3. **Funciones de JavaScript** ← estás aquí
4. [Domina JavaScript practicando](https://4geeks.com/es/interactive-exercise/master-javascript-exercises-es)

## 🚀 ¿Cómo empezar?

Lo más rápido es [abrirlo en GitHub Codespaces](https://codespaces.new/?repo=4GeeksAcademy/javascript-functions-exercises-tutorial). El contenedor instala todo y los ejercicios arrancan solos dentro de VS Code.

Si no arrancan automáticamente, escribe esto en la terminal:

```bash
learnpack start
```

También puedes abrir el paquete en [Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/javascript-functions-exercises-tutorial). Usa el menú superior para moverte entre ejercicios y para cambiar las instrucciones entre español e inglés.

## 💻 Instalación local

Clona el repositorio y sigue estos pasos:

1. Instala LearnPack y su plugin compilador de Node.js. Necesitas tener Node.js instalado antes:

   ```bash
   npm i @learnpack/learnpack -g
   learnpack plugins:install @learnpack/node
   ```

2. Arranca el tutorial desde la misma carpeta donde está `learn.json`:

   ```bash
   learnpack start
   ```

Si algo falla, la [guía rápida de LearnPack para estudiantes](https://4geeks.com/docs/learnpack/quickstart-for-learners) repasa la instalación entera.

## 📝 ¿Cómo están organizados los ejercicios?

Cada una de las 10 carpetas corregidas dentro de `exercises/` es un pequeño programa de Node.js con estos ficheros:

- **`app.js`:** el fichero que editas y el punto de entrada que se ejecuta.
- **`README.md`:** las instrucciones en inglés.
- **`README.es.md`:** las mismas instrucciones en español.
- **`tests.js`:** el test de Jest que corrige tu solución, llamado `test.js` en el ejercicio `07`. No hace falta que lo abras.
- **`solution.hide.js`:** una solución que funciona, oculta por LearnPack hasta que la pides.

`00-Welcome` es la excepción: es solo la pantalla de bienvenida y no contiene más que los dos `README`.

## 🤝 Colaboradores

Gracias a estas personas maravillosas ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

1. [Alejandro Sánchez (alesanchezr)](https://github.com/alesanchezr): programador 💻, idea 🤔, tests ⚠️, revisión de pull requests 👀, creación del tutorial ✅, documentación 📖

2. [Paolo (plucodev)](https://github.com/plucodev): reporte de bugs 🐛, programador 💻, traducción 🌎

3. [Marco Gómez (marcogonzalo)](https://github.com/marcogonzalo): reporte de bugs 🐛, traducción 🌎

4. [Luis Rivera (Luis846)](https://github.com/Luis846): programador 💻, tests ⚠️

Puedes ver la lista completa en el [gráfico de colaboradores](https://github.com/4GeeksAcademy/javascript-functions-exercises-tutorial/graphs/contributors). Este proyecto sigue la especificación [all-contributors](https://github.com/kentcdodds/all-contributors) y toda contribución es bienvenida. Si encuentras un error o una errata, repórtalo o manda un pull request.
<!-- endhide -->
