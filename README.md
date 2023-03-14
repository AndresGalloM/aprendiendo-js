## Aprendiendo JavaScript

#### Tipos de datos
Los tipos de datos es la característica propia que tiene un valor. En JavaScript existen los tipos de datos primitivos y los no primitivos.

**Datos primitivos**
Los tipos de datos primitivos son inmutables y contiene un valor único:

- **`number`**: indica un valor numérico, ya sea entero o flotante (con decimales).
- **`string`**: indica una cadena de caracteres, el valor está envuelto en comillas dobles " o simples '.
- **`boolean`** indica un valor lógico binario, es decir, los valores true o false.
- **`null`**: indica un valor nulo.
- **`undefined`**: indica un valor no definido.

Existen dos tipos primitivos más: bigint y symbol, pero es un tema que aprenderás más adelante.

**Tipos no primitivos o de objeto**
Los tipos de datos de objeto o no primitivos son los siguientes:

- **`function`**: indica una representación de función.
- **`object`**: indica una representación de objetos.

Palabra reservada **`typeof`**
- La palabra reservada typeof permite identificar el tipo de dato de un valor en JavaScript. Existe una excepción, al ejecutar typeof null, en la consola mostrará **`'object'`**, esto es un error dentro JavaScript.

------------

#### Variables
Una variable es la representación de un lugar que reservamos en memoria para guardar un valor. El valor puede ser cualquier tipo de dato, inclusive objetos o funciones.

**Declaración y asignación de variables en JavaScript**
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

**Qué son las funciones expresivas o anónimas**
Las funciones expresivas o anónimas consisten en guardar la función en una variable. Tienen la misma declaración e invocación que las funciones declarativas. La diferencia consiste en no especificar un nombre en la función, sino que utiliza el nombre de la variable.

```javascript
// Declaración
var suma = function (a, b) {
  return a + b
}
// Invocación
var resultado = suma(2, 2)
```