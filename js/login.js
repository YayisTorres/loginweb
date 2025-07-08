// Librería para máximos intentos en login
const intentos = {};
const intentosMaximos = 3;
const WINDOW_MS = 60 * 1000; // 1 minuto

function checarIntentos(userId) {
  const tiempo = Date.now();

  if (!intentos[userId]) {
    intentos[userId] = [];
  }

  intentos[userId] = intentos[userId].filter(ts => tiempo - ts < WINDOW_MS);

  if (intentos[userId].length >= intentosMaximos) {
    const tiempoRestante = Math.ceil((WINDOW_MS - (tiempo - intentos[userId][0])) / 1000);
    throw new Error(`Demasiados intentos. Espere ${tiempoRestante} segundos`);
  }

  intentos[userId].push(tiempo);
}

function limpiarIntentos(userId) {
  if (intentos[userId]) {
    delete intentos[userId];
  }
}

// Seguridad de contraseñas
function evaluarSeguridadPassword(password) {
  let puntaje = 0;

  if (password.length >= 8) puntaje++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) puntaje++;
  if (/\d/.test(password)) puntaje++;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) puntaje++;

  if (puntaje <= 1) return 'Débil';
  if (puntaje === 2 || puntaje === 3) return 'Media';
  if (puntaje === 4) return 'Fuerte';
}

// Mostrar/ocultar contraseña
document.getElementById("togglePassword").addEventListener("click", () => {
  const passwordInput = document.getElementById("password");
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  document.getElementById("togglePassword").innerHTML = type === "password"
    ? '<i class="fa fa-eye"></i>'
    : '<i class="fa fa-eye-slash"></i>';
});

// Validación de login
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formularioLogin');
  if (!form) return;

  const passwordInput = document.getElementById('password');
  const seguridadPassword = document.getElementById('seguridadPassword');

  // Mostrar nivel de seguridad conforme se escribe
  passwordInput.addEventListener('input', function () {
    const nivel = evaluarSeguridadPassword(passwordInput.value);
    seguridadPassword.textContent = passwordInput.value ? `Seguridad: ${nivel}` : '';
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = passwordInput.value;
    const statusElement = document.getElementById('estado');

    try {
      checarIntentos(username);

      if (username === "admin@coffee.com" && password === "C0ffee2024!") {
        statusElement.textContent = "☕ ¡Inicio de sesión exitoso!";
        statusElement.className = "mensaje-exito";
        limpiarIntentos(username);

        // Redirecciona después de 1 segundo
        setTimeout(() => {
          window.location.href = window.location.origin + "./loginweb/x.html";
        }, 1000);

      } else {
        statusElement.textContent = "❌ Usuario o contraseña incorrectos";
        statusElement.className = "mensaje-error";
        throw new Error("Datos inválidos");
      }

    } catch (err) {
      if (err.message !== "Datos inválidos") {
        statusElement.textContent = err.message;
        statusElement.className = "mensaje-error";
      }
    }
  });
});
