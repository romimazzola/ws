function guardarDatos() {
    var nombre = document.forms["perfil"]["nombre"].value;
    var apellido = document.forms["perfil"]["apellido"].value;
    var nacimiento = document.forms["perfil"]["nacimiento"].value;
    var mail = document.forms["perfil"]["mail"].value;
    var telefono = document.forms["perfil"]["telefono"].value;

    var datosPersonales = {
        nombre: nombre,
        apellido: apellido,
        nacimiento: nacimiento,
        mail: mail,
        telefono: telefono
    };

    localStorage.setItem("datosP", JSON.stringify(datosPersonales))
    alert("Datos guardados con éxito")
};

document.addEventListener("DOMContentLoaded", () => {
    var datosP = localStorage.getItem(datosP)
})


