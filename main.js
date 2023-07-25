console.log('checking console');

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

// cached element references -----------------------------------------------------------

const cardEls = document.querySelectorAll('.card');
const wrongGuessesAllowedEl = document.querySelector('.wrongGuessesAllowed');
const levelEl = document.querySelector('.level');


// event listeners -----------------------------------------------------------

// 1) card shuffle when webpage is loaded
// 2) alert msg for next level when all cards have been flipped
// 3) alert msg when turns === max. number of turns (TBD maybe 10?)
// 3) card shuffle when user clicks 'next level' button

/* TODO: 1) ignore clicks when two cards are clicked (choice1 && choice2 !== null)
         2) if clicked, flip card to faceUp 
         3) check match */

let clickEnabled = true;

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
        } else {
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
    isGameOver(); // Check if the game is over after rendering
}

function checkMatch() {
    // Check if both choices have been made, meaning non-null values 
    if (choice1 && choice2) {
        // Check if the two choices match
        if (choice1.value === choice2.value) {
            // Match found
            matchedCards.push(choice1);
            matchedCards.push(choice2);
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

    shuffle();
    render();
}

init();