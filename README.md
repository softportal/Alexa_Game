# Juego de ejemplo Alexa


## Deploy

Sube el código a alexa developers o despliegalo en tu propia lambda.

* src -> sustituye la carpeta lambda de alexa developers code (ide)
* alexa.json -> es el json principal de alexa donde vienen intents, slots...



## Juego

### Ahorcado:

- <tu>:    Alexa, abre juegos reunidos
- <alexa>: Bienvenido, quieres jugar ahorcado o palabras encadenadas.
- <tu>:    ahorcado
- <alexa>: dime que categoria quieres jugar
- <tu>:    ciudades
- <alexa>: dime que nivel quieres jugar
- <tu>:    nivel 0

A partir de este instante en la pantalla de tu movil se te mostrara una tarjeta indicando el estado de la palabra a resolver:
* ej: (perro) - - - - -

Puedes interactuar con alexa de la siguiente forma:

- <alexa>: dime una letra
- <tu>:    la p

Se te enviaría la siguiente tarjeta

```
VIDAS:    5
ACIERTOS: 1
ej: (perro) p - - - -
```

fallar letras decrementa el numero de vidas:

* Una vez quieras resolver la palabra basta con:
- <tu>:    resuelve perro




### palabras encadenadas:

- <tu>: Alexa, abre juegos reunidos
- <alexa>: Bienvenido, quieres jugar ahorcado o palabras encadenadas.
- <tu>: palabras encadenadas
- <alexa>: (te dice la palabra)
- <tu>: (dices una palabra encadenada a la anterior)

- si la palabra no existe o no esta bien encadenada pierdess

