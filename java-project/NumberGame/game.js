let randomNumber, maxRange, attempts, maxAttempts, score = 0;

// Start Game
function startGame() {
    let level = document.getElementById("difficulty").value;

    if (level === "easy") {
        maxRange = 50;
        maxAttempts = 5;
    } 
    else if (level === "medium") {
        maxRange = 100;
        maxAttempts = 7;
    } 
    else {
        maxRange = 200;
        maxAttempts = 10;
    }

    randomNumber = Math.floor(Math.random() * maxRange) + 1;
    attempts = 0;

    document.getElementById("message").innerText = "Game Started!";
    document.getElementById("attempts").innerText = "";
}

// Check Guess
function checkGuess() {
    let guess = Number(document.getElementById("guess").value);

    if (!guess) {
        alert("Enter a number!");
        return;
    }

    attempts++;

    let msg = document.getElementById("message");
    let att = document.getElementById("attempts");
    let sc = document.getElementById("score");

    if (guess === randomNumber) {
        msg.innerText = "🎉 Correct!";
        score += (maxAttempts - attempts + 1) * 10;
        sc.innerText = "Score: " + score;
    } 
    else if (guess > randomNumber) {
        msg.innerText = "📉 Too High!";
    } 
    else {
        msg.innerText = "📈 Too Low!";
    }

    att.innerText = "Attempts: " + attempts + "/" + maxAttempts;

    // LOOP-LIKE CONTROL (game ends condition)
    if (attempts >= maxAttempts && guess !== randomNumber) {
        msg.innerText = "❌ Game Over! Number was " + randomNumber;
    }
}

// Restart
function restartGame() {
    startGame();
    document.getElementById("guess").value = "";
}