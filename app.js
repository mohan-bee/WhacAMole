let currMoleTile;
let currPlantTile;
let gameOver = false;
let score = 0
window.onload = function(){
    setGame();
    
}

const setGame = ()=>{
    score = 0
    for (let i=0; i<9; i++){
        let tile = document.createElement('div')
        tile.id = i.toString()
        tile.addEventListener('click', selectTile)
        document.getElementById('board').appendChild(tile)
    }
    setInterval(setMole, 1000)
    setInterval(setPlant, 2000)

}

const getRandomTile = ()=>{
    let num = Math.floor(Math.random() * 9)
    return num.toString()
}

const setMole = ()=>{
    if(gameOver){
        return
    }
    if(currMoleTile){
        currMoleTile.innerHTML = " ";
    }
    const mole = document.createElement('img')
    mole.src = './Assests/monty-mole.png'
    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id == num){
        return;
    }
    currMoleTile = document.getElementById(num)
    currMoleTile.appendChild(mole)
}
const setPlant = ()=>{
    if(gameOver){
        return
    }
    if(currPlantTile){
        currPlantTile.innerHTML = " ";
    }
    const plant = document.createElement('img')
    plant.src = './Assests/piranha-plant.png'
    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id == num){
        return;
    }
    currPlantTile = document.getElementById(num)
    currPlantTile.appendChild(plant)
}
const selectTile = function(){
    if(gameOver){
        return
    }
    if(this === currMoleTile){
        score += 20
        document.getElementById('score').innerHTML = 'Score: ' + score.toString()
    }
    else if(this === currPlantTile){
        gameOver = true
        document.getElementById('score').innerHTML = 'GAME OVER: ' + score.toString()
    }
}