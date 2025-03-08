# Structure Pizza Mama Mia

Bienvenido a la documentación de la aplicación **Pizzería Mamma Mia**, una aplicación web desarrollada con **React** y **Vite**. Esta documentación te guiará a través de la estructura del proyecto, las tecnologías utilizadas y cómo puedes ejecutar y contribuir al desarrollo de la aplicación.

## Estructura del Proyecto Hito 1

El proyecto está organizado de la siguiente manera:

```bash
pizzeria-mamma-mia/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── ImageHeader.jpg
│   │   └── react.svg
│   ├── components/
│   │   ├── CardPizza.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.css
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   └── Navbar.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

### Descripción de los Archivos y Directorios

- **public/**: Contiene archivos estáticos como imágenes y iconos que se sirven directamente al cliente.
- **src/**: Contiene todo el código fuente de la aplicación.
  - **assets/**: Almacena imágenes y otros recursos utilizados en la aplicación.
  - **components/**: Contiene los componentes de React que conforman la interfaz de usuario.
  - **App.css**: Estilos globales para la aplicación.
  - **App.jsx**: Componente principal que renderiza los demás componentes.
  - **index.css**: Estilos generales para la aplicación.
  - **main.jsx**: Punto de entrada de la aplicación donde se monta el componente `App` en el DOM.
- **.gitignore**: Especifica los archivos y directorios que Git debe ignorar.
- **eslint.config.js**: Configuración de ESLint para mantener un código limpio y consistente.
- **index.html**: Plantilla HTML principal que se sirve al cliente.
- **package.json**: Contiene las dependencias del proyecto y los scripts para ejecutar, construir y probar la aplicación.
- **README.md**: Documentación del proyecto.
- **vite.config.js**: Configuración de Vite para el desarrollo y la construcción de la aplicación.

## Estructura del Proyecto Hito 2

```bash
pizzeria-mamma-mia/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── ImageHeader.jpg
│   │   └── react.svg
│   ├── components/
│   │   ├── CardPizza.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.css
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   └── RegisterPage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Estructura del Proyecto Hito 3

```bash
pizzeria-mamma-mia/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── ImageHeader.jpg
│   │   └── react.svg
│   ├── components/
│   │   ├── CardPizza.jsx
│   │   ├── Cart.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.css
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   └── RootLayout.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── pizzas.js
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   └── RegisterPage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

### Nuevos archivos añadidos en el Hito 3

- **components/Cart.jsx**: Componente que muestra los productos añadidos al carrito de compras.
- **components/RootLayout.jsx**: Componente que define el layout principal con navegación y footer para todas las páginas.
- **context/CartContext.jsx**: Implementación de Context API para gestionar el estado del carrito de compras en toda la aplicación.
- **data/pizzas.js**: Archivo que contiene los datos de las pizzas disponibles.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Entorno de desarrollo rápido y herramienta de construcción.
- **Bootstrap**: Framework CSS para diseñar interfaces web responsivas y modernas.
- **ESLint**: Herramienta de linting para mantener un código limpio y consistente.
- **React-Bootstrap**: Librería que integra Bootstrap con React.
- **React Router (v7)**: Biblioteca para la navegación y enrutamiento en la aplicación.
- **Context API**: API de React para gestionar el estado global de la aplicación.

## Cómo Ejecutar la Aplicación

Sigue estos pasos para ejecutar la aplicación en tu entorno local:

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/pizzeria-mamma-mia.git
cd pizzeria-mamma-mia
```

### 2. Instalar las Dependencias

```bash
npm install
```

### 3. Ejecutar la Aplicación en Modo de Desarrollo

```bash
npm run dev
```

Esto iniciará un servidor de desarrollo y abrirá la aplicación en tu navegador.

### 4. Construir la Aplicación para Producción

```bash
npm run build
```

Esto generará una versión optimizada de la aplicación en la carpeta `dist`.

### 5. Previsualizar la Aplicación Construida

```bash
npm run preview
```

Esto te permitirá ver cómo se verá la aplicación en producción.

## Componentes Principales

### `Navbar.jsx`

El componente **Navbar** es la barra de navegación de la aplicación. Contiene enlaces a las diferentes secciones de la aplicación y un botón que muestra el total del carrito.

### `Header.jsx`

El componente **Header** muestra una imagen de fondo con un título y una descripción de la pizzería.

### `Home.jsx`

El componente **Home** es la página principal de la aplicación. Muestra una lista de pizzas utilizando el componente `CardPizza`.

### `CardPizza.jsx`

El componente **CardPizza** representa una tarjeta que muestra la información de una pizza, incluyendo su nombre, precio, ingredientes y una imagen. Incluye botones para ver más detalles y añadir al carrito.

### `Footer.jsx`

El componente **Footer** es el pie de página de la aplicación, que muestra un mensaje de derechos de autor.

### `Cart.jsx`

El componente **Cart** muestra los productos añadidos al carrito, permite modificar cantidades, eliminar productos y muestra el total de la compra.

### `RootLayout.jsx`

El componente **RootLayout** define la estructura base de todas las páginas, incluyendo el Navbar y Footer, y utiliza el componente Outlet de React Router para renderizar el contenido específico de cada ruta.

## Context API

### `CartContext.jsx`

Este archivo implementa el Context API de React para gestionar el estado del carrito de compras:

- **CartProvider**: Componente que envuelve la aplicación y proporciona el contexto del carrito.
- **useCart**: Hook personalizado para acceder al contexto del carrito desde cualquier componente.

Funciones principales:

- **addToCart**: Añade productos al carrito.
- **updateQuantity**: Actualiza la cantidad de un producto en el carrito.
- **removeFromCart**: Elimina un producto del carrito.
- **getTotal**: Calcula el total de la compra.

## Rutas de la Aplicación

La aplicación utiliza React Router v7 para la navegación:

- **/** - Página principal con listado de pizzas
- **/login** - Página de inicio de sesión
- **/register** - Página de registro
- **/cart** - Página del carrito de compras

## Estilos

Los estilos de la aplicación están definidos en varios archivos CSS:

- **App.css**: Contiene estilos globales para la aplicación.
- **Header.css**: Contiene estilos específicos para el componente `Header`.
- **index.css**: Define estilos generales para el cuerpo de la aplicación y el pie de página.

## Configuración de ESLint

El archivo `eslint.config.js` contiene la configuración de ESLint para el proyecto. Incluye reglas para mantener un código limpio y consistente, especialmente para proyectos de React.

## Contribuir

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un **fork** del repositorio.
2. Crea una nueva rama para tu contribución:

   ```bash
   git checkout -b mi-contribucion
   ```

3. Realiza tus cambios y haz commit:

   ```bash
   git commit -m "Añade nueva funcionalidad"
   ```

4. Envía tus cambios al repositorio remoto:

   ```bash
   git push origin mi-contribucion
   ```

5. Abre un **pull request** en GitHub.

## Licencia

Este proyecto está bajo la **licencia MIT**. Para más detalles, consulta el archivo `LICENSE`.

---

¡Gracias por interesarte en **Pizzería Mamma Mia**! Esperamos que esta documentación te sea útil para entender y contribuir al proyecto. ¡Disfruta de la pizza! 🍕
