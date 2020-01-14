const config = require('../config')
const store = require('../store')

const getParty = () => {
  return $.ajax({
    url: config.apiUrl + '/party',
    method: 'GET'
  })
}

const getFlamingo = () => {
  return $.ajax({
    url: config.apiUrl + '/flamingo',
    method: 'GET'
  })
}

const getAllParty = () => {
  return $.ajax({
    url: config.apiUrl + '/party',
    method: 'GET'
  })
}
const getAllFlamingo = () => {
  return $.ajax({
    url: config.apiUrl + '/flamingo',
    method: 'GET'
  })
}

// const getMyParty = (userId) => {
//   return $.ajax({
//     url: config.apiUrl + '/myparty/' + userId,
//     method: 'GET',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }

const createParty = formData => {
  return $.ajax({
    url: config.apiUrl + '/party',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}
const createFlamingo = formData => {
  return $.ajax({
    url: config.apiUrl + '/flamingo',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}
const deleteParty = partyId => {
  return $.ajax({
    url: config.apiUrl + '/party/' + partyId,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
const deleteFlamingo = flamingoId => {
  return $.ajax({
    url: config.apiUrl + '/flamingo/' + flamingoId,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateParty = (formData, partyId) => {
  return $.ajax({
    url: config.apiUrl + '/party/' + partyId,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}
const updateFlamingo = (formData, flamingoId) => {
  return $.ajax({
    url: config.apiUrl + '/flamingo/' + flamingoId,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}
const createRsvp = (partyId) => {
  return $.ajax({
    url: config.apiUrl + '/rsvp/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      "rsvp": {
        "party": `${partyId}`
      }
    }
  })
}

const getMyRsvp = () => {
  return $.ajax({
    url: config.apiUrl + '/myrsvp',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  getParty,
  createParty,
  deleteParty,
  updateParty,
  createRsvp,
  getMyRsvp,
  getAllParty,
  getFlamingo,
  getAllFlamingo,
  createFlamingo,
  deleteFlamingo,
  updateFlamingo
}
