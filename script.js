const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const gameOver = document.querySelector('.game-over')
const start = document.querySelector('.start')


const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft
        const cloudsPosition = clouds.offsetLeft

        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

        if(pipePosition <= 125 && pipePosition > 0 && marioPosition < 60) {
            clouds.style.animation = 'none'
            clouds.style.left = `${cloudsPosition}px`

            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`

            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition}px`

            mario.src = 'game-over.png'
            mario.style.width = '75px'
            mario.style.left = '50px'

            gameOver.style.display = 'block'

            clearInterval(loop)
        }

}, 10)

const jump = () => {
    mario.classList.add('jump')
    
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500) 

}


document.addEventListener('keydown', jump)