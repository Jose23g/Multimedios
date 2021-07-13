 
var vermovies = document.querySelector(".movies");
var verestrenos = document.querySelector('.estrenos');
var verpopulares = document.querySelector('.populares');
var pintaropcionesmenu = document.querySelector('.contenedor_principal');
var verseries = document.querySelector('.series');

    vermovies.addEventListener('click', movies); //esto fue lo que cambie
        //movies();
        //window.location="opcionesmenu.html";
    
   // });

    verestrenos.addEventListener('click', function(){
     estrenos();
     window.location="opcionesmenu.html";
     });

     verpopulares.addEventListener('click', function(){
     Populares();
     window.location="opcionesmenu.html";
    });
 
    verseries.addEventListener('click', function(){
        series();
        window.location="opcionesmenu.html";
       });

  function movies () {
    alert("Entramos");
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c94ae96d76db457ccdb3767fef477a02&language=en-US&page=1')
    .then(function (response) {
        let contenido = "";
        var peli = response.data.results;
        console.log("Vamos a pintar");
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

function estrenos () {
    alert("Estrenos");
    axios.get()
    .then(function (response) {
      // handle success
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
} 


function Populares () {
    alert("Populares");
    axios.get()
    .then(function (response) {
      // handle success
      console.log("Populares");
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
} 


function series () {
    alert("Series");
    axios.get()
    .then(function (response) {
      // handle success
      console.log("Series");
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}