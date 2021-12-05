// debugger;
let cell1 = document.getElementById('one');
let cell2 = document.getElementById('two');
let cell3 = document.getElementById('three');
let cell4 = document.getElementById('four');
let cell5 = document.getElementById('five');
let cell6 = document.getElementById('six');
let cell7 = document.getElementById('seven');
let cell8 = document.getElementById('eight');
let cell9 = document.getElementById('nine');

let cells = document.querySelectorAll('section div');

function newDataNumber(cellName) {
    return Number(cellName.dataset.number)
}

cells.forEach(function (cell) {
    cell.addEventListener('click', click, { once: true })
})

let clickTime = 1;
// let winner = false;
function click(event) {
    // if(winner = true){
    //     return;
    // }
    if (document.querySelector('.message').textContent !== '') {
        return;
    }
    if (clickTime % 2 == 0) {
        event.target.dataset.number = -1;
    } else {
        event.target.dataset.number = 1;
    }
    if (newDataNumber(cell1) + newDataNumber(cell2) + newDataNumber(cell3) == 3 ||
        newDataNumber(cell1) + newDataNumber(cell4) + newDataNumber(cell7) == 3 ||
        newDataNumber(cell1) + newDataNumber(cell5) + newDataNumber(cell9) == 3 ||
        newDataNumber(cell2) + newDataNumber(cell5) + newDataNumber(cell8) == 3 ||
        newDataNumber(cell3) + newDataNumber(cell5) + newDataNumber(cell7) == 3 ||
        newDataNumber(cell3) + newDataNumber(cell6) + newDataNumber(cell9) == 3 ||
        newDataNumber(cell4) + newDataNumber(cell5) + newDataNumber(cell6) == 3 ||
        newDataNumber(cell7) + newDataNumber(cell8) + newDataNumber(cell9) == 3
    ) {
        document.querySelector('.message').textContent = 'X Win!';
        // winner = true;
    } else if (
        newDataNumber(cell1) + newDataNumber(cell2) + newDataNumber(cell3) == -3 ||
        newDataNumber(cell1) + newDataNumber(cell4) + newDataNumber(cell7) == -3 ||
        newDataNumber(cell1) + newDataNumber(cell5) + newDataNumber(cell9) == -3 ||
        newDataNumber(cell2) + newDataNumber(cell5) + newDataNumber(cell8) == -3 ||
        newDataNumber(cell3) + newDataNumber(cell5) + newDataNumber(cell7) == -3 ||
        newDataNumber(cell3) + newDataNumber(cell6) + newDataNumber(cell9) == -3 ||
        newDataNumber(cell4) + newDataNumber(cell5) + newDataNumber(cell6) == -3 ||
        newDataNumber(cell7) + newDataNumber(cell8) + newDataNumber(cell9) == -3
    ) {
        document.querySelector('.message').textContent = 'O Win!';
        // winner = true;
    } else if (clickTime == 9 && document.querySelector('.message').textContent == '') {
        document.querySelector('.message').textContent = 'A DRAW! Click Restart to play again!';
        // winner = true;
    } steps(event);
    clickTime++;
}

let resetBtn = document.querySelector('.reset-button');
resetBtn.addEventListener('click', resetButton);
function resetButton() {
    for (let i = 0; i < 9; i++) {
        cells[i].dataset.number = 0;
        cells[i].addEventListener('click', click, { once: true })
    }
    document.querySelector('.message').textContent = '';
    clickTime = 1;
    // winner = false;
    document.querySelector('.steps').textContent = '';
    document.querySelector('.steps').removeChild;
};

function steps(event) {
    if (clickTime % 2 == 1) {
        let newPara = document.createElement('li');
        document.querySelector('.steps').insertBefore(newPara, document.querySelector('ul p'));
        document.querySelectorAll('li')[clickTime - 1].textContent = `Step ${clickTime}: X-${event.target.textContent}`;
    } else if (clickTime % 2 == 0) {
        let newPara = document.createElement('li');
        document.querySelector('.steps').insertBefore(newPara, document.querySelector('ul p'));
        document.querySelectorAll('li')[clickTime - 1].textContent = `Step ${clickTime}: O-${event.target.textContent}`;
    }
}