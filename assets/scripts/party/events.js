const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onCreateParty = event => {
  event.preventDefault()
  const form = event.target
  // console.log('in events.js form is', form)
  const formData = getFormFields(form)
  console.log(formData)
  api.createParty(formData)
    .then(ui.createPartySuccess)
    .catch(ui.createPartyFailure)
}

const onClearParty = (event) => {
  event.preventDefault()
  console.log('clicked clear party')
  ui.clearParty()
}

const onGetParty = event => {
  event.preventDefault()
  api.getParty()
    .then(ui.getPartySuccess)
    .catch(ui.getPartyFailure)
}

const onGetMyParty = event => {
  event.preventDefault()
  const userId = store.user._id
  console.log(userId)
  api.getMyParty(userId)
    .then(ui.getMyPartySuccess)
    .catch(ui.failure)
}

const onDeleteParty = event => {
  event.preventDefault()
  const partyId = $(event.target).data('id')
  console.log(partyId)
  api.deleteParty(partyId)
    .then(function () {
      onGetParty(event)
    })
    .then($('.user-message').text('You deleted the party'))
    .catch(ui.deletePartyFailure)
}

const onUpdateParty = event => {
  event.preventDefault()
  const form = event.target
  // console.log('in events.js form is', form)
  const partyId = $(event.target).data('id')
  const formData = getFormFields(form)
  console.log(formData, partyId)
  api.updateParty(formData, partyId)
    .then(ui.updateParty)
    .then(function (formData) {
      onGetParty(event)
    })
    .catch(ui.failure)
}

const addHandlers = event => {
  $('#create-party').on('submit', onCreateParty)
  $('.get-party').on('click', onGetParty)
  $('#get-my-party').on('click', onGetMyParty)
  $('.content').on('click', '.delete', onDeleteParty)
  $('.content').on('submit', '.update-party', onUpdateParty)
  $('.clear-party').on('click', onClearParty)
}

module.exports = {
  addHandlers,
  onClearParty
}
