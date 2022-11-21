url = "http://localhost:8000/api/v1/titles/499549"


const xhr = new XMLHttpRequest();

xhr.onload = function() {
    const objTest = JSON.parse(this.responseText);

    //console.log(objTest.id);
}

xhr.open("GET", url, true);
xhr.send();




