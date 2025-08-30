function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
var démo = document.getElementById("demo");
démo.innerHTML = "";
var qty = document.getElementById("qty").value;
var count = 0;
for(var i = 0; i < qty; i++){
let h = document.createElement("h2");
let titre = document.getElementById("titre").value;
h.textContent = titre + " " + count;
démo.appendChild(h);
let p = document.createElement("p");
let paragraphe = document.getElementById("contenu").value;
p.textContent = paragraphe + " " + count;
démo.appendChild(p);
count++;
}
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div Sdemo et changer la couleur spécifiée dans l'input
  let elements = demo.getElementsByTagName("p");
elements.style.Color = "red";
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
}