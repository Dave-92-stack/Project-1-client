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
  console.log('store :', store)
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
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
