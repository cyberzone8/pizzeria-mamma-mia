# Hito 1 - Pizzería Mamma Mía

En este Hito validaremos nuestros conocimientos de Introducción a React. Para lograrlo, necesitarás aplicar los conocimientos adquiridos hasta el momento.

Lee todo el documento antes de comenzar el desarrollo individual, para asegurarte de tener el máximo de puntaje y enfocar bien los esfuerzos.

// Tiempo asociado: **2 horas cronológicas**

## Descripciónsudo apt install certbot python3-certbot-nginx

A continuación, realizaremos un proyecto con React, el cual estará dividido en Hitos. A lo largo de las distintas unidades de contenido, estos hitos serán desarrollados.

Para esta etapa inicial, nos solicitan las siguientes implementaciones:

- Crear un nuevo proyecto de React con Vite.js
- Incorporar Bootstrap a nuestro proyecto. _(Opcional o según preferencia)_
- Se tendrán los siguientes componentes:
  - **Navbar**
  - **Footer**
  - **Home**
  - **Header**
  - **CardPizza**

---

## Requerimientos

1. En el componente **App.jsx** se mostrarán los componentes **Navbar, Home y Footer**.

   **(2 Puntos)**

2. Crear un componente llamado **Header.jsx**. Este componente tiene que ser llamado al interior de **Home.jsx** y debe contener un título y una descripción.

   **(1 Punto)**

   Puedes basarte en el siguiente diseño:

   _Nota: La imagen del fondo la encontrarás en el apoyo hito 1._

3. Crear el componente **Navbar.jsx**, este componente debe contener un menú de navegación con las siguientes opciones **(2 Puntos)**

   - 🍕 Home
   - 🔓 Profile
   - 🔒 Logout
   - 🔐 Login
   - 🔐 Register
   - 🛒 Total: $

   _Nota: Para esto puedes utilizar botones de Bootstrap, ya que no es necesario que tengan funcionalidad por ahora._

   Es importante considerar que este componente debe ser llamado en **App.jsx**. Además, debes incorporar dos variables al interior de este componente:

   ```jsx
   const Navbar = () => {
       const total = 25000;
       const token = false;
       return (
           ...
       );
   };

   export default Navbar;
   ```

   ### La variable `token`

   El token es una variable booleana que nos indicará si el usuario está logueado o no, por ahora es solo una simulación.

   - Si el usuario está logueado, se mostrarán los botones de **🔓 Profile** y **🔒 Logout**.
   - En caso contrario, se mostrarán los botones de **🔐 Login** y **🔐 Register**.

   _Tip: Recuerda que puedes utilizar el operador ternario para esto._

   ### La variable `total`

   La variable `total` es un número que representa el total de la compra (por ahora un valor fijo), este debe ser mostrado en el botón de **🛒 Total: $**.

   Además, debe estar formateado con el separador de miles, ej: `25.000`.

   _Tip: Puedes utilizar la función `toLocaleString` para esto. También puedes llevar esta funcionalidad a una función en la carpeta utils o helpers para reutilizarla en otros componentes._

4. Deberán existir los **Botones Home y Total**. Estos botones no dependen del `token`, por lo que siempre deben ser mostrados, independiente si `token` es `true` o `false`.

   **(2 Puntos)**

5. Componente **CardPizza.jsx**

   Este componente debe contener la información de una pizza, como el nombre, precio, imagen, etc. Para esta operación tendrás que llamar a tres componentes desde **Home.jsx** con los siguientes props:

   ```jsx
   <CardPizza
       name="Napolitana"
       price={5950}
       ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
       img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
   />

   <CardPizza
       name="Española"
       price={6950}
       ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
       img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
   />

   <CardPizza
       name="Pepperoni"
       price={6950}
       ingredients={["mozzarella", "pepperoni", "orégano"]}
       img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
   />
   ```

   _Nota: Estos props deben ser recibidos en el componente `CardPizza` y mostrados en el diseño que se muestra a continuación._

   _Los botones de "Ver más" y "Añadir" no tienen funcionalidad por ahora._

   **(2 Puntos)**

6. El componente **Footer.jsx** debe contener:

   - `© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados`
   - Debe ser llamado en `App.jsx`
   - Puedes agregar la información que consideres necesaria.

   **(1 Punto)**

---

## ¡Mucho éxito!

### Consideraciones y recomendaciones

Te compartimos algunos pantallazos del resultado final para que puedas utilizarlos de referencia con tu ejecución.
