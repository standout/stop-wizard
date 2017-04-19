function startWizardGame () {
  desktopSection.classList.add('hidden')
  fullscreenWizardSection.classList.remove('hidden')
  // here
  alertDialog('wiz')
}

function closeWizardGame () {
  desktopSection.classList.remove('hidden')
  fullscreenWizardSection.classList.add('hidden')
}