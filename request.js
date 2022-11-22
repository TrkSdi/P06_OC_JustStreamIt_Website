

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
            
            //console.log(resObj.results);

            for (element of resObj.results) {
                new_url = "http://localhost:8000/api/v1/titles/" + element.id
                //console.log(new_url)
                const result = new XMLHttpRequest;
                result.onload = function() {
                    const objt = JSON.parse(result.responseText);
                    const bestMovie = document.getElementById("movie-picture");

                    //console.log(objt.id)

                    bestMovie.innerHTML += '<img onclick="openModal('+ objt.id +')" src="' + objt.image_url + '" alt="" class="best-image">\n \
                    <div id="' + String(objt.id) + '" class="modal">\n \
                        <div class="modal-content">\n \
                            <span id="close-btn" class="close" data-dismiss="modal">×</span>\n \
                            <ul>\n \
                                <li> Titre :  ' + objt.original_title + '</li>\n \
                                <li> Genre :  ' + objt.genres + '</li>\n \
                                <li> Année de sortie :  ' + objt.year + '</li>\n \
                                <li> Notes :  ' + objt.avg_vote + '</li>\n \
                                <li> Score IMDB : ' + objt.imdb_score + '</li>\n \
                                <li> Réalisateur : ' + objt.directors + '</li>\n \
                                <li> Acteurs : ' + objt.actors + '</li>\n \
                                <li> Durée : ' + objt.duration + 'min</li>\n \
                                <li> Pays : ' + objt.countries + '</li>\n \
                                <li> Box office $: ' + objt.worldwide_gross_income + '</li>\n \
                                <li> Synopsis : ' + objt.description + '</li>\n \
                        </div>\n \
                    </div>\n'
                }
                result.open("GET", new_url, true);
                result.send();
            }
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
            //console.log(resultObj)

        for (i = 0; i < resultObj.length; i++) {
                new_url = "http://localhost:8000/api/v1/titles/" + resultObj[i]["id"];
                //console.log(new_url);
                const result = new XMLHttpRequest;
                result.onload = function() {
                    const objt = JSON.parse(result.responseText);
                    const bestCategory = document.getElementById(category);   

                    bestCategory.innerHTML +='<img onclick="openModal(' + objt.id + ')" src="' + objt.image_url + '">\n\
                    <div id="' + String(objt.id) + '" class="modal">\n\
                        <div class="modal-content">\n\
                            <span id="close-btn" class="close" data-dismiss="modal">×</span>\n\
                            <ul>\n\
                            <li> Titre :  ' + objt.original_title + '</li>\n \
                            <li> Genre :  ' + objt.genres + '</li>\n \
                            <li> Année de sortie :  ' + objt.year + '</li>\n \
                            <li> Notes :  ' + objt.avg_vote + '</li>\n \
                            <li> Score IMDB : ' + objt.imdb_score + '</li>\n \
                            <li> Réalisateur : ' + objt.directors + '</li>\n \
                            <li> Acteurs : ' + objt.actors + '</li>\n \
                            <li> Durée : ' + objt.duration + 'min</li>\n \
                            <li> Pays : ' + objt.countries + '</li>\n \
                            <li> Box office : $' + objt.worldwide_gross_income + '</li>\n \
                            <li> Synopsis : ' + objt.description + '</li>\n \
                        </div>\n\
                    </div>\n'
                }
                result.open("GET", new_url, true);
                result.send();
                
            }        
                //console.log(bestCategory.innerHTML)

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
getBestMovieCategory(sci_fi_url, "Sci-fi");
getBestMovieCategory(thriller_url, "Thriller");
getBestMovieCategory(drama_url, "Drama");

