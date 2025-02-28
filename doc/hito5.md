# Hito 5 - Pizzería Mamma Mía

## Descripción

En este hito se validarán los conocimientos de React Router I. Para lograrlo, necesitarás aplicar lo aprendido hasta el momento en React Router.

Lee todo el documento antes de comenzar el desarrollo individual, para asegurarte de obtener el máximo puntaje y enfocar bien los esfuerzos.

**Tiempo asociado:** 2 horas cronológicas

El sistema de enrutamiento responderá a una vista index y a los componentes `register`, `login`, `cart`, entre otros.

---

## Requerimientos

1. **Instalaciones y configuración:**

   - Realiza las instalaciones necesarias para trabajar con React Router y configura su uso en el proyecto. **(2 puntos)**

2. **Organización de componentes:**

   - Traslada los componentes `Home`, `Register`, `Login`, `Cart` y `Pizza` a la carpeta `pages`. **(1 punto)**

3. **Definición de rutas:**

   - Crea las rutas necesarias para los siguientes componentes: **(2 puntos)**
     - `/` → Componente `Home`.
     - `/register` → Componente `Register`.
     - `/login` → Componente `Login`.
     - `/cart` → Componente `Cart`.
     - `/pizza/p001` → Componente `Pizza`.
     - `/profile` → Componente `Profile`.
     - `/404` → Componente `NotFound`.

4. **Página de error (NotFound):**

   - Implementa un componente `NotFound` que se muestre cuando una ruta no exista.
   - Debe contener un enlace que redirija a la ruta `/`. **(2 puntos)**

5. **Componente Profile:**

   - Implementa un componente `Profile` que muestre el email de un usuario y un botón para cerrar sesión. **(1 punto)**
   - Por ahora, el email y el botón pueden ser estáticos. En hitos posteriores se trabajará en la autenticación.

6. **Navbar:**
   - Crea un componente `Navbar` que contenga un menú de navegación con enlaces a las rutas anteriores (utilizando `Link`).
   - El botón `🛒 Total: $xxx` debe redirigir a la ruta `/cart`. **(2 puntos)**
   - Nota: La ruta `/pizza/p001` no debe incluirse en el `Navbar`.

---

¡Mucho éxito!

[www.desafiolatam.com](www.desafiolatam.com)
