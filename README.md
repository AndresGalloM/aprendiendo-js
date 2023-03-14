##Aprendiendo JavaScript

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

