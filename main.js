// Creer un jeux pierre feuille ciseaux contre l'odinateur
//  definire les possibilité dans un tableau choix
const choix = ["pierre","feuille","ciseau"];
//créer un fonctione qui permet a l'ordinateur de faire un choix aleatoire pour jouer son tour
let getComputerChoice = function(){
    let computerChoice = Math.floor(Math.random() * choix.length);
    return choix[computerChoice];
};
//créer  une fonction qui permet de jouer un tour  de pierre feuille ciseaux avce le choix du joueur  et de l'ordinateur return les choix de chacun
let getPlayerChoice = function(){
    let playerChoice = prompt("Jouer [0]Pierre, [1]Feuille ou [2]Ciseau ").toLocaleLowerCase();
    if(playerChoice == choix[0] || playerChoice == choix[1] || playerChoice == choix[2]){
        return playerChoice
    }else{
        return "error"
    }
}

let playRound = function(playerSelection, computerSelection){
    // if(playerSelection != choix[0] || playerSelection != choix[1] || playerSelection != choix[2]){
    //     alert(`ERREUR ${playerSelection} n'est pas valable`)
    //     return getPlayerChoice()
    // }
    // definir le gagnant de la manche 
    let gagner  = "Gagner  " + playerSelection + " " + "bas " + computerSelection;
    let perdu   = "Perdu  " + computerSelection + " " + "bas " + playerSelection;
    let egalite = "Egalité aucun vainqueur"

    if(playerSelection == choix[0] && computerSelection == choix[2] || playerSelection == choix[1] && computerSelection == choix[0] || playerSelection == choix[2] && computerSelection == choix[1]){
        return gagner
    }else if(playerSelection == computerSelection){
        return egalite
    }else if(playerSelection == "error" ){
        return "erreur mauvais choix "
    }
    else{
        return perdu
    }
}

//fonction qui permet de jouer 5 tour et definit le gagnat a la fin 

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log("Résultat : " + playRound(playerSelection, computerSelection))
console.log("Joueur : " + playerSelection)
console.log("ordinateur : " + computerSelection)
console.log("Hello World " + choix + " " + choix.length);
