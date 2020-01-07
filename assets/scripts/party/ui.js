'use strict'

const getPartyTemplate = require('../templates/party-listing.handlebars')

const getPartySuccess = (data) => {
  console.log('get party success is working!')
  console.log('data is:', data)
  // const showPartyHtml = getPartyTemplate({ party: data.party })
  if (data.party.length !== 0) {
    const showPartyHtml = getPartyTemplate({ party: data.party })
    //    console.log('party is not empty')
    $('.content').html(showPartyHtml)
    $('.get-party').hide()
    $('.content').show()
  } else if (data.party.length < 1) {
    // console.log('party is empty')
    $('.user-message').text('No recorded party, please enter a party!')
    $('.content').hide()
    $('.clear-party').hide()
    $('.get-party').show()
  }
}

const createPartySuccess = (data) => {
  $('.user-message').text('you logged your party')
  $('form').trigger('reset')
}

const clearParty = () => {
  $('.content').empty()
  $('.clear-party').hide()
  $('.get-party').show()
}

const updateParty = () => {
  $('form').trigger('reset')
  $('.user-message').text('you updated your party')
}

const failure = () => {
  $('.user-message').text('yikes.. something went wrong')
}
module.exports = {
  getPartySuccess,
  createPartySuccess,
  failure,
  clearParty,
  updateParty
  // getOneParty
}
