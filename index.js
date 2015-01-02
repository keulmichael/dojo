		require(["dojox/mobile/parser", "dojox/mobile/compat", "dojo/domReady!", "dojox/mobile/View", "dojox/mobile/Heading", "dojox/mobile/RoundRectList", "dojox/mobile/ListItem", "dojox/mobile/Switch", "dojox/mobile/RoundRect", "dojox/mobile/RoundRectCategory",  "dojox/mobile/ContentPane", "dojox/mobile/Button", "dojox/mobile/ProgressIndicator", "dojo/_base/xhr", "dojox/mobile/FilteredListMixin", "dojox/mobile/compat", "dojox/form/Uploader", "dojox/mobile/SwapView", "dojox/mobile/PageIndicator"
		], function (parser) {
			parser.parse();		
			
		});

function lsfProgressIndicator()
{
require(["dojo/_base/window", "dojo/_base/xhr", "dojox/mobile/parser", "dojox/mobile/ProgressIndicator"
], function(win, xhr, parser, ProgressIndicator){

  var prog = new ProgressIndicator({size:40, center:true});
  win.body().appendChild(prog.domNode);
prog.start();
  });
  return;
  }    

function writediv(texte)
     {document.getElementById('total').innerHTML = texte;}
     
function file(fichier)
     {
if(window.ActiveXObject) // IE
          xhr_object = new ActiveXObject("Microsoft.XMLHTTP");
     else

xhr_object = new XMLHttpRequest();
     xhr_object.open("GET", fichier, false);
     xhr_object.send(null);
     if(xhr_object.readyState == 4) return(xhr_object.responseText);
     else return(false);
     }

function onOnline() {alert("Connexion active");edition()}

function onOffline() {alert("***Connexion inactive***");}

function edition()
{
navigator.geolocation.getCurrentPosition(onSuccess, onError)
}

function onSuccess(position) {
lati=Math.round(position.coords.latitude);longi=Math.round(position.coords.longitude);
if (lati==49 && longi==2 || lati==49 && longi==1 || lati==48 && longi==1 || lati==48 && longi==2 || lati==47 && longi==1 || lati==49 && longi==4){var edition='paris';}
if (lati==46 && longi==5 || lati==45 && longi==6 || lati==46 && longi==6){var edition='lyon';}
if (lati==43 && longi==5 || lati==44 && longi==5 || lati==43 && longi==6){var edition='marseille';}
if (lati==51 && longi==3){var edition='lille';}
if (lati==44 && longi==1){var edition='toulouse';}
if (lati==47 && longi==-2){var edition='nantes';}
if (lati==48 && longi==-2){var edition='rennes';}
if (lati==49 && longi==8 || lati==49 && longi==6){var edition='strasbourg';}
if (lati==44 && longi==4){var edition='montpellier';}
if (lati==45 && longi==-1){var edition='bordeaux';}
if (lati==44 && longi==7){var edition='nice';}
writediv(file('http://www.distriweb.mobi/mgp/paris/mobile/test/index.php?edition='+edition))
}

function onError(error){
writediv(file('http://www.distriweb.mobi/mgp/paris/mobile/start.php?edition=paris'))
}

function edition_sans_gps()
{
var edition = document.getElementById("edition").value;
writediv(file('http://www.distriweb.mobi/mgp/paris/mobile/start.php?edition='+edition))
}


function rechargerPage(edition) {
document.getElementById('loader').innerHTML="<img src='http://www.distriweb.mobi/mgp/paris/mobile/loader.gif'>";
var tournee = document.getElementById("tournee").value;
location.href ='http://www.distriweb.mobi/mgp/paris/mobile/start.php?edition='+edition+'&t_choix='+tournee+'&action=commencer&envoi=email';
document.getElementById('pic').style.visibility="hidden";}

function voir_tournee(edition) {
document.getElementById('loader').innerHTML="<img src='http://www.distriweb.mobi/mgp/paris/mobile/loader.gif'>";
var tournee = document.getElementById("tournee").value;
location.href ='http://www.distriweb.mobi/mgp/paris/mobile/start.php?edition='+edition+'&t_choix=' + tournee + '&action=voir';
document.getElementById('pic').style.visibility="hidden";}

function chargement(edition) {
document.getElementById('loader').innerHTML="<img src='http://www.distriweb.mobi/mgp/paris/mobile/loader.gif'>";
location.href ='http://www.distriweb.mobi/mgp/paris/mobile/phonegap/chargement.php?edition='+edition;
document.getElementById('pic').style.visibility="hidden";}

function retourIndex(edition) {
document.getElementById('loader').innerHTML="<img src=''http://www.distriweb.mobi/mgp/paris/mobile/loader.gif'>";
location.href ='http://www.distriweb.mobi/mgp/paris/mobile/start.php?edition='+edition;
document.getElementById('pic').style.visibility="hidden";}

function retourCommencer(edition) {
document.getElementById('loader').innerHTML="<img src='http://www.distriweb.mobi/mgp/paris/mobile/loader.gif'>";
var tournee = document.getElementById("T").value;
location.href ='http://www.distriweb.mobi/mgp/paris/mobile/start.php?edition='+edition+'&t_choix='+tournee+'&action=commencer';
document.getElementById('open_camera_button').style.visibility="hidden";
document.getElementById('recharger_photo_button').style.visibility="hidden";
document.getElementById('pic').style.visibility="hidden";}

function voir_point(edition,num,tournee) {
document.getElementById('loader').innerHTML="<img src='http://www.distriweb.mobi/mgp/paris/mobile/loader.gif'>";
location.href ='http://www.distriweb.mobi/mgp/paris/mobile/mobile_record_point.php?edition='+edition+'&num='+num+'&tournee='+tournee;
}

function affich_photo(edition,num){location.href ='http://www.distriweb.mobi/mgp/paris/mobile/affich_photo.php?edition='+edition+'&num=' + num;}

function telecharger_photo(edition,num){location.href ='http://www.distriweb.mobi/mgp/paris/mobile/photo.php?edition='+edition+'&num='+num;}

function refuser(edition,num,T) {
var motif = document.getElementById("motif").value;
file('http://www.distriweb.mobi/mgp/paris/mobile/mobile_refuser_point_confirm.php?edition='+edition+'&num='+num+'&motif='+motif);
self.setTimeout("location.href ='http://www.distriweb.mobi/mgp/paris/mobile/start.php?edition="+edition+"&t_choix="+T+"&action=commencer';", 3000) ;
document.getElementById('pic').style.visibility="hidden";
document.getElementById('open_camera_button').style.visibility="hidden";
document.getElementById('recharger_photo_button').style.visibility="hidden";}



function record_ok(edition,num){
var types = document.getElementById("Types").value;
var Quantite_prevue = document.getElementById("quantite_reelle").value;
var Site = document.getElementById("Site").value;
var T = document.getElementById("T").value;
var retours = document.getElementById("quantite_retours").value;
var codiff = document.getElementById("codiff").value;
location.href ='http://www.distriweb.mobi/mgp/paris/mobile/mobile_record_point_ok.php?edition='+edition+'&num='+num+'&Types='+types+'&Quantite_prevue='+Quantite_prevue+'&t_choix='+T+'&site='+Site+'&retours='+retours+'&codiff='+codiff;}

function mobile_modif_donnees_reelle(edition, num){
require(["dojo/dom", "dojo/on", "dojo/request", "dojo/query", "dojo/domReady!"],
function(dom, on, request){

lsfProgressIndicator();
var site = document.getElementById("site").value;
var types = document.getElementById("Types").value;
if (types!='FIN'){var quantite_reelle = document.getElementById("quantite_reelle").value;}
var quantite_retours = document.getElementById("quantite_retours").value;
var horaire_debut = document.getElementById("horaire_debut").value;
var T = document.getElementById("T").value;

if (navigator.geolocation){
navigator.geolocation.getCurrentPosition(function(position) {
longitude = position.coords.longitude; latitude = position.coords.latitude;
});

request.get('http://www.distriweb.mobi/mgp/paris/mobile/test/mobile_modif_donnees_reelle.php?edition='+edition+'&num='+num+'&site='+site+'&Types='+types+'&nouvelle_quantite_reelle='+quantite_reelle+'&nouvelle_quantite_retours='+quantite_retours+'&nouvelle_horaire_debut='+horaire_debut+'&PDA_Latitude='+latitude+'&PDA_Longitude='+longitude).then(
function(response41){location.href ='http://www.distriweb.mobi/mgp/paris/mobile/test/mobile_record_point.php?tournee='+T ; })
}

else {
request.get('http://www.distriweb.mobi/mgp/paris/mobile/test/mobile_modif_donnees_reelle.php?edition='+edition+'&num='+num+'&site='+site+'&Types='+types+'&nouvelle_quantite_reelle='+quantite_reelle+'&nouvelle_quantite_retours='+quantite_retours+'&nouvelle_horaire_debut='+horaire_debut+'&PDA_Latitude=&PDA_Longitude=').then(
function(response41){location.href ='http://www.distriweb.mobi/mgp/paris/mobile/test/mobile_record_point.php?tournee='+T ; })
}
});
}


function MotifNonLivraison(edition,num,T){
var motif = document.getElementById("motif").value;
file('http://www.distriweb.mobi/mgp/paris/mobile/mobile_refuser_point_confirm.php?edition='+edition+'&motif='+motif+'&num='+num);
location.href ='http://www.distriweb.mobi/mgp/paris/mobile/start.php?edition='+edition+'&t_choix='+T+'&action=commencer';
}

