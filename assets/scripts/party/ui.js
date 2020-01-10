'use strict'

const getPartyTemplate = require('../templates/party-listing.handlebars')
const getMyPartyTemplate = require('../templates/myparty-listing.handlebars')
const getAllPartyTemplate = require('../templates/allparty-listing.handlebars')
const getMyRsvpTemplate = require('../templates/myrsvp-listing.handlebars')

const getMyPartySuccess = (data) => {
  //console.log('get party success is working!')
  //console.log(data)
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

const getPartySuccess = (data) => {
  // console.log('get party success is working!')
  ////console.log('data is:', data)
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

const createPartySuccess = (data) => {
  $('.status').text('you logged your party')
  $('form').trigger('reset')
}

const clearParty = () => {
  $('.content').empty()
  // $('.clear-party').hide()
  $('.get-party').show()
  $('.status').text('Parties are hidden')
}

const updateParty = () => {
  $('form').trigger('reset')
  $('.status').text('you updated your party')
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
  showPartySuccess
  // getOneParty
}
