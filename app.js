// debugger;

let cells = document.querySelectorAll('section div');
let resetBtn = document.querySelector('.reset-button');
resetBtn.addEventListener('click', resetButton);
function resetButton() {
    for (let i = 0; i < 9; i++) {
        if (cells[i].classList.contains('clicked-cell-x')) {
            cells[i].classList.remove('clicked-cell-x');
        } else {
            cells[i].classList.remove('clicked-cell-o');
        }
        cells[i].addEventListener('click', click, { once: true })
    }
    document.querySelector('.message').textContent = '';
    clickTime = 0;
    hasWinner = false;
};

let clickTime = 0;
let hasWinner = false;

cells.forEach(function (cell) {
    cell.addEventListener('click', click, { once: true })
})
function click(event) {
    if (hasWinner == true) {
        return;
    }
    // if (document.querySelector('.message').textContent !== '') {
    //     return;
    // }
    if (clickTime % 2 == 0) {
        event.target.classList.toggle('clicked-cell-x');
    } else {
        event.target.classList.toggle('clicked-cell-o');
    }
    if ((document.querySelector('.one').classList.contains('clicked-cell-x') == true &&
        document.querySelector('.two').classList.contains('clicked-cell-x') == true &&
        document.querySelector('.three').classList.contains('clicked-cell-x') == true)
        ||
        (document.querySelector('.four').classList.contains('clicked-cell-x') == true &&
            document.querySelector('.five').classList.contains('clicked-cell-x') == true &&
            document.querySelector('.six').classList.contains('clicked-cell-x') == true)
        ||
        (document.querySelector('.seven').classList.contains('clicked-cell-x') == true &&
            document.querySelector('.eight').classList.contains('clicked-cell-x') == true &&
            document.querySelector('.nine').classList.contains('clicked-cell-x') == true)
        ||
        (document.querySelector('.one').classList.contains('clicked-cell-x') == true &&
            document.querySelector('.four').classList.contains('clicked-cell-x') == true &&
            document.querySelector('.seven').classList.contains('clicked-cell-x') == true)
        ||
        (document.querySelector('.two').classList.contains('clicked-cell-x') == true &&
            document.querySelector('.five').classList.contains('clicked-cell-x') == true &&
            document.querySelector('.eight').classList.contains('clicked-cell-x') == true)
        ||
        (document.querySelector('.three').classList.contains('clicked-cell-x') == true &&
            document.querySelector('.six').classList.contains('clicked-cell-x') == true &&
            document.querySelector('.nine').classList.contains('clicked-cell-x') == true)
        ||
        (document.querySelector('.one').classList.contains('clicked-cell-x') == true &&
            document.querySelector('.five').classList.contains('clicked-cell-x') == true &&
            document.querySelector('.nine').classList.contains('clicked-cell-x') == true)
        ||
        (document.querySelector('.three').classList.contains('clicked-cell-x') == true &&
            document.querySelector('.five').classList.contains('clicked-cell-x') == true &&
            document.querySelector('.seven').classList.contains('clicked-cell-x') == true)
    ) {
        document.querySelector('.message').textContent = 'The winner is X! Click Restart to play again!';
        hasWinner = true;

    } else if (
        (document.querySelector('.one').classList.contains('clicked-cell-o') == true &&
            document.querySelector('.two').classList.contains('clicked-cell-o') == true &&
            document.querySelector('.three').classList.contains('clicked-cell-o') == true)
        ||
        (document.querySelector('.four').classList.contains('clicked-cell-o') == true &&
            document.querySelector('.five').classList.contains('clicked-cell-o') == true &&
            document.querySelector('.six').classList.contains('clicked-cell-o') == true)
        ||
        (document.querySelector('.seven').classList.contains('clicked-cell-o') == true &&
            document.querySelector('.eight').classList.contains('clicked-cell-o') == true &&
            document.querySelector('.nine').classList.contains('clicked-cell-o') == true)
        ||
        (document.querySelector('.one').classList.contains('clicked-cell-o') == true &&
            document.querySelector('.four').classList.contains('clicked-cell-o') == true &&
            document.querySelector('.seven').classList.contains('clicked-cell-o') == true)
        ||
        (document.querySelector('.two').classList.contains('clicked-cell-o') == true &&
            document.querySelector('.five').classList.contains('clicked-cell-o') == true &&
            document.querySelector('.eight').classList.contains('clicked-cell-o') == true)
        ||
        (document.querySelector('.three').classList.contains('clicked-cell-o') == true &&
            document.querySelector('.six').classList.contains('clicked-cell-o') == true &&
            document.querySelector('.nine').classList.contains('clicked-cell-o') == true)
        ||
        (document.querySelector('.one').classList.contains('clicked-cell-o') == true &&
            document.querySelector('.five').classList.contains('clicked-cell-o') == true &&
            document.querySelector('.nine').classList.contains('clicked-cell-o') == true)
        ||
        (document.querySelector('.three').classList.contains('clicked-cell-o') == true &&
            document.querySelector('.five').classList.contains('clicked-cell-o') == true &&
            document.querySelector('.seven').classList.contains('clicked-cell-o') == true)
    ) {
        document.querySelector('.message').textContent = 'The winner is O! Click Restart to play again!'
        hasWinner = true;
    }
    clickTime++;
}


// each cell has a unique ID, then let odd times of click assign a cell a number of "1", represening "X", 
// the even number times of click assign the cell "-1", representing "O",
// the winning conditions are to see from the 5th step, among the the combination of cells 123/456/789/147/258/369/159/357 , which one's sum reaches 3 or -3 first. 3 means x win, -3 means O wins.


