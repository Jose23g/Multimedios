
const geturl = new URLSearchParams(window.location.search);
id = geturl.get('tipo');

if(id == "movies"){
  function movies () {
    
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=c94ae96d76db457ccdb3767fef477a02&language=en-US&page=1')
    .then(response => response.json())
    .then(data => (console.log(data)));
    }
 }