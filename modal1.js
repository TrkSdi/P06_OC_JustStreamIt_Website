function openModal(movieId) {

    var modal = document.getElementById("myModal");  
    url = "http://localhost:8000/api/v1/titles/" + String(movieId);

    const mod = new XMLHttpRequest();
    // Interroger le serveur et récupérer la réponse 
    mod.onload = function() {
        
        if (this.readyState == 4 && this.status == 200) {
            const objt = JSON.parse(this.responseText);

            console.log(objt)

            var modalContent = document.getElementById("content-movie");
            //on modifie le content
            modalContent.innerHTML = '<ul>\n\
            <li> Titre :  ' + objt.original_title + '</li>\n\
            <li> Genre :  ' + objt.genres + '</li>\n\
            <li> Année de sortie :  ' + objt.year + '</li>\n\
            <li> Notes :  ' + objt.avg_vote + '</li>\n\
            <li> Score IMDB : ' + objt.imdb_score + '</li>\n\
            <li> Réalisateur : ' + objt.directors + '</li>\n\
            <li> Acteurs : ' + objt.actors + '</li>\n\
            <li> Durée : ' + objt.duration + 'min</li>\n\
            <li> Pays : ' + objt.countries + '</li>\n\
            <li> Box office : $' + objt.worldwide_gross_income + '</li>\n\
            <li> Synopsis : ' + objt.description + '</li>\n\
                </ul>';
            //on display le modal 
            modal.style.display = "block";

            //on gere la fermeture du modal   le bouton dois porter l id close-btn
            
        }
  
    } 


    mod.open("GET", url, true);
    mod.send();
    
    var span = document.getElementById("close-btn");
  
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
    

}
  