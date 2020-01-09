const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const showMyPartyTemplate = require('../templates/myparty-listing.handlebars')

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
  api.getAllParty()
    .then(ui.getPartySuccess)
    .catch(ui.getPartyFailure)
}

const onGetAllParty = event => {
  event.preventDefault()
  api.getAllParty()
    .then(ui.getAllPartySuccess)
    .catch(ui.getPartyFailure)
}

const onGetMyParty = event => {
  event.preventDefault()
  // show the button to clear the party
  $('.clear-party').show()
  // define the owner of the party
  // define the user that is signed in
  const userId = store.user._id
  // return when equal
  const myParty = (party) => {
    console.log(party.user)
    console.log(userId)
    return party.user === userId
  }

  api.getParty()
    .then((res) => {
      // console.log('api is making the request. formData is', formData)
      const results = res.party.filter(myParty)
      return results
    })
    // .then(ui.getMyPartySuccess)
    .then((results) => {
      if (results.length !== 0) {
        const showMyPartyHtml = showMyPartyTemplate({ party: results })
        $('.content').html(showMyPartyHtml)
      } else if (results.length < 1) {
        $('.user-message').text('You do not have an event yet')
      }
      console.log('results  is', results)
    })
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
const onRsvp = event => {
  event.preventDefault()
  console.log('RSVP button works!')
  const partyId = $(event.target).data('id')
  console.log(partyId)
  api.createRsvp(partyId)
    .then(ui.rsvpSuccess)
    .catch(ui.failure)
}

const onGetMyRsvp = event => {
  event.preventDefault()
  console.log('Get My RSVP button works!')
  const partyId = $(event.target).data('id')
  console.log(partyId)
  api.createRsvp(partyId)
    .then(ui.getRsvpSuccess)
    .catch(ui.failure)
}

const addHandlers = event => {
  $('#create-party').on('submit', onCreateParty)
  $('.get-party').on('click', onGetParty)
  $('#get-all-party').on('click', onGetAllParty)
  $('#get-my-party').on('click', onGetMyParty)
  $('.content').on('click', '.delete', onDeleteParty)
  $('.content').on('submit', '.update-party', onUpdateParty)
  $('.clear-party').on('click', onClearParty)
  $('.content').on('click', '.rsvp-btn', onRsvp)
  $('.content').on('click', '.get-rsvp-btn', onGetMyRsvp)
}

module.exports = {
  addHandlers,
  onClearParty
}
