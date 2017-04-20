'use strict'

function swapGameGuide (gameSelector, selector) {
  let game = document.querySelector(gameSelector)
  game.querySelectorAll('.game-guide').forEach(function (element) {
    element.classList.add('hidden')
  })

  if (selector) {
    game.querySelector(selector).classList.remove('hidden')
  }
}

function swapGameBackground (gameSelector, background) {
  document.querySelector(gameSelector).dataset.background = background
}
