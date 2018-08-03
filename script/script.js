//WANNA PLAY A GAME???
			
	
			"use strict";
			
			let p = 0;
			let c = 0;


			function start(x) {
				
				
				let button = document.querySelector("button");
				let heading = document.querySelector("p");
				let final = document.querySelector("h2");
				
				
				let choice = x;	
				let wlt;
				
				let results;
				


				wlt = play();	
				scoreBoard(wlt);

				return wlt;
				

				function play() {


					//PLAYER CHOICE ASSIGNMENT
					
					choice = choice.toLowerCase();
					let win;
					let lose;
					let tie;
					let selection = ["rock", "paper", "scissors"];
					let [rock, paper, scissors] = selection;
					
					let playerSelection;
					let computerSelection;
					playerSelection = choice;
					
					compareSelection(playerSelection, computerSelection);
					
					
					return wlt;

		
					function compareSelection() {
											
						computerSelection = computerPlay();

						//COMPARISON AREA

						let cS = computerSelection;
						let pS = playerSelection;
						
						
						if (pS == rock && cS == scissors || pS == scissors && cS == paper || pS == paper && cS == rock) {
							
							wlt = "win"
							return wlt;
							

						} else if (pS == scissors && cS == rock || pS == paper && cS == scissors || pS == rock && cS == paper) {
							
							wlt = "lose";
							return wlt;
							
						} else if (pS == cS) {

							wlt = "tie";
							return wlt;

						} else if (pS == "" && cS == rock ||pS == "" && cS == paper ||pS == "" && cS == scissors) {
							return "Rock, Paper, Scissors, SHOOT!";
						} else {
							alert("That isn't a choice.");
						}		
						
					}

					
					function computerPlay() {
						
						//NUMBER / STRING ASSIGNMENT

						switch(randomNumber()) {
							case 0:
								return rock;
								break;

							case 1:
								return paper;
								break;

							case 2:
								return scissors;
								break;

							default:
								alert("Something went wrong.")
								break;
						}

						//COMPUTER RANDOM NUMBER GENERATION

						function randomNumber() {
							let x = (Math.floor(Math.random() * 10)); 

							return (+x < 3) ? x :
							randomNumber();
						}

					}
					return results;
				}

				function scoreBoard(wlt) {

					let pointsDisplay = document.querySelector("h5");
					
					

					if (wlt == "win") {
						
						pointsDisplay.innerHTML = scoreSystem(++p, c);
						heading.innerHTML = "You win this round...";
					} else if (wlt == "lose") {
						
						pointsDisplay.innerHTML = scoreSystem(p, ++c);
						heading.innerHTML = "haHA!!! I win this one.";
					} else if (wlt == "tie") {
						pointsDisplay.innerHTML = scoreSystem("tie");
						heading.innerHTML = "Tie, play again."
					} else {
						heading.innerHTML = "Rock, Paper, Scissors, SHOOT!!!";
					}

					return reset(p, c);

					function reset() {
						if (+p == 5 || +c == 5) {
							p = 0;
							c = 0;
							heading.innerHTML = "Wanna play again?";
							return(p, c);
						} else {
							return "";
						}
					}

					function scoreSystem() {

						let player = p;
						let computer = c;

						let message = "POINTS:  Player-" + player + "  Computer-" + computer;
						let score = pointsDisplay.innerHTML = message;

						if (+player == 5) {
							final.innerHTML = "!!!YOU WIN!!!";
						} else if (+computer == 5) {
							final.innerHTML = "!!!I BEAT YOU!!!";
						} else {
							final.innerHTML = "";
						}
						return score;
						return player;
						return computer;
					}	

				
				}

								
			}
		
