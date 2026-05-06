let tackeInput = document.getElementById("tackeInput");
let listeTaches = document.getElementById("listeTaches");

formulaire.addEventListener("submit",function(event) {
    event.preventDefault();

    let texteTache = tackeInput.Value;
    
    if (texteTache === ""){
        alert("Donner une tache");
        return;
    }
let li = document.createElement("li");
li.textContent = texteTache + " ";

let boutonAccomplie = document.createElement("button");
boutonAccomplie.textContent = "Accomplie";

let boutonSupprimer = document.createElement("button");
boutonAccomplie.addEventListener("click",function(){
    li.classList.toggle("accomplie");
});
boutonAccomplie.addEventListener("click",function(){
    li.remove();
});
li.appendChild(boutonAccomplie);
li.appendChild(boutonSupprime);

listeTaches.appendChild(li);
tackeInput.Value = "";
});