const minNum = 50;
const maxNum = 100;

let randomNumber;
let attempts;
let running;

const guessResult = document.getElementById("guessResult");
const guessBtn = document.getElementById("guessBtn");
const guessInput = document.getElementById("guessInput");
const playAgainBtn = document.getElementById("playAgainBtn");

function initGame() {
    randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    attempts = 0;
    running = true;
    guessResult.textContent = "";
    guessInput.value = "";
    playAgainBtn.style.display = "none";
    guessInput.focus();
}

guessBtn.onclick = function () {
    if (!running) return;

    const guess = Number(guessInput.value.trim());

    if (isNaN(guess)) {
        guessResult.textContent = "❌ Please enter a valid number.";
        return;
    }

    if (guess < minNum || guess > maxNum) {
        guessResult.textContent = `⚠️ Enter a number between ${minNum} and ${maxNum}.`;
        return;
    }

    attempts++;

    if (guess < randomNumber) {
        guessResult.textContent = "🔻 Too low! Try again.";
    } else if (guess > randomNumber) {
        guessResult.textContent = "🔺 Too high! Try again.";
    } else {
        guessResult.textContent = `🎉 Congratulations! You guessed ${randomNumber} in ${attempts} attempts.`;
        running = false;
        playAgainBtn.style.display = "inline";
    }

    guessInput.value = "";
    guessInput.focus();
};

playAgainBtn.onclick = initGame;

// Start the game initially
initGame();



// const minNum = 50;
// const maxNum = 100;
// const randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// let attempts = 0;
// let guess = document.getElementById("guessInput").value; // Initialize guess with an empty valu
// let running = true;
// let guessResult = document.getElementById("guessResult");
// let guessBtn = document.getElementById("guessBtn");
// guessBtn.onclick = function () {
// while (running) {

//     guess = Number(guess);
//     if (isNaN(guess)) {
//         window.alert("Please enter a valid number.");
//         continue; // Skip the rest of the loop and prompt again
//     } else if (guess < minNum || guess > maxNum) {
//         window.alert(`Please enter a number between ${minNum} and ${maxNum}.`);
//         continue; // Skip the rest of the loop and prompt again
//     }
//     else {
//         attempts++;
//         if (guess < randomNumber) {
//             window.alert("Your guess is too low. Try again.");

//         } else if (guess > randomNumber) {
//             window.alert("Your guess is too high. Try again.");
//         } else {
//             window.alert(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
//             running = false; // Exit the loop when the correct number is guessed
//         }
//     }
//     // running = false; // Exit the loop after one iteration for demonstration purpose


// }


