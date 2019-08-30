let X = 'X'
let O = 'O'

let Gameboard = {
    gameboard: [
        [X, X, O],
        [O, O, X],
        [X, X, O]
    ]
};

const player = name => {
    name
    return { name }
};

let displayGame = () => {
    let table = document.querySelector('table')
        for(let i = 0; i<table.rows.length; i++) {
            for(let j = 0; j < table.rows[i].cells.length; j++) {
                table.rows[i].cells[j].innerHTML = Gameboard.gameboard[i][j]
            }   
        }
}
