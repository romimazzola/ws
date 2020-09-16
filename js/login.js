const errorMsg = document.getElementById("login-error");

document.forms["login"]. addEventListener("submit", checkDatos);

function checkDatos(event){
    event.preventDefault()
    var correo = document.forms["login"]["correo"].value;
    var contraseña = document.forms["login"]["contraseña"].value;

    if(!correo || !contraseña){
        showError();
    }else{
        localStorage.setItem("correo", correo);
        window.location = "index.html";
    }
};

//Defino funciones
function showError(){
    errorMsg.classList.add("alert", "alert-danger");
    errorMsg.innerHTML = "Complete los campos e ingrese sus datos correctamente.";
}

//Función para botón de usuario (cierra sesión)
function salir() {
    localStorage.removeItem("correo");
    localStorage.removeItem("contraseña");
}

