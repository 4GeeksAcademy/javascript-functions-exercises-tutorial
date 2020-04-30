# `04` Llamar a una función

Las funciones son bloques de código que se guardan para ser (re)utilizados más tarde; ese fragmento específico de código tiene un propósito predefinido y realiza una tarea definida. Una función podría recibir algunos o ningún parámetro para poder ejecutarse y siempre debe regresar.

Por ejemplo, una función que calcula el área de un cuadrado sería algo como esto:

```js
function calculateArea(length, edge) {
    return length * edge;
}
```

Si deseas usar esa función para calcular el área de un cuadrado con

```js
length = 3  // longitud
edge = 6    // borde
```

Necesitas hacer algo como esto:
```js
let squareArea = calculateArea(3,6);
```

El valor de squareArea se establecerá en 18

# 📝 Instrucciones:

Crea una nueva variable llamada squareArea para cada nueva iteración de la función CalculateArea utilizando las dimensiones de la figura, por ejemplo, para la primera figura,

```js
let squareArea1 = calculateArea(3,6);
```

Para la segunda figura,
```js
let squareArea2 = functionCall(x,y);
```

![img](http://i.imgur.com/VyoJRAL.png)



# 💡 Sugerencia:

- Llama a la función `squareArea` 3 veces, una por cada cuadrado, pasando la longitud y el borde de cada cuadrado.
- Haz clic aquí para obtener más información sobre las funciones: http://www.mathopenref.com/functionsprog.html
