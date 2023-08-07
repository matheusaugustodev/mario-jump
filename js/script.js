const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const gameOver = document.querySelector('.game-over')
const startText = document.querySelector('.start')
const score = document.querySelector('#scoreNumber')

let gameStarted = false
let jumpProgress = false

const jump = () => {
    if (!jumpProgress && gameStarted) {
        mario.classList.add('jump')
        jumpProgress = true

        setTimeout(() => {
            mario.classList.remove('jump')
            jumpProgress = false
        }, 1200)
    }
}
document.addEventListener('keydown', jump)
document.addEventListener('touchstart', jump)
const start = () => {

    score.innerHTML = 0

    mario.src = 'images/mario.gif'
    mario.style.bottom = `0`
    mario.style.width = '7rem'
    pipe.style.rigth = `-4rem`

    mario.style.left = 'initial'
    pipe.style.left = `initial`
    clouds.style.left = `initial`

    startText.style.display = 'none'
    gameOver.style.display = 'none'

    pipe.classList.add('pipe-move')
    clouds.classList.add('clouds-move')

    let scoreNumber = 0
    const loop = setInterval(() => {
        scoreNumber += 10

        if(scoreNumber % 1000 == 0) score.innerHTML = scoreNumber/1000

        const pipePosition = pipe.offsetLeft
        const cloudsPosition = clouds.offsetLeft
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
        
        if (pipePosition <= 85 && pipePosition > 0 && marioPosition < 43) {
            clouds.style.left = `${cloudsPosition}px`

            pipe.style.left = `${pipePosition}px`

            mario.style.bottom = `${marioPosition}px`

            pipe.classList.remove('pipe-move')
            clouds.classList.remove('clouds-move')

            mario.src = 'images/game-over.png'
            mario.style.width = '3.5rem'
            mario.style.left = `32px`

            gameOver.style.display = 'block'            
            startText.style.display = 'block'

            gameStarted = false

            clearInterval(loop)
        }

        
    }, 10)

}

const handleStart = () => {
    if (!gameStarted) {
        gameStarted = true
        start()
    }
}

document.addEventListener('keydown', jump)
document.addEventListener('touchstart', jump)
document.addEventListener('touchstart', handleStart)
document.addEventListener('keydown', handleStart)
