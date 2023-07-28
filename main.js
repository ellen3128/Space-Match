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

let choice1 = null; 
let choice2 = null; 
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

// toggle mode button -----------------------------------------------------------

toggleModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});

// cached level buttons references
const levelButtons = {
  1: document.querySelector('#level-1-button'),
  2: document.querySelector('#level-2-button'),
  3: document.querySelector('#level-3-button'),
};

let currentCardOptions = cardOptions[currentLevel]; 

function changeLevel(level) {
  // current level hidden
  document.querySelector('.level-' + currentLevel).classList.add('hidden');
  levelButtons[currentLevel].classList.remove('active');
  // next level declared
  currentLevel = level;
  currentCardOptions = cardOptions[currentLevel];
  // remove hidden for the new level 
  document.querySelector('.level-' + currentLevel).classList.remove('hidden');
  levelButtons[currentLevel].classList.add('active');

  resetGame();
}


// event listeners -----------------------------------------------------------

cardEls.forEach((cardEl, index) => {
    cardEl.addEventListener('click', function() {
        if (!clickable) return; 
        const card = currentCardOptions[index];
        if (card.faceUp === false) {
            card.faceUp = true;
        }
        if (choice1 === null) {
            choice1 = card; 
            startCountdown(); 
            render();
        } else if (choice1 !== null && choice2 === null) {
            choice2 = card; 
            clickable = false; 
            checkMatch(); 
            render();
        }
    });
});



// functions -----------------------------------------------------------

function init() {
    wrongGuessesAllowed = 10;
    level = 1;
    matchedCards = [];
    shuffle();
    render();
    gameStartTime = new Date();
}

function startCountdown() {
    countdown = 3; 
    AUDIO.currentTime = 0;
    AUDIO.play();
    countdownEl.textContent = countdown;
    timeOut = setInterval(() => {
        countdown--;
        countdownEl.textContent = countdown;
        if (countdown <= 0 || choice2 !== null) {
            countdown = 0; 
            clearInterval(timeOut); 
            clickable = true; 
            if(choice1 !== null && choice2 === null) { 
                choice1.faceUp = false;
                choice1 = null;
                wrongGuessesAllowed--;
            }
            render();
            isGameOver();
        }
    }, 600);
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
            return; 
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
        isGameOver(); 
        isGameWon();
    }, 500);
    renderTopScores();
}

function renderTopScores() {
    let topScoresString = topScores.map(function(score, index) {
        return (index + 1) + ': ' + score + ' seconds';
    }).join('<br>'); 
    topScoresEl.innerHTML = topScoresString;
}

function checkMatch() {
    if (choice1 !== null && choice2 !== null) {
        if (choice1.value === choice2.value) {
            matchedCards.push(choice1);
            matchedCards.push(choice2);
            choice1 = null;
            choice2 = null;
        } else {
            const prevChoice1 = choice1;
            const prevChoice2 = choice2;
            choice1 = null;
            choice2 = null;
            setTimeout(() => {
                prevChoice1.faceUp = false;
                prevChoice2.faceUp = false;
                if (wrongGuessesAllowed > 0) {
                    wrongGuessesAllowed--;
                }
                render();
                isGameOver();
            }, 500); 
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
        let timeTaken = Math.round((gameEndTime - gameStartTime) / 1000); 
        topScores.push(timeTaken);
        topScores.sort((a, b) => a - b);
        if (topScores.length > 5) {
            topScores.pop(); 
        }
        alert('You Won in ' + timeTaken + ' seconds!');
        
        renderTopScores();

        const replay = confirm('Would you like to replay?');
        if (replay) {
            resetGameWithoutScoreReset();
        }
        return true;
    }
    return false;
}


function isGameOver() {
    if (wrongGuessesAllowed === 0) {
        let gameEndTime = new Date();
        let timeTaken = Math.round((gameEndTime - gameStartTime) / 1000);
        alert('Game Over! You lasted ' + timeTaken + ' seconds. Would you like to replay?');
        resetGame();
        return true;
    }
    return false;
}

function resetGameWithoutScoreReset() {
    choice1 = null;
    choice2 = null;
    matchedCards = [];
    wrongGuessesAllowed = 10;
    level = 1;
    clickable = true;
    gameStartTime = new Date();
    
    currentCardOptions.forEach(card => {
        card.faceUp = false;
    });
    shuffle();
    render();
}


function resetGame() {
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

    currentCardOptions.forEach(card => {
        card.faceUp = false;
    });
    countdownEl.textContent = '';
    gameStartTime = new Date();

    shuffle();
    render();
}


init();