const geturl = new URLSearchParams(window.location.search);
id = geturl.get('id');
media = geturl.get('media');
   
      if(media == "tv"){

        axios.get('https://api.themoviedb.org/3/tv/'+id+'?api_key=c94ae96d76db457ccdb3767fef477a02')
      .then(function(response) 
      {
        // handle success
        console.log(response.data);
        document.querySelector("#titulo").innerHTML = "<h2> "+response.data.name+"</h2>";
        document.querySelector(".posteroriginal").src = "https://image.tmdb.org/t/p/w500"+response.data.poster_path;
        document.querySelector(".header_pelis").style.background = "url('https://image.tmdb.org/t/p/original/"+response.data.backdrop_path+"') center right no-repeat";
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


      axios.get('https://api.themoviedb.org/3/tv/'+id+'/credits?api_key=c94ae96d76db457ccdb3767fef477a02&language=es-US')
      .then(function(response){
         
        let carrusel = "";
        var reparto = document.querySelector("#autoWidth");
        response.data.cast.forEach(element =>{
              carrusel += "<li class=\"item-a\">"
              +"<div class=\"contenedor\">"
                  +"<img class=\"persona\" src=\"https://www.themoviedb.org/t/p/w138_and_h175_face/"+element.profile_path+"\">"
                  +"<h4 class=\"NombreReal\">"+element.name+"</h4>"
                  +"<h5 class=\"NombrePersonaje\">"+element.character+"</h5>"
              +"</div>"  
          +"</li>"
        });
        reparto.innerHTML = carrusel;


        console.log(response);
      }).catch(function (error) {
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
        
        document.querySelector("#titulo").innerHTML = "<h2>"+response.data.original_title+"</h2>";
        document.querySelector(".posteroriginal").src = "https://image.tmdb.org/t/p/w500"+response.data.poster_path;
        document.querySelector(".header_pelis").style.background = "url('https://image.tmdb.org/t/p/original/"+response.data.backdrop_path+"') top center no-repeat no-repeat";
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


      axios.get('https://api.themoviedb.org/3/movie/'+id+'/credits?api_key=c94ae96d76db457ccdb3767fef477a02&language=es-US ')
      .then(function(response){
        
        let carrusel = "";
        var reparto = document.querySelector("#autoWidth");
        response.data.cast.forEach(element =>{
              carrusel += "<li class=\"item-a\">"
              +"<div class=\"contenedor\">"
                  +"<img class=\"persona\" src=\"https://www.themoviedb.org/t/p/w138_and_h175_face/"+element.profile_path+"\">"
                  +"<h4 class=\"NombreReal\">"+element.name+"</h4>"
                  +"<h5 class=\"NombrePersonaje\">"+element.character+"</h5>"
              +"</div>"  
          +"</li>"
        });
        reparto.innerHTML = carrusel;

      }).catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
      

      }


