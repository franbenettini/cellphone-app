# Smart Shop

El proyecto a continuación es un sitio web donde se pueden visualizar diferentes categorías de productos electrónicos. Especialmente Tablets y Celulares. Donde uno tiene la capacidad de agregar el producto al carrito para realizar la compra. 
## Instalación Git Clone

Para realizar la clonacion del proyecto, ejecutar en la consola:

```bash
  git clone https://github.com/franbenettini/cellphone-app.git
```

Y ejecutar :

```bash
npm install
npm start
```


## Desarrollado con
- HTML5
- CSS
- JavaScript
- React
## Dependencias NPM

 - [React-icons](https://react-icons.github.io/react-icons/) - Utilizacion en el icono del cart
 - [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start) - Routing en el browser
 - [Styled-components](https://styled-components.com) - Estilos en varios componentes
 - [React-toastify](https://www.npmjs.com/package/react-toastify) - Utilizacion en las notificaciones del sitio
 - [React-hook-form](https://react-hook-form.com) - Utilizacion en el formulario del sitio
 - [React-bootstrap](https://react-bootstrap.github.io) - Utilizacion en el Navbar
 - [React-helmet](https://www.npmjs.com/package/react-helmet) - Utilizacion para editar los head del html
 - [firebase](https://firebase.google.com/?hl=es) - Base de Datos
 

## Firebase 

Para el proyecto se utilizo Firebase, la estructura de los elementos es la siguiente:

#### Colección products:

Documento: id generado automático

| CAMPO | TIPO   | VALOR  |
|-------|--------|--------|
| category | string | categoría a la que pertenece|
| description | string | descripción del producto |
| img | string | ruta de la imagen del producto |
| name | string | nombre del producto |
| price | number | precio del producto |
| stock | number | cantidad en stock |


#### Colección categories:

Documento: id : nombre de la categoria

| CAMPO | TIPO   | VALOR  |
|-------|--------|--------|
| description | string | nombre de la categoría|



## Análisis de los Componentes

La ruta inicial es '/' donde podemos encontrar la lista de todos los productos del sitio web. Cada producto tiene su imagen, precio y nombre.
 
- ItemListContainer: Componente donde se muestran todos los productos y filtramos por categoria.

- ItemList: Componente que nos permite traer todos los datos desde el componente Item a traves de un map.

- Item: Componente que se visualiza en cada card de producto donde aparecen los datos de cada producto. Ademas del Link para ir al detalle del mismo.


La ruta '/item/:productId' nos permite ir al detalle del producto seleccionado en ItemListContainer. Donde podemos encontrar el nombre, precio, imagen, descripcion y la opcion para agregarlo al carrito.

- ItemDetailContainer: Nos permite visualizar el componente ItemDetail luego de seleccionarlo en la pagina inicial. Ademas contiene el componente Spinner que muestra cuando la pagina esta cargando. 

- ItemDetail: Componente encargado de mostrar los detalles del producto en pantalla, tiene incorporado el componente de ItemCount y una notificacion al agregar nuevo producto al carrito.

- ItemCount: Componente que contiene las funciones de ambos botones sumar o restar producto. Ademas del boton de agregar al carrito dicha suma.


Luego de agregar el producto al carrito en el ItemCount, te lleva a otra pagina la cual es '/cart' donde se visualiza los productos. En el caso que el carrito quede vacio. Aparece un boton que te guia a la pagina principal.

- Cart: En este componente se puede visualizar el detalle del carrito. Donde podemos ver el total de la compra. Se puede vaciar el carrito por completo. Se muestra el componente ItemCart. Ademas de tener un boton para finalizar compra.

- ItemCart: Se muestra en detalle cada producto agregado al carrito. Junto a su precio unitario y total. Ademas que existe un boton para eliminar el producto individual del carrito.


Para terminar la compra, se accede presionando el boton Realizar compra. Donde te lleva a '/form' es decir al formulario para el comprador.

- Form: Componente donde encontramos el formulario a completar por el comprador. Contiene los datos nombre completo, telefono, direccion, email y confirmacion de email. Cada campo esta validado para que tenga ciertas restricciones de ingreso o envio de informacion.

- Dentro de Form encontramos la funcion función createOrder, la cual nos permite generar la orden de compra, actualiza el stock y nos muestra el id de compra el cual mostramos en pantalla al usuario.

- ErrorMessage: Componente el cual se encuentra dentro de los label del Form, el cual contiene el formato del error de cada input.

- validations: Se encuentra dentro de la carpeta utils, ahi detallamos que validaciones tiene que cumplir cada campo a completar en el Form por el usuario.


Dentro de la carpeta context encontramos un archivo llamado CartContext el cual tiene la logica de varias funciones que se utilizan en diversos componentes.


En la pagina principal encontramos la Navbar la cual contiene el nombre del sitio, y las categorias de los productos.

- Navbar: Encontramos las categorias de los productos traidas directamente de firebase. Ademas del nombre del sitio el cual podemos apretar e ir a la pagina princiapl en cualquier momento. Ademas contiene el CartWidget.

- CartWidget: Es el encargado de mostrar cuantos productos hay en el carrito. Si esta en 0 no se muestra.



NotFound: Muestra un mensaje de pagina no encontrada y contiene un boton para ir a la pagina princiapl nuevamente.

Spinner: Componente del loader de varias paginas.

Footer: Contiene el nombre del sitio ademas de las categorias de los productos.


## Authors

- [@franbenettini](https://github.com/franbenettini)








