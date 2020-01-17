const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const showMyPartyTemplate = require('../templates/myparty-listing.handlebars')
const showMyFlamingoTemplate = require('../templates/myflamingo-listing.handlebars')
const getPartyTemplate = require('../templates/party-listing.handlebars')
const getFlamingoTemplate = require('../templates/flamingo-listing.handlebars')

const onCreateParty = event => {
  event.preventDefault()
  const form = event.target
  // //.log('in events.js form is', form)
  const formData = getFormFields(form)
  // .log(formData)
  api.createParty(formData)
    .then(ui.createPartySuccess)
    .catch(ui.failure)
}

const onCreateFlamingo = event => {
  event.preventDefault()
  const form = event.target
  // //.log('in events.js form is', form)
  const formData = getFormFields(form)
  // .log(formData)
  api.createFlamingo(formData)
    .then(ui.createFlamingoSuccess)
    .catch(ui.failure)
}

const onClearParty = (event) => {
  event.preventDefault()
  // .log('clicked clear party')
  ui.clearParty()
}
const onClearFlamingo = (event) => {
  event.preventDefault()
  // .log('clicked clear party')
  ui.clearFlamingo()
}

const onGetParty = event => {
  event.preventDefault()
  api.getAllParty()
    .then(function (data) {
      $('.clear-party').show()
      // const showPartyHtml = getPartyTemplate({ party: data.party })
      if (data.party.length !== 0) {
        const showPartyHtml = getPartyTemplate({ party: data.party })
        $('.status').text('Parties are below!')
        //    ////console.log('party is not empty')
        $('.content').html(showPartyHtml)
        // $('.get-party').hide()
        $('.content').show()
        rsvp.forEach(rsvpId => {
          // console.log(rsvpId)
          if ($(`[data-id = "${rsvpId}"]`)) {
            // console.log('TEST')
            $(`button[data-id = "${rsvpId}"]`).addClass('hide')
          }
        })
      } else if (data.party.length < 1) {
        // //console.log('party is empty')
        $('.status').text('No recorded party, please enter a party!')
        $('.content').hide()
        $('.clear-party').show()
        // $('.get-party').hide()
      }
    })
    .catch(ui.failure)
}

const onGetFlamingo = event => {
  event.preventDefault()
  api.getAllFlamingo()
    .then(function (data) {
      $('.clear-flamingo').show()
      // const showPartyHtml = getPartyTemplate({ party: data.party })
      if (data.flamingo.length !== 0) {
        const showFlamingoHtml = getFlamingoTemplate({ flamingo: data.flamingo })
        $('.status').text('Flamingos are below!')
        //    ////console.log('party is not empty')
        $('.content').html(showFlamingoHtml)
        // $('.get-party').hide()
        $('.content').show()
      } else if (data.flamingo.length < 1) {
        // //console.log('party is empty')
        $('.status').text('your flock is empty, please create a flamingo!')
        $('.content').hide()
        $('.clear-flamingo').show()
        // $('.get-party').hide()
      }
    })
    .catch(ui.failure)
}

const onGetAllParty = event => {
  event.preventDefault()
  api.getAllParty()
    .then(ui.getAllPartySuccess)
    .catch(ui.failure)
}

const onGetAllFlamingo = event => {
  event.preventDefault()
  api.getAllFlamingo()
    .then(ui.getAllFlamingoSuccess)
    .catch(ui.failure)
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
    // console.log(party.user)
    // console.log(userId)
    return party.user === userId
  }

  api.getParty()
    .then((res) => {
      // //console.log('api is making the request. formData is', formData)
      const results = res.party.filter(myParty)
      return results
    })
    // .then(ui.getMyPartySuccess)
    .then((results) => {
      if (results.length !== 0) {
        const showMyPartyHtml = showMyPartyTemplate({ party: results })
        $('.content').html(showMyPartyHtml)
        $('.status').text('Parties are below!')
      } else if (results.length < 1) {
        $('.status').text('You do not have an event yet')
      }
      // console.log('results  is', results)
    })
    .catch(ui.failure)
}

const onGetMyFlamingo = event => {
  event.preventDefault()
  // show the button to clear the party
  $('.clear-flamingo').show()
  // define the owner of the party
  // define the user that is signed in
  const userId = store.user._id
  // return when equal
  const myFlamingo = (flamingo) => {
    // console.log(party.user)
    // console.log(userId)
    return flamingo.user === userId
  }

  api.getFlamingo()
    .then((res) => {
      // //console.log('api is making the request. formData is', formData)
      const results = res.flamingo.filter(myFlamingo)
      return results
    })
    // .then(ui.getMyPartySuccess)
    .then((results) => {
      if (results.length !== 0) {
        const showMyFlamingoHtml = showMyFlamingoTemplate({ flamingo: results })
        $('.content').html(showMyFlamingoHtml)
        $('.status').text('Flamingos are below!')
      } else if (results.length < 1) {
        $('.status').text('You do not have a flamingo yet')
      }
      // console.log('results  is', results)
    })
    .catch(ui.failure)
}
const onDeleteParty = event => {
  event.preventDefault()
  const partyId = $(event.target).data('id')
  // console.log(partyId)
  api.deleteParty(partyId)
    .then(function () {
      onGetParty(event)
    })
    .then($('.user-message').show().text('You deleted the party').fadeOut(3000))
    .catch(ui.failure)
}
const onDeleteFlamingo = event => {
  event.preventDefault()
  const flamingoId = $(event.target).data('id')
  // console.log(partyId)
  api.deleteFlamingo(flamingoId)
    .then(function () {
      onGetFlamingo(event)
    })
    .then($('.user-message').show().text('You deleted the flamingo').fadeOut(3000))
    .catch(ui.failure)
}

const onUpdateParty = event => {
  event.preventDefault()
  const form = event.target
  // //console.log('in events.js form is', form)
  const partyId = $(event.target).data('id')
  const formData = getFormFields(form)
  // console.log(formData, partyId)
  api.updateParty(formData, partyId)
    .then(ui.updateParty)
    .then(function (formData) {
      onGetParty(event)
    })
    .catch(ui.failure)
}
const onUpdateFlamingo = event => {
  event.preventDefault()
  const form = event.target
  // //console.log('in events.js form is', form)
  const flamingoId = $(event.target).data('id')
  const formData = getFormFields(form)
  // console.log(formData, partyId)
  api.updateFlamingo(formData, flamingoId)
    .then(ui.updateFlamingo)
    .then(function (formData) {
      onGetFlamingo(event)
    })
    .catch(ui.failure)
}

const rsvp = []

const onRsvp = event => {
  event.preventDefault()
  // console.log('RSVP button works!')
  const partyId = $(event.target).data('id')
  rsvp.push(partyId)
  // console.log(partyId)
  api.createRsvp(partyId)
    .then(ui.rsvpSuccess)
    .then($(event.target).addClass('hide'))
    .catch(ui.failure)
}

const onGetMyRsvp = event => {
  event.preventDefault()
  // console.log('Get My RSVP button works!')
  const partyId = $(event.target).data('id')
  // console.log(partyId)
  api.getMyRsvp()
    .then(ui.getRsvpSuccess)
    .catch(ui.failure)
}

const addHandlers = event => {
  $('#create-party').on('submit', onCreateParty)
  $('#create-flamingo').on('submit', onCreateFlamingo)
  $('.get-party').on('click', onGetParty)
  $('.get-flamingo').on('click', onGetFlamingo)
  $('#get-all-party').on('click', onGetAllParty)
  $('#get-all-flamingo').on('click', onGetAllFlamingo)
  $('.get-my-party').on('click', onGetMyParty)
  $('.get-my-flamingo').on('click', onGetMyFlamingo)
  $('.content').on('click', '.delete', onDeleteParty)
  $('.content').on('click', '.delete-flamingo', onDeleteFlamingo)
  $('.content').on('submit', '.update-party', onUpdateParty)
  $('.content').on('submit', '.update-flamingo', onUpdateFlamingo)
  $('.clear-party').on('click', onClearParty)
  $('.clear-flamingo').on('click', onClearFlamingo)
  $('.content').on('click', '.rsvp-btn', onRsvp)
  $('.get-rsvp-btn').on('click', onGetMyRsvp)
}

module.exports = {
  addHandlers,
  onClearParty,
  onClearFlamingo,
  rsvp
}
