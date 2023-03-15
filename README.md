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