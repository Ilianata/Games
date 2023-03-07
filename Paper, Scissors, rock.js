function paperScissorsRock(input) {
  let choise = ["paper", "scissors", "rock"];
  let randomNumber = Math.floor(Math.random() * choise.length);
  let playerChoice = input.toLowerCase();
  let computerChoice = choise[randomNumber];
  if (playerChoice === computerChoice) {
    console.log(`You chose: ${input}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log("It's a tie! Try again.");
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log(`You chose: ${input}`);
      console.log(`Computer chose: ${computerChoice}`);
      console.log("Scissors cuts paper. You lose!");
    } else {
      console.log(`You chose: ${input}`);
      console.log(`Computer chose: ${computerChoice}`);
      console.log("Paper covers rock. You win!");
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log(`You chose: ${input}`);
      console.log(`Computer chose: ${computerChoice}`);
      console.log("Scissors cuts paper. You win!");
    } else {
      console.log(`You chose: ${input}`);
      console.log(`Computer chose: ${computerChoice}`);
      console.log("Rock smashes scissors. You lose.");
    }
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log(`You chose: ${input}`);
      console.log(`Computer chose: ${computerChoice}`);
      console.log("Rock smashes scissors. You win!");
    } else {
      console.log(`You chose: ${input}`);
      console.log(`Computer chose: ${computerChoice}`);
      console.log("Paper covers rock. You lose!");
    }
  } else {
    console.log("Invalid comand! Try again.");
  }
}
paperScissorsRock("tomato");
