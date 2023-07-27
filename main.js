const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');
AUDIO.playbackRate = 1.5; // Double the playback speed

// constants -----------------------------------------------------------

const backImage = 'img/images/backs/blue.svg';

const cardOptions = {
    1: [
        // EASY
        {value: 'H', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'H', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'C', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'C', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'S', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'S', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'D', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'},
        {value: 'D', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'}, 
        {value: 'JB', faceUp: false, image: 'img/images/jokers/joker-black.svg'},
        {value: 'JB', faceUp: false, image: 'img/images/jokers/joker-black.svg'},
        {value: 'JR', faceUp: false, image: 'img/images/jokers/joker-red.svg'}, 
        {value: 'JR', faceUp: false, image: 'img/images/jokers/joker-red.svg'}, 
    ],
    2: [
        // // EASY
        {value: 'H', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'H', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'C', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'C', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'S', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'S', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'D', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'},
        {value: 'D', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'}, 
        {value: 'JB', faceUp: false, image: 'img/images/jokers/joker-black.svg'},
        {value: 'JB', faceUp: false, image: 'img/images/jokers/joker-black.svg'},
        {value: 'JR', faceUp: false, image: 'img/images/jokers/joker-red.svg'}, 
        {value: 'JR', faceUp: false, image: 'img/images/jokers/joker-red.svg'}, 
        // NORMAL
        {value: 'H', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'H', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'C', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'C', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'S', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'S', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'D', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'},
        {value: 'D', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'}, 
        {value: 'JB', faceUp: false, image: 'img/images/jokers/joker-black.svg'},
        {value: 'JB', faceUp: false, image: 'img/images/jokers/joker-black.svg'},
        {value: 'JR', faceUp: false, image: 'img/images/jokers/joker-red.svg'}, 
        {value: 'JR', faceUp: false, image: 'img/images/jokers/joker-red.svg'}, 
        //
        {value: 'HH', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'HH', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'CC', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'CC', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'SS', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'SS', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'DD', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'},
        {value: 'DD', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'}, 
    ],
    3: [
        // EASY
        {value: 'H', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'H', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'C', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'C', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'S', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'S', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'D', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'},
        {value: 'D', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'}, 
        {value: 'JB', faceUp: false, image: 'img/images/jokers/joker-black.svg'},
        {value: 'JB', faceUp: false, image: 'img/images/jokers/joker-black.svg'},
        {value: 'JR', faceUp: false, image: 'img/images/jokers/joker-red.svg'}, 
        {value: 'JR', faceUp: false, image: 'img/images/jokers/joker-red.svg'}, 
        // NORMAL
        {value: 'H', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'H', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'C', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'C', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'S', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'S', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'D', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'},
        {value: 'D', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'}, 
        {value: 'JB', faceUp: false, image: 'img/images/jokers/joker-black.svg'},
        {value: 'JB', faceUp: false, image: 'img/images/jokers/joker-black.svg'},
        {value: 'JR', faceUp: false, image: 'img/images/jokers/joker-red.svg'}, 
        {value: 'JR', faceUp: false, image: 'img/images/jokers/joker-red.svg'}, 
        //
        {value: 'HH', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'HH', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'CC', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'CC', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'SS', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'SS', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'DD', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'},
        {value: 'DD', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'}, 
        // HARD
        {value: 'H', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'H', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'C', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'C', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'S', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'S', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'D', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'},
        {value: 'D', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'}, 
        {value: 'JB', faceUp: false, image: 'img/images/jokers/joker-black.svg'},
        {value: 'JB', faceUp: false, image: 'img/images/jokers/joker-black.svg'},
        {value: 'JR', faceUp: false, image: 'img/images/jokers/joker-red.svg'}, 
        {value: 'JR', faceUp: false, image: 'img/images/jokers/joker-red.svg'}, 
        //
        {value: 'H', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'H', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'C', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'C', faceUp: false, image: 'img/images/clubs/clubs-A.svg'},
        {value: 'S', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'S', faceUp: false, image: 'img/images/spades/spades-A.svg'},
        {value: 'D', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'},
        {value: 'D', faceUp: false, image: 'img/images/diamonds/diamonds-A.svg'}, 
        //
        {value: 'JB', faceUp: false, image: 'img/images/jokers/joker-black.svg'},
        {value: 'JB', faceUp: false, image: 'img/images/jokers/joker-black.svg'},
        {value: 'JR', faceUp: false, image: 'img/images/jokers/joker-red.svg'}, 
        {value: 'JR', faceUp: false, image: 'img/images/jokers/joker-red.svg'}, 
        {value: 'HQ', faceUp: false, image: 'img/images/hearts/hearts-Q.svg'},
        {value: 'HQ', faceUp: false, image: 'img/images/hearts/hearts-Q.svg'},
        {value: 'CQ', faceUp: false, image: 'img/images/clubs/clubs-Q.svg'},
        {value: 'CQ', faceUp: false, image: 'img/images/clubs/clubs-Q.svg'},
        {value: 'H', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
        {value: 'H', faceUp: false, image: 'img/images/hearts/hearts-A.svg'},
    ]
}

// state variables -----------------------------------------------------------

let choice1 = null; // currently holds no value
let choice2 = null; // currently holds no value
let matchedCards = []; 
let wrongGuessesAllowed;
let level;
let winner;
let countdown = 0;
let timeOut;
let clickable = true;
let gameStartTime; 
let topScores = [];
let currentLevel = 1; 


// cached element references -----------------------------------------------------------

const cardEls = document.querySelectorAll('.card');
const wrongGuessesAllowedEl = document.querySelector('.wrongGuessesAllowed');
const levelEl = document.querySelector('.level');
const countdownEl = document.querySelector('.countdown');
const toggleModeBtn = document.getElementById('toggleMode');
const topScoresEl = document.querySelector('.top-scores');

// Store buttons references
const levelButtons = {
  1: document.querySelector('#level-1-button'),
  2: document.querySelector('#level-2-button'),
  3: document.querySelector('#level-3-button'),
};

 // Start at Level 1
let currentCardOptions = cardOptions[currentLevel]; // Start with Level 1 cards

function changeLevel(level) {
  // Hide the previous level
  document.querySelector('.level-' + currentLevel).classList.add('hidden');
  // Remove 'active' class from previous level button
  levelButtons[currentLevel].classList.remove('active');

  // Update the current level and card options
  currentLevel = level;
  currentCardOptions = cardOptions[currentLevel];

  // Show the new level
  document.querySelector('.level-' + currentLevel).classList.remove('hidden');
  // Add 'active' class to new level button
  levelButtons[currentLevel].classList.add('active');

  resetGame();
}


// event listeners -----------------------------------------------------------

cardEls.forEach((cardEl, index) => {
    cardEl.addEventListener('click', function() {
        if (!clickable) return; // Prevent function from proceeding if clickable is false
        const card = currentCardOptions[index];
        // Flip the card face-up
        if (card.faceUp === false) {
            card.faceUp = true;
        }
        // Set the first or second card choice
        if (choice1 === null) {
            choice1 = card; // First card choice
            startCountdown(); // start the countdown
            render();
        } else if (choice1 !== null && choice2 === null) {
            choice2 = card; // Second card choice
            clickable = false; // Disable clicking after second card choice
            checkMatch(); // Check if the two choices match
            render();
        }
    });
});

// Event listener for the mode toggle button -----------------------------------------------------------

toggleModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});

// functions -----------------------------------------------------------

function init() {
    // console.log('game start');
    // initialize state
    wrongGuessesAllowed = 10;
    level = 1;
    matchedCards = [];
    shuffle();
    render();
    gameStartTime = new Date();
}

function startCountdown() {
    countdown = 3; // reset the countdown
    AUDIO.currentTime = 0;
    AUDIO.play();
    countdownEl.textContent = countdown;
    timeOut = setInterval(() => {
        countdown--;
        countdownEl.textContent = countdown;
        if (countdown <= 0 || choice2 !== null) {
            countdown = 0; // fixes timer from going into negative values
            clearInterval(timeOut); // stop the countdown when it reaches 0 or when the second card is clicked
            clickable = true; // Enable clicking after countdown finishes
            if(choice1 !== null && choice2 === null) { // if only one card has been chosen
                choice1.faceUp = false;
                choice1 = null;
                wrongGuessesAllowed--;
            }
            render();
            isGameOver();
        }
    }, 600); //0.6 seconds
}
// helper function -----------------------------------------------------------

function shuffle() {
    for (let i = currentCardOptions.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [currentCardOptions[i], currentCardOptions[randomIndex]] = [currentCardOptions[randomIndex], currentCardOptions[i]];
    }
}

function render() {
    wrongGuessesAllowedEl.textContent = wrongGuessesAllowed;
    cardEls.forEach((cardEl, index) => { 
        const card = currentCardOptions[index];

        if (!card) {
            // console.log(`No card found for index: ${index}`);
            return; // continue to next iteration as no card found for this index
        }

        if (card.faceUp === true || matchedCards.includes(card)) { 
            cardEl.classList.add('flipped');
            cardEl.querySelector('img').src = currentCardOptions[index].image;
        } else {
            cardEl.classList.remove('flipped');
            cardEl.querySelector('img').src = backImage;
        }
    });

    setTimeout(() => { 
        wrongGuessesAllowedEl.textContent = wrongGuessesAllowed;
        // console.log('gameover');
        isGameOver(); 
        isGameWon();
    }, 500);
    renderTopScores();
}

function renderTopScores() {
    let topScoresString = topScores.map(function(score, index) {
        return (index + 1) + ': ' + score + ' seconds';
    }).join('<br>'); // adding line break in the list of top scores 
    topScoresEl.innerHTML = topScoresString;
}

function checkMatch() {
    // Check if both choices have been made, meaning non-null values 
    if (choice1 !== null && choice2 !== null) {
        // Check if the two choices match
        if (choice1.value === choice2.value) {
            // Match found
            matchedCards.push(choice1);
            matchedCards.push(choice2);
            // Reset choices after confirming match
            choice1 = null;
            choice2 = null;
        } else {
            // No match
            // Store the choices before resetting to null
            const prevChoice1 = choice1;
            const prevChoice2 = choice2;
            // Reset choices after checking match
            choice1 = null;
            choice2 = null;
            // Flip the cards back to faceDown state after a short delay
            setTimeout(() => {
                prevChoice1.faceUp = false;
                prevChoice2.faceUp = false;
                if (wrongGuessesAllowed > 0) {
                    wrongGuessesAllowed--;
                }
                render();
                isGameOver();// Check if the game is over after updating the wrongGuessesAllowed count
            }, 500); // code will be executed after 500 milliseconds or 0.5 second 
        }
    }
}


function isGameWon() {
    const cardsToWin = {
        1: 12, // Level EASY requires 12 cards to win
        2: 20, // Level NORMAL requires 20 cards to win
        3: 30, // Level HARD requires 30 cards to win
    };
    const totalMatchesForLevel = cardsToWin[currentLevel];
    if (matchedCards.length === totalMatchesForLevel) {
        let gameEndTime = new Date();
        let timeTaken = Math.round((gameEndTime - gameStartTime) / 1000); // time in seconds
        topScores.push(timeTaken);
        topScores.sort((a, b) => a - b);
        if (topScores.length > 5) {
            topScores.pop(); // remove the slowest time if there are more than 5 scores
        }
        // Show "Game Won" alert
        alert('You Won in ' + timeTaken + ' seconds! Would you like to replay?');
        
        // Update scores
        renderTopScores();

        // Check if the player wants to replay the game
        const replay = confirm('Would you like to replay?');
        if (replay) {
            // Reset the game if the player wants to replay
            resetGameWithoutScoreReset();
        }

        return true;
    }
    return false;
}


function isGameOver() {
    if (wrongGuessesAllowed === 0) {
        let gameEndTime = new Date();
        let timeTaken = Math.round((gameEndTime - gameStartTime) / 1000); // time in seconds
        // Show "Game Over" alert
        alert('Game Over! You lasted ' + timeTaken + ' seconds. Would you like to replay?');
        // Reset the game and scores
        resetGame();
        return true;
    }
    return false;
}

function resetGameWithoutScoreReset() {
    // reset game variables
    choice1 = null;
    choice2 = null;
    matchedCards = [];
    wrongGuessesAllowed = 10;
    level = 1;
    clickable = true;
    gameStartTime = new Date();
    
    // reset card faceUp state
    currentCardOptions.forEach(card => {
        card.faceUp = false;
    });

    // shuffle the cards
    shuffle();
    
    // render the game
    render();
}


function resetGame() {
    // Reset all state variables and game-related data including topScores
    choice1 = null;
    choice2 = null;
    matchedCards = [];
    
    if (currentLevel === 1) {
        wrongGuessesAllowed = 10;
    } else if (currentLevel === 2) {
        wrongGuessesAllowed = 13;
    } else if (currentLevel === 3) {
        wrongGuessesAllowed = 15;
    } else {
        wrongGuessesAllowed = 10;
    }
    
    topScores = [];

    // Set all cards to face down (i.e., `faceUp` to `false`)
    currentCardOptions.forEach(card => {
        card.faceUp = false;
    });
    countdownEl.textContent = '';
    gameStartTime = new Date();

    shuffle();
    render();
}


init();