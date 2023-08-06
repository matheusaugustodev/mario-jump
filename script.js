const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const gameOver = document.querySelector('.game-over')
const startText = document.querySelector('.start')

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

    mario.src = 'mario.gif'
    mario.style.bottom = `0px`
    mario.style.width = '150px'
    pipe.style.rigth = `-80px`

    mario.style.left = 'initial'
    pipe.style.left = `initial`
    clouds.style.left = `initial`

    startText.style.display = 'none'
    gameOver.style.display = 'none'

    pipe.classList.add('pipe-move')
    clouds.classList.add('clouds-move')

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft
        const cloudsPosition = clouds.offsetLeft
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

        if (pipePosition <= 125 && pipePosition > 0 && marioPosition < 60) {
            clouds.style.left = `${cloudsPosition}px`

            pipe.style.left = `${pipePosition}px`

            mario.style.bottom = `${marioPosition}px`

            pipe.classList.remove('pipe-move')
            clouds.classList.remove('clouds-move')

            mario.src = 'game-over.png'
            mario.style.width = '75px'
            mario.style.left = '50px'

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
