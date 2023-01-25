function playGuessingGame(numToGuess, totalGuesses = 10) {
  /* function playGuessingGame meant to challenge the
  user to a guessing game of numbers.*/

  let promptText = "Enter a number between 1 and 100."
  // Letting the player enter their number

  for (let guesses = 1; guesses <= totalGuesses; guesses++) {
    // Parameters set for first guess, guess limit, and a countdown to the guess limit

    let num = prompt(promptText)

    if (num === null) {
      return 0
    }
    // If the user decides to exit the game

    else if (num === "" || isNaN(num)) {
      promptText = "Please enter a number."
      guesses--
    }
    // If the user doesn't enter a number, user will get another guess

    else if (num == numToGuess) {
      return guesses
    }
    // If the user guesses correctly, the game ends

    else if (num < numToGuess) {
      promptText = (num + " is too small. Guess a larger number.")
    }
    // If the guessing number is too small

    else {
      promptText = (num + " is too large. Guess a smaller number.")
    }
    // If the guessing number is too large

  }
  return 0
  //Exits the game
}