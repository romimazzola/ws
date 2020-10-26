var articles=[];
//Muestra los artículos
function showArticles(array) {
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let articulos = array[i];
        let cantidad = articulos.count;
        let precioTotal = articulos.unitCost * cantidad;

            htmlContentToAppend += `
            <tr>
            <td><img src=${articulos.src}></td>
            <td>${articulos.name}</td>
            <td>UYU ${articulos.unitCost}</td>
            <td><input type="number" class="form-control" id="barra" placeholder="" value=${cantidad} min="0"></td>
            <td id="cambiar">UYU ${precioTotal}</td>
            </tr>
            `;

        document.getElementById("articlesList").innerHTML = htmlContentToAppend;

        document.getElementById("hola").innerHTML = precioTotal;
    
//Cambia total a pagar
        document.getElementById("barra").addEventListener("change", function() {
            cantidad = this.value;
            precioTotal = articulos.unitCost * cantidad;
            
            document.getElementById("cambiar").innerHTML = precioTotal;
            document.getElementById("hola").innerHTML = precioTotal;
        }); 
        //Según método de envío
        document.getElementById("premium").addEventListener("change", function(){
            let prueba = parseFloat (document.getElementById("cambiar").innerHTML);
            let cuenta = (prueba * 15)/100;
            document.getElementById("total").innerHTML = cuenta;
            let chau = parseFloat(document.getElementById("hola").innerHTML);
            let suma = cuenta + chau;
            document.getElementById("pagoTotal").innerHTML = suma;
        })
        document.getElementById("express").addEventListener("change", function(){
            let prueba = parseFloat (document.getElementById("cambiar").innerHTML);
            let cuenta2 = (prueba * 7)/100;
            document.getElementById("total").innerHTML = cuenta2;
            let chau = parseFloat(document.getElementById("hola").innerHTML);
            let suma = cuenta2 + chau;
            document.getElementById("pagoTotal").innerHTML = suma;
        })
        document.getElementById("standard").addEventListener("change", function(){
            let prueba = parseFloat (document.getElementById("cambiar").innerHTML);
            let cuenta3 = (prueba * 5)/100;
            document.getElementById("total").innerHTML = cuenta3;
            let chau = parseFloat(document.getElementById("hola").innerHTML);
            let suma = cuenta3 + chau;
            document.getElementById("pagoTotal").innerHTML = suma;
        })
};
};

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            articles = resultObj.data;
            showArticles(articles["articles"]);
        };
    });
});

//Validando campos

//document.forms["metodo"]. addEventListener("submit", checkDatos);

function mostrarAlerta() {
    alert("Complete los campos restantes");
}

var metodo = document.forms["metodo"]["tipo"].value;
var domicilio = document.forms["domicilio"]["dom"].value;
var forma = document.forms["forma"]["for"].value;


function chequear() {
    if(!metodo || !domicilio || !forma) {
        mostrarAlerta();
    }else{
        finalizarCompra();
    }
}

function finalizarCompra(){
    chequear();
    alert("Su compra ha sido procesada")
}

