
// Création de l'objet xhr 
const xhr = new XMLHttpRequest();
const best_movie_url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=1"
const sci_fi_url = "http://localhost:8000/api/v1/titles/?genre=Sci-fi&sort_by=-imdb_score&page_size=7"
const thriller_url = "http://localhost:8000/api/v1/titles/?genre=thriller&sort_by=-imdb_score&page_size=7"
const drama_url = "http://localhost:8000/api/v1/titles/?genre=drama&sort_by=-imdb_score&page_size=7"

function openModal(movieId) {
    // requete movie id 
    // update information modal
    // affiche le modal 
}


function getBestMovie(url) {
    // Interroger le serveur et récupérer la réponse 
    xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            const resObj = JSON.parse(this.responseText) // Objet json
            const bestMoviePic = document.getElementById("show-modal")
            const bestMovieContent =  document.getElementById("best_movie_detail")
            //console.log(resObj.results);

            for (element of resObj.results) {
                console.log(element.image_url);
                bestMoviePic.innerHTML +=   '<ul>\
                                                    <li><img onclick="openModal('+ element.id +')" src="' + element.image_url + '" alt="' + element.title + '" title="' + element.title + '"></li>\
                                                </ul>';
                
                console.log(bestMoviePic.innerHTML);

                bestMovieContent.innerHTML += ' <div id="overlay">\
                                                  <div id="modal">\
                                                      <ul>\
                                                          <li>' + element.title + '</li>\
                                                          <li>' + element.genres + '</li>\
                                                          <li>' + element.year + '</li>\
                                                          <li>' + element.votes + '</li>\
                                                          <li>' + element.imdb_score + '</li>\
                                                          <li>' + element.directors + '</li>\
                                                          <li>' + element.actors + '</li>\
                                                          <li>' + element.country + '</li>\
                                                          <button id="close-modal" ><img src="images/close_btn_mini.png" alt="close"></button>\
                                                    </ul>\
                                                  </div>\
                                                </div>';

                //console.log(bestMovieContent.innerHTML)
            }
        } else if (this.status == 404) {
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


function getBestMovieCategory(url, category) {
    xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            const resObj = JSON.parse(this.responseText);
            const tagClass = document.getElementById(category);
            //console.log(typeof(resObj));

            var resultObj = resObj["results"]

            for (i = 0; i < resultObj.length; i++) {
                //console.log(resultObj[i]["id"]);
                tagClass.innerHTML += '<ul class="best_movie_list">\
                                    <li><img src=' + resultObj[i]["image_url"] + ' alt="' + resultObj[i]["title"] + '" title="' + resultObj[i]["title"] + '"></li><br>\
                                    <li>' + resultObj[i]["title"] + '</li><br>\
                                    <li>' + resultObj[i]["genres"] + '</li><br>\
                                    <li>' + resultObj[i]["year"] + '</li><br>\
                                    <li>' + resultObj[i]["votes"] + '</li><br>\
                                    <li>' + resultObj[i]["imdb_score"] + '</li><br>\
                                    <li>' + resultObj[i]["directors"] + '</li><br>\
                                    <li>' + resultObj[i]["actors"] + '</li><br>\
                                    <li>' + resultObj[i]["country"] + '</li><br></ul>';
                
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
getBestMovieCategory(sci_fi_url, "sci-fi");
//getBestMovieCategory(thriller_url, "drama");
//getBestMovieCategory(drama_url, "drama");
    
