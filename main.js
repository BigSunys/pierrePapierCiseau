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

let joueur = 0;
let ordinateur = 0;
let vainqueur = 5;

let playRound = function(){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    // if(playerSelection != choix[0] || playerSelection != choix[1] || playerSelection != choix[2]){
    //     alert(`ERREUR ${playerSelection} n'est pas valable`)
    //     return getPlayerChoice()
    // }
    // definir le gagnant de la manche 
    let gagner  = `Gagner\njoueur : ${playerSelection} superieur à ordinateur : ${computerSelection}`;
    let perdu   = `Perdu\nordinauer : ${computerSelection} superieur à joueur : ${playerSelection}`;
    let egalite = `Egalité aucun vainqueur ${computerSelection} - ${playerSelection}`

    if(playerSelection == choix[0] && computerSelection == choix[2] || playerSelection == choix[1] && computerSelection == choix[0] || playerSelection == choix[2] && computerSelection == choix[1]){
        joueur++
        return `${gagner + " \n "} joueur : ${joueur} - ordinateur : ${ordinateur}`
    }else if(playerSelection == computerSelection){
        return `${egalite} joueur : ${joueur} - ordinateur : ${ordinateur}`
    }else if(playerSelection == "error" ){
        return "erreur mauvais choix "
    }
    else{
        perdu++
        return `${perdu + " \n "} joueur : ${joueur} - ordinateur : ${ordinateur}`
    }
}

// fonction qui permet de jouer 5 tour et definit le gagnat a la fin 
let game = function(){
    let win = 'Vous gagner';
    let lose = 'Vous perder'
    let result = (joueur == vainqueur) ? win : (ordinateur == vainqueur) ? lose : 'erreur' ;
    
    if (joueur === vainqueur || ordinateur === vainqueur) {
        console.log(`Résultat : ${result}`)
    }else{
        // nul a refaire
        return playRound(), playRound(), playRound(), playRound(), playRound(), playRound(), playRound(), playRound()
    }
    
    
}


// const playerSelection = getPlayerChoice();
// const computerSelection = getComputerChoice();


// console.log("Résultat : " + playRound(playerSelection, computerSelection))
// console.log("Joueur : " + playerSelection)
// console.log("ordinateur : " + computerSelection)
console.log("Hello World " + choix + " " + choix.length);
