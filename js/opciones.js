var vermovies = document.querySelector(".movies"); 
var verestrenos = document.querySelector('.estrenos'); 
var verpopulares = document.querySelector('.popular'); 
var pintaropcionesmenu = document.querySelector('.contenedor_principal'); 
var verseries = document.querySelector('.series');

    vermovies.addEventListener('click', movies); 
    verestrenos.addEventListener('click', estrenos);
    verpopulares.addEventListener('click',populares);
    verseries.addEventListener('click',series); 

       function estrenos() {
        axios.get('https://api.themoviedb.org/3/movie/upcoming?language=es-es&page=1&api_key=c94ae96d76db457ccdb3767fef477a02')
        .then(function(response) { 
          let contenido = "";
          contenido +="<h2>Estrenos</h2><div class=\"flex wrap items-center justify-center \" >";
          var peli =  response.data.results; 
          peli.forEach(element => {
            contenido += 
            "<div class=\"pelis\">"+
                 "<a onclick=\"eligiendo()\" href=\"detallePeli.html?id="+element.id+"&media=movie\">"+
                     "<div class=\"imagen\">"+
                         "<img src=\"https://image.tmdb.org/t/p/w500"+element.poster_path+"\" class=\"cartelera\">"+
                     "</div>"+
                     "<div class=\"circulo\">"+
                         "<label>"+element.vote_average+"</label>"+
                     "</div>"+
                     "<div class=\"info-peli\">"+
                         "<p class=\"titulo flex flex-col\">"+element.original_title+"<samp class=\"categoria\">Pelicula</samp></p> "+
                         "<div>"+
                             "<input type=\"button\" value=\"100m \" class=\"btn-dura\">"+
                         "</div>"+
                         "<div class=\"peli-descripcion\">"+
                             "<p>"+element.overview+"</p>"+
                         "</div>"+
                     "</div>"+
                 "</a>"+
             "</div>";

    });
    contenido +="</div>"
          pintaropcionesmenu.innerHTML = contenido;
        }).catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
       }

       function populares(){
        axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=c94ae96d76db457ccdb3767fef477a02&language=es-ES')
        .then(function(response) {
          let contenido = "";
          contenido +="<h2>Estrenos</h2><div class=\"flex wrap items-center justify-center\" >";
          var peli =  response.data.results; 
          peli.forEach(element => {
            contenido += 
            "<div class=\"pelis\">"+
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

          });
          contenido +="</div>"
          pintaropcionesmenu.innerHTML = contenido;
        }).catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
       }
      

       function series(){
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=c94ae96d76db457ccdb3767fef477a02&language=es-ES&página=1')
        .then(function(response) { 
          let contenido = "";
          var peli =  response.data.results; 
          contenido +="<h2>Estrenos</h2><div class=\"flex wrap items-center justify-center\" >";
          peli.forEach(element => { 

            contenido += 
            "<div class=\"pelis\">"+
                 "<a href=\"detallePeli.html?id="+element.id+"&media=tv\">"+
                     "<div class=\"imagen\">"+
                         "<img src=\"https://image.tmdb.org/t/p/w500"+element.poster_path+"\" class=\"cartelera\">"+
                     "</div>"+
                     "<div class=\"circulo\">"+
                         "<label>"+element.vote_average+"</label>"+
                     "</div>"+
                     "<div class=\"info-peli\">"+
                         "<p class=\"titulo flex flex-col\">"+element.name+"<samp class=\"categoria\">Series</samp></p> "+
                         "<div>"+
                             "<input type=\"button\" value=\"100m \" class=\"btn-dura\">"+
                         "</div>"+
                         "<div class=\"peli-descripcion\">"+
                             "<p>"+element.overview+"</p>"+
                         "</div>"+
                     "</div>"+
                 "</a>"+
             "</div>";
          });
          contenido +="</div>"
          pintaropcionesmenu.innerHTML = contenido; 


        }).catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
       }

       function movies () {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c94ae96d76db457ccdb3767fef477a02&language=es-es&page=1')
        .then(function (response) {
            let contenido = "";
            contenido +="<h2>Estrenos</h2><div class=\"flex wrap items-center justify-center\" >";
            var peli = response.data.results;
            console.log("Vamos a pintar");
            peli.forEach(element => {
                
                    contenido += 
                    "<div class=\"pelis\">"+
                         "<a onclick=\"eligiendo()\" href=\"detallePeli.html?id="+element.id+"&media=movie\">"+
                             "<div class=\"imagen\">"+
                                 "<img src=\"https://image.tmdb.org/t/p/w500"+element.poster_path+"\" class=\"cartelera\">"+
                             "</div>"+
                             "<div class=\"circulo\">"+
                                 "<label>"+element.vote_average+"</label>"+
                             "</div>"+
                             "<div class=\"info-peli\">"+
                                 "<p class=\"titulo flex flex-col\">"+element.original_title+"<samp class=\"categoria\">Pelicula</samp></p> "+
                                 "<div>"+
                                     "<input type=\"button\" value=\"100m \" class=\"btn-dura\">"+
                                 "</div>"+
                                 "<div class=\"peli-descripcion\">"+
                                     "<p>"+element.overview+"</p>"+
                                 "</div>"+
                             "</div>"+
                         "</a>"+
                     "</div>";

            });
            contenido +="</div>"
            pintaropcionesmenu.innerHTML = contenido;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }