
window.onload = function eligiendo(){
    var id = parametros("id");
    var media = parametros("media");

      if(media == "tv"){

        axios.get('https://api.themoviedb.org/3/tv/'+id+'?api_key=c94ae96d76db457ccdb3767fef477a02')
      .then(function(response) 
      {
        // handle success
        console.log(response.data);
        document.querySelector("#titulo").innerHTML = "<h2> "+response.data.name+"</h2>";
        document.querySelector(".posteroriginal").src = "https://image.tmdb.org/t/p/w500"+response.data.poster_path;
        document.querySelector(".header_pelis").style.background = "url('https://image.tmdb.org/t/p/original/"+response.data.backdrop_path+"') center";
        document.querySelector(".header_pelis").style.backgroundSize = "cover";
        document.querySelector(".descripcionpeli").textContent = response.data.overview;
        document.querySelector(".label").textContent = response.data.vote_average+"%";

        let generos ="";
        response.data.genres.forEach(element => {
          generos += "<a>"+element.name+"</a>,&nbsp;"
        });

        document.querySelector(".generos").innerHTML = generos;

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

      }else{

        axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=c94ae96d76db457ccdb3767fef477a02')
      .then(function (response) {
        // handle success
        console.log(response.data);
        document.querySelector("#titulo").innerHTML = "<h2>"+response.data.original_title+"</h2>";
        document.querySelector(".posteroriginal").src = "https://image.tmdb.org/t/p/w500"+response.data.poster_path;
        document.querySelector(".header_pelis").style.background = "url('https://image.tmdb.org/t/p/original/"+response.data.backdrop_path+"') center";
        document.querySelector(".header_pelis").style.backgroundSize = "cover";
        document.querySelector(".descripcionpeli").textContent = response.data.overview;
        document.querySelector(".label").textContent = response.data.vote_average+"%";

        let generos ="";
        response.data.genres.forEach(element => {
          generos += "<a>"+element.name+"</a>,&nbsp;"
        });
        
        document.querySelector(".generos").innerHTML = generos;

        var horas = response.data.runtime;
        var h = Math.floor(horas/60);
        var m = horas % 60;
        document.querySelector(".duracion").textContent = h+"h "+m+"m";

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

      }
}


function parametros(nombreparametro){
  let direccion = new URLSearchParams(window.location.search);
  return direccion.get(nombreparametro);
}

