
var buscador = document.getElementById("buscar");
var buscar = document.querySelector(".fg-buscar");
var equis = document.querySelector(".fg-equis");
var principal = document.querySelector(".principal");


buscador.addEventListener('keyup', function(){

  var busqueda = document.getElementById("buscar").value;
  var mostrarprincipal = document.getElementById("principal"); 
  var ocultaprincipal = document.getElementById("contenedor_principal");

  var visible = "visible";
  var novisible = "novisible";

  if(busqueda.length >0) {
    Busqueda();
    if(ocultaprincipal.className.includes(novisible)){
      
      
    } else{
     console.log("No lo tiene")
     ocultaprincipal.className = ocultaprincipal.className.replace(visible," ").trim();
     ocultaprincipal.className+= " "+ novisible;
   }

   if(mostrarprincipal.className.includes(novisible)){
    mostrarprincipal.className = mostrarprincipal.className.replace(novisible," ").trim();
    mostrarprincipal.className+= " "+ visible;
  }
    
    
    

  } else{
    if(ocultaprincipal.className.includes(novisible)){
            
      ocultaprincipal.className = ocultaprincipal.className.replace(novisible," ").trim();
      ocultaprincipal.className+= " "+ visible;
      console.log("Se lo quitamos");
      principal.style.cssText = "display: none;"
  } 

  if(mostrarprincipal.className.includes(visible)){
    mostrarprincipal.className = mostrarprincipal.className.replace(visible," ").trim();
    mostrarprincipal.className+= " "+ novisible;
  } 
  
  }
  
 
  
  }); 

  buscador.addEventListener('click', function(){
    Escribe();
  })

  equis.addEventListener('click', function(){
    Borra();
  })

function Escribe(e){



  if(window.matchMedia("(max-width: 820px)").matches){
    buscador.style.cssText = "width: 200px;";
    equis.style.cssText = "display: block; top: 25%; left: 175px;";
    buscar.style.cssText = "opacity: 0; z-index: -1;";

  }else{
    buscador.style.cssText = " width: 350px;";
    equis.style.cssText = "display: block;";
    buscar.style.cssText = "opacity: 0; z-index: -1;";
    console.log("Se activo");
  }
  
    
}

function Borra(e){
  var cajatexto = document.getElementById("buscar").value;
  var visible = "visible";
  var novisible = "novisible";
  var ocultaprincipal = document.getElementById("contenedor_principal");
  
  if(cajatexto.length >0) {  
    if(ocultaprincipal.className.includes(novisible))
    {
      ocultaprincipal.className = ocultaprincipal.className.replace(novisible," ").trim();
      ocultaprincipal.className+= " "+ visible;
      principal.style.cssText = "display: none;";
      if(window.matchMedia("(max-width: 820px)").matches){
    
        buscador.style.cssText = "width: 30px; height: 30px;";
        buscar.style.cssText = "top: 50%; left: 8px; font-size: 20px;";
        buscador.value = "";
        equis.style.cssText = "display:none"
        principal.style.cssText = "display: none;"
      
    
      }
      else
      {
        buscador.style.cssText = "width: 40px;";
        buscar.style.cssText = "";
        buscador.value = "";
        equis.style.cssText = "display:none"
        principal.style.cssText = "display: none;"
      }

    } 
    else
    {
    } 

    var mostrarprincipal = document.getElementById("principal");
      if(mostrarprincipal.className.includes(visible))
      {
        mostrarprincipal.className = mostrarprincipal.className.replace(visible," ").trim();
        mostrarprincipal.className+= " "+ novisible;
        
      }   
     
  }
  else
  {
    if(window.matchMedia("(max-width: 820px)").matches){
    
      buscador.style.cssText = "width: 30px; height: 30px;";
      buscar.style.cssText = "top: 50%; left: 8px; font-size: 20px;";
      buscador.value = "";
      equis.style.cssText = "display:none"
      principal.style.cssText = "display: none;"
    
  
    }
    else
    {
      buscador.style.cssText = "width: 40px;";
      buscar.style.cssText = "";
      buscador.value = "";
      equis.style.cssText = "display:none"
      principal.style.cssText = "display: none;"
    }
  } 
  
}


function Busqueda(argument) {

  var busqueda = document.getElementById("buscar").value;
  axios
  .get("https://api.themoviedb.org/3/search/multi?api_key=c94ae96d76db457ccdb3767fef477a02&language=es-US&query=" +busqueda +"&page=1&include_adult=false")
  .then(function (response) {
    var peli = response.data.results;
    let contenido = "";

    peli.forEach((element) => {
      if (element.media_type == "tv") {
        
        contenido += "<div class=\"pelis\">"+
          "<a onclick=\"eligiendo()\" href=\"detallePeli.html?id="+element.id+"&media="+element.media_type+"\">"+
              "<div class=\"imagen\">"+
                  "<img src=\"https://image.tmdb.org/t/p/w500"+element.poster_path+"\" class=\"cartelera\">"+
              "</div>"+
              "<div class=\"circulo\">"+
                  "<label>"+element.vote_average+"</label>"+
              "</div>"+
              "<div class=\"info-peli\">"+
                  "<p class=\"titulo flex flex-col\">"+element.original_name+"<samp class=\"categoria\">"+element.media_type+"</samp></p>"+
                  "<div>"+
                      "<input type=\"button\" value=\"100m \" class=\"btn-dura\">"+
                  "</div>"+
                  "<div class=\"peli-descripcion\">"+
                      "<p>"+element.overview+"</p>"+
                  "</div>"+
              "</div>"+
          "</a>"+
      "</div>";

      } else if (element.media_type == "movie") {
       
       contenido += "<div class=\"pelis\">"+
                      "<a onclick=\"eligiendo()\" href=\"detallePeli.html?id="+element.id+"&media="+element.media_type+"\">"+
                          "<div class=\"imagen\">"+
                              "<img src=\"https://image.tmdb.org/t/p/w500"+element.poster_path+"\" class=\"cartelera\">"+
                          "</div>"+
                          "<div class=\"circulo\">"+
                              "<label>"+element.vote_average+"</label>"+
                          "</div>"+
                          "<div class=\"info-peli\">"+
                              "<p class=\"titulo flex flex-col\">"+element.original_title+"<samp class=\"categoria\">"+element.media_type+"</samp></p> "+
                              "<div>"+
                                  "<input type=\"button\" value=\"100m \" class=\"btn-dura\">"+
                              "</div>"+
                              "<div class=\"peli-descripcion\">"+
                                  "<p>"+element.overview+"</p>"+
                              "</div>"+
                          "</div>"+
                      "</a>"+
                  "</div>";

      } 
      else 
      {
      
      }
      principal.innerHTML = contenido;
          principal.style.cssText = "display: flex;"+
                          "flex-wrap: wrap;"+
                          "align-content: center;"+
                          "justify-content: center;"+
                          "transition: all .5s;";
    });
    

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

 
  

 
}
