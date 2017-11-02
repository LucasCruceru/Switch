var xhttp = new XMLHttpRequest();
xhttp.open("GET", "info.txt", true);
xhttp.send();
xhttp.onreadystatechange = function () {
    console.log(this.readyState);
    console.log(this.status);
    console.log(this.responseText);
}