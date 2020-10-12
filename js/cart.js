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
            <td>${articulos.unitCost}USD</td>
            <td><input type="number" class="form-control" id="barra" placeholder="" value=${cantidad} min="0"></td>
            <td id="cambiar">${precioTotal}USD</td>
            </tr>
            `;

        document.getElementById("articlesList").innerHTML = htmlContentToAppend;
//Cambia total a pagar
        document.getElementById("barra").addEventListener("change", function() {
            cantidad = this.value;
            precioTotal = articulos.unitCost * cantidad;
            
            document.getElementById("cambiar").innerHTML = precioTotal + "USD";
        });
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

