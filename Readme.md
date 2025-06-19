# Instalar el proyecto

````
npm install
````

## Compilar el proyecto

Para compilar el proyecto basta con usar el comando:

````
npx tsc pruebaAdrian.ts --module esnext --outDir dist
````

Esto generará del fichero PruebaAdrian.ts, un fichero javascript (dist/PruebaAdrian.js) que se pueda probar en el index.html. Aunque salgan errores al usar el comando, ignoralos.

## Hacer los test

Solo hace falta usar el comando:

````
npx jest
````