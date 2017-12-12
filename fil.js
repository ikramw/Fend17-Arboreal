var alohaLi=document.getElementById("alohaLi");
alohaLi.addEventListener("click",Show);

var siberiaLi=document.getElementById("siberiaLi");
siberiaLi.addEventListener("click",ShowSiberia);

var exotiqueLi=document.getElementById("exotiqueLi");
exotiqueLi.addEventListener("click",ShowExotique);

function Show(){
    var aloha = document.getElementById("aloha");
    aloha.className="displayBlock";
    siberia.className="displayNone";
    exotique.className="displayNone";

}
function ShowSiberia(){
    var siberia = document.getElementById("siberia");
    siberia.className="displayBlock";
    aloha.className="displayNone";
    exotique.className="displayNone";
}
function ShowExotique(){
    var exotique = document.getElementById("exotique");
    exotique.className="displayBlock";
    aloha.className="displayNone";
    siberia.className="displayNone";
}
window.addEventListener("hashchange", function() { scrollBy(0, -180) });