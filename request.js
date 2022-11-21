

const best_movie_url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=1"

function getBestMovie(url) {
    // Création de l'objet xhr
    const xhr = new XMLHttpRequest();
    // Interroger le serveur et récupérer la réponse 
    xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            const resObj = JSON.parse(this.responseText) // Objet json
            const bestMoviePic = document.getElementById("best-movie-pic")
            const bestMovieContent =  document.getElementById("modal-content")
            //console.log(resObj.results);

            for (element of resObj.results) {
                console.log(element.id);
                bestMoviePic.innerHTML += '    <img onclick="openModal('+ element.id +')" src="' + element.image_url + '" alt="" class="best-image"></img>'
            
                
                console.log(bestMoviePic.innerHTML);


        
            } 
        }   else if (this.status == 404) {
                document.getElementById("best_movie").innerHTML = "Erreur 404";
        }
            else {
                document.getElementById("best_movie").innerHTML = "<img src='images/loading_mini.gif'>";
        }
    }   
    
        // Spécifier la ressource sur le serveur 
        xhr.open("GET", url, true);
        xhr.send();
    }

getBestMovie(best_movie_url)