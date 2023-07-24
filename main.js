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
let wrongGuesses = 0;
let level;

// cached element references -----------------------------------------------------------

const cardEls = document.querySelectorAll('.card');
const wrongGuessesEl = document.querySelector('.wrongGuesses');
const levelEl = document.querySelector('.level');


// event listeners -----------------------------------------------------------

// 1) card shuffle when webpage is loaded
// 2) alert msg for next level when all cards have been flipped
// 3) alert msg when turns === max. number of turns (TBD maybe 10?)
// 3) card shuffle when user clicks 'next level' button

/* TODO: 1) ignore clicks when two cards are clicked (choice1 && choice2 !== null)
         2) if clicked, flip card to faceUp 
         3) check match */

// cardEls.forEach((cardEl, index) => {
//     cardEl.addEventListener('click', function() {
//         const card = cardOptions[index];
//         if (card.faceUp === false) {
//             card.faceUp = true;
//             // console.log("1. rendered: ", cardOptions[index].faceUp);
//         } else {
//             card.faceUp = false;
//             // console.log("2. rendered: ", cardOptions[index].faceUp);
//         }
//         render();
//     });
// });


cardEls.forEach((cardEl, index) => {
    cardEl.addEventListener('click', function() {
        if (choice1 !== null && choice2 !== null) {
            // Ignore clicks when two cards are already chosen
            return;
        }
        const card = cardOptions[index];
        if (card.faceUp === false) {
            card.faceUp = true;
        } else {
            card.faceUp = false;
        }
        if (choice1 === null) {
            choice1 = card; // First card choice
        } else {
            choice2 = card; // Second card choice
                checkMatch();
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
            cardEl.querySelector('img').src = cardOptions[index].image;
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