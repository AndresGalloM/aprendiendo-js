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