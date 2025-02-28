# Hito 4 - Pizzería Mamma Mía

## JavaScript

En este Hito validaremos nuestros conocimientos de Consumo de APIs con React. Para lograrlo, necesitarás aplicar los conocimientos adquiridos hasta el momento.

Lee todo el documento antes de comenzar el desarrollo individual, para asegurarte de tener el máximo de puntaje y enfocar bien los esfuerzos.

**Tiempo asociado:** 2 horas cronológicas.

---

## Descripción

El objetivo de este hito es implementar el consumo de una API externa en la aplicación web.

En el material de apoyo encontrarás un backend de ejemplo que contiene una API de pizzas. Utiliza este backend para cargar la información de las pizzas. Sigue las siguientes instrucciones:

### Levantar el backend

Vamos a consumir una API de pizzas. Estas pizzas están almacenadas en un backend que te proporcionamos. No es necesario que modifiques el backend, solo necesitas levantarlo para poder consumir la API, ya que el propósito de este curso es trabajar con el frontend.

Para levantar el backend, sigue estos pasos:

1. Descarga el "Material de apoyo - Backend Pizzas".
2. Instala las dependencias con `npm install`.
3. Levanta el servidor con `npm start`. El servidor se ejecutará en el puerto 5000.

### Endpoints

El backend contiene varios endpoints, pero para este hito solo necesitarás:

- `GET http://localhost:5000/api/pizzas`: Devuelve un array de pizzas.

---

## Implementación

### App.jsx

Como ya tienes el backend levantado, ahora puedes consumir la API de pizzas en tu aplicación web. Para esto, necesitarás modificar el componente `App.jsx` para que muestre nuevamente el `Home.jsx`.

#### Código de ejemplo:

```jsx
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import LoginPage from "./components/Login";
// import RegisterPage from "./components/Register";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Footer />
    </div>
  );
};
export default App;
```

### Home.jsx

En este componente es donde deberás consumir la API de pizzas. Para esto, necesitarás utilizar el hook `useEffect` además de `fetch` para hacer la petición a la API.

El archivo `pizzas.js` contiene un array de pizzas, este array deberás reemplazarlo por el array que obtienes de la API.

### Pizza.jsx

El objetivo de este componente es mostrar la información de una pizza. Nuevamente simularemos una página única a través de un componente. Por lo tanto, deja comentado `Home.jsx` y agrega un nuevo componente `Pizza.jsx`.

#### Código de ejemplo en `App.jsx`:

```jsx
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pizza from "./components/Pizza";
// import Cart from "./components/Cart";
// import Home from "./components/Home";
// import LoginPage from "./components/Login";
// import RegisterPage from "./components/Register";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </div>
  );
};
export default App;
```

Este componente deberá:

- Consumir la API de pizzas con el siguiente endpoint: `GET http://localhost:5000/api/pizzas/p001`, siendo `p001` el ID de la pizza. Por ahora es fijo, pero en el siguiente hito será dinámico.
- Mostrar la información de la pizza en el componente. Debes cumplir con los siguientes requerimientos:
  - Nombre de la pizza.
  - Precio de la pizza.
  - Ingredientes de la pizza.
  - Imagen de la pizza.
  - Descripción de la pizza.
- El botón de "Añadir al carrito" por ahora no tiene funcionalidad.

---

## Requerimientos

### 1. `Home.jsx`:

- Logra consumir la API de pizzas y renderizar las tarjetas de pizza. **(2 puntos)**
- Utiliza el hook `useEffect` para consumir la API. **(2 puntos)**

### 2. `Pizza.jsx`:

- Logra consumir la API de pizzas y renderizar la información de la pizza. **(2 puntos)**
- Utiliza el hook `useEffect` para consumir la API. **(2 puntos)**
- Muestra la información de la pizza: nombre, precio, ingredientes, imagen y descripción. **(2 puntos)**

---

¡Mucho éxito!

[www.desafiolatam.com](www.desafiolatam.com)
