function startWizardGame () {
  desktopSection.classList.add('hidden')
  fullscreenWizardSection.classList.remove('hidden')
  // here
  alertDialog('Niko: ${player.name} are you here?')
  alertDialog(`${player.name}: yes? where are we?`)
  alertDialog("Niko: we are here, in the dark forest")
  alertDialog(`${player.name}: where!?`)
  alertDialog("Niko: in the dark forest, where the wizard lives")
}

function closeWizardGame () {
  desktopSection.classList.remove('hidden')
  fullscreenWizardSection.classList.add('hidden')
}