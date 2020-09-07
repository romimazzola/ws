var products = {};

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

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            products = resultObj.data;

            let productsNameHTML  = document.getElementById("productsName");
            let productsDescriptionHTML = document.getElementById("productsDescription");
            let productsCostHTML = document.getElementById("productsCost");
            let productsSoldCountHTML = document.getElementById("productssoldCount");
        
            productsNameHTML.innerHTML = products.name;
            productsDescriptionHTML.innerHTML = products.description;
            productsCostHTML.innerHTML = products.currency + " " + products.cost;
            productsSoldCountHTML.innerHTML = products.soldCount;

            //Muestro las imagenes
            showImagesGallery(products.images);
        }
    });
});