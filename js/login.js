const errorMsg = document.getElementById("login-error");

document.forms["login"]. addEventListener("submit", checkDatos);

function checkDatos(event){
    event.preventDefault()
    var correo = document.forms["login"]["correo"].value;

    if(!correo || !password){
        showError();
    }else{
         sessionStorage.setItem("correo", correo);
         sessionStorage.setItem("contraseña", password);
    }
};

//Defino función
function showError(){
    errorMsg.classList.add("alert", "alert-danger");
    errorMsg.innerHTML = "Complete los campos e ingrese sus datos correctamente.";
}

function Ingresar(){
    if("correo & contraseña"){
        window.location = "eMercado.html";
    }else{
        showError();
    }
}