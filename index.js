//création de constances
const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat')

const choixPossibles = document.querySelectorAll('button');

let choixUtilisateur
let resultat
let choixOrdinateur

//événement 'Clique sur les bouttons'
choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click',(e)=>{
    //récupération de l'id du boutton cliqué
    choixUtilisateur = e.target.id ;
    //on ajoute l'image qui correspond au choix
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png">`
    generer_choix_ordinateur()
    verificaton()
}))

//création de la fonction pour le choix de l'ordinateur
function generer_choix_ordinateur(){
random = Math.floor(Math.random() * 3) +1 //générer des nombres compris entre 1 et 3
if(random === 1){ //si random = à 1 :
    choixOrdinateur = "pierre"
}
if(random === 2){ //si random = à 2 :
    choixOrdinateur = "papier"
}
if(random === 3){ //si random = à 3 :
    choixOrdinateur = "ciseaux"
    }
    //on ajoute l'image qui correspond au choix
    contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">`
}

//fonction pour vérifier si le joueur à gagner

function verificaton(){
    if(choixUtilisateur == choixOrdinateur){
        resultat = "Egalité !"
    }
    //les cas ou le joueur perd
    if(choixUtilisateur == "pierre" && choixOrdinateur =="papier"){
        resultat = "Perdu !"
    }
    if(choixUtilisateur == "papier" && choixOrdinateur =="ciseaux"){
        resultat = "Perdu !"
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur =="pierre"){
        resultat = "Perdu !"
    }
    //les cas ou le joueur gagne

    if(choixUtilisateur == "pierre" && choixOrdinateur =="ciseaux"){
        resultat = "Gagné !"
    }
    if(choixUtilisateur == "ciseaux" && choixOrdinateur =="papier"){
        resultat = "Gagné !"
    }
    if(choixUtilisateur == "papier" && choixOrdinateur =="pierre"){
        resultat = "Gagné !"
    }
    contenantResultat.innerHTML = resultat ;
}