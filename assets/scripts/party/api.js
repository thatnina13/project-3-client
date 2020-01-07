const config = require('../config')
const store = require('../store')

const getParty = () => {
  return $.ajax({
    url: config.apiUrl + '/party',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
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
const deleteParty = partyId => {
  return $.ajax({
    url: config.apiUrl + '/party/' + partyId,
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

module.exports = {
  getParty,
  createParty,
  deleteParty,
  updateParty
}
