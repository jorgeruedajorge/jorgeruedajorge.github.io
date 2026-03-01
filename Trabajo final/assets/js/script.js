document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    // 1. Detener el envío automático para validar primero
    event.preventDefault();

    // 2. Limpiar mensajes de error previos y ocultar mensaje de éxito
    const errores = document.querySelectorAll('.mensaje-error');
    errores.forEach(error => error.textContent = '');
    document.getElementById('mensajeExito').style.display = 'none';

    // 3. Capturar valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();

    let hayErrores = false;

    // Validaciones

    // Nombre: Mínimo 3 caracteres
    if (nombre.length < 3) {
        document.getElementById('errorNombre').textContent = "El nombre debe tener al menos 3 caracteres.";
        hayErrores = true;
    }

    // Ciudad: No vacía
    if (ciudad === "") {
        document.getElementById('errorCiudad').textContent = "Por favor, ingresa tu ciudad.";
        hayErrores = true;
    }

    // Email: Formato válido usando Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('errorEmail').textContent = "Ingresa un correo electrónico válido.";
        hayErrores = true;
    }

    // Asunto: No vacío
    if (asunto === "") {
        document.getElementById('errorAsunto').textContent = "El asunto es obligatorio.";
        hayErrores = true;
    }

    // Descripción: Mínimo 10 caracteres
    if (descripcion.length < 10) {
        document.getElementById('errorDescripcion').textContent = "La descripción debe ser más detallada (mín. 10 caracteres).";
        hayErrores = true;
    }

    // Resultado final

    if (!hayErrores) {
        // Si todo está bien, se muestra éxito y se limpia el formulario
        document.getElementById('mensajeExito').style.display = 'block';
        this.reset(); 
        
        // Para ver los datos en la terminal del navegador
        console.log("Formulario listo para enviar:", { nombre, email, ciudad, asunto, descripcion });
    }
});