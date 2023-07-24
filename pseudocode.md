# Pseudocode

### 1. Define required constants:
  
1.1 | Constants (Init state)

  - Create a deck of cards with matching pairs
  - Shuffle cards on the gameboard, faced down (include back image in HTMl)
  - Define additional init state, such as game level, and # of wrong guesses

### 2. Define required variables:

2.1 | State variables

  - Card array
  - Player's 1st & 2nd card choices 
  - Matched cards array (to define win)
  - Wrong guesses count (to define gameover)
  - Countdown variable between two card selections/clicks

### 3. Store repeated elements:

3.1 | Cached elements 
  
  - Cards options
  - Player's 1st and 2nd choice of cards
  - Wrong guesses variable
  - Level variable

### 4. Upon loading the game:

4.1 | Initialize the game:

- Create cards array  
- Render the game board with facedown & shuffled cards
- Event listener('click') to flip & start timer 

### 5. Handle player's clicks:

5.1 | Add click event listeners to handle card clicks

5.1.1 | Flip the card 
- Track the card choices (matched or unmatched)
- If matched, either leave the card flipped or update the appearance (ex. hidden) 
- If unmatched, flip both cards back to facedown and increment wrong guess count
- Check for win or gameover
- If won, display a winning message with play again option (or next level -> icebox feature)
- Once play again button is clicked, re-initialize the game  
