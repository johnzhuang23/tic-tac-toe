# tic-tac-toe
The game is made by HTML, CSS and JavaScript.

Using browser (Chrome recommended) to visit (https://pages.git.generalassemb.ly/johnzz/tic-tac-toe/) to play the game.

The current version is recommend to run and display on PC or Mac. 

The current version supports two players to play this game on the same computer. Players taking turns to click any cell of a 3x3 gameboard through mouse to mark it with X or O. The player who first placing three of his/her marks in horizontal, vertical or diagonal row is the winner. 
- In each round, the first click marks X.
- In the same round, each cell can only be clicked once.
- In the same round, each click is recorded and displayed at the right side section.
- A message appears above the gameboard when a win or draw condition reaches, and the current round is over. Click the “restart” button to replay.
- Players can click “restart” button at any time in the round, which will clear the previous steps and initialise the game immediately.

## Approach:

Each click assigns a specific value to the corresponding cell. In the current version, the value of X cell is 1, O is -1, and cell with no click is 0. The win condition is to see which mark can make the sum of the horizontal, vertical or diagonal row equals 3 or -3 first. 3 means X wins, and -3 means O wins. If all the cells are clicked while the win condition is not reached, the round is called a draw.

The plan for future versions includes optimising for mobile devices, adding more selectable colour themes, adding more gameboard sizes, and adding computer strategy for PvE game.
