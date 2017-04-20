'use strict'

let alertDialogElement =
  document.querySelector('.dialog-alert')
let alertDialogMessage =
  document.querySelector('.dialog-alert .dialog-message')

let promptDialogElement =
  document.querySelector('.dialog-prompt')
let promptDialogMessage =
  document.querySelector('.dialog-prompt .dialog-message')

let confirmDialogElement =
  document.querySelector('.dialog-confirm')
let confirmDialogMessage =
  document.querySelector('.dialog-confirm .dialog-message')

function closeDialogs (element) {
  closeWindow()
  let dialogs = document.querySelectorAll('.dialog')
  Array.prototype.forEach.call(dialogs, function (dialog) {
    dialog.classList.add('hidden')
  })
}

function alertDialog (message) {
  return new Promise(function (resolve, reject) {
    openWindow()
    alertDialogMessage.textContent = message
    alertDialogElement.classList.remove('hidden')
    document.forms.dialogAlertForm.addEventListener('submit', function (event) {
      event.preventDefault()
      resolve()
    })
  }).then(function (response) {
    closeDialogs()
    return response
  }, function (error) {
    closeDialogs()
    return Promise.reject(error)
  })
}

function promptDialog (message) {
  return new Promise(function (resolve, reject) {
    openWindow()
    promptDialogMessage.textContent = message
    document.forms.dialogPromptForm.elements.answer.value = ''
    promptDialogElement.classList.remove('hidden')
    document.forms.dialogPromptForm.addEventListener('submit', function (event) {
      event.preventDefault()
      let answer = event.target.elements.answer.value
      resolve(answer)
    })
    let cancelButton = promptDialogElement.querySelector('.dialog-button-cancel')
    cancelButton.addEventListener('click', function () {
      reject()
    })
  }).then(function (response) {
    closeDialogs()
    return response
  }, function (error) {
    closeDialogs()
    return Promise.reject(error)
  })
}

function confirmDialog (message) {
  return new Promise(function (resolve, reject) {
    openWindow()
    confirmDialogMessage.textContent = message
    confirmDialogElement.classList.remove('hidden')
    document.forms.dialogConfirmForm.addEventListener('submit', function (event) {
      event.preventDefault()
      resolve()
    })
    let cancelButton = confirmDialogElement.querySelector('.dialog-button-cancel')
    cancelButton.addEventListener('click', function () {
      reject()
    })
  }).then(function (response) {
    closeDialogs()
    return response
  }, function (error) {
    closeDialogs()
    return Promise.reject(error)
  })
}
