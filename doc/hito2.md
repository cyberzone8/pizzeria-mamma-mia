# Hito 2 - Pizzería Mamma Mía

En este Hito validaremos nuestros conocimientos de Estados de los componentes y eventos. Para lograrlo, necesitarás aplicar los conocimientos adquiridos hasta el momento.

Lee todo el documento antes de comenzar el desarrollo individual, para asegurarte de tener el máximo de puntaje y enfocar bien los esfuerzos.

**Tiempo asociado:** 2 horas cronológica

---

## Descripción

El objetivo de este hito es aprender a manejar el estado y los eventos en React. Para ello, deberán crear los formularios de registro y login de nuestra aplicación.

---

## Requerimientos

### 1. Formulario de Registro

Crea un componente `Register` que contenga un formulario con los siguientes campos:

- **Email**
- **Contraseña**
- **Confirmar contraseña**

El formulario debe tener un botón de enviar que, al hacer click, muestre un mensaje de éxito si los datos son correctos o un mensaje de error si los datos son incorrectos.

**Validaciones mínimas:**

- Todos los campos son obligatorios (no pueden estar vacíos).
- La contraseña debe tener al menos 6 caracteres.
- La contraseña y la confirmación de la contraseña deben ser iguales.

**Tips:** Puedes dejar comentado el componente `Home` en `App.js` para que solo se muestre el formulario de registro.

#### Ejemplo:

```jsx
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <RegisterPage />
      <Footer />
    </div>
  );
};

export default App;
```

**(5 Puntos)**

---

### 2. Formulario de Login

Crea un componente `Login` que contenga un formulario con los siguientes campos:

- **Email**
- **Contraseña**

El formulario debe tener un botón de enviar que, al hacer click, muestre un mensaje de éxito si los datos son correctos o un mensaje de error si los datos son incorrectos.

**Validaciones mínimas:**

- Todos los campos son obligatorios (no pueden estar vacíos).
- La contraseña debe tener al menos 6 caracteres.

**Tips:** Puedes dejar comentado el componente `Home` y `RegisterPage` en `App.js` para que solo se muestre el formulario de login.

#### Ejemplo:

```jsx
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      <LoginPage />
      <Footer />
    </div>
  );
};

export default App;
```

**(5 Puntos)**

---

## Consideraciones y Recomendaciones

Te dejamos el diseño final de la aplicación para que puedas comparar con tu resultado final.

---

¡Mucho éxito!

[www.desafiolatam.com](www.desafiolatam.com)
