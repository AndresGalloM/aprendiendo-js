## Aprendiendo JavaScript

#### Tipos de datos
Los tipos de datos es la característica propia que tiene un valor. En JavaScript existen los tipos de datos primitivos y los no primitivos.

**Datos primitivos:**
Los tipos de datos primitivos son inmutables y contiene un valor único:

- **`number`**: indica un valor numérico, ya sea entero o flotante (con decimales).
- **`string`**: indica una cadena de caracteres, el valor está envuelto en comillas dobles " o simples '.
- **`boolean`** indica un valor lógico binario, es decir, los valores true o false.
- **`null`**: indica un valor nulo.
- **`undefined`**: indica un valor no definido.

Existen dos tipos primitivos más: bigint y symbol, pero es un tema que aprenderás más adelante.

**Tipos no primitivos o de objeto:**
Los tipos de datos de objeto o no primitivos son los siguientes:

- **`function`**: indica una representación de función.
- **`object`**: indica una representación de objetos.

Palabra reservada **`typeof`**
- La palabra reservada typeof permite identificar el tipo de dato de un valor en JavaScript. Existe una excepción, al ejecutar typeof null, en la consola mostrará **`'object'`**, esto es un error dentro JavaScript.

------------

#### Variables
Una variable es la representación de un lugar que reservamos en memoria para guardar un valor. El valor puede ser cualquier tipo de dato, inclusive objetos o funciones.

**Declaración y asignación de variables en JavaScript:**
En JavaScript tenemos tres formas de declarar una variable las cuales son: **`var`**, **`const`** y **`let`**, seguido del nombre de la variable. Esto se denomina declaración. El uso de cada forma se vera mas adelante.

```javascript
var nombre
```
De esta manera, existirá un espacio en memoria que haga referencia a la variable nombre, pero por defecto tendrá un valor undefined.Para guardar un valor en esa variable, se utiliza el símbolo de igual ( = ) , seguido del valor. Esto se denomina asignación.

```javascript
var nombre
nombre = "JavaScript"
```

Se puede declarar y asignar en una misma línea, sin repetir el nombre de la variable. A esto se le dice inicializar una variable.

```javascript
var nombre = "JavaScript"
```

------------

#### Funciones

Las funciones son bloques de código que solucionan un problema específico para ser reutilizados. Existen dos tipos de funciones: declarativas y expresivas.

**Qué son las funciones declarativas**
En JavaScript, las funciones declarativas se las declara con la palabra reservada **`function`**.

La declaración de una función declarativa está constituido por las siguientes partes:

- La palabra reservada **`function`**.
- **El nombre de la función:** el cual será guardado como referencia en memoria.
- **Los parámetros:** están envueltas en paréntesis (), son variables propias de la función y deberán utilizarse en el contenido. Hacen referencia a los argumentos en la invocación.
- **El contenido:** está envuelto por llaves {}, contendrá las líneas de código correspondientes a la lógica del problema.
- **El valor retornado:** es un único valor que devuelve la función cuando es llamada. Se lo especifica por la palabra reservada **`return`**. Si no existe, la función devolverá un valor undefined por defecto.

```javascript
// Declaración
function suma (a,b){
    return a + b
}

// Invocación
suma(2,3)
```

**Qué son las funciones expresivas o anónimas:**
Las funciones expresivas o anónimas consisten en guardar la función en una variable. Tienen la misma declaración e invocación que las funciones declarativas. La diferencia consiste en no especificar un nombre en la función, sino que utiliza el nombre de la variable.

```javascript
// Declaración
var suma = function (a, b) {
  return a + b
}
// Invocación
var resultado = suma(2, 2)
```

------------

#### Scope

El scope es cada uno de los entornos donde las variables tienen alcance dentro del código de JavaScript. En otras palabras, determina que valor tendrá la variable dependiendo dónde se encuentre.

Imagina que pierdes algo importante (llaves, dinero, celular), comienzas a buscar este objeto por los lugares más cercanos en que te encuentras; si no lo encuentras, buscas en los lugares más lejanos y así sucesivamente hasta encontrarlo. Las llaves son las variables y tú eres JavaScript.

Si haces referencia a una variable, el motor de JavaScript buscará su declaración en el entorno más cercano, y seguirá buscando en entornos más lejanos hasta llegar a la línea de código que la variable esté declarada, pero no en viceversa. A este proceso se lo denomina cadena de scope (scope chaining).

**Qué es el scope global:**
Las variables globales son aquellas que se encuentran declaradas fuera de los bloques de código o funciones .El scope global es el entorno donde las variables globales pueden ser accedidas desde cualquier lugar de nuestro programa.

En el siguiente ejemplo, mira el código y piensa qué mostrará en consola. Una vez tengas las respuestas, abre la consola. ¿Qué sucedió?

```javascript
var nombre = "JavaScript"

function saludar(){
    console.log("Hola " + nombre)
}

saludar()
```

Con este ejemplo podemos concluir que la función **`saludar`** tiene acceso a la variable **`nombre`**. ¿Por qué? Porque la variable **`nombre`** está en un scope global.

Entonces, una variable global puede ser accedida en cualquier parte, porque el scope global es el último entorno en el que JavaScript busca una variable. Recuerda esto cuándo se hable de scope local.

**Qué es el scope local:**
Las variables locales son aquellas que se encuentran declaradas dentro de los bloques de código o funciones. El scope local es el entorno donde las variables locales solo se pueden acceder desde una función o bloque del programa.

Observa el siguiente código y piensa cuál será el resultado.

```javascript
function saludo() {
    var nombre = "Andres"
    console.log(nombre)
}

saludo()
console.log(nombre)
```

Primeramente, al invocarse la función **`saludo`** imprimirá **`"Andres"`** por consola, pero inmediatamente después, existirá un error de referencia.

Esto sucede porque la variable **`nombre` ** tiene un scope local, por lo que solo se puede acceder dentro de la misma, Esto sucede porque JavaScript no puede volver a buscar a una función que no sabe si encontrará la variable o no, teniendo en cuenta que puede haber una variedad ilimitada de funciones, ¿cuál buscar? Por eso, el alcance de una función local es el lugar donde fue declarada.

------------

#### Hoisting

Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

El código permanece igual, solo es una interpretación del motor de JavaScript. En el caso de las variables solamente sucede cuando son declaradas con **`var`**.

**Hoisting en variables declaradas con var**
Mira el siguiente código, ¿qué crees que sea el resultado del **`console.log`**?

```javascript
console.log(nombre) // undefined
var nombre = "Andres" 
```

**Hoisting en funciones:**
Mira el siguiente código, ¿qué crees que sea el resultado del console.log?

```javascript
console.log( saludar() )

function saludar() {
  return "Hola"
}
```

Las funciones siempre se mueven arriba del scope. Por lo tanto, podemos elegir donde declararlas y usarlas, aunque es buena practica hacer la declaracion siempre al inicio.

------------

#### Coerción

Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
**Coerción implícita:** es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
**Coerción explicita:** es cuando obligamos a que cambie el tipo de valor.

```javascript
var coercion = true
console.log(String(coercion)) // "true"
console.log(Number(coercion)) // 1
```

------------

#### Operadores: Asignación, Comparación y Aritméticos.

Para realizar operaciones en JavaScript es necesario conocer los diferentes tipos de operadores que necesitarás. Los tipos de operadores en el lenguaje son: aritméticos, asignación y comparación.

**Qué son los operadores aritméticos:**
Los operadores aritméticos se utilizan para efectuar operaciones matemáticas.Para realizar las operaciones básicas, como suma, resta, multiplicación y división; utiliza los siguientes operadores:

```javascript
2 + 3 // Suma
5 - 3 // Resta
4 * 2 // Multiplicación
6 / 2 // División
10 % 5 // Modulo
9 ** 4 // Potencia
```

**Qué son los operadores de comparación:**
Un operador de comparación compara dos o más valores y devuelve un valor lógico (verdadero o falso).

**Qué son los operadores de igualdad:**
Existen dos tipos de igualdad:

- **Igualdad por valor (==):** compara dos variables solamente por su valor. Por ejemplo: "3" de tipo string y 3 de tipo número son iguales.
- **Igualdad por valor y tipo de dato (===): ** compara dos variables por su valor y tipo de dato. Por ejemplo: "3" de tipo string y 3 de tipo número no son iguales. Solamente 3 y 3, ambos de tipo número son iguales.

```javascript
//Igualdad
"3" == 3 // true
3 == 3 // true

// Igualdad estricta
"3" === 3 // false
3 === 3 // true
```

**Qué son los operadores de desigualdad:**
Igualmente que los operadores de igualdad, existen dos tipos:

- **Desigualdad por valor (!=)**
- **Desigualdad por valor y tipo de dato (!==)**

```javascript
//Desigualdad
"3" != 3 // false
3 != 3 // false

// Desigualdad estricta
"3" !== 3 // true
3 !== 3 // false
```

**Qué son los operadores lógicos:**
Los operadores lógicos comparan dos o más expresiones y devuelve un valor lógico (verdadero o falso). Las expresiones son comparaciones entre valores, se utiliza en conjunto con los operadores de comparación.

**Qué es el operador disyunción lógico:**
El operador de disyunción o AND ( && ) devuelve verdadero, si y solo si ambas expresiones son verdadero. Se lee de la siguiente manera: “La expresión 1 es verdadero Y la expresión 2 es verdadero, entonces es verdadero”.

```javascript
var a = 15
var b = 5

(a >= 10) && (a <= 20) // true
(b >= 10) && (b <= 20) // false
```

**Qué es el operador unión lógico:**
El operador de unión u OR ( || ) devuelve verdadero, si y solo si, alguna expresión es verdadero. Se lee de la siguiente manera: “La expresión 1 es verdadero O la expresión 2 es verdadero, entonces es verdadero.

```javascript
var a = 15
var b = 5

(a <= 10) || (a >= 20) // false
(b <= 10) || (b >= 20) // true
```

------------

#### Condicionales

Los condicionales son estructuras de control que te permiten evaluar diferentes expresiones y realizar determinadas acciones en JavasScript.

**Cómo utilizar el condicional if en JavaScript:**
Un condicional evalúa si una expresión o condición es verdadera. Por ejemplo, si mi edad es mayor o igual que 18, puedo conducir.

```javascript
if (edad >= 18){
    console.log("Puedes conducir")
}
```

La palabra reservada **`else`** evalúa cuando la expresión del **`if`** es falsa, pero no es obligatorio colocarlo. En el ejemplo anterior, la condición contraria del **`if`** es la edad menor que 18, entonces no puedes conducir.

```javascript
if (edad >= 18){
    console.log("Puedes conducir")
} else {
    console.log("No puedes conducir")
}
```

En otras palabras, si (**`if`**) una acción (expresión) es verdadera (true) hago una acción (bloques de código). En el caso contrario (**`else`**) efectúo otra acción.

**Cómo anidar condicionales al programar:**
Has aprendido a usar un condicional, pero ¿y si tenemos varias condiciones? Entonces empleamos las palabras reservadas **`else if`** junto a la condición a ejecutar, puedes utilizar varias condiciones que necesites. Sin embargo, JavaScript evalúa la primera condición, luego a la segunda, y así sucesivamente. Esto es importante para ordenar las condiciones correctamente y no sobreescribirlas.

```javascript
if (condicion1){
   // Bloque 1
} else if (condicion2){
    // Bloque 2
} else if (condicion3){
   // Bloque 3
} else {
    // Bloque else
}
```

**Operador ternario:**
El operador ternario consiste en evaluar si una expresión es verdadera o falsa. Parecido a un condicional, pero en una línea de código. Esto sirve para evaluar una condición de manera rápida. La estructura que sigue es la siguiente y se lee como: "La condición es verdadera (**`?`**), si es así ejecuta el “Bloque verdadero”, caso contrario (**`:`**), ejecuta el “Bloque falso”.

```javascript
condicion ? Bloque verdadero : Bloque falso
```

------------

#### Switch

La estructura **`switch`** es otra manera de evaluar condiciones, la diferencia con **`if`** es que las condiciones deben ser iguales a un caso o algo específico.

**Cómo utilizar el condicional switch:**
Colocamos la palabra reservada **`switch`** y seguido de la variable o expresión a evaluar, pero sin ningún operador de comparación.

```javascript
switch (expresion) {}
```

Después colocamos cada caso con la palabra reservada case y el valor que deberá ser igual a la expresión. Seguido colocamos el bloque de código a ejecutar y al final la palabra reservada **`break`** para que no vuelva a evaluar otra condición si ya se cumplió.

```javascript
switch (expresion) {
    case 1: {
        // Bloque 1
        break
    }
    case 2: {
        // Bloque 2
        break
    }     
}
```

Finalmente, colocamos la condición por defecto con la palabra reservada **`default`** que se ejecutará si ninguno de los casos fue el correcto. Esto es semejante al bloque **`else`**.

```javascript
switch (expresion) {
  case 1: {
    // Bloque 1
    break
  }
  case 2: {
   // Bloque 2
    break
  }
  default: {
    // Bloque por defecto
  }
}
```

------------

#### Arrays

Un array es una estructura de datos que permite almacenar una serie de datos localizados por índices y separados por comas.

**Qué son los índices:**
El índice es la forma en que accedemos a los elementos de los arrays. En JavaScript, los índices empiezan desde 0, es decir, la primera posición es el índice 0. Un array se inicia mediante la sintaxis de corchetes [] y es tipo de dato objeto.
```javascript
var array = [1,2,3,4]
```

------------

#### Loops

Un bucle (loop) o ciclo repetitivo es una estructura de control que te permite realizar una o varias instrucciones mientras una condición sea verdadera.

**Existen dos tipos de ciclos repetitivos:**
- **`For`** (para)
- **`While`** (mientras)

**Qué es un ciclo for:**
Para el ciclo for conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones.

Por ejemplo, si queremos los 10 primeros números, sabemos que el ciclo se repetirá 10 veces. Si accedemos a los elementos de un array, sabemos que el ciclo se repetirá length veces.

La estructura del ciclo for es la siguiente:

```javascript
for (condición) {
    // Bloque de código
}
```

**La condición consta de tres partes:**

**Inicio:** se debe inicializar una variable que será evaluada en la expresión a comparar. Esta variable puede ser declarada dentro o fuera de la condición.
**Comparación:** es una expresión que debe cumplir la variable inicial, cuando no se cumpla, el ciclo termina.
**Pasos:** son los intervalos que cambiará la variable inicial, mientras cumpla con la expresión de comparación.

Cada una de las partes debe estar separada por un punto y coma ( ;).

**Por ejemplo, generemos los números del 1 al 10:**

**Inicio:** inicializamos una variable con el valor de 1, generalmente se utiliza i (índice) como variable para el bucle, pero no es obligatorio. En este caso usaremos **`var num = 1`**.
**Condición:** La condición será mientras sea menor o igual que 10 (num <= 10),
**Pasos:** Debemos aumentar la variable en una unidad, por lo tanto, podemos utilizar num = num +1, num += 1 o num++. Este último únicamente cuando la variable aumente una unidad.
La estructura es la siguiente:

```javascript
for (var num = 1; num <= 10; num++) {
  console.log(i)
}
```

Para el ciclo while no conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones. Aunque también se puede acoplar para que realice un determinado número de repeticiones.

Por ejemplo, si queremos que un usuario ingrese un valor mayor a 0, no sabremos cuántas veces se equivocará. También, si queremos que un programa se ejecute hasta que el usuario ingrese una opción para salir.

La estructura del ciclo while es la siguiente:

```javascript
while (condición) {
    // Bloque de código
    // Cambiar la condición para salir del bucle
}
```

En este caso la condición es una expresión lógica a evaluar, si es verdadero repite el bloque de código, si es falso el ciclo termina. Debido a esto, necesitas cambiar la variable de la condición, para que no existe un bucle infinito.

------------

#### Objetos

Un objeto es una estructura de datos que permite almacenar valores mediante **`propiedad: valor`** a través de la sintaxis de llaves ({}) y separados por comas.

En las propiedades del objeto es opcional colocar las comillas. En el caso de que haya espacios, es obligatorio.

```javascript
var objeto = {
    clave1: "valor1",
   "clave 2": "valor2",
}
```

Excepto por los primitivos y las funciones, todo es un objeto en JavaScript.

**Qué son los atributos y métodos:**
En programación orientada a objetos, un objeto es una representación de la realidad, en el cual sus características propias se definen como atributos y sus acciones se definen como métodos.

En otras palabras, los atributos son las variables y los métodos son las funciones propias de cada objeto.

Por ejemplo, definamos el objeto miAuto. Se coloca entre comillas la propiedad año porque el lenguaje no admite caracteres especiales del español. Aunque en ciertas situaciones si admite.

```javascript
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    "año": 2020,
    detalle: function () {
        console.log("Es un auto")
    }
}
```

Las propiedades **`marca`**, **`modelo`** y **`"año"`** son los atributos del objeto **`miAuto`**. La propiedad **`detalle`** es un método del objeto **`miAuto`**.

**Cómo acceder a los valores de un objeto:**
A diferencia de los arrays, únicamente es necesario saber la propiedad del objeto para acceder a su valor.

Existen dos formas para acceder al valor de un objeto:

- Mediante la notación de corchetes **`objeto["propiedad"]`**
- Mediante la notación de punto **`objeto.propiedad`**

**Cómo modificar propiedades de un objeto:**
Para modificar propiedades de un objeto, utilizamos la notación de corchetes o de punto con la propiedad específica, asignándole su nuevo valor.

Por ejemplo, modifiquemos la propiedad **`marca`**, de "Toyota" a "Ford", del objeto **`miAuto`**.

```javascript
miAuto["marca"] = "Ford"
miAuto.marca = "Ford"
```

**Cómo eliminar propiedades de un objeto:**
Para eliminar propiedades de un objeto, utilizamos la palabra reservada **`delete`** seguido de la propiedad del objeto.

Por ejemplo, eliminemos la propiedad **`marca`** del objeto **`miAuto`**.

```javascript
delete miAuto["marca"]
delete miAuto.marca
```

------------

#### Métodos de recorridos de Arrays

Existen métodos de arrays para recorrerlos, y devolver un valor o un array con nuevos resultados. Entre estos están dos muy importantes: **`map`** y **`filter`**.

Utilizaremos el siguiente array de objetos para los ejemplos de los métodos:

```javascript
var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
]
```

**Cómo utilizar el método filter:**
El método **`filter`** consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo.

El método filter recibe dos argumentos:

- La función que itera y evalúa si cada elemento del array si cumple con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto **`this`** en la función. Si se lo omite, será **`undefined`**. Recuerde que this es diferente según el lugar donde sea invocado.

```javascript
var otherArray = array.filter(function(), thisArg)
```

La función, que recibe como argumento el método **`filter`**, utiliza tres parámetros:

- El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
- El array que está iterando.

```javascript
const other = array.filter(function(element, index, array))
```

**Practiquemos el uso del método filter:**
Utilicemos el array articulos que definimos para filtrar en un nuevo array los artículos cuyo costo sea menor o igual que 500.

Entonces utilizamos el método **`filter`** que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

```javascript
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500
})

console.log(articulosFiltrados)
/* [
  { nombre: 'Libro', costo: 320 },
  { nombre: 'Teclado', costo: 500 }
] */
```

**Cómo utilizar el método map:**
El método **`map`** es inmutable y consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback).

El método map recibe dos argumentos:

- La función que itera y transforma cada elemento del array (obligatorio).
- Un objeto al que puede hacer referencia el contexto **`this`** en la función. Si se lo omite, será **`undefined`**. Recuerde que this es diferente según el lugar donde sea invocado.

```javascript
var otherArray = array.map(function(), thisArg)
```

La función, que recibe como argumento el método **`map`**, utiliza tres parámetros opcionales:

- El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
- El array que está iterando.

```javascript
var otherArray = array.map(function(element, index, array))
```

**Practiquemos el uso del método map:**
Utilicemos el array articulos que definimos para crear un nuevo array con el nombre de cada uno de los artículos.

Entonces utilizamos el método **`map`** que retorne el nombre de cada artículo. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

```javascript
var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre
})
console.log(nombreArticulos)
/* 
[ 'Bici', 'TV', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos' ]
*/
```

#### Recorriendo Arrays con .find(), .forEach() y .some()

Para continuar con otros métodos para recorrer arrays, aprenderás **`find`**, **`forEach`** y **`some`**.Utilizaremos el array de objetos mencionado anteriormente para los ejemplos de los métodos:

**Cómo utilizar el método find:**
El método **`find`** consiste en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback). Si ningún elemento cumpla con la condición, retornará undefined.

El método find recibe dos argumentos:

- La función que itera y evalúa cada elemento del array hasta encuentre uno que cumpla con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto **`this`** en la función. Si se lo omite, será **`undefined`**.

```javascript
array.find(function(), thisArg)
```

La función, que recibe como argumento, utiliza tres parámetros opcionales:

- El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
- El array que está iterando.

```javascript
array.find(function(element, index, array))
```

**Practiquemos el uso del método find:**
Utilicemos el array articulos que definimos para encontrar algún artículo que su nombre sea Laptop.

Entonces utilizamos el método **`find`** que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

```javascript
var algunArticulo = articulos.find(function (articulo) {
  return (articulo.nombre = "Laptop")
})
console.log(algunArticulo)
/* 
{ nombre: 'Laptop', costo: 3000 }
*/
```

**Cómo utilizar el método forEach:**
El método **`forEach`** de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. Iterar significa repetir una acción varias veces. Este método no retorna ningún valor.

Este método recibe dos argumentos:

- La función que itera cada elemento del array (obligatorio).
- Un objeto al que puede hacer referencia el contexto **`this`** en la función. Si se lo omite, será **`undefined`**.

```javascript
array.forEach(function(), thisArg)
```

La función, que recibe como argumento el método **`forEach`**, utiliza tres parámetros opcionales:

- El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
- El array que está iterando.

```javascript
array.forEach(function(element, index, array))
```

**Practiquemos el uso del método forEach:**
Utilicemos el array articulos que definimos para mostrar todos los artículos.

Entonces utilizamos el método **`forEach`** y que ejecute la función **`console.log`** para cada uno de los elementos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

```javascript
articulos.forEach(function (articulo) {
  console.log(articulo)
})
/* 
{ nombre: 'Bici', costo: 3000 }
{ nombre: 'TV', costo: 2500 }
...
{ nombre: 'Audifonos', costo: 1700 }
*/
```

**Cómo utilizar el método some:**
El método **`some`** es inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).

El método some recibe dos argumentos:

- La función que itera y evalúa cada elemento del array hasta que al menos uno cumpla con la condición especificada (obligatorio).
- Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.

```javascript
array.some(function(), thisArg)
```

La función, que recibe como argumento el método **`some`**, utiliza tres parámetros:

- El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
- El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
- El array que está iterando.

```javascript
array.some(function(element, index, array))
```

**Practiquemos el uso del método some:**
Utilicemos el array articulos que definimos para saber si existe al menos un artículo con el costo menor o igual que 700.

Entonces utilizamos el método **`some`** que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

```javascript
var existeArticulo = articulos.some(function (articulo) {
  return articulo.costo <= 700
})
console.log(existeArticulo) // true
```

Fin del curso basico js💚