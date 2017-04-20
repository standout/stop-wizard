function startWizardGame () {
  desktopSection.classList.add('hidden')
  fullscreenWizardSection.classList.remove('hidden')
  // here

  return Promise.resolve().then(function () {
    return alertDialog(`Niko: ${player.name} are you here?`)
  }).then(function () {
    return alertDialog(`${player.name}: yes? where are we?`)
  }).then(function () {
    return alertDialog("Niko: we are here, in the dark forest")
  }).then(function () {
    return alertDialog(`${player.name}: where!?`)
  }).then(function () {
    return alertDialog("Niko: in the dark forest, where the wizard lives")
  }).then(function () {
    return alertDialog(`${player.name}: uhm... okey? `)
  }).then(function () {
    return alertDialog("Niko: so, now that we're here...")
  }).then(function () {
    return alertDialog(`${player.name}: wait wait wait! ur saying that we are in a forest inside of a game after we left from a game, and you managed to come no matter what?`)
  }).then(function () {
    return alertDialog("Niko: thats a very long way of saying it, but yes")
  }).then(function () {
    return alertDialog(`${player.name}: ...`)
  }).then(function () {
    return alertDialog("Niko: ANYWAYS! so, to be able to get outa here, we have to find the key to the shack")
  }).then(function () {
    return alertDialog(`${player.name}: the what?`)
  }).then(function () {
    return alertDialog("Niko: the shack...")
  }).then(function () {
    return alertDialog(`${player.name}: ?`)
  }).then(function () {
    return alertDialog("Niko: s.h.a.c... nevermind, the door, kinda")
  }).then(function () {
    return alertDialog(`${player.name}: I get it, where is this key?`)
  }).then(function () {
    swapGameGuide('.wizard')
    return alertDialog("Stranger: right here")
  }).then(function () {
    return alertDialog("You and Niko turn aroung and look over at the wizard standing right there in front of you")
  }).then(function () {
    return alertDialog("Wizard: want the key? come and get it!")
  }).then(function () {
    return alertDialog("Niko:...")
  }).then(function () {
    return alertDialog(`${player.name}: well that was easy to find`)
  }).then(function () {
    return alertDialog("Niko picks up a little knife")
  }).then(function () {
    return alertDialog("The wizard picks up his rod and points it at Niko")
  }).then(function () {
    return alertDialog("Niko: Help me! take his rod!")
  }).then(function () {
    return alertDialog("Wizard: just try")
  }).then(function () {
    return chooseWeapon("Will you help Niko or go to the wizard side?")
  }).then(function (weapon) {
    player.weapon = weapon
    switch (player.weapon) {
      case 'Niko': return playWithSword()
      case 'wizard': return playWithRod()
      default: throw new Error(`Unknown weapon ${weapon}`)
    }
  })
}

function playWithSword () {
  swapGameGuide()
  swapGameBackground('.fullscreen-wizard', 'Niko')
  return Promise.resolve().then(function () {
    return alertDialog("YOU CHOOSE NIKOS ENDING")
  }).then(function () {
    return alertDialog("You launch forward in a try to grab the rod")
  }).then(function () {
    return alertDialog("The wizard jumps away in the last second")
  }).then(function () {
    return alertDialog("Wizard: huh?")
  }).then(function () {
    return alertDialog("The wizard throws a fireball towards you")
  }).then(function () {
    return alertDialog("But you manage to avoid it")
  }).then(function () {
    return alertDialog("The wizard does some movements and teleport away")
  }).then(function () {
    return alertDialog("Everything goes quiet")
  }).then(function () {
    return alertDialog("Niko: ....")
  }).then(function () {
    return alertDialog(`${player.name}: ....`)
  }).then(function () {
    return alertDialog("Niko: huh?")
  }).then(function () {
     return alertDialog(`${player.name}: ?`)
  }).then(function () {
     return alertDialog("Niko: what is that?")
  }).then(function () {
     return alertDialog("Niko: look at the ground!")
  }).then(function () {
     return alertDialog("You turn and notice a shining object on the ground")
  }).then(function () {
     return alertDialog(`${player.name}: looks like some kinda key`)
  }).then(function () {
     return alertDialog("You pick the key up")
  }).then(function () {
     return alertDialog("Niko: ohhhhhh")
  }).then(function () {
     return alertDialog("Niko: let me see!")
  }).then(function () {
     return alertDialog("You hand the key over to Niko")
  }).then(function () {
     return alertDialog("Niko: its the key that leads out of here!!!")
  }).then(function () {
     return alertDialog(`${player.name}: really?`)
  }).then(function () {
     return alertDialog("Niko: yes! he must have dropped it!")
  }).then(function () {
     return alertDialog(`${player.name}: soo.... what now?`)
  }).then(function () {
     return alertDialog("Niko: We leave this place!")
  }).then(function () {
     return alertDialog("Niko: FINALLY!")
  }).then(function () {
     return alertDialog("You watch as Niko jumps around cheering")
  }).then(function () {
     return alertDialog(`${player.name}: how long have you been here exactly?`)
  }).then(function () {
     return alertDialog("Niko: I don't know... I stopped counting when it got over 1000 days")
  }).then(function () {
     return alertDialog(`${player.name}: oh wow...`)
  }).then(function () {
     return alertDialog("Niko: ....")
  }).then(function () {
     return alertDialog("Niko: but now I'll be free")
  }).then(function () {
     return alertDialog("Niko: we can both go home...")
  }).then(function () {
     return alertDialog("Niko: I can meat mom again...")
  }).then(function () {
     return alertDialog("Niko tears up and you pat him on the back")
  }).then(function () {
     return alertDialog("Niko: ....")
  }).then(function () {
     return alertDialog("Niko: oh well...")
  }).then(function () {
     return alertDialog(`${player.name}: so where do we find the... door...`)
  }).then(function () {
     return alertDialog("Niko: Let me show you!")
  }).then(function () {
     return alertDialog("You and Niko travels for a while through different places")
  }).then(function () {
     return alertDialog("Soon you come to a building")
  }).then(function () {
     return alertDialog("Niko: here's the boarder")
  }).then(function () {
     return alertDialog("You feel on the handle to the enterence")
  }).then(function () {
     return alertDialog("its locked")
  }).then(function () {
     return alertDialog("Niko: here! take the key!")
  }).then(function () {
     return alertDialog("You take the key from Niko and open the door")
  }).then(function () {
     return alertDialog("The room inside is big, and thanks to Nikos light you can see the dark walls")
  }).then(function () {
     return alertDialog("Without it you would have been blind")
  }).then(function () {
     return alertDialog("You walk through some rooms and soon you reach a smaller corridore")
  }).then(function () {
    return alertDialog("Niko: Common!")
  }).then(function () {
    return alertDialog("Niko starts to run and you follow him the best you can")
  }).then(function () {
    return alertDialog("Soon you reach the end of the corridore")
  }).then(function () {
    return alertDialog("The final wall has a door on it")
  }).then(function () {
    return alertDialog("You open the door")
  }).then(function () {
    return alertDialog("As you enter inside you see two more doors being inside of a small room")
  }).then(function () {
    return alertDialog("Niko: ...")
  }).then(function () {
    return alertDialog(`${player.name}: ...`)
  }).then(function () {
    return alertDialog("You feel the door handle")
  }).then(function () {
    return alertDialog("its locked")
  }).then(function () {
    return alertDialog("You take out your key and unlock the door")
  }).then(function () {
    return alertDialog("As you do, a white light starts to shine from inside")
  }).then(function () {
    return alertDialog("Niko jumps up and down happily")
  }).then(function () {
    return alertDialog("Niko: now open the other door! then we can both go home!")
  }).then(function () {
    return alertDialog("You reach out to grab the key again")
  }).then(function () {
    return alertDialog("...")
  }).then(function () {
    return alertDialog("its gone")
  }).then(function () {
    return alertDialog(`${player.name}: I.. uhm.. Niko...`)
  }).then(function () {
    return alertDialog("Niko: what?")
  }).then(function () {
    return alertDialog(`${player.name}: its gone...`)
  }).then(function () {
    return alertDialog("Niko: ...")
  }).then(function () {
    return alertDialog("Niko: b...but it can't be...")
  }).then(function () {
    return alertDialog(`${player.name}: but it is...`)
  }).then(function () {
    return alertDialog(`${player.name}: sorry...`)
  }).then(function () {
    return alertDialog("Niko: but that means...")
  }).then(function () {
    return alertDialog(`${player.name}: ?`)
  }).then(function () {
    return alertDialog("Niko: only one of us can leave...")
  }).then(function () {
    return alertDialog(`${player.name}: we can leave at the same time!`)
  }).then(function () {
     return alertDialog("Niko: it doesn't work that way...")
  }).then(function () {
     return alertDialog("Niko: if we do then we both will be trapped in nothingness...")
  }).then(function () {
     return alertDialog("Niko: it can only take one person at a time...")
  }).then(function () {
     return alertDialog("Niko: who of us should leave?")
  }).then(function () {
     return alertDialog(`${player.name}: ...`)
  }).then(function () {
     return alertDialog("Niko: ...")
  }).then(function () {
     return alertDialog(`${player.name}, do you want to help Niko back home, or do you want to leave yourself?`)
  }).then(function () {
     return promptDialog("Niko: ...")
  }).then(function () {
     return alertDialog("You choose who you would save, you saved them. The otherone became trapped in the void untill the next person opened the game.")
  }).then(function () {
    return promptDialog("Thank you for playing my demo! If you had given me longer time then I would have both made a better story line and I would have put more time down on actually programing it, but I did my best, hope you liked it!")
  })


}

function playWithRod () {
  swapGameGuide()
  swapGameBackground('.fullscreen-wizard', 'wizard')
  return Promise.resolve().then(function () {
    return alertDialog("YOU CHOOSE THE WIZARDS ENDING")
  }).then(function () {
    return alertDialog(`${player.name}: Niko, put the knife! He might be able to help us!`)
  }).then(function () {
     return alertDialog("Niko: what!?")
  }).then(function () {
     return alertDialog(`${player.name}: There's no need to attack eatch other!`)
  }).then(function () {
     return alertDialog("Niko: Are you crazy!?")
  }).then(function () {
     return alertDialog(`${player.name}: just do as I say!`)
  }).then(function () {
     return alertDialog("Niko puts the knife down")
  }).then(function () {
     return alertDialog("Niko: he will do no good!")
  }).then(function () {
     return alertDialog(`${player.name}: he might! you don't know`)
  }).then(function () {
     return alertDialog("Wizard: ....")
  }).then(function () {
     return alertDialog("Niko looks over at you with tears in there eyes")
  }).then(function () {
     return alertDialog("Niko: ....")
  }).then(function () {
     return alertDialog("The wizard looks over at you")
  }).then(function () {
     return alertDialog("Niko picks up the knife again, launching forward and swinging the knife towards the wizard")
  }).then(function () {
     return alertDialog("In a result of this, the wizard fires an energy ball towards Niko")
  }).then(function () {
     return alertDialog("Niko hits the ground hard when he falls")
  }).then(function () {
     return alertDialog("Then he stands up again and runs away")
  }).then(function () {
     return alertDialog("You are left with the wizard")
  }).then(function () {
     return alertDialog("You start to walk away")
  }).then(function () {
     return alertDialog("Wizard: you wan't to leave right?")
  }).then(function () {
     return alertDialog("You stop")
  }).then(function () {
     return alertDialog("Wizard: there's only one way")
  }).then(function () {
     return alertDialog("Wizard: I can take you there")
  }).then(function () {
     return alertDialog("You look at the wizard")
  }).then(function () {
     return alertDialog(`${player.name}: why do you want to help me get back home?`)
  }).then(function () {
     return alertDialog("Wizard: cuz I know how it is to be stuck")
  }).then(function () {
     return alertDialog(`${player.name}: ....`)
  }).then(function () {
     return alertDialog(`${player.name}: I don't trust you`)
  }).then(function () {
     return alertDialog("Wizard: ...")
  }).then(function () {
     return alertDialog("Wizard: I'll show you")
  }).then(function () {
     return alertDialog("you look at the wizard as he points in different directions")
  }).then(function () {
     return alertDialog("Wizard: the boarder is in that direction, to walk would take hours and you would have to walk all the way over there")
  }).then(function () {
     return alertDialog("Wizard: a big waste of time")
  }).then(function () {
     return alertDialog("Wizard: I could take you there in only seconds")
  }).then(function () {
     return alertDialog(`${player.name}: I'd rather walk`)
  }).then(function () {
     return alertDialog("Wizard: do then")
  }).then(function () {
     return alertDialog("Wizard: but to get inside the boarder you will need a key")
  }).then(function () {
     return alertDialog("Wizard: I have the key")
  }).then(function () {
     return alertDialog(`${player.name}: I know`)
  }).then(function () {
     return alertDialog("Wizard: here")
  }).then(function () {
     return alertDialog("The wizard gives you the key")
  }).then(function () {
     return alertDialog("You sight but take it")
  }).then(function () {
     return alertDialog(`${player.name}: FIIIIINE, take me to the boarder`)
  }).then(function () {
     return alertDialog("The wizard teleports you and him to the boarder")
  }).then(function () {
     return alertDialog("It looks like a big building made out of white stone")
  }).then(function () {
     return alertDialog(`${player.name}: ....`)
  }).then(function () {
     return alertDialog("As you turn around to face the wizard you realice he's gone")
  }).then(function () {
     return alertDialog("You walk up to the building and unlock the door")
  }).then(function () {
     return alertDialog("Soon you reach a room where there is two doors, you unlock one of the doors and open it")
  }).then(function () {
     return alertDialog("A white light swallows you")
  }).then(function () {
     return alertDialog("Soon you wake up in your room again")
  }).then(function () {
     return alertDialog(`${player.name}: what happened.... was it all a dream?`)
  }).then(function () {
     return alertDialog(`${player.name} will not really remember what happened, they will also not remember Niko or the wizard`)
  }).then(function () {
   return promptDialog("Thank you for playing my demo! If you had given me longer time then I would have both made a better story line and I would have put more time down on actually programing it, but I did my best, hope you liked it!")
  })

}

function chooseWeapon (message) {
  return promptDialog(message).then(function (weapon) {
    switch (weapon) {
      case 'Niko': return 'Niko'
      case 'wizard': return 'wizard'
      default: return chooseWeapon(message + " Oh I didn't get that, try again")
    }
  })
}

function closeWizardGame () {
  desktopSection.classList.remove('hidden')
  fullscreenWizardSection.classList.add('hidden')
}
