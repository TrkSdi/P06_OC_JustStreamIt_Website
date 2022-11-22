function openModal(movieId) {

  var modal = document.getElementById(movieId);
  var btn1 = document.getElementById("movie-picture");
  var btn2 = document.getElementById("Sci-fi");
  var btn3 = document.getElementById("Thriller");
  var btn4 = document.getElementById("Drama");
  
  btn1.onclick = function() {
    modal.style.display = "block";
  }

  btn2.onclick = function() {
    modal.style.display = "block";
  }

  btn3.onclick = function() {
    modal.style.display = "block";
  }

  btn4.onclick = function() {
    modal.style.display = "block";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  var span = document.getElementById("close-btn");

  span.onclick = function() {
    modal.style.display = "none";
  }
}

