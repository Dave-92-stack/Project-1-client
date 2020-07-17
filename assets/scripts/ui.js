const store = require('./store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
}
const signUpFailure = function () {
  $('#message').text('Failed to sign up!')
}

const signInSuccess = function (response) {
  $('#message').text('Sign in successful!')
  console.log(store)
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)
}
const signInFailure = function () {
  $('#message').text('Sign in unsuccessful!')
}

const changePasswordSuccess = function () {
  $('#message').text('Change password success!')
}
const changePasswordFailure = function () {
  $('#message').text('Change password failed.')
}

const signOutSuccess = function () {
  $('#message').text('Successfully signed out.')
}
const signOutFailure = function () {
  $('#message').text('Failed to sign out.')
}

const createGameSuccess = function (response) {

}
const createGameFailure = function () {
  console.log('Failed to create game')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure
}
