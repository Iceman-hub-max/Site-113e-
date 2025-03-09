var q = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Ajustement pour 10 questions
var commentaire = "Quel score vas-tu faire ?";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("com_resultat").innerHTML = commentaire_resultat;
}); // Code trouvé sur un forum

// Fonction pour calculer le score
function calcul() {
    var score = 0; // Le score commence à 0
    var i = 0; // Initialiser l'index à 0

    // Boucle pour parcourir tous les éléments de q
    while (i < q.length) { // Réalisation de la boucle tant que i est inférieur au nombre de questions
        score = score + q[i]; // Ajouter la valeur de q[i] au score
        i = i + 1; // Passer à question suivante
    }

    return score; // Retourner le score total
}

// Fonction pour afficher le résultat
function resultat() {
    score = calcul(); // Appel de la fonction calcul
    if (score >= 7) {
        commentaire = "Bravo, votre score est de "+ score +" sur 10 points !";
    } else if (score > 0) {
        commentaire = "Pas mal, votre score est de "+score+" sur 10 points .";
    } else {
        alert("Votre score est de 0 sur 10... Il faut recommencer .");
        commentaire = "Votre score est de 0.";
    }

    // Mettre à jour l'affichage du résultat | Code trouvé sur un forum
    const resultatElement = document.getElementById("com_resultat");
    if (resultatElement) {
        resultatElement.innerHTML = commentaire;
    } else {
        console.error("L'élément 'resultat' est introuvable.");
    }
}
