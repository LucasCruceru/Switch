function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "assets/info.txt", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
            console.log(this.statusText);
            console.log(this.readyState);
            console.log(this.status);
            console.log(this.responseText);
            document.getElementById("xml").innerHTML =  this.responseText;
        }
    }
}