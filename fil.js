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
var resposive_menu=document.getElementById("resposive_menu");
var icon=document.getElementById("icon");
icon.addEventListener("click",show_menu);

function show_menu(){
    resposive_menu.className="resposive_menu";
    icon.className="displayNone";
    kryss.className="displayBlock";
}
var kryss=document.getElementById("kryss");
kryss.addEventListener("click",hide_menu);

function hide_menu(){
    resposive_menu.className="displayNone";
    icon.className="displayBlock";
    kryss.className="displayNone";
}