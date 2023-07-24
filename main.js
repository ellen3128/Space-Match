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

let choice1; 
let choice2; 
let matchedCards; 
let wrongGuesses;
let level;

// cached element references -----------------------------------------------------------

const cardEls = document.querySelectorAll('.card');
const firstGuess = null;
const wrongGuessesEl = document.querySelector('.wrongGuesses');
const levelEl = document.querySelector('.level');


// event listeners -----------------------------------------------------------

// 1) card shuffle when webpage is loaded
// 2) alert msg for next level when all cards have been flipped
// 3) alert msg when turns === max. number of turns (TBD maybe 10?)
// 3) card shuffle when user clicks 'next level' button


cardEls.forEach((cardEl, index) => {
    cardEl.addEventListener('click', function() {
        if (cardOptions[index].faceUp === false) {
            cardOptions[index].faceUp = true;
            // console.log("1. rendered: ", cardOptions[index].faceUp);
        } else {
            cardOptions[index].faceUp = false;
            // console.log("2. rendered: ", cardOptions[index].faceUp);
        }
        render();
    });
});


// functions -----------------------------------------------------------

function init() {
    console.log('game start');
    // initialize state
    wrongGuesses = 10;
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
    cardEls.forEach((cardEl, index) => {
        const card = cardOptions[index];
        if (card.faceUp === true) {
            cardEl.classList.add('flipped');
            cardEl.querySelector('img').src = card.image;
            // console.log(index+1, 'flipped-first', cardEl.classList);
            // console.log(cardOptions[index]);
        } else {
            cardEl.classList.remove('flipped');
            cardEl.querySelector('img').src = backImage;
            // console.log(index+1, 'flipped-back', cardEl.classList);
            // console.log(cardOptions[index]);
        }
    });
}

function checkMatch() {
// alert win or gameover
}


init();