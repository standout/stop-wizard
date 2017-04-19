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

function alertDialog (message) {
  return new Promise(function (resolve, reject) {
    openWindow()
    alertDialogMessage.textContent = message
    alertDialogElement.classList.remove('hidden')
    document.forms.dialogAlertForm.addEventListener('submit', function (event) {
      event.preventDefault()
      alertDialogElement.classList.add('hidden')
      closeWindow()
      resolve()
    })
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
      promptDialogElement.classList.add('hidden')
      closeWindow()
      resolve(answer)
    })
  })
}

function confirmDialog (message) {
  return new Promise(function (resolve, reject) {
    openWindow()
    confirmDialogMessage.textContent = message
    confirmDialogElement.classList.remove('hidden')
    document.forms.dialogConfirmForm.addEventListener('submit', function (event) {
      event.preventDefault()
      confirmDialogElement.classList.add('hidden')
      closeWindow()
      resolve()
    })
  })
}