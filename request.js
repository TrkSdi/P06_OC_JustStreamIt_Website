

const best_movie_url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=1"
const best_movies_url = "http://localhost:8000/api/v1/titles/?page_size=7&sort_by=-imdb_score"
const sci_fi_url = "http://localhost:8000/api/v1/titles/?genre=Sci-fi&sort_by=-imdb_score&page_size=7"
const thriller_url = "http://localhost:8000/api/v1/titles/?genre=thriller&sort_by=-imdb_score&page_size=7"
const drama_url = "http://localhost:8000/api/v1/titles/?genre=drama&sort_by=-imdb_score&page_size=7"


function getBestMovie(url) {
    // Création de l'objet xhr
    const xhr = new XMLHttpRequest();
    // Interroger le serveur et récupérer la réponse 
    xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            const resObj = JSON.parse(this.responseText) // Objet json
            
            //console.log(resObj.results);

            for (element of resObj.results) {
                new_url = "http://localhost:8000/api/v1/titles/" + element.id
                //console.log(new_url)
                const result = new XMLHttpRequest;
                result.onload = function() {
                    const objt = JSON.parse(result.responseText);
                    const bestMovie = document.getElementById("movie-picture");

                    //console.log(objt)

                    bestMovie.innerHTML = '<img onclick="openModal(' + String(objt.id) + ')" src="' + objt.image_url + '">'
                    
                    //console.log(objt.original_title)
                    //console.log(bestMovie.innerHTML)
                }
                result.open("GET", new_url, true);
                result.send();
            }
        }
        else if (this.status == 404) {
            document.getElementById("best_movie").innerHTML = "Erreur 404";
        }
        else {
            document.getElementById("best_movie").innerHTML = "<img src='images/loading_mini.gif'>";
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}

function getBestMovieCategory(url, category) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            const resObj = JSON.parse(this.responseText);
            

            var resultObj = resObj["results"];
            //console.log("RESULTAT", resultObj)

        const bestCategory = document.getElementById(category); 
        for (i = 0; i < resultObj.length; i++) {
            const objt = resultObj[i];
            bestCategory.innerHTML +='<img onclick="openModal(' + String(objt.id) + ')" src="' + objt.image_url + '">'
                    
                    //console.log(objt.original_title); 
                    //console.log(bestCategory.innerHTML);

            }   
        } else if (this.status == 404) {
            document.getElementById("best_movie").innerHTML = "Erreur 404";
        }
        else {
            document.getElementById("best_movie").innerHTML = "<img src='images/loading_mini.gif'>";
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
    
}


getBestMovie(best_movie_url);
getBestMovieCategory(best_movies_url, "all-category");
getBestMovieCategory(sci_fi_url, "Sci-fi");
getBestMovieCategory(thriller_url, "Thriller");
getBestMovieCategory(drama_url, "Drama");

location.reload