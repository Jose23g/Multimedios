var idpeli; 
const api_key = 'c94ae96d76db457ccdb3767fef477a02';
fetch('https://api.themoviedb.org/3/trending/all/day?api_key='+api_key)
      .then(response => response.json())
      .then(function(data)
            {
                var peli =data.results;
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

            });
