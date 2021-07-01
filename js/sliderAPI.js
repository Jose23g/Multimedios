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
  document.querySelector(".cs-hidden").innerHTML = template;

})    
.catch(function (error) {
 // handle error
 console.log(error);
})
.then(function () {
 // always executed
});
