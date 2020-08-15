const errorMsg = document.getElementByI("login-error");

document.forms["login"]. addEventListener("submit", checkDatos);

function checkDatos(event){
    event.preventDefault()
    var correo = document.forms["login"]["correo"].value;
    var password = document.forms["login"]["password"].value;

    if(!correo || !password){
        showError();
    }else{
         localStorage.setItem("correo", correo);
         localStorage.setItem("logged", true);
         window.location.replace("index.html");
    }
};

//Defino función
function showError(){
    errorMsg.classList.add("alert", "alert-danger");
    errorMsg.innerHTML = "Complete los campos e ingrese sus datos correctamente.";
}