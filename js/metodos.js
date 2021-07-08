
document.querySelector(".input").addEventListener("keyup", function () {
  Busqueda();
});;

buscador.addEventListener

function Busqueda(argument) {
  var busqueda = document.querySelector(".input").value;

  axios
    .get(
      "https://api.themoviedb.org/3/search/multi?api_key=c94ae96d76db457ccdb3767fef477a02&language=en-US&query=" +
        busqueda +
        "&page=1&include_adult=false"
    )

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

        } else {
        }
        document.querySelector(".principal").innerHTML = contenido;
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
