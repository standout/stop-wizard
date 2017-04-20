function startWizardGame () {
  desktopSection.classList.add('hidden')
  fullscreenWizardSection.classList.remove('hidden')
  // here
  alertDialog('Niko: ${player.name} are you here?')
 
}

function closeWizardGame () {
  desktopSection.classList.remove('hidden')
  fullscreenWizardSection.classList.add('hidden')
}