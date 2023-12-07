import './style.css'
import './silly.png'

// Selectionner les éléments HTML
let container = document.querySelector(".container");
let btn = document.querySelector(".start_btn");
let scoreContainer = document.querySelector(".score");
let timeContainer = document.querySelector(".time");

let a = "1";
console.log(a);

btn.onclick = function () {
  let score = 0;
  let time = 10;
  container.innerHTML = "";

  let interval = setInterval(function showTarget() {
    // Création de la cible
    let target = document.createElement("img");
    target.id = "target";
    // target.src = "silly.png";
    target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Recep_Tayyip_Erdogan_in_Ukraine.jpg/220px-Recep_Tayyip_Erdogan_in_Ukraine.jpg";
    target.alt = "Image";
    container.appendChild(target);
    target.style.top = Math.random() * (400 - target.offsetHeight) + "px";
    target.style.left = Math.random() * (100 - target.offsetWidth) + "px";

    // Faire disparaître la cible
    setTimeout(function () {
      target.remove();
    }, 2000);

    // Quand on clique sur la cible
    target.onclick = function () {
      score += 1;
      target.style.display = "none";
    };
    time -= 1;

    // Afficher les infos
    scoreContainer.innerHTML = `Score : ${score}`;
    timeContainer.innerHTML = `Temps : ${time}`;

    // Fin du jeu quand le temps est écoulé
    if (time === 0) {
      clearInterval(interval);
      container.innerHTML = "Le jeu est terminé";
    }
  }, 1000);
};
