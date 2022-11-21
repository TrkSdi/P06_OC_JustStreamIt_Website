function openModal(movieId) {

  var modal = document.getElementById("myModal");
  var btn = document.getElementById("best-movie-pic");
  
  btn.onclick = function() {
    modal.style.display = "block";
  }

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
    modal.style.display = "none";
  }
    
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

