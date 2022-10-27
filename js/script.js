const URL_NASA_IMAGES = `https://images-api.nasa.gov/search?q=` ;
let searchValue = document.getElementById("searcherInputID");

document.getElementById("button").addEventListener("click",()=>{

    fetch(URL_NASA_IMAGES + searchValue.value) 
    .then (response => response.json()) 
    .then(json => mostrarDatos(json))
    .catch(e=> console.log(e))

        const mostrarDatos = (datos) => {
            console.log(datos);
            let datosContentToAppend = ""
            for (let i=0; datos.collection.items.length; i++){
                        
            datosContentToAppend += `

            <div class="container mx-auto border m-1 p-1 mt-5 card" style="width: 26rem; height: 26rem; background-color: #F5F5F5" >
                
                 <div class="col mx-auto overflow-auto" style="width: 100%">
                
                    <div class="card-img-top mx-auto" m-1 style="width: 100%; max-height:15rem; overflow:hidden" >
                        <img src=${datos.collection.items[i].links[0].href} class="card-img-top" style="width: 100%; max-height:25em" ></img>
                    </div>
                
                    <div class="card-body m-1 mx-auto text-sm-start " style="width: 100%; height: 100%;">
                        <p class="card-text"> <strong>${datos.collection.items[i].data[0].title}</strong> </p>
                        <div  class="card-body">
                            <p>${datos.collection.items[i].data[0].description}</p>
                        </div>
                    </div>              
                </div>

            </div>
                `
            document.getElementById("titulo_descripcion").innerHTML = datosContentToAppend;
            }
    };

});