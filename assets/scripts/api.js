const config = require('./config')
const store = require('./store')

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = formData => {
  // console.log('formData is ', formData)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = formData => {
  // console.log('change password formData is', formData)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// const createTask = formData => {
//   // console.log('in api.js formData is ', formData)
//   return $.ajax({
//     url: config.apiUrl + '/tasks',
//     method: 'POST',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     data: formData
//   })
// }
//
// const showTasks = () => {
//   return $.ajax({
//     url: config.apiUrl + '/tasks',
//     method: 'GET',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }
//
// const deleteTask = taskId => {
//   return $.ajax({
//     url: config.apiUrl + '/tasks/' + taskId,
//     method: 'DELETE',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }
//
// const submitUpdatedTask = (taskId, formData) => {
//   // console.log('update task taskId is', taskId)
//   // console.log('update task formData is', formData)
//   return $.ajax({
//     url: config.apiUrl + '/tasks/' + taskId,
//     method: 'PATCH',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     data: formData
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
  // createTask,
  // showTasks,
  // deleteTask,
  // submitUpdatedTask
}
