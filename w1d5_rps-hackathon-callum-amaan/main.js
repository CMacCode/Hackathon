let player1Score = 0;
   let player2Score = 0;


   let playerName = prompt("What is your name?");

   if (playerName === "Sheldon") {
       window.open("https://www.youtubetrimmer.com/view/?v=x5Q6-wMx-K8&start=19&end=40&loop=0");
   }

   while (playerName.length > 10) {
       playerName = prompt("Username is too long. Please use under 10 characters.");
   }

   playerName = playerName[0].toUpperCase() + playerName.substring(1);

   function getWinner(player1, player2) {
       if (player1 === "paper" && player2 === "paper") {
           alert("It's a draw!");
       } else if (player1 === "paper" && player2 === "scissors") {
           player2Score++;
           alert(`Robot wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "paper" && player2 === "rock") {
           player1Score++;
           alert(`${playerName} wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "paper" && player2 === "spock") {
           player1Score++;
           alert(`${playerName} wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "paper" && player2 === "lizard") {
           player2Score++;
           alert(`Robot wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "rock" && player2 === "rock") {
           alert("It's a draw!");
       } else if (player1 === "rock" && player2 === "scissors") {
           player1Score++;
           alert(`${playerName} wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "rock" && player2 === "paper") {
           player2Score++;
           alert(`Robot wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "rock" && player2 === "lizard") {
           player1Score++;
           alert(`${playerName} wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "rock" && player2 === "spock") {
           player2Score++;
           alert(`Robot wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "scissors" && player2 === "scissors") {
           alert("It's a draw!");
       } else if (player1 === "scissors" && player2 === "lizard") {
           player1Score++;
           alert(`${playerName} wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "scissors" && player2 === "paper") {
           player1Score++;
           alert(`${playerName} wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "scissors" && player2 === "spock") {
           player2Score++;
           alert(`Robot wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "scissors" && player2 === "rock") {
           player2Score++;
           alert(`Robot wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "lizard" && player2 === "lizard") {
           alert("It's a draw!");
       } else if (player1 === "lizard" && player2 === "spock") {
           player1Score++;
           alert(`${playerName} wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "lizard" && player2 === "paper") {
           player1Score++;
           alert(`${playerName} wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "lizard" && player2 === "rock") {
           player2Score++;
           alert(`Robot wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "lizard" && player2 === "scissors") {
           player2Score++;
           alert(`Robot wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "spock" && player2 === "spock") {
           alert("It's a draw!");
       } else if (player1 === "spock" && player2 === "rock") {
           player1Score++;
           alert(`${playerName} wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "spock" && player2 === "scissors") {
           player1Score++;
           alert(`${playerName} wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "spock" && player2 === "lizard") {
           player2Score++;
           alert(`Robot wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       } else if (player1 === "spock" && player2 === "paper") {
           player2Score++;
           alert(`Robot wins! The score is: ${playerName}: ${player1Score} and Robot: ${player2Score}`);
       }
   }

   function computerMove() {
       let num0to4 = Math.floor(Math.random() * 5);
       if (num0to4 === 0) {
           return "rock";
       } else if (num0to4 === 1) {
           return "paper";
       } else if (num0to4 === 2) {
           return "scissors";
       } else if (num0to4 === 3) {
           return "lizard";
       } else {
           return "spock";
       }
   }

   let playAgain = true;


   while (playAgain === true) {
       let playerMove = prompt(`Hello ${playerName}! Please choose rock, paper, scissors, lizard, spock`);
       getWinner(computerMove(), playerMove);
       playAgain = confirm("Do you want to play again?");
   }




























