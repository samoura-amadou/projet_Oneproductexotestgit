var fruitsTemplate=require("./fruits"); 
var clementine=fruitsTemplate.creerClementine(); 
console.log(clementine); 


function verifierResultatOrange(){
    var poids=document.querySelector("#poidsOrange");
    var poidsvaleur=poids.value; 
    console.log(poidsvaleur); 

    var prix=document.querySelector("#prixOrange"); 
    var prixvaleur=prix.value; 
    console.log(prixvaleur); 
  
}

    function verifierResultatClementine(){
        var poids = document.querySelector("#poidsClementine");
        var poidsValeur = poids.value;
        console.log(poidsValeur); 

        var prix = document.querySelector("#prixClementine");
        var prixValeur = prix.value;
        console.log(prixValeur); 
  
}

function verifierResultatFraise(){
    var poids = document.querySelector("#poidsFraise");
    var poidsValeur = poids.value;
    console.log(poidsValeur); 

    var prix = document.querySelector("#prixFraise");
    var prixValeur = prix.value;
    console.log(prixValeur); 
}