const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

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

const onGetParty = event => {
  event.preventDefault()
  api.getParty()
    .then(ui.getPartySuccess)
    .catch(ui.getPartyFailure)
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
  const form = event.target
  // console.log('in events.js form is', form)
  const formData = getFormFields(form)
  console.log(formData)
  api.updateParty(formData)
    .then(ui.updatePartySuccess)
    .catch(ui.updatePartyFailure)
}
const addHandlers = event => {
  $('#create-party').on('submit', onCreateParty)
  $('#get-party').on('click', onGetParty)
  $('.content').on('click', '.delete', onDeleteParty)
  $('.content').on('submit', '.update-sleep', onUpdateParty)
}

module.exports = {
  addHandlers
}
