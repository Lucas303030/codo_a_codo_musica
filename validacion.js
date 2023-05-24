function validarFormulario() {

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;


    var regexNombre = /^[a-zA-Z\s]+$/;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (nombre === "") {
        document.getElementById("error-nombre").innerHTML = "Por favor, ingresa tu nombre";
        return false;
    } else if (!regexNombre.test(nombre)) {
        document.getElementById("error-nombre").innerHTML = "El nombre solo puede contener letras y espacios";
        return false;
    } else if (nombre !== "") {
        document.getElementById("error-nombre").innerHTML = ""
    }


    if (email === "") {
        document.getElementById("error-email").innerHTML = "Por favor, ingresa tu correo electrónico";
        return false;
    } else if (!regexEmail.test(email)) {
        document.getElementById("error-email").innerHTML = "Por favor, ingresa un correo electrónico válido";
        return false;
    } else if (email !== "") {
        document.getElementById("error-email").innerHTML = ""
    }

    alert("Formulario enviado exitosamente");
    return true;
}
