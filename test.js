
const xhr = new XMLHttpRequest();
xhr.onload = function() {

const resObj = JSON.parse(this.responseText) // Objet json

console.log(resObj)

}