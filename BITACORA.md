## Melissa Arango Echegaray

## Instalar y Correr la aplicación

Instalar API (backend) y la aplicacion React (front):

1. En la carpeta `root` de la aplicacion correr:
   `npm install`
2. Navega al directorio `front` y vuelve a correr el comando:
   `npm install`
3. Regresa al directorio root `cd ..`.

La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando

`npm run dev`

Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.

- CRA se encuentra en:
  `http://localhost:3000/`

- El servidor se encuentra en:
  `http://localhost:5000/`

- La lista de productos se encuentra:
  `http://localhost:5000/api/products`

- Puedes encontrar cada producto por su ID:
  `http://localhost:5000/api/products/1`

- Las imágenes se encuentran en:|
  `http://localhost:5000/images/{{nombre-de-la-imagen}}`

## Desarrollo de la prueba
Se requiere implementar un carrito de compras simple que traiga toda la info del API local:

- Muestra la lista de catálogos de productos(App.js), muestra los productos y no permite añadir los que ya agotaron stock
- Un carrito de compras que tenga todos los ítems que serán comprados por el usuario. (Carrito.jsx), se puede aumentar, disminuir eliminar producto hasta agotar stock, y la suma total de los productos
- Espacio donde se muestre la sincronización de los ítems añadidos al carrito, muestra la cantidad de productos adquiridos
- Catálogo Responsive
![Desktop](https://user-images.githubusercontent.com/68023969/162289628-f30db72a-1331-4626-b83d-63ff3928b8f0.JPG)
![mobile](https://user-images.githubusercontent.com/68023969/162290748-5e69491f-537d-4d7f-acc2-2c8b9b7e418a.JPG)
