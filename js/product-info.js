var product = {};
var comments = {};

//Función para mostrar comentarios
function showComments(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let product = array[i];

        htmlContentToAppend += `
        <div class="card" style="width: 50ren;">
        <div class="card-body">
        <h5 class="card-title">Calificación: ` + product.score + `</h5>
        <h5 class="card-title">` + product.user + `</h5>
        <p class="card-text">` + product.description + `</p>
        <small>Publicado el: ` + product.dateTime + `</small>
        </div>
        </div>
        </br>
        `

        document.getElementById("commentsList").innerHTML = htmlContentToAppend;
}
}

//Función para agregar comentario
let comentario = {
    "description": undefined,
    "score": undefined,
    "user": undefined,
    "dateTime": undefined
};

function publicarComentario(comentario){
comentario.user = localStorage.getItem("correo");
comentario.description = document.getElementById("comentario").value;
    comments.push(comentario);

    showComments(comments);

}

//Info del producto
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("productCost");
            let productSoldCountHTML = document.getElementById("productsoldCount");
            let relatedProductsHTML = document.getElementById("relatedProducts");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.currency + " " + product.cost;
            productSoldCountHTML.innerHTML = product.soldCount;
            relatedProductsHTML.innerHTML = product.relatedProducts;
        }
    });
});

//Comentarios
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comments = resultObj.data;

            showComments(comments);
        }
    });
});