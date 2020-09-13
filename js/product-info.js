var product = {};
var comments = {};


//Función para mostrar imágenes
function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

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

let comentario = {
    "description": undefined,
    "score": undefined,
    "user": undefined,
    "dateTime": undefined
};
//Función para agregar comentario
function publicarComentario(comentario){

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
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.currency + " " + product.cost;
            productSoldCountHTML.innerHTML = product.soldCount;

            //Muestro las imagenes
            showImagesGallery(product.images);
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
