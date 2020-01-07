const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  // // console.log('sign up works')
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  // console.log('in events.js onSignIn form is', form)
  const formData = getFormFields(form)
  // // console.log('sign in works')
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // // console.log('change password works')
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  // doesn't need formData because there is no data to submit
  // // console.log('sign out works')
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onCreateTask = event => {
  event.preventDefault()
  // console.log('create task button works')
  const form = event.target
  // console.log('in events.js form is', form)
  const formData = getFormFields(form)
  // console.log('in events.js formData is', formData)
  // console.log('in events.js event.target is', event.target)
  api.createTask(formData)
    .then(function (data) {
      onShowTasks(event)
    })
    .catch(ui.onCreateGameFailure)
}

const onShowTasks = event => {
  event.preventDefault()
  // console.log('show tasks button works')
  api.showTasks()
    .then(ui.onShowTasksSuccess)
    .catch(ui.onShowTasksFailure)
  $('.task').show()
  $('.default-state').hide()
}

const onClearTasks = event => {
  event.preventDefault()
  // console.log('clear tasks button works')
  ui.clearTasks()
}

const onDeleteTask = event => {
  // console.log('delete task button works')
  event.preventDefault()
  const taskId = $(event.target).data('id')
  // send task ID to our deleteTask in api file
  api.deleteTask(taskId)
    .then(function (data) {
      onShowTasks(event)
    })
    .catch(ui.onDeleteTaskFailure)
}

const onSubmitUpdateTask = event => {
  event.preventDefault()
  // console.log('submit task button works')
  const taskId = $(event.target).data('id')
  // console.log('in events.js taskId event.target is', event.target)
  const form = event.target
  // console.log('in events.js form is', form, 'event.target is', event.target)
  const formData = getFormFields(form)
  // console.log('in events.js formData is', formData)
  api.submitUpdatedTask(taskId, formData)
    .then(function (data) {
      onShowTasks(event)
    })
    .catch(ui.onUpdateTaskFailure)
}

const onUpdateTask = event => {
  $('.update').show()
  // .data('id')
  $('.task').hide()
}

const addAuthHandlers = event => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-task').on('submit', onCreateTask)
  $('#show-tasks').on('click', onShowTasks)
  $('#clear-tasks').on('click', onClearTasks)
  $('.results').on('click', '.delete', onDeleteTask)
  $('.results').on('submit', '.update-task', onSubmitUpdateTask)
  $('.results').on('click', '.update', onUpdateTask)
}

module.exports = {
  addAuthHandlers
}
