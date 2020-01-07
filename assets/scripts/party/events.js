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
  api.getParties()
    .then(ui.getPartySuccess)
    .catch(ui.getPartyFailure)
}

const addHandlers = event => {
  $('#create-party').on('submit', onCreateParty)
  $('#get-party').on('click', onGetParty)
}

module.exports = {
  addHandlers
}
