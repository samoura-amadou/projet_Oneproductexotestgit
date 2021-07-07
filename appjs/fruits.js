 var boiteOutil = require("./boiteOutil");

var fruitsTemplate = {
    creerOrange : function(){
        var orange = {
            nom : "orange",
            poids :boiteOutil.genererChiffreAleatoire(110, 400),
            prix : 70
        }
        return orange;
    },

    creerClementine : function(){
        var clementine = {
            nom : "clementine",
            poids : boiteOutil.genererChiffreAleatoire (150, 200),
            prix : 35
        }
        return clementine;
    },

    creerFraise : function(){
        var fraise = {
            nom : "fraise",
            poids :boiteOutil.genererChiffreAleatoire(150, 352),
            prix : 80
        }
        return fraise;
    }
}

var clementine1=fruitsTemplate.creerClementine (); 
console.log(clementine1); 

 module.exports = fruitsTemplate;