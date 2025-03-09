var q= [0,0,0];
var longueur = q.length;
var commentaire_resultat = "Quel score vas-tu faire ?";

document.getElementById("com_resultat").innerHTML = commentaire_resultat;

//calcul du score
function calcul() {
	longueur = q.length;
	score=0;
	for(var i=0; i<longueur; i++){		
		score+=q[i];
	}
}

//commentaire du résultat
function resultat() {
	calcul();
	if (score>6) {
		commentaire_resultat="Bravo, ton score est de "+score+" sur 9 !";
	}
	else {
		if (score>0) {
			commentaire_resultat="C'est pas mal, ton score est de "+score+" sur 9 !";
		}
		else {
			alert("Ton score est de 0 sur 9... il faut recommencer !");
		}
	}
	document.getElementById("com_resultat").innerHTML = commentaire_resultat;
}
