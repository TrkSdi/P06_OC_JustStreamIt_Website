

const best_movie_url = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=1"
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
            const bestMoviePic = document.getElementById("best-movie-pic")
            //console.log(resObj.results);

            for (element of resObj.results) {
                console.log(element.id);
                bestMoviePic.innerHTML += '<img onclick="openModal('+ element.id +')" src="' + element.image_url + '" alt="" class="best-image"></img>\n \
        <div id="myModal" class="modal">\n \
            <div class="modal-content">\n \
                <span class="close">×</span>\n \
                <ul>\n \
                    <li> Titre :  ' + element.title + '</li>\n \
                    <li> Genre :  ' + element.genres + '</li>\n \
                    <li> Année :  ' + element.year + '</li>\n \
                    <li> Votes :  ' + element.votes + '</li>\n \
                    <li> Score IMDB : ' + element.imdb_score + '</li>\n \
                    <li> Réalisateur : ' + element.directors + '</li>\n \
                    <li> Acteurs : ' + element.actors + '</li>\n \
                    <li> Pays : ' + element.country + '</li>\n \
            </div>\n \
        </div>\n'
            
                
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

function getBestMovieCategory(url, category) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            const resObj = JSON.parse(this.responseText);
            const tagClass = document.getElementById(category);
            //console.log(typeof(resObj));

            var resultObj = resObj["results"]

            for (i = 0; i < resultObj.length; i++) {
                //console.log(resultObj[i]["id"]);
                tagClass.innerHTML += '<img onclick="openModal('+ resultObj[i]["id"] +')" src="' + resultObj[i]["image_url"] + '></img>\n \
                <div id="myModal" class="modal">\n \
                    <div class="modal-content">\n \
                        <span class="close">×</span>\n \
                        <ul>\n \
                            <li> Titre :  ' + resultObj[i]["title"] + '</li>\n \
                            <li> Genre :  ' + resultObj[i]["genres"] + '</li>\n \
                            <li> Année :  ' + resultObj[i]["year"] + '</li>\n \
                            <li> Votes :  ' + resultObj[i]["votes"] + '</li>\n \
                            <li> Score IMDB : ' + resultObj[i]["imdb_score"] + '</li>\n \
                            <li> Réalisateur : ' + resultObj[i]["directors"] + '</li>\n \
                            <li> Acteurs : ' + resultObj[i]["actors"] + '</li>\n \
                            <li> Pays : ' + resultObj[i]["country"] + '</li>\n \
                    </div>\n \
                </div>\n'
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
getBestMovieCategory(sci_fi_url, "best-movies-category-pic");