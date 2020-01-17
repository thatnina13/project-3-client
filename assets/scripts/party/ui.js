'use strict'

const getPartyTemplate = require('../templates/party-listing.handlebars')
const getMyPartyTemplate = require('../templates/myparty-listing.handlebars')
const getAllPartyTemplate = require('../templates/allparty-listing.handlebars')
const getMyRsvpTemplate = require('../templates/myrsvp-listing.handlebars')
const getFlamingoTemplate = require('../templates/flamingo-listing.handlebars')
const getMyFlamingoTemplate = require('../templates/myflamingo-listing.handlebars')
const getAllFlamingoTemplate = require('../templates/allparty-listing.handlebars')

const getMyPartySuccess = (data) => {
  // console.log('get party success is working!')
  // console.log(data)
  // const showPartyHtml = getPartyTemplate({ party: data.party })
  if (data.party.length !== 0) {
    const showMyPartyHtml = getMyPartyTemplate({ party: data.party })
    //    //console.log('party is not empty')
    $('.content').html(showMyPartyHtml)
    $('.get-party').show()
    $('.content').show()
    $('.clear-party').show()
    $('.status').text('Parties are below!')
  } else if (data.party.length < 1) {
    // console.log('party is empty')
    $('.status').text('No recorded party, please enter a party!')
    $('.content').hide()
    $('.get-party').show()
  }
}
const getMyFlamingoSuccess = (data) => {
  // console.log('get party success is working!')
  // console.log(data)
  // const showPartyHtml = getPartyTemplate({ party: data.party })
  if (data.flamingo.length !== 0) {
    const showMyFlamingoHtml = getMyFlamingoTemplate({ flamingo: data.flamingo })
    //    //console.log('party is not empty')
    $('.content').html(showMyFlamingoHtml)
    $('.get-flamgino').show()
    $('.content').show()
    $('.clear-flamingo').show()
    $('.status').text('Your flock is below!')
  } else if (data.flamingo.length < 1) {
    // console.log('party is empty')
    $('.status').text('No flamingos, please creat a flamingo!')
    $('.content').hide()
    $('.get-flamingo').show()
  }
}

const getAllPartySuccess = (data) => {
  // const showPartyHtml = getPartyTemplate({ party: data.party })
  if (data.party.length !== 0) {
    const showAllPartyHtml = getAllPartyTemplate({ party: data.party })
    //    console.log('party is not empty')
    $('.content').html(showAllPartyHtml)
    $('.get-party').show()
    $('.content').show()
    $('.clear-party').show()
    $('.status').text('Parties are below!')
  } else if (data.party.length < 1) {
    // conso//console'party is empty')
    $('.status').text('No recorded party, please enter a party!')
    $('.content').hide()
    $('.get-party').show()
  }
}

const getAllFlamingoSuccess = (data) => {
  // const showPartyHtml = getPartyTemplate({ party: data.party })
  if (data.flamingo.length !== 0) {
    const showAllFlamingoHtml = getAllFlamingoTemplate({ party: data.flamingo })
    //    console.log('party is not empty')
    $('.content').html(showAllFlamingoHtml)
    $('.get-flamingo').show()
    $('.content').show()
    $('.clear-flamingo').show()
    $('.status').text('Flamingos are below!')
  } else if (data.flamingo.length < 1) {
    // conso//console'party is empty')
    $('.status').text('No flamingos, please create a flamingo!')
    $('.content').hide()
    $('.get-party').show()
  }
}

const getPartySuccess = (data) => {
  // console.log('get party success is working!')
  /// /console.log('data is:', data)
  $('.clear-party').show()
  // const showPartyHtml = getPartyTemplate({ party: data.party })
  if (data.party.length !== 0) {
    const showPartyHtml = getPartyTemplate({ party: data.party })
    //    console.log('party is not empty')
    $('.content').html(showPartyHtml)
    // $('.get-party').hide()
    $('.content').show()
    $('.status').text('Parties are below!')
  } else if (data.party.length < 1) {
    // console.log('party is empty')
    $('.status').text('No recorded party, please enter a party!')
    $('.content').hide()
    $('.clear-party').show()
  }
}
const getFlamingoSuccess = (data) => {
  // console.log('get party success is working!')
  /// /console.log('data is:', data)
  $('.clear-flamingo').show()
  // const showPartyHtml = getPartyTemplate({ party: data.party })
  if (data.flamingo.length !== 0) {
    const showFlamingoHtml = getFlamingoTemplate({ flamingo: data.flamingo })
    //    console.log('party is not empty')
    $('.content').html(showFlamingoHtml)
    // $('.get-party').hide()
    $('.content').show()
    $('.status').text('Flamingos are below!')
  } else if (data.flamingo.length < 1) {
    // console.log('party is empty')
    $('.status').text('No Flamingos, please create a Flamingo!')
    $('.content').hide()
    $('.clear-flamingo').show()
  }
}
const createPartySuccess = (data) => {
  $('.status').text('you logged your party')
  $('form').trigger('reset')
}
const createFlamingoSuccess = (data) => {
  $('.status').text('you created a flamingo')
  $('form').trigger('reset')
}

const clearParty = () => {
  $('.content').empty()
  // $('.clear-party').hide()
  $('.get-party').show()
  $('.status').text('Parties are hidden')
}

const clearFlamingo = () => {
  $('.content').empty()
  // $('.clear-party').hide()
  $('.get-flamingo').show()
  $('.status').text('flamingos are hiding')
}
const updateParty = () => {
  $('form').trigger('reset')
  $('.status').text('you updated your party')
  $('.user-message').show().text('You updated the party').fadeOut(3000)
}
const updateFlamingo = () => {
  $('form').trigger('reset')
  $('.status').text('you updated your flamingo')
  $('.user-message').show().text('You updated the flamingo').fadeOut(3000)
}
const rsvpSuccess = () => {
  $('.status').text("You have RSVP'd to a party!")
}

const failure = () => {
  $('.status').text('yikes.. something went wrong')
}

const rsvpFailure = () => {
  $('.status').text('Please sign in to rsvp for a party!')
  // console.log('got to rsvp failure')
}

const showPartySuccess = () => {
  $('.status').text('Parties are below!')
}

const showFlamingoSuccess = () => {
  $('.status').text('flamingos are below!')
}

const getRsvpSuccess = data => {
  // console.log('test')
  const showMyRsvpHtml = getMyRsvpTemplate({ rsvps: data.rsvps })
  // console.log(showMyRsvpHtml)
  $('.content').html(showMyRsvpHtml)
  $('.status').text('RSVPs are below!')
}

module.exports = {
  getMyPartySuccess,
  getPartySuccess,
  createPartySuccess,
  failure,
  clearParty,
  updateParty,
  rsvpSuccess,
  getRsvpSuccess,
  rsvpFailure,
  getAllPartySuccess,
  showPartySuccess,
  clearFlamingo,
  getMyFlamingoSuccess,
  getAllFlamingoSuccess,
  getFlamingoSuccess,
  createFlamingoSuccess,
  updateFlamingo,
  showFlamingoSuccess
  // getOneParty
}
