function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
var demo = document.getElementById("demo");
demo.innerHTML = "";
var qty = document.getElementById("qty").value;
var count = 0;
for (var i = 0; i < qty; i++) {
  let h = document.createElement("h2");
  let titre = document.getElementById("titre").value;
  h.setAttribute("monId", "Id" + count);
  h.textContent = titre + " " + count;

  // Créer l'aside AVANT les événements
  let aside = document.createElement("aside");
  aside.textContent = "Plus de détails à propos de: " + i;
   // Classe CSS par défaut pour le cacher

  // Événements sur h
  h.onmousedown = function (event) {
    let el = event.target;
    el.style.backgroundColor = (el.style.backgroundColor === "gray") ? "white" : "gray";
  };

  h.onmouseenter = function () {
    aside.classList.add("show");
  };

  h.onmouseleave = function () {
    aside.classList.remove("show");
  };

  // Ajouter les éléments au DOM
  demo.appendChild(h);
  demo.appendChild(aside);

  let p = document.createElement("p");
  let paragraphe = document.getElementById("contenu").value;
  p.textContent = paragraphe + " " + count;
  demo.appendChild(p);
  count++;
}
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div Sdemo et changer la couleur spécifiée dans l'input
  let elements = demo.getElementsByTagName("p");
  var couleur = document.getElementById("couleur").value;
for(var element of elements){
  element.style.color = couleur;
}
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
  let boutons = document.getElementsByTagName("button");
  let classe = document.getElementById("btnClass").value;
  for(var bouton of boutons){
    bouton.className = classe;
  }
}