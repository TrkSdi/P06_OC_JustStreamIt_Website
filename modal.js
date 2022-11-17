const overlay = document.getElementById("overlay");

document.getElementById("show-modal").addEventListener("click", () => {
    overlay.style.display = "block";
} )

document.getElementById("close-modal").addEventListener("click", () => {
    overlay.style.display = "none";
} )