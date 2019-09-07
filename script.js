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

let playGame = (e) => {
    e.preventDefault();
    let name1 = document.querySelector('#p1').value
    let name2 = document.querySelector('#p2').value
    let p1 = player(name1, 'X')
    let p2 = player(name2, 'O')
    toggleModal()

    let currentPlayer = p1
    let otherPlayer = p2
    let counter = 0
    nextMove(currentPlayer.getName())
    let table = document.querySelector('table')
    table.addEventListener('click', function(e) {
        if(e.target.innerHTML == "") {
        e.target.innerHTML = currentPlayer.getMark()
            
        let index = e.target.dataset.key
        Gameboard.gameboard[index] = e.target.innerHTML
        counter++
        if (currentPlayer == p1) {
            currentPlayer = p2
            otherPlayer = p1
        } else {
            currentPlayer = p1
            otherPlayer = p2
        }
        nextMove(currentPlayer.getName())
        if(counter == 9 && isWinner(Gameboard.gameboard) == false) {
            let message = document.querySelector('#message')
            message.innerHTML = "Draw!"
        }
        isWinner(Gameboard.gameboard)
    }
})
}

function displayGameboard() {
    let cell = document.querySelectorAll('td')
    cell.forEach((cell) => {
        for(i = 0; i < Gameboard.gameboard.length; i++){
            cell.innerHTML = Gameboard.gameboard[i] 
        }
    })
}

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
    return false
}

function nextMove(player) {
    let message = document.querySelector('#message')
    message.innerHTML = `Next move: ${player}`
}

function toggleModal() {
    let modal = document.querySelector('.bg-modal')
    let modalContent = document.querySelector('.modal-content')
    modal.classList.toggle('hide-modal') 
    modalContent.classList.toggle('hide-modal')
}

let startBtn = document.querySelector("#startGame")
startBtn.addEventListener('click', playGame)









// function() {
    
//     toggleModal()
// })





// // Check if values are equal
// const allEqual = arr => arr.every(v => v === arr[0])

// //  00 01 02 Gameboard.gameboard[0]
// //  10 11 12 Gameboard.gameboard[1]
// //  20 21 22 Gameboard.gameboard[2]

// // Get columns array
// const arrayColumn = (arr, n) => arr.map(x => x[n])

// things to do: 
// 1. put together game flow
// 2. Allow players to add themselves
// 3. Clean up front-end
// 4. Add computer
// 5. Add score counter
