'use strict'

let player = {}

function startHobbitGame () {
  desktopSection.classList.add('hidden')
  fullscreenHobbitSection.classList.remove('hidden')
  return hobbitIntroduction()
}

function closeHobbitGame () {
  desktopSection.classList.remove('hidden')
  fullscreenHobbitSection.classList.add('hidden')
}

function finishHobbitGame () {
  closeHobbitGame()
  desktopButtonWizardHunter.classList.remove('hidden')
}

function hobbitIntroduction () {
  return Promise.resolve().then(function () {
    return alertDialog("Stranger: huh?")
  }).then(function () {
    return alertDialog("stranger: uhm... hi???")
  }).then(function () {
    return alertDialog("Stranger: who are you?")
  }).then(function () {
    return promptDialog("Stranger: what is your name?")
  }).then(function (name) {
    player.name = name
    return alertDialog(`stranger: oh, uhm.. hi ${player.name}`)
  }).then(function () {
    return alertDialog("Stranger: what are you doing here?")
  }).then(function () {
    return alertDialog("Stranger: how did you get here...?")
  }).then(function () {
    return alertDialog("Stranger: okey, let's not talk about that right now")
  }).then(function () {
    return promptDialog(`Stranger: so ${player.name} have you been here for long?`)
  }).then(function (anws) {
    player.anws = anws
    return alertDialog("Stranger: uhm-- okey")
  }).then(function () {
    return alertDialog("Stranger: oh yeah, I forgot to tell you my name!")
  }).then(function () {
    return alertDialog("Stragner: my name is Niko, I uhm... live here")
  }).then(function () {
    return promptDialog("Niko: you surely look really confuse,,, ")
  }).then(function (resp) {
    player.resp = resp
  }).then(function () {
    return alertDialog("Niko: I belive you wonder where you are...")
  }).then(function () {
    return alertDialog("Niko: this is the void... the spaces in between universes")
  }).then(function () {
    return alertDialog("Niko: it was created to trap the wizard, but as you might have seen... there's no wizard here... only me")
  }).then(function () {
    return alertDialog("Niko: I'm not sure why I'm here... but.... ")
  }).then(function () {
    return alertDialog("Niko: at least I have you here now to acompany me")
  }).then(function () {
    return alertDialog("Niko: no?")
  }).then(function () {
    return alertDialog("Niko: uhm.. okey")
  }).then(function () {
    return alertDialog("Niko: maybe,,, we can help each other get out of here")
  }).then(function () {
    return alertDialog(`${player.name}: sure`)
  }).then(function () {
    return alertDialog("Niko: Yey!")
  }).then(function () {
    return alertDialog(`${player.name}: but how?`)
  }).then(function () {
    return alertDialog("Niko: I have an idea, wait")
  }).then(function () {
    return alertDialog("Niko: wait...")
  }).then(function () {
    return alertDialog("Niko: wait for it...")
  }).then(function () {
    return alertDialog(`${player.name}: I am waiting`)
  }).then(function () {
    return alertDialog("Niko: good")
  }).then(function () {
    return alertDialog("Niko: there we go,")
  }).then(function () {
    return alertDialog("Niko: just close down the game and then we're good to go")
  }).then(function () {
    return alertDialog(`${player.name}: uhm.. okey`)
  }).then(function () {
    return alertDialog("Niko: see you in a sec")
  }).then(function () {
    finishHobbitGame()
  }, function () {
    closeHobbitGame()
  })
}
