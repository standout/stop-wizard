'use strict'

function openInstaller () {
  closeBrowser()
  openWindow()
  installerSection.classList.remove('hidden')
  toggleInstallerBody('.installer-body-welcome')
}

function toggleInstallerBody(selector) {
  let bodies = installerSection.querySelectorAll('.window-body')
  Array.prototype.forEach.call(bodies, function (body) {
    body.classList.add('hidden')
  })
  if (selector) {
    installerSection.querySelector(selector).classList.remove('hidden')
  }
}

function installationProceed () {
  toggleInstallerBody('.installer-body-progress')
  setTimeout(function () {
    installationFail()
  }, 3000)
}

function installationFail () {
  toggleInstallerBody('.installer-body-error')
  installerSection.classList.remove('hidden')
  desktopSection.dataset.background = 'broken'
}

function onClickInstallTheHobbit () {
  openInstaller()
}

function closeInstaller () {
  closeWindow()
  installerSection.classList.add('hidden')
}

function finishInstaller () {
  closeInstaller()
  desktopButtonTheHobbit.classList.remove('hidden')
}
