let Gameboard = {
    gameboard: [
        "", "", "", 
        "", "", "", 
        "", "", ""
    ]
};

let player = (name, marker, color) => {
    const getName = () => name
    const getMark = () => marker
    const getColor = () => color
    return { getName, getMark, getColor}
};

let Game = {
    currentPlayer: "",
    otherPlayer: "",
    counter: 0,
    scoreP1: 0,
    scoreP2: 0,

}

let playGame = (e) => {
    e.preventDefault();
    let name1 = document.querySelector('#p1').value
    let name2 = document.querySelector('#p2').value

    name1 === '' ? name1 = 'X' : null
    name2 === '' ? name2 = 'O' : null

    let p1 = player(name1, 'X', 'red')
    let p2 = player(name2, 'O', 'blue')
    toggleModal()

    Game.currentPlayer = p1
    Game.otherPlayer = p2

    nextMove(Game.currentPlayer.getName())
    displayNames(p1.getName(), p2.getName())
    
    let table = document.querySelector('table')
    table.addEventListener('click', function(e) {
        if(e.target.innerHTML == "") {
        e.target.innerHTML = Game.currentPlayer.getMark()
        e.target.style.color = Game.currentPlayer.getColor()
            
        let index = e.target.dataset.key
        Gameboard.gameboard[index] = e.target.innerHTML
        Game.counter++
        if (Game.currentPlayer == p1) {
            Game.currentPlayer = p2
            Game.otherPlayer = p1
        } else {
            Game.currentPlayer = p1
            Game.otherPlayer = p2
        }
        nextMove(Game.currentPlayer.getName())

        if (Game.counter == 9 && isWinner(Gameboard.gameboard) == false) {
            let message = document.querySelector('#message')
            message.innerHTML = "Draw!"
        } else {
                isWinner(Gameboard.gameboard)
                addPoints()
        }
}})
}

function displayGameboard() {
    let cell = document.querySelectorAll('td')
    cell.forEach((cell) => {
        for(i = 0; i < Gameboard.gameboard.length; i++){
            cell.innerHTML = Gameboard.gameboard[i] 
        }
    })
}

function displayNames(name1, name2) {
    let pName1 = document.querySelector("#nameP1")
    let pName2 = document.querySelector("#nameP2")

    pName1.textContent = `Player 1: ${name1}`
    pName2.textContent = `Player 2: ${name2}`
}

function resetGame() {
    location.reload()
}

function clearGame() {
    Gameboard.gameboard = [
        "", "", "", 
        "", "", "", 
        "", "", ""
    ]
    displayGameboard()
    Game.counter = 0
    nextMove(Game.currentPlayer.getName())
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
            message.innerHTML = `${Game.otherPlayer.getName()} is the winner!`
            if(a == 'X') {
                Game.scoreP1++
            } else {
                Game.scoreP2++
            }
            addPoints()
            toggleWinModal()
            return a
        }
    }
    return false
}

function nextMove(player) {
    let message = document.querySelector('#message')
    message.innerHTML = `Next move: ${player}`
}

let startBtn = document.querySelector("#startGame")
startBtn.addEventListener('click', playGame)

let resetBtn = document.querySelector('#reset')
resetBtn.addEventListener('click', resetGame)

let modalBtn = document.querySelector('#close')
modalBtn.addEventListener('click', function() {
    toggleWinModal()
    clearGame()
})

let clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', clearGame)


function toggleModal() {
    let modal = document.querySelector('.bg-modal')
    modal.classList.toggle('hide-modal')  
}

function toggleWinModal() {
    let modal = document.querySelector('.win-modal')
    let message = document.querySelector('#win-message')

    modal.classList.toggle('hide-modal')
    message.textContent = `${Game.otherPlayer.getName()} wins!`
}

function addPoints() {
    let xCount = document.querySelector('#score1')
    let oCount = document.querySelector('#score2')

    xCount.textContent = "Score: " + Game.scoreP1
    oCount.textContent = "Score: " + Game.scoreP2
 
}






