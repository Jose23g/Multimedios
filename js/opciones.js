
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

if(id == "movies"){
  function movies () {
    
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=c94ae96d76db457ccdb3767fef477a02&language=en-US&page=1')
    .then(response => response.json())
    .then(data => (console.log(data)));
    }
 }