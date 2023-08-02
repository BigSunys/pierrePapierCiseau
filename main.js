// Creer un jeux pierre feuille ciseaux contre l'odinateur
//  definire les possibilité dans un tableau choix
const choix = ["pierre","feuille","ciseaux"];
//créer un fonctione qui permet a l'ordinateur de jouer son tour avec un choix aleatoire 
let getComputerChoice = function(){
    let computeurChoice = Math.floor(Math.random() * choix.length);
    return choix[computeurChoice];
};
//créer  une fonction qui permet de jouer un tour  de pierre feuille ciseaux en prenet en compte le choix du joueur  et de l'ordinateur return les choix de chacun
 // definir le gagnant de la manche 




console.log("ordinateur : " + getComputerChoice())
console.log("Hello World " + choix + " " + choix.length);
