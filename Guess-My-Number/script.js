'use strict';

let score = 20
let highscore = 0
let secretNumber = Math.trunc(Math.random() * 20) + 1

const dysplayMessage = function (message) {
	document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
	const guess = +document.querySelector('.guess').value
	if (!guess) {
		dysplayMessage('No number!')
	} else if (guess === secretNumber) {
		dysplayMessage('Correct number!')
		document.querySelector('.number').textContent = secretNumber
		document.querySelector('body').style.backgroundColor = '#60b347'
		document.querySelector('.number').style.width = '30rem'
		if (score > highscore) {
			highscore = score
			document.querySelector('.highscore').textContent = highscore
		}
		//Player win
	} else if (guess !== secretNumber) {
		if (score > 1) {
			dysplayMessage(guess > secretNumber ? 'Too high!' : 'Too low!')
			score--
			document.querySelector('.score').textContent = score
		} else {
			dysplayMessage('You loose')
			document.querySelector('.score').textContent = 0
		}
	}
})

document.querySelector('.again').addEventListener('click', function () {
	score = 20
	secretNumber = Math.trunc(Math.random() * 20) + 1
	document.querySelector('.score').textContent = score
	document.querySelector('.guess').value = ''
	document.querySelector('.number').textContent = '?'
	dysplayMessage('Start guessing...')
	document.querySelector('body').style.backgroundColor = '#222'
	document.querySelector('.number').style.width = '15rem'
})