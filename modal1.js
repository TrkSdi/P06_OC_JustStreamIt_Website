function openModal(movieId) {

    var modal = document.getElementById(String(movieId));  
    url = "http://localhost:8000/api/v1/titles/" + String(movieId);

    const mod = new XMLHttpRequest();
    // Interroger le serveur et récupérer la réponse 
    mod.onload = function() {
        
        if (this.readyState == 4 && this.status == 200) {
            const resObj = JSON.parse(this.responseText);

            console.log(resObj)

            var modalContent = document.getElementById("modal-content");
            //on modifie le content
            modalContent.innerHTML = resObj;
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
  