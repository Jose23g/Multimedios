window.onload = function consumo(){
    const api_key = 'c94ae96d76db457ccdb3767fef477a02';
    var idpeli;

    axios.get('https://api.themoviedb.org/3/trending/all/day?api_key='+api_key)
      .then(function(response)
            {
                var peli = response.data.results;
                let contenido = "";
                 
               peli.forEach(element => {
                   if(element.media_type == "tv"){

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

                   }else{

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
                   }
               });
               document.querySelector('#app').innerHTML = contenido;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
              })
              .then(function () {
                // always executed
              });


       axios.get('https://api.themoviedb.org/3/tv/popular?api_key=c94ae96d76db457ccdb3767fef477a02&language=es-US&page=1')
       .then(function(response){
           console.log(response);
         
           var populares = response.data.results;
           let template = "";

         populares.forEach(element => {
             template += 

                "<li class=\"item-a\">"+
                    "<div class=\"showcase-box\">"+
                        "<img src=\"https://image.tmdb.org/t/p/w500"+element.poster_path+"\">"+
                        "<div class=\"capa\">"+
                            "<h3>"+element.original_name+"</h3>"+
                            "<p>sidhasjdhaosidjapsofja[doskf[aspkd[adpfjapdf</p>"+
                        "</div>"+
                    "</div>"+
                "</li>";


             
                    
         });
         document.querySelector(".cs-hidden").innerHTML = template

       })    
       .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });


}
