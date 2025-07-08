# ☕ Cafetería El Rincón - Sistema de Login
ver Tambien en : 
https://yayistorres.github.io/loginweb/


## 📌 Descripción del proyecto

Este proyecto implementa una **interfaz de login responsiva** para una cafetería llamada **"El Rincón"**, utilizando **Bootstrap 5.3.3** como framework base.  

Incorpora:
- Validación de intentos máximos de inicio de sesión.
- Evaluación dinámica de seguridad de contraseñas.
- Mostrar y ocultar la contraseña desde el formulario.
- Redirección tras inicio de sesión correcto.
- Estilo visual personalizado basado en tonos cafés.

---


### 🗂️ Menú de navegación (Navbar)
- **Nombre de la marca:** `Cafetería El Rincón`
- **Icono:** `fa-mug-hot` de FontAwesome.
- **Color de fondo:** Personalizado con la clase `bg-coffee`.

---

## 📄 Plantilla utilizada

- **Framework:** [Bootstrap 5.3.3](https://getbootstrap.com/)
- **Íconos:** [FontAwesome 6.5.1](https://fontawesome.com/)
- **Estilo personalizado:** `login.css`
- **JavaScript personalizado:** `login.js`

---

## 📚 Descripción de cada sección y funcionalidad

### 📜 Archivo HTML (`login.html`)

- **Navbar personalizada:**  
  Contiene nombre e ícono de la cafetería, con fondo café.

- **Formulario de login:**  
  Incluye campos para:
  - **Correo electrónico**
  - **Contraseña**  
    Con un botón para mostrar/ocultar el texto ingresado.

- **Links de apoyo:**  
  - `¿Olvidaste tu contraseña?`
  - `Registrarse`

- **Botón de inicio de sesión:**  
  De color café con ícono de flecha.

- **Área de estado:**  
  Muestra mensajes dinámicos de error o éxito tras intentar iniciar sesión.

- **Botones de inicio social (no funcionales):**
  - Google
  - Facebook
  - Apple  

---

### 🎨 Archivo CSS (`login.css`)

Define los estilos personalizados para mantener la identidad visual de la cafetería:

- **Colores base:**  
  - `#6f4e37` (Café oscuro)
  - `#f8f1e5` (Fondo claro)

- **Clases destacadas:**
  - `.bg-coffee`: Color de fondo para navbar.
  - `.login-card`: Estilo de tarjeta de login con bordes redondeados y fondo personalizado.
  - `.btn-coffee`: Botón café con hover más oscuro.
  - `.mensaje-exito`: Texto verde para mensajes de éxito.
  - `.mensaje-error`: Texto rojo para mensajes de error.

---

### 📜 Archivo JavaScript (`login.js`)

- **Control de intentos de login:**  
  Permite máximo **3 intentos por minuto** por usuario antes de bloquear temporalmente.

- **Evaluación de seguridad de contraseñas:**  
  Clasifica la contraseña como:
  - Débil
  - Media
  - Fuerte  
  Dependiendo de longitud, mayúsculas/minúsculas, números y símbolos.

- **Mostrar/ocultar contraseña:**  
  Cambia dinámicamente el tipo del input y el ícono con `fa-eye` / `fa-eye-slash`.

- **Validación de inicio de sesión:**  
  Si las credenciales son:
html`.
correo :admin@coffee.com
contraseña: C0ffee2024!
Muestra mensaje de éxito y redirecciona a `/x.html`.

- **Mensajes de estado:**  
Cambia dinámicamente el contenido y color del mensaje en el contenedor `#estado`.

---

## 📦 Estructura resumida del proyecto

/css/
└── login.css
/js/
└── login.js
login.html

---

## 🖼️ Capturas de Pantalla

### ✅ Inicio exitoso
![Inicio de sesión exitoso](https://github.com/YayisTorres/loginweb/blob/main/imglo/parte%20inicio.png)

### ❌ Error de contraseña
![Error de login](https://github.com/YayisTorres/loginweb/blob/main/imglo/contrase%C3%B1a%20in%20correcta.png)

### 🔐 Medidor de seguridad de contraseña
![Seguridad de contraseña](https://github.com/YayisTorres/loginweb/blob/main/imglo/contrase%C3%B1a%20correcta%20y%20segura.png)

### 👁️ Te Redirije a 
![Pagina Principal](https://github.com/YayisTorres/loginweb/blob/main/imglo/pagina%20principal.png)

---
## 📌 Notas

- Este login es funcional solo de forma local para pruebas.  
- Los botones sociales son decorativos y no implementan autenticación real.
- Las contraseñas y usuarios están quemados en JavaScript para demostración.

---
## 🚀 Autor

Autor: **Dayanira Torres Quiroz**  
Desarrollado como parte del sistema de login para proyecto web de cafetería.
Correo: **torresquirozdayanira@gmail.com**



