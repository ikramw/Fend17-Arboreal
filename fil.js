var alohaLi=document.getElementById("alohaLi");
alohaLi.addEventListener("click",Show);

var siberiaLi=document.getElementById("siberiaLi");
siberiaLi.addEventListener("click",ShowSiberia);

var exotiqueLi=document.getElementById("exotiqueLi");
exotiqueLi.addEventListener("click",ShowExotique);

function Show(){
    var aloha = document.getElementById("aloha");
    aloha.className="visibility";
    siberia.className="themesVisibility";
    exotique.className="themesVisibility";

}
function ShowSiberia(){
    var siberia = document.getElementById("siberia");
    siberia.className="visibility";
    aloha.className="themesVisibility";
    exotique.className="themesVisibility";
}
function ShowExotique(){
    var exotique = document.getElementById("exotique");
    exotique.className="visibility";
    aloha.className="themesVisibility";
    siberia.className="themesVisibility";
}