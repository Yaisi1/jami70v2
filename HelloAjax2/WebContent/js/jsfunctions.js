

function showHello(str){
var request = new XMLHttpRequest();//NON IE


request.onreadystatechange = function(){
if(this.readyState==4 && this.status == 200){
console.log(request.responseText);
document.getElementById("ServerResponse").innerHTML=request.responseText;


    }
};



//il punto interrogativo è per separare la risorsa dalla lista dei parametri
request.open("GET","saluto?user="+str, true); //setto la richiesta verso il server
request.send(); //invio


}
