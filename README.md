# Página Ejemplo creada con Polymer 3

Esto es un ejemplo de una aplicación construida con [Polymer](https://www.polymer-project.org) [LitElement](https://lit-element.polymer-project.org).

## Dependencias

Para la construcción del proyecto se requiere de lo siguiente.

* [LitElement](https://lit-element.polymer-project.org).
* [lit-html](https://lit-html.polymer-project.org).
* [WEBCOMPONENTS](https://www.webcomponents.org).
* [Lodash](https://lodash.com).
* [Bootstrap](https://getbootstrap.com).

> Todos los paquetes se instalaron mediante [npm](https://www.npmjs.com).

### Instalación de dependencias

Los comandos que se presentan se deben ejecutar en el directorio en el cual se realizo el `git clone` al proyecto.

#### LitElement

La versión de `LitElement` que se usó para el proyecto es [_LitElement 2.3.1_](https://www.npmjs.com/package/lit-element).

```
$ npm i lit-element
```

#### lit-html

La versión de `lit-html` que se usó para el proyecto es [_lit-html 1.2.1_](https://www.npmjs.com/package/lit-html).

```
$ npm i lit-html
```

#### Webcomponents

Para los Webcomponents se uso el script de [_polyfills_](https://www.npmjs.com/package/@webcomponents/webcomponentsjs) en su versión 1.

```
$ npm i @webcomponents/webcomponentsjs
```

#### Lodash

[Lodash](https://www.npmjs.com/package/lodash) se utiliza para la actualización y modificación del tipo de dato `Àrray`, para este caso un array de objetos `[{}, {}, {}, ...]`.

```
$ npm i lodash
```

#### Bootsrap

Bootstrap ya viene incluido dentro del código, en el `index.html`.

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

Para JQuety y Pooper.

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>

## Correr el proyecto.

Para crear el proyecto es necesario ejecutar el siguiente comando en la ruta en dónde se descargó el proyecto.

```
$ polymer server
```

Esto va a levantar un servidor y sobre este correrá la aplicación. La URL la cual lanza en terminal será la que hay que copiar en el navegador para ver la aplicacción.