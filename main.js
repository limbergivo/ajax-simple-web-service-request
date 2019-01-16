// add een eventlistener toe met on  click functie
document.getElementById("getdata").addEventListener("click", website);
// maak de functie website voor de button te laten werken 
function website(){
    // variabel met XMLHttprequest aanmaken
    var xhr = new XMLHttpRequest();
    // open - type  , url/file ,  async
    xhr.open("GET","https://thatsthespir.it/api", true);
    //kijken als de request werkt
    //console.log(xhr.responseText);
    //status check
    xhr.onload = function(){
        //check door welke state die gaat. 1, 2 , 3, 4
        //console.log('READYSTATE: ', xhr.readystate);
        if(this.status == 200){
            var jsonFile = xhr.responseText; 
           // console.log(xhr);
            // JSON file omzetten naar object in JS
            var obj = JSON.parse(jsonFile);
            // text als JS terug op webpagina zien
            document.getElementById("text").innerHTML = (obj.quote);
            document.getElementById("image").setAttribute ("src" , obj.photo);
        }
    }
    xhr.send();
}



