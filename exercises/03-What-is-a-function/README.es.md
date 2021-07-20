# `03` ¿Qué es una función (function)?

Auquí hay muy buen video de [5 min explicando que es una función](https://www.youtube.com/watch?v=N8ap4k_1QEQ).

Puedes ver una función como un **fragmento de código** que puedes encapsular entre llaves (`{}`) para poder usarla varias veces.

Por ejemplo: si queremos obtener la suma de dos números, podemos declarar una función llamada `sum` que devuelve la suma de las variables `number1` y `number2`:

```js
function sum(number1,number2) {
  return number1 + number2;
}
```

Después de declarar la `función`, podemos usarla tantas veces como queramos, así:

```js
let total = sum(2,3);
let total2 = sum(5,10);
let total3 = sum(2,3);
```

# 📝 Instrucciones

1. Calcula la suma entre **3445324** y **53454423** y asigna el resultado a una variable llamada `superduper`.
