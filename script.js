let Gameboard = {
    gameboard: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
};

let player = (name, marker) => {
    const getName = () => name
    const getMark = () => marker
    return { getName, getMark}
};

let p1 = player('micky', 'X')
let p2 = player('mitch', 'O')

let GameObj = {
    currentPlayer: p1,
    moves: 1,
    otherPlayer: p2
};

let displayGame = () => {
    let table = document.querySelector('table')
        for(let i = 0; i<table.rows.length; i++) {
            for(let j = 0; j < table.rows[i].cells.length; j++) {
                table.rows[i].cells[j].innerHTML = Gameboard.gameboard[i][j]
                table.rows[i].cells[j].dataset.key = i + "," + j
            }   
        }
};

let table = document.querySelector('table')
table.addEventListener('click', function(e) {
    if (e.target.innerHTML == "") {
        e.target.innerHTML = GameObj.currentPlayer.getMark()
        if (GameObj.currentPlayer == p1) {
            GameObj.currentPlayer = p2
            GameObj.otherPlayer = p1
        } else {
            GameObj.currentPlayer = p1
            GameObj.otherPlayer = p2
        }
    }
})



// {
//     let key = e.target.dataset.key
//     if(Gameboard.gameboard[key[0]][key[2]] == "") {
//         Gameboard.gameboard[key[0]][key[2]] = getMark()
//     }})


