const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');

// constants -----------------------------------------------------------

const backImage = 'img/images/backs/blue.svg';

const cardOptions = [
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
    {value: 'JR', faceUp: false, image: 'img/images/jokers/joker-red.svg'}
];

// state variables -----------------------------------------------------------

let choice1 = null; // currently holds no value
let choice2 = null; // currently holds no value
let matchedCards = []; 
let wrongGuessesAllowed;
let level;
let winner;
let countdown;

// cached element references -----------------------------------------------------------

const cardEls = document.querySelectorAll('.card');
const wrongGuessesAllowedEl = document.querySelector('.wrongGuessesAllowed');
const levelEl = document.querySelector('.level');
const countdownEl = document.querySelector('.countdown');

// event listeners -----------------------------------------------------------

cardEls.forEach((cardEl, index) => {
    cardEl.addEventListener('click', function() {
        const card = cardOptions[index];
        // Flip the card face-up
        if (card.faceUp === false) {
            card.faceUp = true;
        }
        // Set the first or second card choice
        if (choice1 === null) {
            choice1 = card; // First card choice
            startCountdown(); // start the countdown
        } else {
            clearInterval(timeOut); // stop the countdown when the second card is clicked
            choice2 = card; // Second card choice
            checkMatch(); // Check if the two choices match
        }
        render();
    });
});


// functions -----------------------------------------------------------

function init() {
    console.log('game start');
    // initialize state
    wrongGuessesAllowed = 10;
    level = 1;
    matchedCards = [];
    shuffle();
    render();
}

function startCountdown() {
    let countdown = 3; // reset the countdown
    AUDIO.currentTime = 0;
    AUDIO.play();
    countdownEl.textContent = countdown;
    timeOut = setInterval(() => {
        countdown--;
        countdownEl.textContent = countdown;
        if (countdown === 0) {
            clearInterval(timeOut); // stop the countdown when it reaches 0
            choice1.faceUp = false;
            choice1 = null;
            wrongGuessesAllowed--;
            render();
            isGameOver();
        }
    }, 1000); // decrement the countdown every second
}


// helper function -----------------------------------------------------------

function shuffle() {
    for (let i = cardOptions.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [cardOptions[i], cardOptions[randomIndex]] = [cardOptions[randomIndex], cardOptions[i]];
    }
}

function render() {
    wrongGuessesAllowedEl.textContent = wrongGuessesAllowed;
    cardEls.forEach((cardEl, index) => { 
        const card = cardOptions[index];
        if (card.faceUp === true || matchedCards.includes(card)) { // if card is face-up or within the matched cards array, render the image of the card 
            cardEl.classList.add('flipped');
            cardEl.querySelector('img').src = cardOptions[index].image;
            // console.log(index+1, 'flipped-first', cardEl.classList);
            // console.log(cardOptions[index]);
        } else {
            cardEl.classList.remove('flipped'); // if not, render the back image of the card 
            cardEl.querySelector('img').src = backImage;
            // console.log(index+1, 'flipped-back', cardEl.classList);
            // console.log(cardOptions[index]);
        }
    });
    setTimeout(() => { // to make sure last card is rendered before alert
    isGameOver(); // Check if the game is over after rendering
    }, 500); 
     // Check if the game is won (i.e., all 12 cards are matched)
     setTimeout(() => {
     isGameWon(); 
    }, 500);
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
    if (matchedCards.length === 12) {
        // Show "Game Won" alert
        alert('You Won! Would you like to replay?');
        // Reset the game
        resetGame();
        return true;
    }
    return false;
}

function isGameOver() {
    if (wrongGuessesAllowed === 0) {
        // Show "Game Over" alert
        alert('Game Over! Would you like to replay?');
        // Reset the game
        resetGame();
        return true;
    }
    return false;
}

function resetGame() {
    // Reset all state variables and game-related data
    choice1 = null;
    choice2 = null;
    matchedCards = [];
    wrongGuessesAllowed = 10;

       // Set all cards to face down (i.e., `faceUp` to `false`)
    cardOptions.forEach(card => {
        card.faceUp = false;
    });
    countdownEl.textContent = '';

    shuffle();
    render();
}

init();