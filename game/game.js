function swapGameGuide (selector) {
  document.querySelectorAll('.game-guide').forEach(function (element) {
    element.classList.add('hidden')
  })

  if (selector) {
    document.querySelector(selector).classList.remove('hidden')
  }
}

function swapGameBackground (gameSelector, background) {
  document.querySelector(gameSelector).dataset.background = background
}
