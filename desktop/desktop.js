let desktopButtons =
  document.querySelectorAll('.desktop-button')

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

function openWindow () {
  desktopButtons.forEach(el => el.classList.add('blur'))
  overlaySection.classList.remove('hidden')
}

function closeWindow () {
  desktopButtons.forEach(el => el.classList.remove('blur'))
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

function openInstaller () {
  closeBrowser()
  openWindow()
  installerSection.classList.remove('hidden')
}

function closeInstaller () {
  closeWindow()
  installerSection.classList.add('hidden')
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

function onClickInstallTheHobbit () {
  openInstaller()
}

function onClickHobbit () {
  console.log('hobbit')
}

function onClickWizardHunter () {
  console.log('wiz')
}

document.addEventListener('DOMContentLoaded', function () {
  desktopButtonBrowser.classList.remove('hidden')
  // desktopButtonTheHobbit.classList.remove('hidden')
  // desktopButtonWizardHunter.classList.remove('hidden')

  // openBrowser()
  // onClickDownloadGame()
  // onClickInstallTheHobbit()
})
