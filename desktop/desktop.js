'use strict'

let desktopButtons =
  document.querySelector('.desktop-buttons')

let desktopButtonBrowser =
  document.querySelector('.desktop-button[data-button=web-browser]')

let desktopButtonTheHobbit =
  document.querySelector('.desktop-button[data-button=the-hobbit]')

let desktopButtonWizardHunter =
  document.querySelector('.desktop-button[data-button=wizard-hunter]')

let desktopSection =
  document.querySelector('.desktop')

let overlaySection =
  document.querySelector('.overlay')

let browserWindowSection =
  document.querySelector('.window.browser')

let fullscreenHobbitSection =
  document.querySelector('.fullscreen-hobbit')

let fullscreenWizardSection =
  document.querySelector('.fullscreen-wizard')

let browserCloseButton =
  document.querySelector('.window.browser window-close-button')

let browserDownloads =
  document.querySelector('.browser-downloads')

let browserDownloadsItems =
  document.querySelector('.browser-downloads-items')

let browserDownloadsItemTemplate =
  document.querySelector('#browser-downloads-item-template')

let installerSection =
  document.querySelector('.window.installer')

let cheatMode =
  document.location.hash === '#cheat'

function openWindow () {
  // desktopSection.classList.add('blur')
  desktopButtons.classList.add('obscured')
  overlaySection.classList.remove('hidden')
}

function closeWindow () {
  // desktopSection.classList.remove('blur')
  desktopButtons.classList.remove('obscured')
  overlaySection.classList.add('hidden')
}

function openBrowser () {
  openWindow()
  browserWindowSection.classList.remove('hidden')
}

function closeBrowser () {
  closeWindow()
  browserWindowSection.classList.add('hidden')
}

function onClickDownloadGame () {
  console.log('download')
  // desktopButtonTheHobbit.classList.remove('hidden')
  browserDownloads.classList.remove('hidden')
  let html = browserDownloadsItemTemplate.innerHTML
  let parser = new DOMParser()
  let body = parser.parseFromString(html, 'text/html').querySelector('body')
  let item = body.firstChild
  browserDownloadsItems.insertBefore(item, browserDownloadsItems.firstChild)
  // browserDownloads.innerHTML = html + browserDownloads.innerHTML
}

function onClickDownloadsClose () {
  browserDownloads.classList.add('hidden')
}

function onClickHobbit () {
  startHobbitGame()
}

function onClickWizardHunter () {
  startWizardGame()
}

document.addEventListener('DOMContentLoaded', function () {
  desktopButtonBrowser.classList.remove('hidden')
  if(cheatMode){
    cheat()
  }
})

function cheat(){
  desktopButtonTheHobbit.classList.remove('hidden')
  desktopButtonWizardHunter.classList.remove('hidden')
  if (cheatMode) {
    player.name = 'Ali'
    player.anws = 'no'
    player.resp = 'I am'
  }
}
