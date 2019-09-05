let Gameboard = {
    gameboard: [
        "", "", "", 
        "", "", "", 
        "", "", ""
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

function displayGameboard() {
    let cell = document.querySelectorAll('td')
    cell.forEach((cell) => {
        for(i = 0; i < Gameboard.gameboard.length; i++){
            cell.innerHTML = Gameboard.gameboard[i] 
        }
    })
}

// needs to go inside something - Game ?

let table = document.querySelector('table')
table.addEventListener('click', function(e) {
    if (e.target.innerHTML == "") {
        e.target.innerHTML = GameObj.currentPlayer.getMark()
        let index = e.target.dataset.key
        Gameboard.gameboard[index] = e.target.innerHTML
        if (GameObj.currentPlayer == p1) {
            GameObj.currentPlayer = p2
            GameObj.otherPlayer = p1
        } else {
            GameObj.currentPlayer = p1
            GameObj.otherPlayer = p2
        }
    }
})

function resetGame() {
    Gameboard.gameboard = [
        "", "", "", 
        "", "", "", 
        "", "", ""
    ]
    displayGameboard()
}

let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


function isWinner(board) {
    let message = document.querySelector('#message')
    for(let i = 0; i < wins.length; i++) {
        let a, b, c;

        a = board[wins[i][0]] 
        b = board[wins[i][1]] 
        c = board[wins[i][2]] 

        if(a == b && a == c && a != "") {
            message.innerHTML = `${a} is the winner!`
            return a
        }
    }
    message.innerHTML = `Draw!`
    return false
}


// // Check if values are equal
// const allEqual = arr => arr.every(v => v === arr[0])

// //  00 01 02 Gameboard.gameboard[0]
// //  10 11 12 Gameboard.gameboard[1]
// //  20 21 22 Gameboard.gameboard[2]

// // Get columns array
// const arrayColumn = (arr, n) => arr.map(x => x[n])