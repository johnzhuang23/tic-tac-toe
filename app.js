let clickTime = 0;
let cells = document.querySelectorAll('.cell');
cells.forEach(function (cell) {
    cell.addEventListener('click', click, { once: true })
})

function click(event) {
    if (clickTime % 2 == 0 && event.target.classList.contains('clicked-cell-o') == false) {
        event.target.classList.add('clicked-cell-x');
    } else if (event.target.classList.contains('clicked-cell-x') == false && clickTime % 2 !== 0) {
        event.target.classList.add('clicked-cell-o');
    }
    clickTime++;
}


