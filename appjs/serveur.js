var http = require("http");
var url=require("url"); 
var queryString=require("querystring"); 
var fs=require("fs"); 
const PORT = "8080";

var serveur = http.createServer(traiteReq);
serveur.listen(PORT);

function traiteReq(requete, reponse){
   
    var pagehtml=fs.readFileSync("./index.html","UTF-8");

    reponse.writeHead(200,{'content-type' : "test/html"} ); 
    reponse.write(pagehtml); 
    reponse.end(); 
}
