# Structure Pizza Mama Mia

Bienvenido a la documentación de la aplicación Pizzería Mamma Mia, una aplicación web desarrollada con React y Vite. Esta documentación te guiará a través de la estructura del proyecto, las tecnologías utilizadas y cómo puedes ejecutar y contribuir al desarrollo de la aplicación.

El proyecto está organizado de la siguiente manera:

```PowerShell
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

Descripción de los Archivos y Directorios
public/: Contiene archivos estáticos como imágenes y iconos que se sirven directamente al cliente.

src/: Contiene todo el código fuente de la aplicación.

assets/: Almacena imágenes y otros recursos utilizados en la aplicación.

components/: Contiene los componentes de React que conforman la interfaz de usuario.

App.css: Estilos globales para la aplicación.

App.jsx: El componente principal de la aplicación que renderiza todos los demás componentes.

index.css: Estilos generales para la aplicación.

main.jsx: Punto de entrada de la aplicación donde se monta el componente App en el DOM.

.gitignore: Especifica los archivos y directorios que Git debe ignorar.

eslint.config.js: Configuración de ESLint para mantener un código limpio y consistente.

index.html: La plantilla HTML principal que se sirve al cliente.

package.json: Contiene las dependencias del proyecto y los scripts para ejecutar, construir y probar la aplicación.

README.md: Proporciona una descripción general del proyecto y cómo configurarlo.

vite.config.js: Configuración de Vite para el desarrollo y la construcción de la aplicación.

Tecnologías Utilizadas
React: Una biblioteca de JavaScript para construir interfaces de usuario.

Vite: Un entorno de desarrollo rápido y una herramienta de construcción para aplicaciones web modernas.

Bootstrap: Un framework de CSS para diseñar interfaces web responsivas y modernas.

ESLint: Una herramienta de linting para mantener un código limpio y consistente.

React-Bootstrap: Una librería que integra Bootstrap con React para facilitar el desarrollo de componentes.

Cómo Ejecutar la Aplicación
Sigue estos pasos para ejecutar la aplicación en tu entorno local:

Clona el Repositorio:

bash
Copy
git clone https://github.com/tu-usuario/pizzeria-mamma-mia.git
cd pizzeria-mamma-mia
Instala las Dependencias:

bash
Copy
npm install
Ejecuta la Aplicación en Modo de Desarrollo:

bash
Copy
npm run dev
Esto iniciará un servidor de desarrollo y abrirá la aplicación en tu navegador.

Construye la Aplicación para Producción:

bash
Copy
npm run build
Esto generará una versión optimizada de la aplicación en la carpeta dist.

Previsualiza la Aplicación Construida:

bash
Copy
npm run preview
Esto te permitirá ver cómo se verá la aplicación en producción.

Componentes Principales
Navbar.jsx
El componente Navbar es la barra de navegación de la aplicación. Contiene enlaces a las diferentes secciones de la aplicación y un botón que muestra el total del carrito.

Header.jsx
El componente Header muestra una imagen de fondo con un título y una descripción de la pizzería.

Home.jsx
El componente Home es la página principal de la aplicación. Muestra una lista de pizzas utilizando el componente CardPizza.

CardPizza.jsx
El componente CardPizza representa una tarjeta que muestra la información de una pizza, incluyendo su nombre, precio, ingredientes y una imagen.

Footer.jsx
El componente Footer es el pie de página de la aplicación, que muestra un mensaje de derechos de autor.

Estilos
Los estilos de la aplicación están definidos en varios archivos CSS:

App.css: Contiene estilos globales para la aplicación.

Header.css: Contiene estilos específicos para el componente Header.

index.css: Define estilos generales para el cuerpo de la aplicación y el pie de página.

Configuración de ESLint
El archivo eslint.config.js contiene la configuración de ESLint para el proyecto. Esta configuración incluye reglas para mantener un código limpio y consistente, especialmente para proyectos de React.

Contribuir
Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del repositorio.

Crea una nueva rama para tu contribución:

bash
Copy
git checkout -b mi-contribucion
Realiza tus cambios y haz commit:

bash
Copy
git commit -m "Añade nueva funcionalidad"
Envía tus cambios al repositorio remoto:

bash
Copy
git push origin mi-contribucion
Abre un pull request en GitHub.

Licencia
Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.

¡Gracias por interesarte en Pizzería Mamma Mia! Esperamos que esta documentación te sea útil para entender y contribuir al proyecto. ¡Disfruta de la pizza! 🍕

# Codigo

## vite.config.js

```PowerShell
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
plugins: [react()],
})
```

## README.md

```PowerShell
# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
```

## package.json

```PowerShell
{
  "name": "pizzeria-mamma-mia",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "bootstrap": "^5.0.2",
    "react": "^18.3.1",
    "react-bootstrap": "^2.9.0-beta.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "vite": "^6.0.5"
  }
}
```

## index.html

```PowerShell
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pizzería Mamma Mía</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## eslint.config.js

```PowerShell
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
```

## .gitignore

```PowerShell
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## node_modules/

## public/vite.svg

## src/App.css

```PowerShell
#root {
  max-width: 100%; /* Permite que ocupe todo el ancho */
  margin: 0 auto;
  padding: 0rem;
  text-align: center;
}

body {
  background-color: #f9f9f9; /* Color claro general */
  font-family: 'Roboto', sans-serif; /* Fuente consistente */
}

main {
  display: flex; /* Flexbox para alinear las tarjetas */
  flex-wrap: wrap; /* Permite que las tarjetas pasen a una nueva fila si es necesario */
  gap: 2rem; /* Espaciado entre las tarjetas */
  justify-content: center; /* Centra las tarjetas */
  padding: 2rem;
  max-width: 1200px; /* Puedes ajustarlo según tu diseño */
  margin: 0 auto; /* Centra el contenido horizontalmente */
}

.card {
  flex: 1 1 calc(33.33% - 2rem); /* Ajusta para 3 columnas en pantallas grandes */
  max-width: 300px; /* Limita el ancho de cada tarjeta */
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left; /* Alinea el texto a la izquierda */
}

.card img {
  width: 100%; /* Asegura que las imágenes cubran todo el ancho de la tarjeta */
  height: auto;
}

.card h5, .card p, .card button {
  margin: 0.5rem 0; /* Margen entre los elementos */
}

.card button {
  width: 100%; /* Botones ocupan todo el ancho en dispositivos pequeños */
  margin-top: 1rem;
}

.card button:hover {
  background-color: #e0a800; /* Color más oscuro al pasar el ratón */
}

footer {
  background-color: #212529; /* Color oscuro para el footer */
  color: #ffc107;
  text-align: center;
  padding: 1rem;
}

```

## src/App.jsx

```PowerShell
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;

```

## src/index.css

```PowerShell
body {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido principal */
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  width: 100%;
}

:root {
  --main-max-width: 1200px; /* Define un ancho máximo general */
}

#root, header, footer {
  width: 100%; /* Que cubran todo el ancho */
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #242424;
  color: #fff;
}

```

## src/main.jsx

```PowerShell
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

## src/assets/ImageHeader.jpg

## src/assets/react.svg

## src/components/CardPizza.jsx

```PowerShell
import { Card, Button } from 'react-bootstrap';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card
      className="mb-4 shadow"
      style={{
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1px solid #ddd',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Imagen superior */}
      <Card.Img
        variant="top"
        src={img}
        alt={name}
        style={{ height: '200px', objectFit: 'cover' }}
      />

      {/* Contenido de la tarjeta */}
      <Card.Body className="text-center">
        <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
          {name}
        </Card.Title>
        <Card.Text className="text-muted mb-3" style={{ fontSize: '1rem' }}>
          <span style={{ fontWeight: 'bold', color: '#FF9800' }}>Ingredientes:</span> {ingredients.join(', ')}
        </Card.Text>
        <Card.Text
          style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '20px',
          }}
        >
          Precio: <span style={{ color: '#FF5722' }}>${price.toLocaleString()}</span>
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="outline-secondary" size="sm" className="px-3">
            Ver Más 👀
          </Button>
          <Button
            variant="warning"
            size="sm"
            className="px-4 text-white"
            style={{ fontWeight: 'bold' }}
          >
            Añadir 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;

```

## src/components/Footer.jsx

```PowerShell
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-100 bg-dark text-white text-center py-3">
    © {year} - Pizzería Mamma Mía! - Todos los derechos reservados
    </footer>
  );
};

export default Footer;

```

## src/components/Header.css

```PowerShell
.header {
    background-image: url('../assets/ImageHeader.jpg'); /* Cambia por la ruta correcta de tu imagen */
    background-size: cover;
    background-position: center;
    height: 300px; /* Ajusta la altura según lo necesario */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white; /* Para texto blanco */
    margin-bottom: 30px;
}

.header-content {
    background-color: rgba(0, 0, 0, 0.6); /* Fondo oscuro semitransparente para contraste */
    padding: 20px;
    border: 2px solid #ffc107; /* Borde amarillo */
    border-radius: 10px;
    font-family: 'Arial', sans-serif;
}

.header-content h1 {
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Sombra para el texto */
}

.header-content p {
    font-size: 1.2rem;
    margin-top: 10px;
}

```

## src/components/Header.jsx

```PowerShell
import React from 'react';
import './header.css'; // Importamos el archivo de estilos del Header

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </div>
  );
};

export default Header;

```

## src/components/Home.jsx

```PowerShell
import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const pizzas = [
  {
    name: 'Napolitana',
    price: 5950,
    ingredients: ['mozzarella', 'tomates', 'jamón', 'orégano'],
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c',
  },
  {
    name: 'Española',
    price: 6950,
    ingredients: ['mozzarella', 'gorgonzola', 'parmesano', 'provolone'],
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab',
  },
  {
    name: 'Pepperoni',
    price: 6950,
    ingredients: ['mozzarella', 'pepperoni', 'orégano'],
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3',
  },
];

const Home = () => {
  return (
    <div className="container-fluid px-4 my-4">
      <Header /> {/* Llamamos al componente Header */}
      <div className="row mx-0 justify-content-center">
        {pizzas.map((pizza, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 px-3" key={index}>
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

```

## src/components/Navbar.jsx

```PowerShell
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const MyNavbar = () => {
  const total = 25000;
  const token = false;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo y título */}
        <Navbar.Brand href="#">
          🍕 Pizzería Mamma Mía
        </Navbar.Brand>

        {/* Botón para colapsar en pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menú colapsable */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            {token ? (
              <>
                <Nav.Link href="#">🔓 Profile</Nav.Link>
                <Nav.Link href="#">🔒 Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="#">🔐 Login</Nav.Link>
                <Nav.Link href="#">🔐 Register</Nav.Link>
              </>
            )}
          </Nav>

          {/* Botón de Total */}
          <Button
            style={{
              backgroundColor: 'transparent', // Fondo transparente para integrarse
              borderColor: '#ffc107', // Borde amarillo
              color: '#ffc107', // Texto amarillo
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              borderRadius: '5px',
            }}
            className="ms-2 total-button"
          >
            🛒 Total: ${total.toLocaleString()}
          </Button>
        </Navbar.Collapse>
      </Container>

      {/* Estilos adicionales */}
      <style>
        {`
          .total-button:hover {
            background-color: #ffc107; /* Fondo amarillo en hover */
            color: #000; /* Texto negro en hover */
          }
          .total-button:focus {
            outline: none; /* Sin borde azul */
            box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); /* Sombra amarilla */
          }
        `}
      </style>
    </Navbar>
  );
};

export default MyNavbar;

```
