const planete = document.getElementById("planete");



planete.addEventListener("mouseover", function () {
    planete.pause();
}); // lorsque que la souris sur la planete elle va s'arreter

planete.addEventListener("mouseleave", function () {
    planete.play();
}); // lorsque la souris va pas sur la planete elle va continuer

window.addEventListener("load", (event) => {
    planete.play();
}); /* exécution des action une fois completement charger */


const mehdy = `Je m'appelle Mehdy bouzid j'ai 22 ans je suis en
 recherche d'emploi dans le domaine du developpement je souhaite
 faire une formation de developpeur web pour pouvoir confirmer mon
 niveau en autodidacte ainsi que decouvrir les situations de projet`
const texte = document.getElementById("text");
let char = 0;

function type() {
    if (char < mehdy.length) {
        texte.innerHTML += mehdy.charAt(char);
        char++;
        setTimeout(type, 5);
    }
}

type();
document.addEventListener('DOMContentLoaded', (event) => {
function animateProgressBars() {
    const progressBarIds = [
        "progress-label",
        "progress-label2",
        "progress-label3",
        "progress-label4",
        "progress-label5",
        "progress-label6",
        "progress-label7",
         "log",
         "log2",
    ];

    const progressBarMaxValues = [
        70, // Html/ Css
        40, // JavaScript
        95,  // Traitement de ticket
        100, // Transfert de donnée
        100, // Installation Poste de Travail
        100, // Déploiement Poste de Travail
        100,  // Masterisation Poste de Travail
        95,
        80,
    ];

    let currentValue = 0;
    
    const intervalId = setInterval(() => {
        currentValue += 1;
        
        
        progressBarIds.forEach((id, index) => {
            const progressBarText = document.getElementById(id); 
            const progressBars = document.getElementsByTagName('progress');
            if (currentValue <= progressBarMaxValues[index]) {  
                progressBarText.textContent = currentValue + '%'; /*passer de 0 a la valeur max de l'index */
                progressBars[index].value = currentValue; /* Permet relever tout les progress de mon html a laide [index] */
        }
    });
    if (currentValue===100){
     clearInterval(intervalId);
    }
    }, 20); // Changer l'intervalle pour ajuster la vitesse de l'animation
   
}
animateProgressBars();
   
});  


